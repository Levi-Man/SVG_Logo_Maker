class Circle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }

    svgCode() {
        return `<circle cx="150" cy="150" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }

    svgCode() {
        return `<polygon points="150,30 60,190 240, 190" fill="${this.shapeColor}" />`
    }
}

class Square {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }

    svgCode() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />`
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};