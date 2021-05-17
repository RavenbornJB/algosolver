const ACCOUNTS = new Map();

export class User {
    constructor(email, password, country, birthdate) {
        this.email = email;
        this.password = password;
        this.country = country;
        this.birthdate = birthdate;
        this.solved = [];
    }
}


ACCOUNTS.set("maksprotsyk@gmail.com",
    new User(
        "maksprotsyk@gmail.com",
        "pass",
        "Ukraine",
        "22.08.07"
    )
);

export default ACCOUNTS;
