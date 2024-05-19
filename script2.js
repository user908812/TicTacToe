let f1 = document.getElementById('f1');
let f2 = document.getElementById('f2');
let f3 = document.getElementById('f3');
let f4 = document.getElementById('f4');
let f5 = document.getElementById('f5');
let f6 = document.getElementById('f6');
let f7 = document.getElementById('f7');
let f8 = document.getElementById('f8');
let f9 = document.getElementById('f9');

let result = document.getElementById('result');

let X = '<img width="80" height="80" src="x.png" alt="x.png" title="x.png" draggable="false">';
let O = '<img width="80" height="80" src="o.png" alt="o.png" title="o.png" draggable="false">';

let difficulties = ['łatwy', 'średni'];
let d = Math.floor(Math.random() * difficulties.length);
let difficulty = difficulties[d];

let difficultyDisplay = document.getElementById('difficulty').innerHTML = difficulty;

let playerTurn = X;

let isF1Free = true, isF2Free = true, isF3Free = true, isF4Free = true, isF5Free = true, isF6Free = true, isF7Free = true, isF8Free = true, isF9Free = true;

function bot() {
    let role = O;

    let botChooseOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let botOpt = Math.floor(Math.random() * botChooseOptions.length);
    let botOption = botChooseOptions[botOpt];

    if (isF1Free && botOption == 1) {
        f1.innerHTML = role;
        isF1Free = false;
    } else if (!isF1Free && botOption == 1) {
        if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    } else if (isF2Free && botOption == 2) {
        f2.innerHTML = role;
        isF2Free = false;
    } else if (!isF2Free && botOption == 2) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    } 

    else if (isF3Free && botOption == 3) {
        f3.innerHTML = role;
        isF3Free = false;
    } else if (!isF3Free && botOption == 3) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    } 
    else if (isF4Free && botOption == 4) {
        f4.innerHTML = role;
        isF4Free = false;
    } else if (!isF4Free && botOption == 4) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    }
    else if (isF5Free && botOption == 5) {
        f5.innerHTML = role;
        isF5Free = false;
    } else if (!isF5Free && botOption == 5) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    } 
    else if (isF6Free && botOption == 6) {
        f6.innerHTML = role;
        isF6Free = false;
    } 
    else if (!isF6Free && botOption == 6) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    } 
    else if (isF7Free && botOption == 7) {
        f7.innerHTML = role;
        isF7Free = false;
    } else if (!isF7Free && botOption == 7) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    } 
    else if (isF8Free && botOption == 8) {
        f8.innerHTML = role;
        isF8Free = false;
    } else if (!isF8Free && botOption == 8) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF9Free) {
            f9.innerHTML = role;
            isF9Free = false;
        }
    } 
    else if (isF9Free && botOption == 9) {
        f9.innerHTML = role;
        isF9Free = false;
    } else if (!isF9Free && botOption == 9) {
        if (isF1Free) {
            f1.innerHTML = role;
            isF1Free = false;
        }
        else if (isF2Free) {
            f2.innerHTML = role;
            isF2Free = false;
        }
        else if (isF3Free) {
            f3.innerHTML = role;
            isF3Free = false;
        }
        else if (isF4Free) {
            f4.innerHTML = role;
            isF4Free = false;
        }
        else if (isF5Free) {
            f5.innerHTML = role;
            isF5Free = false;
        }
        else if (isF6Free) {
            f6.innerHTML = role;
            isF6Free = false;
        }
        else if (isF7Free) {
            f7.innerHTML = role;
            isF7Free = false;
        }
        else if (isF8Free) {
            f8.innerHTML = role;
            isF8Free = false;
        }
    }
}
f1.addEventListener('click', () => {
    if (isF1Free && playerTurn == X) {
        isF1Free = false; 
        f1.innerHTML = X;
        bot();
    } else if (isF1Free && playerTurn == O) {
        isF1Free = false;
        f1.innerHTML = O;
        bot();
    }
});
f2.addEventListener('click', () => {
    if (isF2Free && playerTurn == X) {
        isF2Free = false; 
        f2.innerHTML = X;
        bot();
    } else if (isF2Free && playerTurn == O) {
        isF2Free = false;
        f2.innerHTML = O;
        bot();
    }
});
f3.addEventListener('click', () => {
    if (isF3Free && playerTurn == X) {
        isF3Free = false; 
        f3.innerHTML = X;
        bot();
    } else if (isF3Free && playerTurn == O) {
        isF3Free = false;
        f3.innerHTML = O;
        bot();
    }
});
f4.addEventListener('click', () => {
    if (isF4Free && playerTurn == X) {
        isF4Free = false; 
        f4.innerHTML = X;
        bot();
    } else if (isF4Free && playerTurn == O) {
        isF4Free = false;
        f4.innerHTML = O;
        bot();
    }
});
f5.addEventListener('click', () => {
    if (isF5Free && playerTurn == X) {
        isF5Free = false; 
        f5.innerHTML = X;
        bot();
    } else if (isF5Free && playerTurn == O) {
        isF5Free = false;
        f5.innerHTML = O;
        bot();
    }
});
f6.addEventListener('click', () => {
    if (isF6Free && playerTurn == X) {
        isF6Free = false; 
        f6.innerHTML = X;
        bot();
    } else if (isF6Free && playerTurn == O) {
        isF6Free = false;
        f6.innerHTML = O;
        bot();
    }
});
f7.addEventListener('click', () => {
    if (isF7Free && playerTurn == X) {
        isF7Free = false; 
        f7.innerHTML = X;
        bot();
    } else if (isF7Free && playerTurn == O) {
        isF7Free = false;
        f7.innerHTML = O;
        bot();
    }
});
f8.addEventListener('click', () => {
    if (isF8Free && playerTurn == X) {
        isF8Free = false; 
        f8.innerHTML = X;
        bot();
    } else if (isF8Free && playerTurn == O) {
        isF8Free = false;
        f8.innerHTML = O;
        bot();
    }
});
f9.addEventListener('click', () => {
    if (isF9Free && playerTurn == X) {
        isF9Free = false; 
        f9.innerHTML = X;
        bot();
    } else if (isF9Free && playerTurn == O) {
        isF9Free = false;
        f9.innerHTML = O;
        bot();
    }
});
// Key events
document.body.addEventListener('keydown', (event) => {
        if (event.key == '1') {
            if (isF1Free && playerTurn == X) {
                isF1Free = false;
                f1.innerHTML = X;
                bot();
            } else if (isF1Free && playerTurn == O) {
                isF1Free = false; 
                f1.innerHTML = O;
                bot();
            }
        }
        if (event.key == '2') {
            if (isF2Free && playerTurn == X) {
                isF2Free = false;
                f2.innerHTML = X;
                bot();
            } else if (isF2Free && playerTurn == O) {
                isF2Free = false; 
                f2.innerHTML = O;
                bot();
            }
        }
        if (event.key == '3') {
            if (isF3Free && playerTurn == X) {
                isF3Free = false;
                f3.innerHTML = X;
                bot();
            } else if (isF3Free && playerTurn == O) {
                isF3Free = false; 
                f3.innerHTML = O;
                bot();
            }
        }
        if (event.key == '4') {
            if (isF4Free && playerTurn == X) {
                isF4Free = false;
                f4.innerHTML = X;
                bot();
            } else if (isF4Free && playerTurn == O) {
                isF4Free = false; 
                f4.innerHTML = O;
                bot();
            }
        }
        if (event.key == '5') {
            if (isF5Free && playerTurn == X) {
                isF5Free = false;
                f5.innerHTML = X;
                bot();
            } else if (isF5Free && playerTurn == O) {
                isF5Free = false; 
                f5.innerHTML = O;
                bot();
            }
        }
        if (event.key == '6') {
            if (isF6Free && playerTurn == X) {
                isF6Free = false;
                f6.innerHTML = X;
                bot();
            } else if (isF6Free && playerTurn == O) {
                isF6Free = false; 
                f6.innerHTML = O;
                bot();
            }
        }
        if (event.key == '7') {
            if (isF7Free && playerTurn == X) {
                isF7Free = false;
                f7.innerHTML = X;
                bot();
            } else if (isF7Free && playerTurn == O) {
                isF7Free = false; 
                f7.innerHTML = O;
                bot();
            }
        }
        if (event.key == '8') {
            if (isF8Free && playerTurn == X) {
                isF8Free = false;
                f8.innerHTML = X;
                bot();
            } else if (isF8Free && playerTurn == O) {
                isF8Free = false; 
                f8.innerHTML = O;
                bot();
            }
        }
        if (event.key == '9') {
            if (isF9Free && playerTurn == X) {
                isF9Free = false;
                f9.innerHTML = X;
                bot();
            } else if (isF9Free && playerTurn == O) {
                isF9Free = false; 
                f9.innerHTML = O;
                bot();
            }
        }
    });
    // Collision
