const Game = {
    all:document.querySelector('.all'),
    ticTacToeSetup: function(playerOneName,playerTwoName) {
        const Gameboard = {
            'box box1':false,
            'box box2':false,
            'box box3':false,
            'box box4':false,
            'box box5':false,
            'box box6':false,
            'box box7':false,
            'box box8':false,
            'box box9':false,

        }
        var arr = ['A1','B1','C1','A2','B2','C2','A3','B3','C3']
        var turnMessage = document.createElement('h2');
        turnMessage.innerHTML = `${playerOneName}'s turn to play`
        this.all.insertBefore(turnMessage,this.all.children[1])
        var container = document.createElement('div');
        container.setAttribute('class','container');
        this.all.insertBefore(container,this.all.children[2]);
        for (let i =0; i < 9;i++) {
            let box = document.createElement('div')
            box.setAttribute('class',`box box${i + 1}`)
            box.setAttribute('data-init',`${i}`)
            var mark = 'O';
            box.addEventListener('click',() => {
                if (mark === 'O') {
                    if (Gameboard[box.className]) {
                        return
                    }
                    let pic = document.createElement('img');
                    pic.setAttribute('src','img/tylerdurdenpic.png')
                    pic.setAttribute('id','boxPic1');
                    box.appendChild(pic)
                    Gameboard[box.className] = true;
                    // box.innerHTML = "X"
                    turnMessage.innerHTML = `${playerTwoName}'s turn to play`
                    mark = 'X'
                }
                else {
                    if (Gameboard[box.className]) {
                        return
                    }
                    let pic = document.createElement('img');
                    pic.setAttribute('src','img/thenarratorpic.jpg')
                    pic.setAttribute('id','boxPic2');
                    box.appendChild(pic)
                    Gameboard[box.className] = true;
                    // box.innerHTML = "O"
                    turnMessage.innerHTML = `${playerOneName}'s turn to play`
                    mark = 'O'
                }
                if (Gameboard['box box1'] && Gameboard['box box2'] && Gameboard['box box3']) {
                    console.log('whartever')
                }
            })
            container.appendChild(box)
            // box.innerHTML = arr[i]
        }
        // for (let i = 0;i < 9;i++) {
        //     let newBox = document.querySelector(`.box${i + 1}`)
        //     newBox.addEventListener('click', () => {
        //         console.log(newBox.innerHTML)
        //     })
        // }
    },
    buttonSetup: function() {
        var startGameBtn = document.createElement('button')
        startGameBtn.setAttribute('id','startGame')
        startGameBtn.innerHTML = 'Start Game';
        startGameBtn.addEventListener('click', () => {
            this.playerCreation();
            this.removeBtn();
        })
        this.all.insertBefore(startGameBtn, this.all.children[1]);
    },
    startingPage: function() {
        this.buttonSetup();
    },
    removePlayerCreation: function() {
        var bigDiv = document.querySelector('.playerCreation');
        bigDiv.remove();
    },
    removeBtn: function() {
        var btn = document.querySelector('#startGame');
        btn.remove();
    },
    start: function() {
        this.ticTacToeSetup();
        this.removeBtn();
        // this.playerCreation();
    },
    playerCreation: function() {
        const playerCre = document.createElement('div');
        playerCre.setAttribute('class','playerCreation');

        const title = document.createElement('h2');
        title.innerHTML = "Choose a Name..."
        playerCre.appendChild(title);

        const profiles = document.createElement('div')
        profiles.setAttribute('class','profiles');
        playerCre.appendChild(profiles);

        const player1 = document.createElement('div');
        player1.setAttribute('class','pics player1')
        profiles.appendChild(player1)

        const img1 = document.createElement('img')
        img1.setAttribute('src',"img/tylerdurdenpic.png")
        img1.setAttribute('id','tylerDurdenPic')
        player1.appendChild(img1)

        const input1 = document.createElement('input')
        input1.setAttribute('type','text')
        input1.setAttribute('placeholder','Nickname')
        input1.setAttribute('id','player1')
        input1.setAttribute('value','PlayerOne')
        player1.appendChild(input1);

        const player2 = document.createElement('div')
        player2.setAttribute('class','pics player2')
        profiles.appendChild(player2)

        const img2 = document.createElement('img')
        img2.setAttribute('src',"img/thenarratorpic.jpg")
        img2.setAttribute('id','theNarratorPic')
        player2.appendChild(img2)

        const input2 = document.createElement('input')
        input2.setAttribute('type','text')
        input2.setAttribute('placeholder','Nickname')
        input2.setAttribute('id','player2')
        input2.setAttribute('value','PlayerTwo')
        player2.appendChild(input2);

        const button = document.createElement('button');
        button.setAttribute('id','submitBtn');
        button.innerHTML = 'Start'
        button.addEventListener('click',() => {
            var inputValue1 = document.querySelector('#player1').value;
            var inputValue2 = document.querySelector('#player2').value;
            // console.log(inputValue1,inputValue2);
            this.ticTacToeSetup(inputValue1,inputValue2);
            this.removePlayerCreation();
        })
        playerCre.appendChild(button);
        this.all.insertBefore(playerCre,this.all.children[1]);
    },    
}

// var btn = document.querySelector('#submitBtn')

// btn.addEventListener('click',() => {
//     console.log("Negros tou Moria")
// })



Game.startingPage()
// Game.ticTacToeSetup()
// Game.playerCreation();
