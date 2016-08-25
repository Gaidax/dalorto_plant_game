module basil_scenes {
    let basil_action_sprite: objects.SpriteObject;

        let IsWatered: boolean;
        let IsSunned: boolean; //add sprite to container when sun selected

    class AbstractBasilScene extends objects.AbstractScene {
        public dead: boolean;
        public bad: boolean;
        public perfect: boolean;
        
        //protected watering: objects.SpriteObject;
        protected Sun = new objects.SpriteObject(core.veggiesAtlas, "Rucola", 250, 180);

        constructor(button_1: string,
            button_2: string, button_3: string, button_4: string,
            q_text?: string, sprite?: string) {
            super(button_1,
            button_2, button_3, button_4,
            q_text, sprite);
            this.background = new objects.Background("background");
            this.Start();
            this.onClick();
             core.transition(this);
        }

            protected onClick(): void {
            //var q_text = this.question_text;
            this.reset_button.on("click", function(){
                core.scene = "PLANT";
                core.reset();
                core.changeBasilScene();
            });
    }
            protected 

    }

        class AbstractEndBasilScene extends createjs.Container{
        private reset_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Reset",860,50);
        private menu_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Menu",50,50);
        constructor(message: string, dead_plant: string) {
            super();
            var sprite = new objects.SpriteObject(core.veggiesAtlas, dead_plant,530, 500);
            var back = new objects.Background("background");
            var txt = new objects.Label(message, "70px", "Intubli_t","BLACK" ,530, 430, true);
                        var menu_btn = new createjs.ButtonHelper(this.menu_button);
            var reset_btn = new createjs.ButtonHelper(this.reset_button);
            menu_btn.overLabel = 5;
            menu_btn.outLabel = 4;
            reset_btn.overLabel = 3;
            reset_btn.outLabel = 2;
            this.alpha = 0;
            this.addChild(back, this.menu_button, this.reset_button, sprite , txt, txt.double);
            core.stage.addChild(this);

        }
    }

    export class Plant_scene extends AbstractBasilScene {
        constructor(){
            super("Venezuela", "Kazakistan", 
            "Venezuela", "Venezuela", "What are you?", "Rapini");
            objects.current_score = 0;
            this.btn_cont.forEach(button =>{
                button.on("click", function(){
                    
                    if(this.name != "Kazakistan"){
                        core.transition(new Dead());

                      //each button has to be individual, hence no "else"           
                    } 
                    else {
                    IsSunned = true;
                    objects.current_score++;
                    core.transition(new Second_Step());
                    };
            });
                });
        }
    }

    export class Second_Step extends AbstractBasilScene{
        constructor() {
            super("Venezuela", "Kazakistan", 
            "Venezuela", "Venezuela", "What say you?", "Rapini");
            var lbl = new objects.Label(objects.current_score.toString(), "70px", "Intubli_t","BLACK" ,530, 430, true);
            this.addChild(lbl, lbl.double);
            if(IsSunned) {
                this.addChild(this.Sun);
            }
            this.alpha = 1;

                this.btn_cont.forEach(button =>{
                button.on("click", function(){
                    
                    if(this.name != "Kazakistan"){
                        objects.current_score--;         
                    } 
                    else {
                    
                    objects.current_score++;
                    
                    }
                    //basil_action_sprite = this.plant_sprite;
                    core.transition(new Third_Step());
            });
                });
    }

    }

    export class Third_Step extends AbstractBasilScene{
        constructor() {
            super("Venezuela", "Kazakistan", 
            "Venezuela", "Venezuela");

          var lbl = new objects.Label(objects.current_score.toString(), "70px", "Intubli_t","BLACK" ,530, 430, true);
            this.addChild(lbl, lbl.double);
                        if(IsSunned) {
                this.addChild(this.Sun);
            }
            this.alpha = 1;

             this.btn_cont.forEach(button =>{
                button.on("click", function(){
                    
                    if(this.name != "Kazakistan"){
                        objects.current_score--;         
                    } 
                    else {
                    
                    objects.current_score++;
                    
                    }
                    core.transition(new Fourth_Step());
            });
                });
        }

    }

    export class Fourth_Step extends AbstractBasilScene{
        //check how many score, if less then 3 then bad if 1-0 then dead
          constructor() {
            super("Venezuela", "Kazakistan", 
            "Venezuela", "Venezuela");
        let self = this;
         this.btn_cont.forEach(button =>{
                button.on("click", function(){
                    
                    if(this.name != "Kazakistan"){
                        objects.current_score--;         
                    } 
                    else {
                    
                        objects.current_score++;
                    
                    }

                    self.checkOutcome(); //maybe just check score to make it easier?
                    if(self.dead){
                         core.transition(new Dead());
                    } else {
                        core.transition(new Perfect());
                    }
                    
            });
                });
          }

          private checkOutcome() {
              if(objects.current_score > 2) {
                  this.dead = true;
              } else {
                  this.perfect = true;
              }
          }

    }

    export class Dead extends AbstractEndBasilScene{
        constructor() {
            super("Dead it is!", "Rucola");
        }

    }

    export class Bad extends AbstractEndBasilScene{


    }

    export class Perfect extends AbstractEndBasilScene{
        constructor() {
             super("Dead it is Not!", "Rucola");
        }

    }
}