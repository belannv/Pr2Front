class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }

    getInfo(prop) {
        if (prop === null) {
            return {
                name: this.name,
                age: this.age,
                weight: this.weight,
                gender: this.gender
            };
        } else if (prop in this) {
            return this[prop];
        } else {
            return "Вказано невірну назву властивості.";
        }
    }

    greeting() {
        return "Hi!";
    }
}

class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'man');
    }

    greeting() {
        return `Привіт, я ${this.name}, мені ${this.age} років.`;
    }
}

class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, 'woman');
    }

    greeting() {
        return `Привіт, я ${this.name}.`;
    }
}

export { Man, Woman };
