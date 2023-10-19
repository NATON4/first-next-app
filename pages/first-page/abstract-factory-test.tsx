interface CarFactory {
    createToyotaCar(): Car;
    createMercedesCar(): Car;
}

class ToyotaFactory implements CarFactory {
    public createToyotaCar(): Car {
        return new ToyotaCar();
    }

    public createMercedesCar(): Car {
        return new MercedesCar();
    }
}

class MercedesFactory implements CarFactory {
    public createToyotaCar(): Car {
        return new ToyotaCar();
    }

    public createMercedesCar(): Car {
        return new MercedesCar();
    }
}

interface Car {
    drive(): string;
}

class ToyotaCar implements Car {
    public drive(): string {
        return 'Driving a Toyota car.';
    }
}

class MercedesCar implements Car {
    public drive(): string {
        return 'Driving a Mercedes car.';
    }
}

function clientCode(factory: CarFactory) {
    const toyotaCar = factory.createToyotaCar();
    const mercedesCar = factory.createMercedesCar();

    console.log(toyotaCar.drive());
    console.log(mercedesCar.drive());
}

clientCode(new ToyotaFactory());
clientCode(new MercedesFactory());
