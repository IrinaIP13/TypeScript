// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car_77 {model:string;
    maker:string;
    age:number;
    speedMax:number;
    engineVolume:number;
    driver?:string;

    constructor(model:string, maker:string, age:number, speedMax:number, engineVolume:number) {
        this.model = model;
        this.maker = maker;
        this.age = age;
        this.speedMax = speedMax;
        this.engineVolume = engineVolume
    }
    drive():void {
        console.log(`їдемо зі швидкістю ${this.speedMax} на годину`);
    };
    info ():void {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed (newSpeed:number):void {
        this.speedMax = this.speedMax + newSpeed;
    }
    changeYear (newValue:number):void {
        this.age = newValue;
    }
    addDriver (driver:string):void {
        this.driver = driver;
    }
}

const car_77 = new Car_77('Camry', 'Tayota', 2022, 180, 2.5);
car_77.increaseMaxSpeed(60);
car_77.changeYear(2024);
car_77.addDriver('Igor');
car_77.drive();
car_77.info();