const cardArray = [
    {
        name: 'cartSurfer',
        color: 'blue',
        value: 3,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_1.webp'
    },
    {
        name: 'hotChocolate',
        color: 'orange',
        value: 3,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_4.webp'
    },
    {
        name: 'astroBarrier',
        color: 'green',
        value: 8,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_3.webp'
    },
    {
        name: 'chef',
        color: 'purple',
        value: 6,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_6.webp'
    },
    {
        name: 'mine',
        color: 'red',
        value: 7,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_8.webp'
    },
    {
        name: 'construction',
        color: 'yellow',
        value: 2,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_9.webp'
    },
    {
        name: 'rescueSquad',
        color: 'green',
        value: 5,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_13.webp'
    },
    {
        name: 'petShop',
        color: 'orange',
        value: 3,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_14.webp'
    },
    {
        name: 'skiHill',
        color: 'red',
        value: 2,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_17.webp'
    },
    {
        name: 'snowballFight',
        color: 'red',
        value: 6,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_18.webp'
    },
    {
        name: 'football',
        color: 'blue',
        value: 5,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_22.webp'
    },
    {
        name: 'baseball',
        color: 'green',
        value: 2,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_23.webp'
    },
    {
        name: 'beanCounter',
        color: 'orange',
        value: 3,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_25.webp'
    },
    {
        name: 'manholeCover',
        color: 'purple',
        value: 4,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_26.webp'
    },
    {
        name: 'scubaDiving',
        color: 'red',
        value: 7,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_29.webp'
    },
    {
        name: 'halloween',
        color: 'orange',
        value: 6,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_34.webp'
    },
    {
        name: 'knight',
        color: 'purple',
        value: 3,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_35.webp'
    },
    {
        name: 'medievalParty',
        color: 'yellow',
        value: 4,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_37.webp'
    },
    {
        name: 'puffleFurniture',
        color: 'orange',
        value: 6,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_41.webp'
    },
    {
        name: 'yellowPuffle',
        color: 'yellow',
        value: 4,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_44.webp'
    },
    {
        name: 'summerParty',
        color: 'blue',
        value: 2,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_45.webp'
    },
    {
        name: 'grayFish',
        color: 'green',
        value: 4,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_46.webp'
    },
    {
        name: 'oBerry',
        color: 'orange',
        value: 6,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_47.webp'
    },
    {
        name: 'coins',
        color: 'yellow',
        value: 5,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_50.webp'
    },
    {
        name: 'gary',
        color: 'blue',
        value: 6,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_51.webp'
    },
    {
        name: 'yarr',
        color: 'orange',
        value: 4,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_53.webp'
    },
    {
        name: 'klutzy',
        color: 'purple',
        value: 8,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_54.webp'
    },
    {
        name: 'hotSauce',
        color: 'yellow',
        value: 7,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_56.webp'
    },
    {
        name: 'snowCastle',
        color: 'blue',
        value: 6,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_57.webp'
    },
    {
        name: 'auntArctic',
        color: 'green',
        value: 7,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_58.webp'
    },
    {
        name: 'betaParty',
        color: 'orange',
        value: 8,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_60.webp'
    },
    {
        name: 'hiddenItems',
        color: 'purple',
        value: 6,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_61.webp'
    },
    {
        name: 'secretAgent',
        color: 'red',
        value: 3,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_62.webp'
    },
    {
        name: 'migrator',
        color: 'blue',
        value: 6,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_64.webp'
    },
    {
        name: 'captainRockhopper',
        color: 'green',
        value: 5,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_65.webp'
    },
    {
        name: 'iceCream',
        color: 'orange',
        value: 4,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_66.webp'
    },
    {
        name: 'mullet',
        color: 'purple',
        value: 8,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_67.webp'
    },
    {
        name: 'shark',
        color: 'yellow',
        value: 7,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_70.webp'
    },
    {
        name: 'flooringUpgrade',
        color: 'red',
        value: 9,
        type: 'fire',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_71.webp'
    },
    {
        name: 'thinIce',
        color: 'purple',
        value: 11,
        type: 'fire',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_75.webp'
    },
    {
        name: 'sledRacing',
        color: 'green',
        value: 10,
        type: 'snow',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_81.webp'
    },
    {
        name: 'shadowGuyGammaGal',
        color: 'orange',
        value: 12,
        type: 'snow',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_85.webp'
    },
    {
        name: 'waterParty',
        color: 'red',
        value: 9,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_87.webp'
    },
    {
        name: 'fireFighter',
        color: 'yellow',
        value: 10,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_89.webp'
    },
    {
        name: 'blast',
        color: 'red',
        value: 8,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_98.webp'
    },
    {
        name: 'invisibleNinjaSuit',
        color: 'orange',
        value: 5,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_204.webp'
    },
    {
        name: 'pizzatron',
        color: 'orange',
        value: 7,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_207.webp'
    },
    {
        name: 'cardJitsu',
        color: 'red',
        value: 8,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_208.webp'
    },
    {
        name: 'rockAndRollSuit',
        color: 'orange',
        value: 4,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_210.webp'
    },
    {
        name: 'hiddenPins',
        color: 'green',
        value: 6,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_212.webp'
    },
    {
        name: 'treasureHuntGame',
        color: 'yellow',
        value: 7,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_213.webp'
    },
    {
        name: 'dj3k',
        color: 'green',
        value: 8,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_214.webp'
    },
    {
        name: 'surfBoards',
        color: 'green',
        value: 2,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_215.webp'
    },
    {
        name: 'telescope',
        color: 'red',
        value: 4,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_217.webp'
    },
    {
        name: 'fishCostume',
        color: 'yellow',
        value: 4,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_218.webp'
    },
    {
        name: 'theLounge',
        color: 'purple',
        value: 3,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_223.webp'
    },
    {
        name: 'rockhoppersKey',
        color: 'green',
        value: 4,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_224.webp'
    },
    {
        name: 'penguinsThatTimeForgot',
        color: 'yellow',
        value: 5,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_225.webp'
    },
    {
        name: 'jetPackAdventure',
        color: 'red',
        value: 7,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_227.webp'
    },
    {
        name: 'snowballPress',
        color: 'purple',
        value: 5,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_230.webp'
    },
    {
        name: 'jellyfish',
        color: 'yellow',
        value: 3,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_234.webp'
    },
    {
        name: 'fallFairGame',
        color: 'purple',
        value: 4,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_239.webp'
    },
    {
        name: 'purpleOctopus',
        color: 'purple',
        value: 7,
        type: 'water',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_247.webp'
    },
    {
        name: 'dojoSketch',
        color: 'yellow',
        value: 10,
        type: 'fire',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_250.webp'
    },
    {
        name: 'herbertKlutzy',
        color: 'red',
        value: 12,
        type: 'fire',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_252.webp'
    },
    {
        name: 'sensei',
        color: 'purple',
        value: 12,
        type: 'snow',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_256.webp'
    },
    {
        name: 'questForGoldenPuffle',
        color: 'yellow',
        value: 10,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_258.webp'
    },
    {
        name: 'rockhopper',
        color: 'blue',
        value: 12,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_260.webp'
    },
    {
        name: 'pizzaParlor',
        color: 'red',
        value: 4,
        type: 'fire',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_303.webp'
    },
    {
        name: 'dojoCourtyard',
        color: 'green',
        value: 8,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_314.webp'
    },
    {
        name: 'propellerCap',
        color: 'green',
        value: 8,
        type: 'snow',
        powerCard: false,
        img: 'cards/Card-Jitsu_Cards_full_344.webp'
    },
    {
        name: 'medievalPartyPower',
        color: 'yellow',
        value: 10,
        type: 'fire',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_350.webp'
    },
    {
        name: 'cloudWave',
        color: 'orange',
        value: 12,
        type: 'fire',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_352.webp'
    },
    {
        name: 'cartSurferPower',
        color: 'green',
        value: 10,
        type: 'snow',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_354.webp'
    },
    {
        name: 'garyPower',
        color: 'orange',
        value: 11,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_359.webp'
    },
    {
        name: 'rockhoppersCannon',
        color: 'green',
        value: 12,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_360.webp'
    },
    {
        name: 'fireNinja',
        color: 'red',
        value: 12,
        type: 'fire',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_427.webp'
    },
    {
        name: 'danceContest',
        color: 'purple',
        value: 12,
        type: 'snow',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_579.webp'
    },
    {
        name: 'puffleWasher',
        color: 'yellow',
        value: 10,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_581.webp'
    },
    {
        name: 'veggieVillain',
        color: 'blue',
        value: 12,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_583.webp'
    },
    {
        name: 'senseiWaterBattle',
        color: 'blue',
        value: 9,
        type: 'water',
        powerCard: true,
        img: 'cards/Card-Jitsu_Cards_power_745.webp'
    }
]

