const Gameboard = (()=>{
    let board =["","","","","","","","",""];
    const getBoard = () =>board;
    const displayBoard= ()=>{console.log(board)}
    const changeBoard=(position, mark)=>{
        board.splice(position, 1,mark);
    }
    const deleteBoard=()=>{
        board = ["","","","","","","","",""]
    };
    return{changeBoard, deleteBoard,displayBoard,getBoard}
})();

const Player = (name,mark) =>{
    
    return{name,mark}
};

const game = (()=>{
    let gameOver=false;
    while(gameOver!=true){
        Gameboard.displayBoard();
        
    }
    return{};
})();
const playerOne = Player(prompt("Player 1 Name: "),"x");
const playerTwo = Player(prompt("Player 2 Name: "),"o");
Gameboard.changeBoard(3,playerOne.mark);
Gameboard.displayBoard();
Gameboard.deleteBoard();
Gameboard.displayBoard();


