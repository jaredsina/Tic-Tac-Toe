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
            checkWinner(mark)
            checkTie();
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
            return false
        }
    }
    return{deleteBoard,checkPosition}
})();

const Player = (name,mark) =>{
    
    return{name,mark}
};

const game = (()=>{
    const playerOne = Player(prompt("Player 1 Name: "),"x");
    const playerTwo = Player(prompt("Player 2 Name: "),"o");
    Gameboard.checkPosition(0,playerOne.mark);
    Gameboard.checkPosition(1,playerOne.mark);
    Gameboard.checkPosition(2,playerOne.mark)
    return{};
})();