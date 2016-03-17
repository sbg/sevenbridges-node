class Greeter {

    greeting: string;
    da: string;

    constructor(message: string) {
        this.greeting = message;
        this.da = 'dsaopda';
    }

    greet() {
        return 'Bonjour, ' + this.greeting + '!';
    }

}

export = Greeter;
