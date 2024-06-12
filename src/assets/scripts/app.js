const form = document.getElementById('form');
const respire = document.querySelector('.respire')

let sound;

// faire que l'input number soit égale à l'input range
const range = document.getElementById('range')
const duration = document.getElementById('numberRange')
range.addEventListener('input', (e) => {
    let valueRange = e.target.value
    duration.value = valueRange
})

// time pour la durée que l'utilisateur va choisir
function timer() {
    if (duration.value == 1) {
        setTimeout(() => {
            respire.classList.add('hidden')
            text.classList.add('hidden')
        }, 60000)
    }
    else if (duration.value == 2) {
        setTimeout(() => {
            respire.classList.add('hidden')
            text.classList.add('hidden')
        }, 120000)
    }
    else if (duration.value == 3) {
        setTimeout(() => {
            respire.classList.add('hidden')
            text.classList.add('hidden')
        }, 180000)
    }
    else if (duration.value == 4) {
        setTimeout(() => {
            respire.classList.add('hidden')
            text.classList.add('hidden')
        }, 240000)
    }
    else if (duration.value == 5) {
        setTimeout(() => {
            respire.classList.add('hidden')
            text.classList.add('hidden')
        }, 300000)
    }
}

// Timer pour changer toutes les 5 secondes le texte inspirez, expirez
let timing = 0;
const text = document.querySelector('.text')
function textTimer(second1, second2) {
    if (!respire.classList.contains("hidden"))
        if (timing == 1) {
            document.querySelector('.text').innerText = 'Expirez'
            timing--
            setTimeout(() => {
                textTimer(second1, second2)
            }, second1)
        }
        else {
            timing++
            document.querySelector('.text').innerText = 'Inspirez'
            setTimeout(() => {
                textTimer(second1, second2)
            }, second2);
        }
}


// Variable des différents keyframes 
const sixFour = [
    { transform: "translate(-50%, -50%) scale(0.1)" },
    { transform: "translate(-50%, -50%) scale(1)", offset: 0.6 },
    { transform: "translate(-50%, -50%) scale(0.1)" }
];

const fourSix = [
    { transform: "translate(-50%, -50%) scale(0.1)" },
    { transform: "translate(-50%, -50%) scale(1)", offset: 0.4 },
    { transform: "translate(-50%, -50%) scale(0.1)" }
]

const threeSeven = [
    { transform: "translate(-50%, -50%) scale(0.1)" },
    { transform: "translate(-50%, -50%) scale(1)", offset: 0.3 },
    { transform: "translate(-50%, -50%) scale(0.1)" }
]

const fiveFive = [
    { transform: "translate(-50%, -50%) scale(0.1)" },
    { transform: "translate(-50%, -50%) scale(1)" },
    { transform: "translate(-50%, -50%) scale(0.1)" }
]

//Durée de notre animation
const dure = {
    duration: 10000,
    iterations: Infinity,
}

const respiration = document.getElementById('respiration')

//Fonction qui va choisir l'animation par rapport à la value de la variable respiration 
function animation() {
    let circleAnimation = document.querySelector('.circle__animation')
    if (respiration.value === '6/4') {
        circleAnimation.animate(sixFour, dure)
        textTimer(4000, 6000)
    }
    else if (respiration.value === '4/6') {
        circleAnimation.animate(fourSix, dure)
        textTimer(6000, 4000)
    }
    else if (respiration.value === '3/7') {
        circleAnimation.animate(threeSeven, dure)
        textTimer(7000, 3000)
    }
    else {
        circleAnimation.animate(fiveFive, dure)
        textTimer(5000, 5000)
    }
}


const bruitage = document.getElementsByName("bruitage")
//Fonction pour le son choisi par l'utilisateur
function son() {
    if (bruitage[0].checked === true) {
        sound = new Audio('https://universal-soundbank.com/sounds/3101.mp3');
        sound.play()
        sound.volume = 0.1
    }
    else if (bruitage[1].checked === true) {
        sound = new Audio('https://universal-soundbank.com/sounds/2618.mp3');
        sound.play()
        sound.volume = 0.1
    }
    else if (bruitage[2].checked === true) {
        sound = new Audio('https://universal-soundbank.com/sounds/7861.mp3');
        sound.play()
        sound.volume = 0.1;
    }
}

function astuce(){
    addEventListener('keydown', (e) => {
if(e.key === 'Escape'){
            text.classList.add('hidden')
            respire.classList.add('hidden')
            sound.pause()
        }
if(e.key === 's'){
    sound.pause()
}
    })
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    respire.classList.remove('hidden')
    text.classList.remove('hidden')
    timer()
    animation()
    son()
    astuce()

})


