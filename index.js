const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

//ask for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'letters',
            message: 'Please enter up to three letters.',
        },
        {
            type: 'input',
            message: 'What color would you like your letters to be?',
            name: 'letterColor',

        },
        {
            type: 'list',
            message: 'Please choose a shape.',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'What color would you like your shape to be?',
            name: 'shapeColor',

        },
    ])
    .then((data) => {
        const fileName = `${data.letters}.svg`;
        const logo = generateLogo(data);
        writeFile(`./examples/${fileName}`, logo);
    })


//function to write file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Logo successfully created!");
        }
    })
};

//function to generate logo 
function generateLogo(data) {

    if (data.letters.length > 3) {
        throw new Error("Logo cannot have more than three letters.");
    } if (!data.letterColor) {
        data.letterColor = 'white';
    } if (!data.shapeColor) {
        data.shapeColor = 'black'
    }

    let shape;
    if (data.shape === "circle") {
        shape = new shapes.Circle(data.shapeColor);
    } else if (data.shape === "triangle") {
        shape = new shapes.Triangle(data.shapeColor);
    } else if (data.shape === "square") {
        shape = new shapes.Square(data.shapeColor)
    }

    return `
        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

${shape.svgCode()}

<text x="150" y="165" font-size="60" text-anchor="middle" fill="${data.letterColor}">${data.letters}</text>

</svg> 
        `
}