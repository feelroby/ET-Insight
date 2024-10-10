const batu = document.getElementById('batu')
const gunting = document.getElementById('gunting')
const kertas = document.getElementById('kertas')
const compImg = document.getElementById('comp')
const info = document.getElementById('info')

let input = ''

function getComputerChoice () {
    comp = Math.random()
    if( comp <= 0.34 ) return 'batu'
    if( comp <= 0.67 ) return 'gunting'
    return 'kertas'
}

function getResult (input, comp) {
    if ( input == comp ) return 'SERI!'
    if ( input == 'batu' ) return ( comp == 'gunting' ) ? 'KALAH!':'MENANG!'
    if ( input == 'gunting' ) return ( comp == 'kertas' ) ? 'KALAH!':'MENANG!'
    if ( input == 'kertas' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!'
}



function repeat () {
    const img = document.getElementById('comp')
    const gambar = ['batu', 'gunting', 'kertas']
    let i = 0
    const timeStart= new Date().getTime()

    setInterval( function() {
    if( new Date().getTime() - timeStart > 1000 ) {
        clearInterval;
        return
    }
    img.src = `./img/${gambar[i++]}.jpg`

    if ( i >= 3 ) i = 0
    }, 100 )
}




const choice = document.querySelectorAll('.area-player button')

choice.forEach( function(ch) {
    ch.addEventListener( 'click', function() {
        input = ch.className
        const comp = getComputerChoice()
        const result = getResult(comp, input)

        repeat()

        setTimeout( function() {
        compImg.src = `./img/${comp}.jpg`

        info.textContent = result
        }, 1000)
    
    } )
} )
















































// const batu = document.getElementById('batu')
// const gunting = document.getElementById('gunting')
// const kertas = document.getElementById('kertas')
// const lComp = document.getElementById('comp')
// const info = document.getElementById('info')



// let input = ''

// function getComputerChoice () {
//     const comp = Math.random()
//     if( comp <= 0.34 ) return 'batu'
//     if( comp <= 0.67 ) return 'gunting'
//     return 'kertas'
// }


// function getResult(input, comp) {
//     if( input == comp ) return 'Seri'
//     if( input == 'batu' ) return ( comp == 'kertas' ) ? 'kalah' : 'menang'
//     if( input == 'kertas' ) return ( comp == 'batu' ) ? 'menang' : 'kalah'
//     if( input == 'gunting' ) return ( comp == "batu" ) ? "kalah" : "menang";
// }


// batu.addEventListener('click', function() {
//     input = 'batu'
//     let comp = getComputerChoice()
//     let result = getResult(input, comp)
    
//     lComp.src = `./img/${comp}.jpg`;
//     info.textContent = `kamu ${result}`
// })



// gunting.addEventListener('click', function() {
//     input = 'gunting'
//     let comp = getComputerChoice()
//     let result = getResult(input, comp)

//     lComp.src = `./img/${comp}.jpg`;
//     info.textContent = `kamu ${result}`;
// })

// kertas.addEventListener('click', function() {
//     input = 'kertas'
//     let comp = getComputerChoice()
//     let result = getResult(input, comp)

//     lComp.src = `./img/${comp}.jpg`;
//     info.textContent = `kamu ${result}`;
// })


