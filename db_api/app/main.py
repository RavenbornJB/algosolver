import psycopg2

from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import os

from app.db import AlgoDB

conn = psycopg2.connect(host="ec2-54-73-68-39.eu-west-1.compute.amazonaws.com",
                        database="d766e7a5lj891n",
                        user="mimmpbfogysuir",
                        password="ca24ec0e0a874062d4950b2064fb2745ab6f7478955a750c868b824f8974c632")
db = AlgoDB(conn)

id = 0

app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return "<h1>AlgoSolver DB API base</h1><p>Send requests to endpoints to receive data.</p>"


@app.route('/register', methods=['POST'])
def register():
    global db
    if db.check_email(request.form["email"]):
        return jsonify(success=False)

    db.add_user(
        request.form["email"],
        request.form["password"],
        request.form["nick"],
        request.form["country"],
        request.form["birthdate"]
    )

    db.commit_changes()

    return jsonify(success=True)


@app.route('/delete_problem', methods=['POST'])
def delete_problem():
    global db
    user = db.check_credentials(request.form["email"], request.form["password"])
    if user is None:
        return jsonify(success=False)

    db.delete_problem(request.form["id"])

    db.commit_changes()

    return jsonify(success=True)


@app.route('/get_user', methods=['POST'])
def get_user():
    global db
    user = db.check_credentials(request.form["email"], request.form["password"])
    if user is None:
        return jsonify(success=False)
    return jsonify(
        success=True,
        user={
            "id": user[0],
            "email": user[1],
            "password": user[2],
            "nick": user[3],
            "country": user[4],
            "birthdate": user[5]
        }
    )


@app.route('/add_problem', methods=['POST'])
def add_problem():
    global db
    user = db.check_credentials(request.form["email"], request.form["password"])
    if user is None:
        return jsonify(success=False)

    test_inputs = request.form.keys() - {"name", "description", "email", "password"}

    tests = [(inp, request.form[inp]) for inp in test_inputs]

    db.create_problem(user[0], request.form["name"], request.form["description"], 0, tests)

    db.commit_changes()

    return jsonify(
        success=True
    )


@app.route('/get_problems', methods=['GET'])
def get_problems():
    global db

    return jsonify(
        success=True,
        problems=db.get_problems()
    )


@app.route('/get_problem', methods=['GET'])
def get_problem():
    global db

    id = request.args.get('id')

    row = db.get_problem(id)

    if row is None:
        return jsonify(success=False)

    return jsonify(
        success=True,
        problem={"author": row[1], "name": row[2], "description": row[3]}
    )


@app.route('/interpreter', methods=['POST'])
def test_program():
    global id

    f = request.files['file']
    problem_id = request.form['problem_id']
    user_id = request.form['user_id']

    name = f"{id}.py"
    id += 1
    f.save(name)

    tests = db.get_tests(problem_id)

    i = 0

    for prob_id, inp, output in tests:
        try:
            res = subprocess.run(["python3", name], input=inp.encode('utf-8'), capture_output=True, timeout=2)
            if res.stdout != output.encode('utf-8'):
                print(res.stdout, output.encode('utf-8'))
                os.remove(name)
                return jsonify(passed=False, failed=f"Failed on test {i + 1}")
        except subprocess.TimeoutExpired:
            return jsonify(passed=False, failed=f"Time limit on test {i + 1}")
        except Exception:
            return jsonify(passed=False, failed=f"Error on test {i + 1}")

        i += 1

    os.remove(name)
    db.solve_problem(user_id, problem_id)
    db.commit_changes()
    return jsonify(passed=True)
