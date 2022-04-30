let userScore = 0
let computerScore = 0

const userScore_SPAN = document.getElementById("puntos_usuario")
const computerScore_SPAN = document.getElementById("puntos_computadora")

const SCOREBOARD_DIV = document.querySelector(".puntuaciones")
const RESULT_P = document.querySelector(".resultado > p")

//string under the result
const WDL_TEXT = document.querySelector(".WDL_text > p") //WDL is for: Win, Draw, Lose

const ROCK_DIV = document.getElementById("r")
const PAPER_DIV = document.getElementById("p")
const SCISSORS_DIV = document.getElementById("s")

const NOMBRE_ = document.getElementById("nombreDelJugador")


// Decisión de la computadora
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}
//Esta funcion hace que retorne los valores correctos y no "r" "p" "s"
//this functions returns the correct values and not "r", "p", "s"
convertirAPalabra = (letter) => {
    if (letter === 'r') return 'Piedra';
    if (letter === 'p') return 'Papel';
    else return 'Tijera';

}

//Nombres aleatorios
function sinNombre() {
    const NOMBRES = ["Sin nombre", "Un bobo ahí", "Canserbero", "Dumbledore", "PriNZheeZa VhEyA", "El feo de las nenas lindas", "Faraon Love Shady", "Wellington Quiw", "Lo más bello de la casa", "Ober de Petare, Odiosito", "Don Francisco", "Nathy Peluso", "Roque Valero", "Maria Corina Machado", "Kim Kardashian", "Ronaldinho", "Uno de los coreanos de BTS", "Porfi Baloa y sus adolescentes"]
    const randomNumber = (Math.floor(Math.random() * NOMBRES.length))
    return NOMBRES[randomNumber];

}


//Funcion para mostrar nombre del usuario
function nombre(nombreDelJugador) {
    nombreDelJugador = prompt("Introduce tu nombre", sinNombre());
    NOMBRE_.innerHTML = `¡Suerte, tqm ${nombreDelJugador}! <3`;
}

// Funcion para los mensajes cuando el usuario gana
function mensajeGanador() {
    const MENSAJES_GANADORES = ["Felicitaciones", "Wow", "Sos un mostro, pibe", "Maquina, Bestia, Campeón, Gladiador, Guerrer...", "Eres increible", "Le pones corazón a la cosa", "Estas pasado mi bro *puñito*", "Sigue así", "La andas rompiendo", "Hermoso!", "Aparte de ganador, guap@", "Tú puedes", "Repámpanos", "Esto es para celebrarlo, ven aca *abracito*", "Wow, no, de verdad, yo... sin palabras", "Y si salimos a comer un día?", "Oh sí dame más puntos", "*Se queda estupefacto*", "Quedé cocotimbo contigo OMG", "Increible ser humano eres, estoy seguro que si", "No me impresiona que alguien tan bell@ como tú me gane :3 ", "Te mereces lo mejor y más *guiño guiño*", "Tus amigos deben estar orgullosos de ti, te tqm xoxo", "Demonios viejo!!", "Eres increible pero por el AMOR DE DIOS", "This [Inserte su género aquí] is on fireeee", "Dicen que la belleza está en el interior pero te veo y uff... sí, te estoy viendo, no ves las noticias?"]
    const randomNumber = Math.floor(Math.random() * MENSAJES_GANADORES.length)

    return MENSAJES_GANADORES[randomNumber] + "!";
}

//funcion para mensajes cuando el usuario pierde
function mensajePerdedor() {
    const MENSAJES_PERDEDORES = ["No puede ser loquis", "NOOOOOOOO", "Lamentable", "Es en serio?", "Lo importante es que tienes salud", "¿Sabes? Quizás esto no es lo tuyo", "F", "Super F", "Y si juegas Candy Crush mejor?", "Tas fuera de rankin...", "Bueno...", "No te voy a pedir que te rindas pero al menos piensalo", "Por esto tus papás votaron por Chavez", "Es normal que pierdas tu dignidad así?", "Tus padres saben que estás perdiendo contra una PC?", "Me puedo reir de ti? Total ya todo el mundo lo hace", "¿Oiste eso? ¿No te llaman afuera?", "Cuando quieras te puedes ir... No te estoy corriendo.", "No te molestes pero... das penita :3", "Va a llegar un momento en el que no voy a saber que decirte y ese momento es... ahora.", "Ya no te quiero, bueno, normal... nadie lo hace", "Si me ganas (que por lo que veo no vas a hacerlo) que piensas hacer después?"]
    const rand = Math.floor(Math.random() * MENSAJES_PERDEDORES.length)

    return MENSAJES_PERDEDORES[rand];
}

