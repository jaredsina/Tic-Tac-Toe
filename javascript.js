const Gameboard = (()=>{
    let board =["","","","","","","","",""];
    const getBoard = () =>board;
    const displayBoard= ()=>{console.log(board)}
    const changeBoard=(position, mark)=>{
        board.splice(position, 1,mark);
        displayBoard()
    }
    const checkPosition=(position,mark)=>{
        if(board[position]==""){
            changeBoard(position,mark)
        }else{
            console.log("Spot Taken");
        }
    }
    const deleteBoard=()=>{
        board = ["","","","","","","","",""]
        displayBoard()
    };
    return{changeBoard, deleteBoard,displayBoard,getBoard,checkPosition}
})();

const Player = (name,mark) =>{
    
    return{name,mark}
};

const game = (()=>{
    const playerOne = Player(prompt("Player 1 Name: "),"x");
    const playerTwo = Player(prompt("Player 2 Name: "),"o");
    let gameOver=true;
    while(gameOver!=true){

    }
    Gameboard.checkPosition(3,playerOne.mark);
    Gameboard.checkPosition(3,playerTwo.mark);

    return{};
})();



