class Minotaur  extends  PIXI.Container{

    prevX=0
    constructor( textureWalking, textureIdle){

        super();
        this.walking = new PIXI.AnimatedSprite(textureWalking )//texture.animations['0_Minotaur_Walking'])
        this.addChild(this.walking)
        this.walking.animationSpeed = 0.5;


        this.idle = new PIXI.AnimatedSprite(textureIdle)//texture.animations['0_Minotaur_Walking'])
        this.addChild(this.idle)
        this.idle.animationSpeed = 0.5;
        //img.play()

        this.runIdle()
        this.prevX = this.x
        setInterval (function(){
           
            if(this.prevX == this.x){
                this.runIdle()

            }
            else{
                this.runWalking()
            }
            this.prevX = this.x
        }.bind(this), 100)

    }

    runIdle(){
        this.walking.visible = false
        this.idle.visible = true
        this.idle.play()
    }

    runWalking(){
        this.idle.visible = false
        this.walking.visible = true
        this.walking.play()
    }
}