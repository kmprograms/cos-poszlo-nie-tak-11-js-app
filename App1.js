/*
    Napisz program, który pozwoli przygotować strukturę danych do przechowania informacji
    na temat prostokąta. Każdy prostokąt zawiera dwie zmienne opisujące jego boki. Dla
    prostokąta możesz wyznaczyć jego pole. Następnie przygotuj funkcjonalność, która
    dla kolekcji kilku prostokątów wyznaczy ich średnie pole.
*/

class Rectangle {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    area() {
        return this.#x * this.#y
    }

    info() {
        return `Rectangle [${this.#x}, ${this.#y}] -> Area: ${this.area()}`
    }

    static getAreasAverage(rectangles) {
        if (!rectangles || rectangles.length === 0) {
            throw new Error('Rectangles collection is not correct');
        }
        return rectangles
            .map(r => r.area())
            .reduce((x, y) => x + y) / rectangles.length;
    }
}

const main = () => {
    const r1 = new Rectangle(1, 2);
    console.log(r1.info());
    const r2 = new Rectangle(3, 4);
    console.log(r2.info());
    const r3 = new Rectangle(2, 5);
    console.log(r3.info());

    const rectangles = [r1, r2, r3];
    console.log(Rectangle.getAreasAverage(rectangles))
}

main()

