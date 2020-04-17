class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './modassets/okay.wav');
        this.load.audio('sfx_explosion', './modassets/cantbelieve.wav');
        this.load.audio('sfx_explosion2', './modassets/oof.wav');
        this.load.audio('sfx_explosion3', './modassets/bruh.wav');
        this.load.audio('sfx_explosion4', './modassets/nani.wav');
        this.load.audio('sfx_rocket', './modassets/yeet.wav');
        
        //load sonic
        this.load.image('sonictpose2', './modassets/sonictpose2.png');
    }   

    create() {
        // menu display
        let menuConfig = {
            fontFamily: 'Comic Sans MS',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'left',
            wordWrap: { width: 500, useAdvancedWrap: true },
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu display smaller
        let menuConfig2 = {
            fontFamily: 'Comic Sans MS',
            fontSize: '14px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'left',
            wordWrap: { width: 450, useAdvancedWrap: true },
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY - (textSpacer*2), 'SAVE MEME SECTOR 120', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer, 'Supreme Leader Elizabeth has commanded General Murmur to send his legion to invade Meme Sector 120! President Nathan has issued the use of his Sonic Missile Defense to combat the onslaught.', menuConfig2).setOrigin(0.5);
        //this.add.text(centerX, centerY - 15, 'President Nathan has issued the use of his Sonic Missile Defense to combat the onslaught.', menuConfig2).setOrigin(0.5);
        this.add.text(centerX, centerY + 30, 'Use ←→ arrows to move & (F) to Fire a Sonic Defense Missile', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + (textSpacer*2), 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5); 
        this.sonictpose2 = this.add.tileSprite(537, 230, 100, 100, 'sonictpose2').setOrigin(0, 0); 
        this.add.text(centerX, centerY + 200, 'Special thanks to my good friend Kag for the BGM cover (twitter is "Googolplexity" with handle @Kagington)', menuConfig2).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 212000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 212000    
            }
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
    }
}