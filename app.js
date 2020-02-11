new Vue({
    el: '#vue-app',
    data:{
        initial: "You'll never beat me",
        played: false,
        choice: undefined,
        pc: "url('assets/play.png')",
        userChoice: undefined,
        result: ""
    },
    methods:{
        game:function(uc){
            this.choice = Math.floor(Math.random() * 3);
            console.log(this.choice);
            if(this.choice == 0){
                this.pc = "url('assets/rock.png')"
            }else if(this.choice == 1){
                this.pc = "url('assets/paper.png')"
            }else if(this.choice == 2){
                this.pc = "url('assets/scissors.png')"
            }
            console.log(this.pc);
            if ((uc === 0 && this.choice === 1) || (uc === 1 && this.choice === 2) || (uc === 2 && this.choice === 0)){
                this.result = "You Lose"
                this.initial = "Told you, I am better"
                console.log('you lose');
            }else if(uc === this.choice){
                this.result = "It's a Draw"
                this.initial = "Finally an worthy opponent"
                console.log('draw')
            }
            
            else{
                this.result = "You Win"
                this.initial = "Man! You are good at this"
                console.log('you win');
            }
        }
    }
});