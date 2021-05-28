const ACCOUNTS = new Map();

export class User {
    constructor(email, nick, password, country, birthdate) {
        this.email = email;
        this.nick = nick;
        this.password = password;
        this.country = country;
        this.birthdate = birthdate;
        this.avatar = "default";
        this.solved = [];
        this.created = [];
    }
}


ACCOUNTS.set("maksprotsyk@gmail.com",
    new User(
        "maksprotsyk@gmail.com",
            "max",
        "pass",
        "Ukraine",
        "22.08.07"
    )
);

ACCOUNTS.set("test@g",
    new User(
        "test@g",
        "test",
        "p",
        "Germany",
        "06.02.2003"
    )
);

export default ACCOUNTS;
