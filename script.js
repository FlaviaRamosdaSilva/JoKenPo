

const playHuman = (humanChoice) => {
    
    playTheGame (humanChoice, playMachine ())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randowNumber = Math.floor (Math.random () *3)


    return choices [randowNumber]
}

const playTheGame = (human, machine) => {

    console.log ('Humano: ' + human + "maquina: " + machine)
    
}