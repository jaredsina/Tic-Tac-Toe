const Gameboard = (()=>{
    let board =["","","","","","","","",""];
    let moves=0;
    const getBoard = () =>board;
    const displayBoard=()=>{
        const board = document.querySelector(".board");
        board.style.display ="grid";
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell)=>{
            cell.addEventListener('click',()=>game.makeMove(cell.id));
        });
    }

    const hideBoard= ()=>{
        const board = document.querySelector(".board");
        board.style.display ="none";
    }
    const changeBoard=(position, mark)=>{
        board.splice(position, 1,mark);
        let cell = document.getElementById(position);
        cell.innerHTML=mark
        console.log(board)
    }
    const checkPosition=(position,player)=>{
        if(board[position]==""){
            changeBoard(position,player.mark);
            return checkWinner(player);
        }else{
            return("error");
        }
    }
    const deleteBoard=()=>{
        board = ["","","","","","","","",""];
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell)=>{
            cell.innerHTML=""
        });
        moves=0;
    };
    const checkTie=()=>{
        if (moves==9){
            console.log("Its a tie")
            return true
        }else{
            return false
        }
    }
    const checkWinner=(player)=>{
        let mark = player.mark
        if(board[0]==mark&&board[0]==board[1]&& board[1]==board[2]){
            displayWinner(player);
            hideBoard()
            return true
        }else if(board[3]==mark&&board[3]==board[4]&&board[4]==board[5]){
            displayWinner(player);
            return true
        }else if(board[6]==mark&&board[6]==board[7]&&board[7]==board[8]){
            displayWinner(player);
            return true
        }else if(board[0]==mark&&board[0]==board[3]&&board[3]==board[6]){
            displayWinner(player);
            return true
        }else if(board[1]==mark&&board[1]==board[4]&&board[4]==board[7]){
            displayWinner(player);
            return true
        }else if(board[2]==mark&&board[2]==board[5]&&board[5]==board[8]){
            displayWinner(player);
            return true
        }else if(board[0]==mark&&board[0]==board[4]&&board[4]==board[8]){
            displayWinner(player);
            return true
        }else if(board[2]==mark&&board[2]==board[4]&&board[4]==board[6]){
            displayWinner(player);
            return true
        }else{
            moves++;
            return checkTie()
        }
    }
    const displayWinner=(player)=>{
        const message = document.getElementById("message");
        message.innerHTML=`THE WINNER IS ${player.name}`
    }
    return{deleteBoard,checkPosition,displayBoard}
})();

const Player = (name,mark) =>{

    return{name,mark}
};

const game = (()=>{
    let gameOver=false;
    const playerOne = Player(prompt("Player 1 Name: "),"x");
    const playerTwo = Player(prompt("Player 2 Name: "),"o");
    const startButton = document.getElementById("start");
    startButton.addEventListener("click",()=>startGame());
    const resetButton= document.getElementById('reset');
    resetButton.addEventListener('click',()=>restartGame());
    let coinFlip = Math.floor(Math.random()*2);
    let player
    if (coinFlip==0 ){
        player = playerOne;
    }else{
        player = playerTwo;
    }
    function makeMove(position){
        gameOver=Gameboard.checkPosition(position,player)
        if (gameOver != "error"){
            nextTurn();
        }if (gameOver==true){
            restartGame();
        }
    }
    function restartGame(){
        Gameboard.deleteBoard();
    }
    function nextTurn(){
        if(player==playerOne){
            player=playerTwo
        }else{
            player=playerOne
        }
    }
    function startGame(){
        restartGame();
        Gameboard.displayBoard();
    }
    return{makeMove}
})();