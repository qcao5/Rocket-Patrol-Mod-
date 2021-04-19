//Name: Qingzhao Cao
//Project title: RocketPatrol Mod
//2021.4.19
//LIKE 13 HOURS TO COMPLETE
//Implement a simultaneous two-player mode (30)
//Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
//Implement an alternating two-player mode (20)
//Replace the UI borders with new artwork (10)
//Create a new title screen (e.g., new artwork, typography, layout) (10)

//TA Ishaan helped me a lot. Thank you so much.

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play1, Play2 ],
};

let game = new Phaser.Game(config);

//reserve some keyboard variables
let keyF, keyLEFT, keyRIGHT, keyW, keyA, keyD;

//define Game settings
game.settings = {
    spaceshipSpeed: 3,
    bonusSpeed: 5,
    gameTimer: 60000
}