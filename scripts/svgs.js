var svgMethod;
var interruptions;
var spacing;
var margins = 0;
var lineLength;

var letters = [
    letterG, letterA, letterM, letterE, letterS
];

const svgTest = () => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        polyl(2, 'red', 'blue', 10, 83.5, 70, 33, 40, 40) +
        path("M" + 50, 0, "L" + 75, 50, 35, 40) +
        scale(translate(rotate(rect(50, 50, 20, 20, 'red', 'none'), 25, 50, 50), 10, 10), .5, 1.2) +
        `</svg>`
        ;
}

const svg1 = () => {
    interruptions = "";
    spacing = 6;
    lineLength = 2.8;
    margins = 1;
    for (var i = 1; i < 16; i++) {
        for (var j = 1; j < 16; j++) {
            interruptions += translate(
                rotate(
                    letters[randRange(0, letters.length)](),
                    randRange(0, 4) * 90),
                margins + i * spacing, margins + j * spacing);
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        interruptions +
        `</svg>`
}

const buttonPress = () => {
    document.querySelector("button").onclick = e => {
        document.querySelector('svg').outerHTML = svg1();
    };
}