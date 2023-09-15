//keys and notes
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

keys.forEach(function (key) {
    notes.push(document.getElementById(key));
})

//change the color of the keys
function keyPlay(event) {
    const rainbowColors = [
        "#ff3939",
        "#ff8b38",
        "#ffcb6a",
        "#34ad34",
        "#59a1e4",
        "#8f49c1",
        "#d663cb",
        "#ec85b9",
        "#f6ad4d",
        "#f1be47",
        "#59e4bd",
        "#495fc1",
        "#b763d6",
    ];

    event.target.style.backgroundColor = rainbowColors[notes.indexOf(event.target)];
    let audio = new Audio(`./audio/${keys[notes.indexOf(event.target)]}.mp3`);
    audio.play();
}

function keyReturn(event) {
    event.target.style.backgroundColor = '';
}

function colorize(note) {
    /* note.onmousedown = function () {
        keyPlay(event);
    }

    note.onmouseup = function () {
        keyReturn(event);
    } */
    note.addEventListener('mouseup', keyReturn);
    note.addEventListener('mousedown', keyPlay);
}

notes.forEach(colorize);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// // Write anonymous event handler property and function for the first progress button
const unhideTwo = function () {
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
    nextOne.hidden = true;
    nextTwo.hidden = false;
}
nextOne.onclick = unhideTwo;

// Write anonymous event handler property and function for the second progress button
const unhideThree = function () {
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-';
    lastLyric.style.display = 'inline-block';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
    nextTwo.hidden = true;
    nextThree.hidden = false;
}
nextTwo.onclick = unhideThree;
// Write anonymous event handler property and function for the third progress button
const unhideLast = function () {
    nextThree.hidden = true;
    startOver.hidden = false;

    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU';
    lastLyric.style.display = 'none';

    ('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    ('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
}

nextThree.onclick = unhideLast;


// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    nextOne.hidden = false;
    startOver.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
}