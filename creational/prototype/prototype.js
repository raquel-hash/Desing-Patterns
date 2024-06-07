class Car {
    constructor({ edition, model, airBags, color }) {
        this._edition = edition || 'default';
        this._model = model || '';
        this._airBags = airBags || 0;
        this._color = color || 'default';
    }

    set airBags(howMany) {
        this._airBags = howMany;
    }

    set color(color) {
        this._color = color;
    }

    set model(model) {
        this._model = model;
    }

    set edition(edition) {
        this._edition = edition;
    }


    get airBags() {
        return this._airBags;
    }

    get color() {
        return this._color;
    }

    get model() {
        return this._model;
    }

    get edition() {
        return this._edition;
    }

    //step 1
    clone() {
        throw new Error('Method not implemented!');
    }
}

class MastodonCar extends Car {
    constructor(carToClone) {
        super({
            edition: carToClone?.edition,
            color: carToClone?.color,
            model: carToClone?.model,
            airBags: carToClone?.airBags,
        })
    }

    //step 2
    clone() {
        return new MastodonCar(this);
    }
}

class CarProductLine {
    setAirBags(airBagsNumber) {
        throw new Error('Method not implemented!');
    }

    setColor(color) {
        throw new Error('Method not implemented!');
    }

    setEdition(edition) {
        throw new Error('Method not implemented!');
    }

    resetProductLine() {
        throw new Error('Method not implemented!');
    }
}


//STEP 2
class SedanProductLine extends CarProductLine {
    constructor({ model }) {
        super();
        this.setInternalModel(model);
        this.resetProductLine();
    }

    setAirBags(howMany) {
        this.sedanCar.airBags = howMany;
        return this;
    }

    setColor(color) {
        this.sedanCar.color = color;
        return this;
    }

    setEdition(edition) {
        this.sedanCar.edition = edition;
        return this;
    }

    setInternalModel(model) {
        this.internalModel = model;
    }

    setModel() {
        this.sedanCar.model = 'sedan';
    }

    resetProductLine() {
        this.sedanCar =
            this.internalModel === 'mastodon' ? new MastodonCar() : new RhinoCar();
    }

    build() {
        this.setModel();
        const sedanCar = this.sedanCar;
        this.resetProductLine();
        return sedanCar;
    }
}

//step 4
class Director {
    setProductionLine(productionLine) {
        this.productionLine = productionLine;
    }

    constructCvtEdition() {
        this.productionLine.setAirBags(4).setColor('blue').setEdition('CVT');
    }

    constructSignatureEdition() {
        this.productionLine.setAirBags(8).setColor('red').setEdition('Signature');
    }
}


function appBuilder(director) {
    const mastodonSedanProductLine = new SedanProductLine({ model: 'mastodon' });

    director.setProductionLine(mastodonSedanProductLine);
    // director.constructCvtEdition();
    // const mastodonSedanCvt = mastodonSedanProductLine.build();
    // console.log(mastodonSedanCvt);

    // const mastodonSedanCvtClone = mastodonSedanCvt.clone();
    // console.log(mastodonSedanCvtClone);

    director.constructSignatureEdition();
    const mastodonSedanSignature = mastodonSedanProductLine.build();
    console.log(mastodonSedanSignature);

    const mastodonSedanSignatureClone = mastodonSedanSignature.clone();
    console.log(mastodonSedanSignatureClone);
}

appBuilder(new Director());