//Creates a duplicate card array for the computer using the map method
const compCardArray = cardArray.map((cardItems) => {
    return cardItems
})

//Sorts both card arrays randomly, cardArray is the user's deck and compCardArray is the computer's deck
cardArray.sort(() => 0.7 - Math.random())
compCardArray.sort(() => 0.7 - Math.random())

const playerCards = document.querySelector('.player_cards')
const images = document.getElementsByTagName('img')
const chosenCard = document.querySelector('.player-chosen')
const computerChosenCard = document.querySelector('.computer-chosen')
const computerCards = document.querySelector('.computer_cards')
const computerCardsImg = document.querySelectorAll('.computer_cards img')
const backgroundImage = document.querySelector('.background_image')

const playerScoreRow1 = document.querySelector('.player_score--row1')
const playerScoreRow2 = document.querySelector('.player_score--row2')
const playerScoreRow3 = document.querySelector('.player_score--row3')

const computerScoreRow1 = document.querySelector('.computer_score--row1')
const computerScoreRow2 = document.querySelector('.computer_score--row2')
const computerScoreRow3 = document.querySelector('.computer_score--row3')


const heading = document.querySelector('.heading')
const stampFlawlessVictory = document.querySelector('.stamp_flawlessvictory')
const stampEarned = new Audio('stampearned.mp3')

