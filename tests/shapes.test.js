const Shapes = require('../lib/shapes');

describe('Shapes Rendering', () => {
    describe('Circle', () => {
        it('should render an SVG string of a circle with the chosen color', () => {
            const circle = new Shapes.Circle('blue');
            expect(circle.svgCode()).toEqual('<circle cx="150" cy="150" r="80" fill="blue" />');
        });
        it('should set the color of the shape using the shapeColor method', () => {
            const circle = new Shapes.Circle('green');
            expect(circle.shapeColor).toEqual('green');
        });
    });
    describe('Triangle', () => {
        it('should render an SVG string of a triangle with the chosen color', () => {
            const triangle = new Shapes.Triangle('blue');
            expect(triangle.svgCode()).toEqual('<polygon points="150,30 60,190 240, 190" fill="blue" />');
        });
        it('should set the color of the shape using the shapeColor method', () => {
            const triangle = new Shapes.Triangle('green');
            expect(triangle.shapeColor).toEqual('green');
        });
    });
    describe('Square', () => {
        it('should render an SVG string of a square with the chosen color', () => {
            const square = new Shapes.Square('blue');
            expect(square.svgCode()).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');
        });
        it('should set the color of the shape using the shapeColor method', () => {
            const square = new Shapes.Square('green');
            expect(square.shapeColor).toEqual('green');
        });
    });
})

