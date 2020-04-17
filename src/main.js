//Nathan Huynh
//Points break down (100 points):
//- Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (50 points): It's now a meme aesthetic with new audio and visuals 
//- Add your own (copyright-free) background music to the Play scene (10 points): Added a BGM that was created by a friend I know, credited him on the menu
//- Create a new scrolling tile sprite for the background (10 points): The mountain/ground asset is scrolling to the right
//- Create a new title screen (15 points): Added a premise to the game along with changing the title of the game
//- Create 4 new explosion SFX and randomize which one plays on impact (15 points): There are 4 meme audio clips that act as randomized explosions 

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
};

//main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 212000    
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;