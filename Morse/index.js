const morse = {
    'A': ".=", 
    'B': "=...", 
    'C': "=.=.", 
    'D': "=..", 
    'E': ".", 
    'F': "..=.", 
    'G': "==.", 
    'H': "....",
    'I': "..", 
    'J': ".===",
    'K': "=.=", 
    'L': ".=..", 
    'M': "==", 
    'N': "=.",
    'O': "===", 
    'P': ".==.",
    'Q': "==.=",
    'R': ".=.", 
    'S': "...", 
    'T': "=", 
    'U': "..=", 
    'V': "...=", 
    'W': ".==", 
    'X': "=..=", 
    'Y': "=.==", 
    'Z': "==..", 
};
const text = {
    '.=': "A",
    '=...': "B",
    '=.=.': "C",
    '=..': "D",
    '.': "E",
    '..=.': "F",
    '==.': "G",
    '....': "H",
    '..': "I",
    '.===': "J",
    '=.=': "K",
    '.=..': "L",
    '==': "M",
    '=.': "N",
    '===': "O",
    '.==.': "P",
    '==.=': "Q",
    '.=.': "R",
    '...': "S",
    '=': "T",
    '..=': "U",
    '...=': "V",
    '.==': "W",
    '=..=': "X",
    '=.==': "Y",
    '==..': "Z"
};


const input1 = document.getElementById('cadena');
const input2 = document.getElementById('morse');
const submitButton = document.getElementById('mostrar');
const opcion1 = document.getElementById('op1');
const opcion2 = document.getElementById('op2');

//Traducir de texto a morse

function textoaMorse(cadena) {

    let mensaje = cadena.toUpperCase();
    let srtMorse = "";

    let i = 0;

    while (i < mensaje.length) {
        if (mensaje[i] == ' ') {
            srtMorse += " /";
        } else {
            if (srtMorse != "") srtMorse += " ";

            if (morse[mensaje[i]]) {
            srtMorse += morse[mensaje[i]];
            }else{
                srtMorse += "?";
            }
        }
        i++;
    }
    srtMorse += " /";

    return srtMorse;
}


//Traducir de morse a texto
function morseaTexto(pMorse) {
    let palabrasMorse = pMorse.split(" =/");

    let strTexto = "";
    for (const palabra of palabrasMorse) {
        let letrasMorse = palabra.split(" ");
        let palabraTexto = "";

        for (const letra of letrasMorse) {
            if (text[letra]) {
                palabraTexto += text[letra];
            } else {
                palabraTexto += "?";
            }
        }

        strTexto += palabraTexto + " ";
    }

    return strTexto.trim(); 
}



opcion1.addEventListener('change', opciones);
opcion2.addEventListener('change', opciones);

//Accion de los botones
submitButton.addEventListener('click', function () {

    if (opcion1.checked) {
        let cadena = input1.value;
        let monstra = textoaMorse(cadena);
        input2.value = monstra;

    } else if (opcion2.checked ) {
        let pMorse = input2.value;
        const monstra = morseaTexto(pMorse);
         input1.value = monstra;
    }


});

//Opciones de traducción
function opciones() {

    if (this.checked) {
        if (this === op1) {
            input1.disabled = false;
            input2.disabled = true;
            op2.checked = false;
            input2.value = "";
            input1.value = "";
        } else if (this === op2) {
            input1.disabled = true;
            input2.disabled = false;
            op1.checked = false;
            input1.value = "";
            input2.value = "";
        }
    } else {
        this.checked = true;
    }
}


