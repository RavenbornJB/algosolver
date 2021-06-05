import psycopg2
from psycopg2.extras import execute_values


class AlgoDB:
    def __init__(self, connection):
        self.connection = connection
        self.cursor = connection.cursor()

    def add_user(self, email, password, nick, country, birthdate):
        self.cursor.execute(
                """
                INSERT INTO users (email, password, nick, country, birthdate)
                VALUES (%s, %s, %s, %s, %s)
                ON CONFLICT  DO NOTHING
                """,
            (email, password, nick, country, birthdate)
        )

    def check_email(self, email):
        self.cursor.execute(
            """
            SELECT * FROM users 
            WHERE email = %s
            """,
            (email,)
        )
        return len(self.cursor.fetchall()) > 0

    def check_credentials(self, email, password):
        self.cursor.execute(
            """
            SELECT * FROM users 
            WHERE email = %s AND password = %s
            """,
            (email, password)
        )
        return self.cursor.fetchone()

    def update_user(self, email, password, new_password, nick, country, birthdate):
        self.cursor.execute(
                """
                UPDATE users
                SET password = %s, nick = %s, country = %s, birthdate = %s
                WHERE email = %s AND password = %s
                RETURNING *
                """,
            (new_password, nick, country, birthdate, email, password)
        )
        return self.cursor.fetchone()

    def solve_problem(self, user_id, problem_id):
        self.cursor.execute(
                """
                INSERT INTO solved_problems (user_id, problem_id) 
                VALUES (%s, %s)
                ON CONFLICT DO NOTHING 
                """,
            (user_id, problem_id)
        )

    def create_problem(self, user_id, name, description, rank, tests):
        self.cursor.execute(
            """
            INSERT INTO created_problems (user_id, name, description, rank) 
            VALUES (%s, %s, %s, %s)
            ON CONFLICT DO NOTHING 
            RETURNING problem_id
            """,
            (user_id, name, description, rank)
        )

        problem_id = self.cursor.fetchone()[0]

        execute_values(self.cursor,
                       """
                       INSERT INTO tests (problem_id, test_input, test_output)
                       VALUES %s;
                       """,
                       [(problem_id, test[0], test[1]) for test in tests]
                       )

    def get_problems(self):
        self.cursor.execute(
            """
            SELECT * FROM created_problems
            """)

        problems = [{"id": prob[0], "creator": prob[1], "name": prob[2], "rank": prob[4]} for prob in self.cursor.fetchall()]

        self.cursor.execute(
            """
            SELECT problem_id, COUNT(problem_id) FROM solved_problems
            GROUP BY problem_id
            """
        )

        for prob in problems:
            prob["solved"] = 0

        for row in self.cursor.fetchall():
            for prob in problems:
                if prob["id"] == row[0]:
                    prob["solved"] = row[1]
                    break

        return problems


    def get_tests(self, problem_id):
        self.cursor.execute(
            """
            SELECT test_input, test_output FROM tests
            WHERE problem_id = %s
            """, (problem_id,))
        return self.cursor.fetchall()

    def get_problem(self, problem_id):
        self.cursor.execute(
            """
            SELECT * FROM created_problems
            WHERE problem_id = %s
            """,
            (problem_id, )
        )
        return self.cursor.fetchone()


    def get_tests(self, problem_id):
        self.cursor.execute(
            """
            SELECT * FROM tests
            WHERE problem_id = %s
            """,
            (problem_id,)
        )
        return self.cursor.fetchall()


    def delete_problem(self, problem_id):
        self.cursor.execute(
            """
            DELETE FROM created_problems
            WHERE problem_id = %s
            """,
            (problem_id,)
        )



    def commit_changes(self):
        self.connection.commit()