const resetButton = document.querySelector('.btn-15')
const backgroundChangeButton = document.querySelector('.next_button')

let card
let computerCard

let computerValue
let computerType
let computerColor
let computerName
let playerValue
let playerType
let playerColor
let playerName
let scoreCard

let randomNumber
let playerWin
let gameOver = false
let playerWinCount = 0
let computerWinCount = 0

let count = 0
let comCount = 0

let cardScoreCountArray = []
let y = 1


function computerGeneratedChoice() {
    //Generates a random number between 0 and 5, rounds the number using Math.floor()
    randomNumber = Math.floor(Math.random() * 6)
}


resetButton.addEventListener('click', resetGame)

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};


function resetGame() {
    cardArray.sort(() => 0.7 - Math.random())
    compCardArray.sort(() => 0.7 - Math.random())
    heading.textContent = 'Pick a Card'

    count = 0
    comCount = 0

    gameOver = false
    playerWinCount = 0
    computerWinCount = 0
    playerWin = null

    removeChilds(playerScoreRow1)
    removeChilds(playerScoreRow2)
    removeChilds(playerScoreRow3)
    removeChilds(computerScoreRow1)
    removeChilds(computerScoreRow2)
    removeChilds(computerScoreRow3)

    for (const image of images) {
        if (image.classList.contains('playerCard')) {
            image.classList.remove('player-chosen')
            image.setAttribute('src', cardArray[count].img)
            image.setAttribute('data-id', count)
            image.addEventListener('click', moveCard)
            count++
        }
        else if(image.classList.contains('computer-chosen')) {
            image.classList.remove('player-chosen')
            image.setAttribute('src', 'cards/Card-Jitsu_card_back.webp')
        }

    }
}

