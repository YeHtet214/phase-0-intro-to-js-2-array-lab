// Write your solution here!

const cats = [];
cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat(cat) {
    return cats.push(cat);
}

function destructivelyPrependCat(cat) {
    return cats.unshift(cat);
}

function destructivelyRemoveLastCat(cat) {
    return cats.pop(cat);
}

function destructivelyRemoveFirstCat(cat) {
    return cats.shift(cat);
}

function appendCat(cat) {
    return [...cats, cat];
}

function prependCat(cat) {
    return [cat, ...cats];
}

function removeLastCat(cat) {
    return cats.slice(0, -1);
}

function removeFirstCat(cat) {
    return cats.slice(1);
}

