const ACCOUNTS = new Map();

class User {
    constructor(login, email, password, country) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.country = country;
        this.solved = [];
    }
}


ACCOUNTS.set("maksprotsyk@gmail.com", new User("test", "maksprotsyk@gmail.com", "pass", "Ukraine"));

export default ACCOUNTS;
