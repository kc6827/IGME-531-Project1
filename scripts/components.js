
//helper functions
const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randRangeF = (min, max) => {
    return Math.random() * (max - min) + min;
}
//end of helper functions

//components
const rect = (x, y, width, height, stroke, fill) => {
    return `
    <rect x="${x - width / 2}" y="${y - height / 2}" width="${width}" height="${height}" stroke="${stroke}" fill="${fill}" />`

}

const circ = (x, y, d, stroke, fill) => {
    return `
            <circle cx="${x}" cy="${y}" r="${d / 2}" stroke="${stroke}" fill="${fill}" /> `
}

const elpse = (x, y, dx, dy, stroke, fill) => {
    return `
            <ellipse cx="${x}" cy="${y}" rx="${dx / 2}" ry="${dy / 2}" stroke="${stroke}" fill="${fill}" /> `
}

const line = (x1, y1, x2, y2, stroke) => {
    return `
            <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" /> `
}

const polyg = (stroke, fill, ...points) => {
    return `
            <polygon points="${points}" stroke="${stroke}" fill="${fill}" /> `
}

const polyl = (width, stroke, fill, ...points) => {
    return `
            <polyline points="${points}" stroke="${stroke}" fill="${fill}" stroke-width="${width}"/> `
}

const path = (...data) => {
    return `
            <path d="${data}"/> `
}

//tile components
const ts = 3;
const lineWidth = .2;
const color = 'lime';

const letterA = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, 0, ts, ts, 0, ts / 2, ts / 2, -ts / 2, -ts / 2);
}

const letterC = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, 0, ts, ts, 0);
}

const letterE = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, -ts / 2, ts / 2, 0, 0, -ts / 2, ts / 2, 0, ts, ts, 0);
}

const letterG = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, 0, ts, ts, 0, ts / 2, -ts / 2, 0, 0);
}

const letterH = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, -ts / 2, -ts / 2, ts / 2, ts / 2, 0, ts, ts, 0);
}

const letterK = () => {
    return polyl(lineWidth, color, 'none',
        -ts, 0, 0, ts, -ts / 2, ts / 2, ts, 0, -ts / 2, ts / 2, 0, -ts);
}

const letterM = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, 0, 0, 0, ts, ts, 0);
}

const letterN = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, ts, 0, 0, ts);
}

const letterO = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, -ts, 0, 0, ts, ts, 0, 0, -ts);
}

const letterS = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, ts, 0, ts / 2, ts / 2, -ts / 2, -ts / 2, -ts, 0, 0, ts);
}

const letterX = () => {
    return polyl(lineWidth, color, 'none',
        0, -ts, 0, ts, 0, 0, ts, 0, -ts, 0);
}

//group components
const rotate = (shape, ...rotation) => {
    return `
            <g transform="rotate(${rotation})">
                ${shape} 
            </g>`
}

const translate = (shape, ...translation) => {
    return `
            <g transform="translate(${translation})">
                ${shape} 
            </g>`
}

const scale = (shape, ...scale) => {
    return `
            <g transform="scale(${scale})">
                ${shape} 
            </g>`
}

const strokeW = (shape, strokeWidth) => {
    return `
            <g stroke-width="${strokeWidth}">
                ${shape} 
            </g>`
}

const randPos = (shape, randomness) => {
    return `
            <g transform="translate(${randRangeF(-randomness, randomness), randRangeF(-randomness, randomness)})">
                ${shape} 
            </g>`
}

const randRot = (shape, randomness) => {
    return `
            <g transform="rotate(${randRangeF(-randomness, randomness)})">
                ${shape} 
            </g>`
}