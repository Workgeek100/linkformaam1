class Game{
    constructor(){
        this.currentState=1;
        this.level=0;
    }

    getState(){
        return this.currentState;
    }

    update(state){
        this.currentState=state;
    }

    

    storyLine(){
      background(intro_bg);
      intro.display();
    }


    playBg1(){
        background("white");
        background(bg1);
        obstacles.display1();
    }

    playBg2(){
        background("white");
        background(bg2);
        obstacles.display2();
    }

    playBg3(){
        background("white");
        background(bg3);
        obstacles.display3();
    }

    playBg4(){
        background("white");
        background(bg4);
        obstacles.display4();
    }

    playBg5(){
        background("white");
        background(bg5);
        obstacles.display5();
    }

}