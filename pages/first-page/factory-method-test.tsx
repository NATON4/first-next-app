abstract class CarFactory {
    public abstract createCar(): Car;

    public someOperation(): string {
        const car = this.createCar();

        return `CarFactory: The same factory's code has just worked with ${car.operation()}`;
    }
}

class ToyotaFactory extends CarFactory {

    public createCar(): Car {
        return new ToyotaCar();
    }
}

class MercedesFactory extends CarFactory {
    public createCar(): Car {
        return new MercedesCar();
    }
}

interface Car {
    operation(): string;
}

class ToyotaCar implements Car {
    public operation(): string {
        return 'Toyota Car';
    }
}

class MercedesCar implements Car {
    public operation(): string {
        return 'Mercedes Car';
    }
}

function clientCode(factory: CarFactory) {
    console.log('Client: I\'m not aware of the factory\'s class, but it still works.');
    console.log(factory.someOperation());
}

console.log('App: Launched with the ToyotaFactory.');
clientCode(new ToyotaFactory());
console.log('');

console.log('App: Launched with the MercedesFactory.');
clientCode(new MercedesFactory());