backgroundChangeButton.addEventListener('click', backgroundChange)

function backgroundChange() {
    y++
    if(y <= 4 && y > 0) {
        backgroundImage.setAttribute('src', `background_image${y}.jpg`)
    }
    else {
        y = 1
        backgroundImage.setAttribute('src', `background_image1.jpg`)
    }
    
}


function createBoard() {
    //Creates 6 cards for the player
    for (let i = 0; i < 6; i++) {
        card = document.createElement('img')
        card.setAttribute('src', cardArray[i].img)
        card.setAttribute('id', 'playerCard')
        card.classList.add('playerCard')
        card.setAttribute('data-id', i)
        card.addEventListener('click', moveCard)
        //Adds the image into the player_cards class, stored as the variable 'playerCards'
        playerCards.appendChild(card)

    }

    //Runs the function to generate the random number
    computerGeneratedChoice()

    //Creates 6 cards for the computer
    for (let i = 0; i < 6; i++) {
        computerCard = document.createElement('img')
        computerCard.setAttribute('src', 'cards/Card-Jitsu_card_back.webp')
        computerCard.setAttribute('data-id', i)
        computerCard.classList.add('computerCard')
        computerCards.appendChild(computerCard)
        //Once 'i' is equal to the randomly generated number, 
        //it will do all of the above but add the class of 'computer-chosen', which will enlarge the image through the css
        if (i == randomNumber) {
            computerCard.setAttribute('src', 'cards/Card-Jitsu_card_back.webp')
            computerCard.setAttribute('data-id', i)
            computerCard.classList.add('computerCard')
            computerCards.appendChild(computerCard)
            computerCard.classList.add('computer-chosen')
        }
    }
}

