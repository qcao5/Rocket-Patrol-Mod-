//Rocket prefabs
class Rocket1 extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);  //add object to existing, displayList, updateList
        this.isFiring = false;  //track rocket's firing status

        this.sfxRocket = scene.sound.add('sfx_rocket');  //add rocket sfx
    }

    update(){
        //left/right movement
         if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= 50){
                this.x -= 10;
            }else if(keyRIGHT.isDown && this.x <= 578){
                this.x += 10;
            }
        }
        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();  //fire sound
        }
        //if fired, move up
        if(this.isFiring && this.y >= 100){
            this.y -= 10;
        }
        //reset on miss
        if(this.y <= 108){
            this.reset();
        }
    }
    
    //reset the rocket
    reset(){
            this.isFiring = false;
            this.y = 450;
    }
}