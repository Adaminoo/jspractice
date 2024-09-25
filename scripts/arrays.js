let favGames = [
    ' Outer Wilds',
    ' Starcraft 2',
    ' Minecraft',
    ' Terraria',
    ' Doom Eternal'
];

document.getElementById("list").innerHTML = favGames;

let bestGame = favGames[1];

document.getElementById("best").innerHTML = bestGame;

favGames[0] = 'erm';
favGames[5] = 'test';
let gamesLength = favGames.length;

document.getElementById("erm").innerHTML = favGames;
document.getElementById("length").innerHTML = gamesLength;

