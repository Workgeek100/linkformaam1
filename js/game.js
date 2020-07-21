class Game{
    constructor(){
        this.currentState=0;
        this.level=0;
    }

    getState(){
        return this.currentState;
    }

    update(state){
        this.currentState=state;
    }

    play(){
        
    }

}