class UserProfile {
    private name: string;
    private email: string;
    private age: number;
    private address: string;

    constructor(builder: UserProfileBuilder) {
        this.name = builder.name;
        this.email = builder.email;
        this.age = builder.age;
        this.address = builder.address;
    }

    public static get Builder() {
        return new UserProfileBuilder();
    }
   

    public toString() {
        return `UserProfile: { Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Address: ${this.address} }`;
    }
}

class UserProfileBuilder {
    public name: string;
    public email: string;
    public age: number;
    public address: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.age = 0;
        this.address = '';
    }

    public setName(name: string) {
        this.name = name;
        return this;
    }

    public setEmail(email: string) {
        this.email = email;
        return this;
    }

    public setAge(age: number) {
        this.age = age;
        return this;
    }

    public setAddress(address: string) {
        this.address = address;
        return this;
    }

    public build() {
        return new UserProfile(this);
    }
}

export { UserProfile };