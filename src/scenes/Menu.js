class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload(){
       //load Audio
       this.load.audio('sfx_select', './assets/blip_select12.wav');
       this.load.audio('sfx_explosion', './assets/explosion38.wav');
       this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
   
    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#00FFFF',
            color: '#FF00FF',
            align: 'right',
            padding: {
                top: 8,
                bottom: 8,
            },
            fixedWidth: 0
        }

        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY+textSpacer, 'Press ⬅ for Single or ➡ for Double', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY-textSpacer*1.5, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+textSpacer*1.5, 'USE MOUSE TO MOVE AND FIRE', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+textSpacer*2, '2 Player Mod', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+textSpacer*2.5, 'Use [⬅/➡] & [A / D] TO MOVE', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+textSpacer*3, '[F] & [W] TO FIRE', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#FF00FF';
        menuConfig.color = '#00FFFF';
        this.add.text(centerX, centerY-textSpacer*1.5, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        
        this.add.text(20, 20, "Roecket Patrol Menu");

        // launch the next scene
        //this.scene.start("playScene");

         //define keyboard keys
         keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
         keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        //easy mode
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings = {
                spaceshipSpeed: 3,
                bonusSpeed: 5.5,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start("play1Scene");
        }
        //hard mode
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            game.settings = {
                spaceshipSpeed: 5,
                bonusSpeed: 8,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start("play2Scene");
        }
    
    }
}