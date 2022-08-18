const Gameboard = (()=>{
    let board =["","","","","","","","",""];
    let moves=0;
    const getBoard = () =>board;
    const displayBoard= ()=>{console.log(board)}
    const changeBoard=(position, mark)=>{
        board.splice(position, 1,mark);
        displayBoard()
    }
    const checkPosition=(position,mark)=>{
        if(board[position]==""){
            changeBoard(position,mark)
            return checkWinner(mark)
        }else{
            console.log("Spot Taken");
        }
    }
    const deleteBoard=()=>{
        board = ["","","","","","","","",""]
        displayBoard()
    };
    const checkTie=()=>{
        console.log("Checking for tie")
        if (moves==9){
            console.log("Its a tie")
            return true
        }else{
            return false
        }
        
    }
    const checkWinner=(mark)=>{
        console.log("Checking for winner")
        if(board[0]==mark&&board[0]==board[1]&& board[1]==board[2]){
            console.log("We have a winner!");
            return true
        }else if(board[3]==mark&&board[3]==board[4]&&board[4]==board[5]){
            console.log("We have a winner")
            return true
        }else if(board[6]==mark&&board[6]==board[7]&&board[7]==board[8]){
            console.log("We have a winner")
            return true
        }else if(board[0]==mark&&board[0]==board[3]&&board[3]==board[6]){
            console.log("We have a winner")
            return true
        }else if(board[1]==mark&&board[1]==board[4]&&board[4]==board[7]){
            console.log("we have a winner")
            return true
        }else if(board[2]==mark&&board[2]==board[5]&&board[5]==board[8]){
            console.log("We have a winner")
            return true
        }else if(board[0]==mark&&board[0]==board[4]&&board[4]==board[8]){
            console.log("We have a winner")
            return true
        }else if(board[2]==mark&&board[2]==board[4]&&board[4]==board[6]){
            console.log(("We have a winner"))
            return true
        }else{
            moves++;
            return checkTie()
        }
    }
    return{deleteBoard,checkPosition}
})();

const Player = (name,mark) =>{
    
    return{name,mark}
};

const game = (()=>{
    let gameOver=false;
    const playerOne = Player(prompt("Player 1 Name: "),"x");
    const playerTwo = Player(prompt("Player 2 Name: "),"o");
    let coinFlip = Math.floor(Math.random()*2);
    function makeMove(){
        gameOver=Gameboard.checkPosition(prompt("Enter a position number 1-9 "),player.mark)
    }
    function restartGame(){
        let answer = prompt("Restart Game?y/n")
        if(answer=="y"){
            Gameboard.deleteBoard()
            gameOver=false;
        }
    }
    function nextTurn(){
        if (coinFlip==0){
            player = playerOne;
        }else{
            player = playerTwo;
        }
        coinFlip++
        coinFlip = coinFlip % 1;
        makeMove();
    }
    while (gameOver!=true){
        nextTurn();
    }
    restartGame();
})();