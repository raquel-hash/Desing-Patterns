/**
 * **Pasos para implementar Builder**:
1.	Declarar una clase base o interfaz builder que defina
 los pasos generales para la construcción de estos productos, 
 ¿Cuál será el paso número 1 y cuál será el paso número 2? Etc.
2.	Implementar builders concretos, subclases que hereden o implementen
 la clase builder y dentro de estas, dejar las implementaciones de los pasos 
 de configuración. (Relación de composición con el producto A) Cuenta con los 
 métodos reset y build
3.	Implementar las clases producto específicas, para el caso de la gráfica,
 el producto A o producto B, puede ser una interfaz en común como Car
4.	Para finalizar, se tiene la clase Director, que sabe cuál es el proceso
 para construir la variante, utilizando el Builder y define el orden en el 
 cuál será llamado, esta clase se encarga de definir el proceso.
 */

//STEP 1
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
//step 3
class Car {
    constructor() {
        this._edition = '';
        this._model = '';
        this._airBags = 2;
        this._color = 'black';
    }

    set airBags(howMany) {
        this._airBags = howMany;
    }

    set color(color) {
        this._color = color;
    }

    set edition(edition) {
        this._edition = edition;
    }

    set model(model) {
        this._model = model;
    }
}

class MastodonCar extends Car {
    constructor() {
        super();
    }
}

class RhinoCar extends Car {
    constructor() {
        super();
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
    director.constructCvtEdition();
    const mastodonSedanCvt = mastodonSedanProductLine.build();
    console.log(mastodonSedanCvt);

    director.constructSignatureEdition();
    const mastodonSedanSignature = mastodonSedanProductLine.build();
    console.log(mastodonSedanSignature);
}

appBuilder(new Director());
