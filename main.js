const Game = {
    all:document.querySelector('.all'),
    ticTacToeSetup: function() {
        var arr = ['A1','B1','C1','A2','B2','C2','A3','B3','C3']
        var container = document.createElement('div');
        container.setAttribute('class','container');
        this.all.insertBefore(container,this.all.children[1]);
        for (let i =0; i < 9;i++) {
            var box = document.createElement('div')
            box.setAttribute('class',`box box${i + 1}`)
            container.appendChild(box)
            box.innerHTML = arr[i]
        }
    },
    buttonSetup: function() {
        var startGameBtn = document.createElement('button')
        startGameBtn.setAttribute('id','startGame')
        startGameBtn.innerHTML = 'Start Game';
        startGameBtn.addEventListener('click', () => {
            this.start()
        })
        this.all.insertBefore(startGameBtn, this.all.children[1]);
    },
    startingPage: function() {
        this.buttonSetup();
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
    },    
}

var btn = document.querySelector('#startGame')



// Game.startingPage()
// Game.ticTacToeSetup()