setInterval(() => {
    // Gracz X
    if (
        (f1.innerHTML.includes('x.png')) &&
        (f4.innerHTML.includes('x.png')) &&
        (f7.innerHTML.includes('x.png'))) {
        f1.style.backgroundColor = 'red';
        f4.style.backgroundColor = 'red';
        f7.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f2.innerHTML.includes('x.png')) &&
        (f5.innerHTML.includes('x.png')) &&
        (f8.innerHTML.includes('x.png'))) {
        f2.style.backgroundColor = 'red';
        f5.style.backgroundColor = 'red';
        f8.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f3.innerHTML.includes('x.png')) &&
        (f6.innerHTML.includes('x.png')) &&
        (f9.innerHTML.includes('x.png'))) {
        f3.style.backgroundColor = 'red';
        f6.style.backgroundColor = 'red';
        f9.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f1.innerHTML.includes('x.png')) &&
        (f2.innerHTML.includes('x.png')) &&
        (f3.innerHTML.includes('x.png'))) {
        f1.style.backgroundColor = 'red';
        f2.style.backgroundColor = 'red';
        f3.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f4.innerHTML.includes('x.png')) &&
        (f5.innerHTML.includes('x.png')) &&
        (f6.innerHTML.includes('x.png'))) {
        f4.style.backgroundColor = 'red';
        f5.style.backgroundColor = 'red';
        f6.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f7.innerHTML.includes('x.png')) &&
        (f8.innerHTML.includes('x.png')) &&
        (f9.innerHTML.includes('x.png'))) {
        f7.style.backgroundColor = 'red';
        f8.style.backgroundColor = 'red';
        f9.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f1.innerHTML.includes('x.png')) &&
        (f5.innerHTML.includes('x.png')) &&
        (f9.innerHTML.includes('x.png'))) {
        f1.style.backgroundColor = 'red';
        f5.style.backgroundColor = 'red';
        f9.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f3.innerHTML.includes('x.png')) &&
        (f5.innerHTML.includes('x.png')) &&
        (f7.innerHTML.includes('x.png'))) {
        f3.style.backgroundColor = 'red';
        f5.style.backgroundColor = 'red';
        f7.style.backgroundColor = 'red';
        result.innerHTML = 'X wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
        // Gracz O
    } else if (
        (f1.innerHTML.includes('o.png')) &&
        (f4.innerHTML.includes('o.png')) &&
        (f7.innerHTML.includes('o.png'))) {
        f1.style.backgroundColor = 'blue';
        f4.style.backgroundColor = 'blue';
        f7.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f2.innerHTML.includes('o.png')) &&
        (f5.innerHTML.includes('o.png')) &&
        (f8.innerHTML.includes('o.png'))) {
        f2.style.backgroundColor = 'blue';
        f5.style.backgroundColor = 'blue';
        f8.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f3.innerHTML.includes('o.png')) &&
        (f6.innerHTML.includes('o.png')) &&
        (f9.innerHTML.includes('o.png'))) {
        f3.style.backgroundColor = 'blue';
        f6.style.backgroundColor = 'blue';
        f9.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f1.innerHTML.includes('o.png')) &&
        (f2.innerHTML.includes('o.png')) &&
        (f3.innerHTML.includes('o.png'))) {
        f1.style.backgroundColor = 'blue';
        f2.style.backgroundColor = 'blue';
        f3.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f4.innerHTML.includes('o.png')) &&
        (f5.innerHTML.includes('o.png')) &&
        (f6.innerHTML.includes('o.png'))) {
        f4.style.backgroundColor = 'blue';
        f5.style.backgroundColor = 'blue';
        f6.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f7.innerHTML.includes('o.png')) &&
        (f8.innerHTML.includes('o.png')) &&
        (f9.innerHTML.includes('o.png'))) {
        f7.style.backgroundColor = 'blue';
        f8.style.backgroundColor = 'blue';
        f9.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f1.innerHTML.includes('o.png')) &&
        (f5.innerHTML.includes('o.png')) &&
        (f9.innerHTML.includes('o.png'))) {
        f1.style.backgroundColor = 'blue';
        f5.style.backgroundColor = 'blue';
        f9.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (
        (f3.innerHTML.includes('o.png')) &&
        (f5.innerHTML.includes('o.png')) &&
        (f7.innerHTML.includes('o.png'))) {
        f3.style.backgroundColor = 'blue';
        f5.style.backgroundColor = 'blue';
        f7.style.backgroundColor = 'blue';
        result.innerHTML = 'O wygrywa!';
        isF1Free = false, isF2Free = false, isF3Free = false, isF4Free = false, isF5Free = false, isF6Free = false, isF7Free = false, isF8Free = false, isF9Free = false;
    } else if (f1.innerHTML != '' &&
               f2.innerHTML != '' &&
               f3.innerHTML != '' &&
               f4.innerHTML != '' &&
               f5.innerHTML != '' &&
               f6.innerHTML != '' &&
               f7.innerHTML != '' &&
               f8.innerHTML != '' &&
               f9.innerHTML != ''
                ) {
                    f1.style.backgroundColor = 'yellow';
                    f2.style.backgroundColor = 'yellow';
                    f3.style.backgroundColor = 'yellow';
                    f4.style.backgroundColor = 'yellow';
                    f5.style.backgroundColor = 'yellow';
                    f6.style.backgroundColor = 'yellow';
                    f7.style.backgroundColor = 'yellow';
                    f8.style.backgroundColor = 'yellow';
                    f9.style.backgroundColor = 'yellow';
                    result.innerHTML = 'Remis!';
                }
}, 100);