createBoard()



    function flipCard() {
        for (const image of images) {
            if (image.classList.contains('computer-chosen')) {
                image.style.transform = 'rotate3d(0, 1, 0, -90deg)'
                setTimeout(() => {
                    image.setAttribute('src', compCardArray[randomNumber].img)
                    computerValue = (compCardArray[randomNumber].value)
                    computerType = (compCardArray[randomNumber].type)
                    computerColor = (compCardArray[randomNumber].color)
                    computerName = (compCardArray[randomNumber].name)
                    image.style.transform = 'rotate3d(0, 1, 0, 0deg)'
                }, 310)
                

            }

        }

        setTimeout(checkForWin, 700)
    }


    function moveCard() {
        let cardId = this.getAttribute('data-id')

        resetButton.removeEventListener('click', resetGame)

        this.classList.add('player-chosen')
        playerValue = (cardArray[cardId].value)
        playerType = (cardArray[cardId].type)
        playerColor = (cardArray[cardId].color)
        playerName = (cardArray[cardId].name)

        for (const image of images) {
            if (image.classList.contains('playerCard')) {
                image.removeEventListener('click', moveCard)
            }
        }
        setTimeout(flipCard, 750)
    }

    function removeCards() {

        heading.textContent = 'Pick a Card'
        computerGeneratedChoice()
        for (const image of images) {

            if (image.classList.contains('playerCard')) {
                if (image.classList.contains('player-chosen')) {
                    let cardId = image.getAttribute('data-id')
                    image.classList.remove('player-chosen')
                    let cardsArray = cardArray.find(cardsArray => cardsArray.name == playerName)
                    cardArray.push(cardsArray)
                    cardArray.splice(cardId, 1)
                    image.setAttribute('src', cardArray[count].img)
                    image.setAttribute('data-id', count)
                }
                else {
                    image.setAttribute('src', cardArray[count].img)
                    image.setAttribute('data-id', count)
                }
                image.addEventListener('click', moveCard)
                count++
            }


            if (image.classList.contains('computerCard')) {
                if (comCount == randomNumber && image.classList.contains('computer-chosen')) {
                    let cardId = image.getAttribute('data-id')
                    let cardsArray2 = compCardArray.find(cardsArray2 => cardsArray2.name == computerName)
                    compCardArray.push(cardsArray2)
                    compCardArray.splice(cardId, 1)
                    image.setAttribute('src', 'cards/Card-Jitsu_card_back.webp')
                }
                if (comCount == randomNumber) {
                    image.setAttribute('src', 'cards/Card-Jitsu_card_back.webp')
                    image.classList.add('computer-chosen')
                }
                else if (image.classList.contains('computer-chosen')) {
                    let cardId = image.getAttribute('data-id')
                    image.classList.remove('computer-chosen')
                    let cardsArray2 = compCardArray.find(cardsArray2 => cardsArray2.name == computerName)
                    compCardArray.push(cardsArray2)
                    compCardArray.splice(cardId, 1)
                    image.setAttribute('src', 'cards/Card-Jitsu_card_back.webp')
                }
                image.style.transform = ''
                image.setAttribute('data-id', comCount)
                comCount++
            }

        }
        resetButton.addEventListener('click', resetGame)

    }



    function checkForWin() {
        if (playerType == 'fire' && computerType == 'snow') {
            heading.textContent = 'You won!'
            playerWin = true
        }
        else if (playerType == 'fire' && computerType == 'water') {
            heading.textContent = 'You lost'
            playerWin = false
        }
        else if (playerType == 'water' && computerType == 'fire') {
            heading.textContent = 'You won!'
            playerWin = true
        }
        else if (playerType == 'water' && computerType == 'snow') {
            heading.textContent = 'You lost'
            playerWin = false
        }
        else if (playerType == 'snow' && computerType == 'fire') {
            heading.textContent = 'You lost'
            playerWin = false
        }
        else if (playerType == 'snow' && computerType == 'water') {
            heading.textContent = 'You won!'
            playerWin = true
        }
        else if (playerType == computerType) {
            if (playerValue > computerValue) {
                heading.textContent = 'You won!'
                playerWin = true
            }
            else if (playerValue < computerValue) {
                heading.textContent = 'You lost'
                playerWin = false
            }
            else if (playerValue == computerValue) {
                heading.textContent = 'Its a draw'
                playerWin = null
            }
        }

        addToScore()
    }

    //1 = red, 2 = orange, 3 = yellow, 4 = green, 5 = purple, 6 = blue

    function addToScore() {
        if (playerWin == true) {

            playerWinCount++
            scoreCard = document.createElement('img')
            scoreCard.setAttribute('src', `cards/${playerColor}${playerType}.png`)

            if (playerType == 'fire') {
                if (playerColor == 'red') {
                    scoreCard.setAttribute('data-id', 1)
                }
                else if (playerColor == 'orange') {
                    scoreCard.setAttribute('data-id', 2)
                }
                else if (playerColor == 'yellow') {
                    scoreCard.setAttribute('data-id', 3)
                }
                else if (playerColor == 'green') {
                    scoreCard.setAttribute('data-id', 4)
                }
                else if (playerColor == 'purple') {
                    scoreCard.setAttribute('data-id', 5)
                }
                else if (playerColor == 'blue') {
                    scoreCard.setAttribute('data-id', 6)
                }
                scoreCard.classList.add('playerFire')
                playerScoreRow1.appendChild(scoreCard)
            }
            else if (playerType == 'water') {
                if (playerColor == 'red') {
                    scoreCard.setAttribute('data-id', 1)
                }
                else if (playerColor == 'orange') {
                    scoreCard.setAttribute('data-id', 2)
                }
                else if (playerColor == 'yellow') {
                    scoreCard.setAttribute('data-id', 3)
                }
                else if (playerColor == 'green') {
                    scoreCard.setAttribute('data-id', 4)
                }
                else if (playerColor == 'purple') {
                    scoreCard.setAttribute('data-id', 5)
                }
                else if (playerColor == 'blue') {
                    scoreCard.setAttribute('data-id', 6)
                }
                scoreCard.classList.add('playerWater')
                playerScoreRow2.appendChild(scoreCard)
            }
            else if (playerType == 'snow') {
                if (playerColor == 'red') {
                    scoreCard.setAttribute('data-id', 1)
                }
                else if (playerColor == 'orange') {
                    scoreCard.setAttribute('data-id', 2)
                }
                else if (playerColor == 'yellow') {
                    scoreCard.setAttribute('data-id', 3)
                }
                else if (playerColor == 'green') {
                    scoreCard.setAttribute('data-id', 4)
                }
                else if (playerColor == 'purple') {
                    scoreCard.setAttribute('data-id', 5)
                }
                else if (playerColor == 'blue') {
                    scoreCard.setAttribute('data-id', 6)
                }
                scoreCard.classList.add('playerSnow')
                playerScoreRow3.appendChild(scoreCard)
            }
        }

        else if (playerWin == false) {

            computerWinCount++
            scoreCard = document.createElement('img')
            scoreCard.setAttribute('src', `cards/${computerColor}${computerType}.png`)

            if (computerType == 'fire') {
                if (computerColor == 'red') {
                    scoreCard.setAttribute('data-id', 1)
                }
                else if (computerColor == 'orange') {
                    scoreCard.setAttribute('data-id', 2)
                }
                else if (computerColor == 'yellow') {
                    scoreCard.setAttribute('data-id', 3)
                }
                else if (computerColor == 'green') {
                    scoreCard.setAttribute('data-id', 4)
                }
                else if (computerColor == 'purple') {
                    scoreCard.setAttribute('data-id', 5)
                }
                else if (computerColor == 'blue') {
                    scoreCard.setAttribute('data-id', 6)
                }
                scoreCard.classList.add('computerFire')
                computerScoreRow1.appendChild(scoreCard)
            }
            else if (computerType == 'water') {
                if (computerColor == 'red') {
                    scoreCard.setAttribute('data-id', 1)
                }
                else if (computerColor == 'orange') {
                    scoreCard.setAttribute('data-id', 2)
                }
                else if (computerColor == 'yellow') {
                    scoreCard.setAttribute('data-id', 3)
                }
                else if (computerColor == 'green') {
                    scoreCard.setAttribute('data-id', 4)
                }
                else if (computerColor == 'purple') {
                    scoreCard.setAttribute('data-id', 5)
                }
                else if (computerColor == 'blue') {
                    scoreCard.setAttribute('data-id', 6)
                }
                scoreCard.classList.add('computerWater')
                computerScoreRow2.appendChild(scoreCard)
            }
            else if (computerType == 'snow') {
                if (computerColor == 'red') {
                    scoreCard.setAttribute('data-id', 1)
                }
                else if (computerColor == 'orange') {
                    scoreCard.setAttribute('data-id', 2)
                }
                else if (computerColor == 'yellow') {
                    scoreCard.setAttribute('data-id', 3)
                }
                else if (computerColor == 'green') {
                    scoreCard.setAttribute('data-id', 4)
                }
                else if (computerColor == 'purple') {
                    scoreCard.setAttribute('data-id', 5)
                }
                else if (computerColor == 'blue') {
                    scoreCard.setAttribute('data-id', 6)
                }
                scoreCard.classList.add('computerSnow')
                computerScoreRow3.appendChild(scoreCard)
            }
        }
        count = 0
        comCount = 0
        checkForOverallWin()

        if (gameOver == false) {
            setTimeout(removeCards, 1650)
        }
        else if (gameOver == true) {
            resetButton.addEventListener('click', resetGame)
            if (playerWin == true) {
                heading.textContent = 'GAME OVER, YOU WON!'
                if (computerWinCount == 0) {
                    stampEarned.play()
                    stampFlawlessVictory.style.top = '0px'
                    setTimeout(() => {
                        stampFlawlessVictory.style.top = '-150px'
                    }, 2700)
                }
            }
            else if (playerWin == false) {
                heading.textContent = 'GAME OVER, YOU LOST!'
            }

        }

    }

    function checkForOverallWin() {
        cardScoreCountArray.length = 0
        for (const image of images) {
            if (image.classList.contains('playerFire')) {
                let cardId = image.getAttribute('data-id')
                cardScoreCountArray.unshift(cardId)
                let redCount = 0
                let orangeCount = 0
                let yellowCount = 0
                let greenCount = 0
                let purpleCount = 0
                let blueCount = 0
                let colorCount = 0
                for (const cardScoreCountArrays of cardScoreCountArray) {
                    if (cardScoreCountArrays == 1) {
                        redCount = 1
                    }
                    else if (cardScoreCountArrays == 2) {
                        orangeCount = 1
                    }
                    else if (cardScoreCountArrays == 3) {
                        yellowCount = 1
                    }
                    else if (cardScoreCountArrays == 4) {
                        greenCount = 1
                    }
                    else if (cardScoreCountArrays == 5) {
                        purpleCount = 1
                    }
                    else if (cardScoreCountArrays == 6) {
                        blueCount = 1
                    }
                    colorCount = redCount + orangeCount + yellowCount + greenCount + purpleCount + blueCount

                    if (colorCount >= 3) {
                        gameOver = true
                    }
                }
            }
        }

        cardScoreCountArray.length = 0
        for (const image of images) {
            if (image.classList.contains('playerWater')) {
                let cardId = image.getAttribute('data-id')
                cardScoreCountArray.unshift(cardId)
                let redCount = 0
                let orangeCount = 0
                let yellowCount = 0
                let greenCount = 0
                let purpleCount = 0
                let blueCount = 0
                let colorCount = 0
                for (const cardScoreCountArrays of cardScoreCountArray) {
                    if (cardScoreCountArrays == 1) {
                        redCount = 1
                    }
                    else if (cardScoreCountArrays == 2) {
                        orangeCount = 1
                    }
                    else if (cardScoreCountArrays == 3) {
                        yellowCount = 1
                    }
                    else if (cardScoreCountArrays == 4) {
                        greenCount = 1
                    }
                    else if (cardScoreCountArrays == 5) {
                        purpleCount = 1
                    }
                    else if (cardScoreCountArrays == 6) {
                        blueCount = 1
                    }
                    colorCount = redCount + orangeCount + yellowCount + greenCount + purpleCount + blueCount

                    if (colorCount >= 3) {
                        gameOver = true
                    }
                }
            }
        }

        cardScoreCountArray.length = 0
        for (const image of images) {
            if (image.classList.contains('playerSnow')) {
                let cardId = image.getAttribute('data-id')
                cardScoreCountArray.unshift(cardId)
                let redCount = 0
                let orangeCount = 0
                let yellowCount = 0
                let greenCount = 0
                let purpleCount = 0
                let blueCount = 0
                let colorCount = 0
                for (const cardScoreCountArrays of cardScoreCountArray) {
                    if (cardScoreCountArrays == 1) {
                        redCount = 1
                    }
                    else if (cardScoreCountArrays == 2) {
                        orangeCount = 1
                    }
                    else if (cardScoreCountArrays == 3) {
                        yellowCount = 1
                    }
                    else if (cardScoreCountArrays == 4) {
                        greenCount = 1
                    }
                    else if (cardScoreCountArrays == 5) {
                        purpleCount = 1
                    }
                    else if (cardScoreCountArrays == 6) {
                        blueCount = 1
                    }
                    colorCount = redCount + orangeCount + yellowCount + greenCount + purpleCount + blueCount

                    if (colorCount >= 3) {
                        gameOver = true
                    }
                }
            }
        }

        //Checks Computer side

        cardScoreCountArray.length = 0
        for (const image of images) {
            if (image.classList.contains('computerFire')) {
                let cardId = image.getAttribute('data-id')
                cardScoreCountArray.unshift(cardId)
                let redCount = 0
                let orangeCount = 0
                let yellowCount = 0
                let greenCount = 0
                let purpleCount = 0
                let blueCount = 0
                let colorCount = 0
                for (const cardScoreCountArrays of cardScoreCountArray) {
                    if (cardScoreCountArrays == 1) {
                        redCount = 1
                    }
                    else if (cardScoreCountArrays == 2) {
                        orangeCount = 1
                    }
                    else if (cardScoreCountArrays == 3) {
                        yellowCount = 1
                    }
                    else if (cardScoreCountArrays == 4) {
                        greenCount = 1
                    }
                    else if (cardScoreCountArrays == 5) {
                        purpleCount = 1
                    }
                    else if (cardScoreCountArrays == 6) {
                        blueCount = 1
                    }
                    colorCount = redCount + orangeCount + yellowCount + greenCount + purpleCount + blueCount

                    if (colorCount >= 3) {
                        gameOver = true
                    }
                }
            }
        }

        cardScoreCountArray.length = 0
        for (const image of images) {
            if (image.classList.contains('computerWater')) {
                let cardId = image.getAttribute('data-id')
                cardScoreCountArray.unshift(cardId)
                let redCount = 0
                let orangeCount = 0
                let yellowCount = 0
                let greenCount = 0
                let purpleCount = 0
                let blueCount = 0
                let colorCount = 0
                for (const cardScoreCountArrays of cardScoreCountArray) {
                    if (cardScoreCountArrays == 1) {
                        redCount = 1
                    }
                    else if (cardScoreCountArrays == 2) {
                        orangeCount = 1
                    }
                    else if (cardScoreCountArrays == 3) {
                        yellowCount = 1
                    }
                    else if (cardScoreCountArrays == 4) {
                        greenCount = 1
                    }
                    else if (cardScoreCountArrays == 5) {
                        purpleCount = 1
                    }
                    else if (cardScoreCountArrays == 6) {
                        blueCount = 1
                    }
                    colorCount = redCount + orangeCount + yellowCount + greenCount + purpleCount + blueCount

                    if (colorCount >= 3) {
                        gameOver = true
                    }
                }
            }
        }

        cardScoreCountArray.length = 0
        for (const image of images) {
            if (image.classList.contains('computerSnow')) {
                let cardId = image.getAttribute('data-id')
                cardScoreCountArray.unshift(cardId)
                let redCount = 0
                let orangeCount = 0
                let yellowCount = 0
                let greenCount = 0
                let purpleCount = 0
                let blueCount = 0
                let colorCount = 0
                for (const cardScoreCountArrays of cardScoreCountArray) {
                    if (cardScoreCountArrays == 1) {
                        redCount = 1
                    }
                    else if (cardScoreCountArrays == 2) {
                        orangeCount = 1
                    }
                    else if (cardScoreCountArrays == 3) {
                        yellowCount = 1
                    }
                    else if (cardScoreCountArrays == 4) {
                        greenCount = 1
                    }
                    else if (cardScoreCountArrays == 5) {
                        purpleCount = 1
                    }
                    else if (cardScoreCountArrays == 6) {
                        blueCount = 1
                    }
                    colorCount = redCount + orangeCount + yellowCount + greenCount + purpleCount + blueCount

                    if (colorCount >= 3) {
                        gameOver = true
                    }
                }
            }
        }
    }





