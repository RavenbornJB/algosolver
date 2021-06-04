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
    {
        email: "maksprotsyk@gmail.com",
        nick: "max",
        password: "pass",
        country: "Ukraine",
        birthdate: "22.08.07",
        avatar: "default",
        solved: [1, 2],
        created: []
    }
);


ACCOUNTS.set("test@g",
    {
        email: "test@g",
        nick: "test",
        password: "pass",
        country: "Ukraine",
        birthdate: "22.08.07",
        avatar: "default",
        solved: [],
        created: []
    }
);

export default ACCOUNTS;
