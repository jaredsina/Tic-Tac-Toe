const Gameboard = (()=>{
    let board =["","","","","","","","",""];
    const displayBoard= ()=>{console.log(board)}
    const placeMove=(position, mark)=>{
        board.splice(position, 1,mark);
    }
    return{displayBoard,placeMove}
})();

const Player = (name,mark) =>{
    
    return{name,mark}
};

const game = (()=>{
    Gameboard.displayBoard();

    return{};
})();
const playerOne = Player(prompt("Player 1 Name: "),"x");
const playerTwo = Player(prompt("Player 2 Name: "),"o");
Gameboard.placeMove(3,playerOne.mark);
Gameboard.displayBoard();


