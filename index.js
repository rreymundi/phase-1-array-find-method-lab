

// approach #1
// function superbowlWin(array){
//     if (array.result === `W`){
//         return array.year;
//     }
//     else {
//         return undefined;
//     }
// }
// array.find(superbowlWin);


// approach #2
// function superbowlWin(array){
//     let winningYear = array.find(object => object.result === `W` ? object.year : undefined);
//     return winningYear;
// }

// approach #3
function superbowlWin(array){
    let winningYear = array.find(object => object.result === `W`);
    if (winningYear){
        return winningYear.year
    }
}