//STEP 1
class BaseCar {
    showCost() {
        throw new Error('Method not implemented!');
    }
}
//STEP 2
class MastodonCar extends BaseCar {
    showCost() {
        console.log('Mastodon Car cost: 300.000 MXN')
    }
}

class RhinoCar extends BaseCar {
    showCost() {
        console.log('Rhino Car cost: 100.000 MXN')
    }
}
//STEP 3
class CarFactory {
    makeCar() { throw new Error('Method not implemented!'); }
}

//STEP 4
class MastodonCarFactory extends CarFactory {
    makeCar() {
        return new MastodonCar();
    }
}

class RhinoCarFactory extends CarFactory {
    makeCar() {
        return new RhinoCar();
    }
}


function appfactory(factory) {
    const car = factory.makeCar();
    car.showCost();
}

function createFactory(type) {
    const factories = {
        mastodon: MastodonCarFactory,
        rhino: RhinoCarFactory
    }

    const Factory = factories[type]
    return new Factory();
}

appfactory(createFactory('mastodon'));
appfactory(createFactory('rhino'));