//funcion para los mensajes cuando el usuario empata
function mensajeEmpate() {
    const MENSAJES_EMPATE = ["Empataste, dale otra vez, si no eres un bobo dejame decirte", "Y si sales a buscar trabajo?", "Tú mamá debe estar preocupada por ti, deberías llamarla y decirle que estás jugando esto, a ver si se siente orgullosa.", "Ok, Empataste, estás bien?", "Estoy casi (14%) seguro que puedes decidir mejor", "Bueno... y entonces?", "Si te estás cansando de mi solo dilo", "Nada que ver aquí, sigue jugando", "...", "Cuanta paciencia tienes? Porque esto va para rato", "Para estar jugando aquí debes tener BASTANTE tiempo libre, no tienes hijos que cuidar?", "This what a mf do when he got no b!tch35", "Mira... Empataste otra vez, que sorpresa", "Piensa en el retiro, en serio", "Hay cosas mejores que hacer ahora mismo, por ejemplo, pasar un coleto...", "Para pensar señores...", "Puedes hacerlo mejor (no puedes)", "Vamos, yo creo en ti (no creo en ti)", "La idea es que aprendas a tomar decisiones, ok?, no que empates.", "Has oido del nuevo COVID-20 Pro Max S?", "Lamentable, muy muy lamentable...", "Sabes la razón por la que estás aquí?", "Empataste, y eso es... nefasto", "Como haces para ser así de Tomador-de-malas-decisiones?"]
    const rand = Math.floor(Math.random() * MENSAJES_EMPATE.length)
    console.log(rand)
    return MENSAJES_EMPATE[rand]
}


//Mensajes del resultado en la página
//A medida que va avanzando el juego, va cambiando el resultado, gracias a estas funciones
//Arrow functions

ganador = (a, b) => {
    const usuarioChikito = "tú".fontsize(3).sub();
    const computadoraChikita = "pc".fontsize(3).sub();
    const USER_CHOICE_DIV = document.getElementById(a);
    userScore++;
    userScore_SPAN.innerHTML = userScore;
    computerScore_SPAN.innerHTML = computerScore;

    RESULT_P.innerHTML = `${convertirAPalabra(a)}${usuarioChikito} le gana a ${convertirAPalabra(b)}${computadoraChikita}`;
    WDL_TEXT.innerHTML = `${mensajeGanador()}`
    USER_CHOICE_DIV.classList.add('brillo-ganador');
    setTimeout(() => {
        USER_CHOICE_DIV.classList.remove('brillo-ganador')
    }, 600);
};
perdedor = (a, b) => {
    const usuarioChikito = "tú".fontsize(3).sub();
    const computadoraChikita = "pc".fontsize(3).sub();
    const USER_CHOICE_DIV = document.getElementById(a);
    computerScore++;
    userScore_SPAN.innerHTML = userScore;
    computerScore_SPAN.innerHTML = computerScore;

    RESULT_P.innerHTML = `${convertirAPalabra(a)}${usuarioChikito} pierde contra ${convertirAPalabra(b)}${computadoraChikita}`;
    WDL_TEXT.innerHTML = `${mensajePerdedor()}`
    USER_CHOICE_DIV.classList.add('brillo-perdedor');
    setTimeout(() => {
        USER_CHOICE_DIV.classList.remove('brillo-perdedor')
    }, 600);
}
empate = (a, b) => {
    const usuarioChikito = "tú".fontsize(3).sub();
    const computadoraChikita = "pc".fontsize(3).sub();
    const USER_CHOICE_DIV = document.getElementById(a);
    RESULT_P.innerHTML = `${convertirAPalabra(a)}${usuarioChikito} empata con ${convertirAPalabra(b)}${computadoraChikita}`;
    WDL_TEXT.innerHTML = `${mensajeEmpate()}`
    USER_CHOICE_DIV.classList.add('brillo-empate');
    setTimeout(() => {
        USER_CHOICE_DIV.classList.remove('brillo-empate')
    }, 600);
}


//Esta es la base del juego, aquí está la definición de quien gana, como se gana, como se pierde y como se empata
juego = (userChoice) => {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            ganador(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            perdedor(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            empate(userChoice, computerChoice);
            break;
    }

}

//EventListener para las decisiones del juego

let main = function () {
    ROCK_DIV.addEventListener("click", function () {
        juego("r")
    })
    PAPER_DIV.addEventListener("click", function () {
        juego("p")
    })
    SCISSORS_DIV.addEventListener("click", function () {
        juego("s")
    })
}
nombre();
main();
