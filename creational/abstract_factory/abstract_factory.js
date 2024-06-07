//step 1
class MastodonCar {
    useGPS() {
        throw new Error('Method not implemented!');
    }
}


class RhinoCar {
    useGPS() {
        throw new Error('Method not implemented!');
    }
}

//step 2
class MastodonSedanCar extends MastodonCar {
    useGPS() {
        console.log("[SEDAN] Mastodon GPS")
    }
}

class MastodonHatchbackCar extends MastodonCar {
    useGPS() {
        console.log("[HATCHBACK] Mastodon GPS")
    }
}

class RhinoSedanCar extends MastodonCar {
    useGPS() {
        console.log("[SEDAN] Rhino GPS")
    }
}

class RhinoHatchbackCar extends MastodonCar {
    useGPS() {
        console.log("[HATCHBACK] Rhino GPS")
    }
}

//step 3
class carAbstractfactory {
    createMastodon() {
        throw new Error('Method not implemented!');
    }

    createRhino() {
        throw new Error('Method not implemented!');
    }
}

//step 4
class SedanCarfactory {
    createMastodon() {
        return new MastodonSedanCar();
    }

    createRhino() {
        return new RhinoSedanCar();
    }
}

class HatchbackCarfactory {
    createMastodon() {
        return new MastodonHatchbackCar();
    }

    createRhino() {
        return new RhinoHatchbackCar();
    }
}

function appCarFactory(factory) {
    const mastodon = factory.createMastodon();
    const rhino = factory.createRhino();

    mastodon.useGPS();
    rhino.useGPS();
}

appCarFactory(createFactory('sedan'));
appCarFactory(createFactory('hatchback'));

function createFactory(type) {
    const factories = {
        sedan: SedanCarfactory,
        hatchback: HatchbackCarfactory
    }

    const Factory = factories[type]
    return new Factory();
}
