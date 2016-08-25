var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basil_scenes;
(function (basil_scenes) {
    var basil_action_sprite;
    var IsWatered;
    var IsSunned; //add sprite to container when sun selected
    var AbstractBasilScene = (function (_super) {
        __extends(AbstractBasilScene, _super);
        function AbstractBasilScene(button_1, button_2, button_3, button_4, q_text, sprite) {
            _super.call(this, button_1, button_2, button_3, button_4, q_text, sprite);
            //protected watering: objects.SpriteObject;
            this.Sun = new objects.SpriteObject(core.veggiesAtlas, "Rucola", 250, 180);
            this.background = new objects.Background("background");
            this.Start();
            this.onClick();
            core.transition(this);
        }
        AbstractBasilScene.prototype.onClick = function () {
            //var q_text = this.question_text;
            this.reset_button.on("click", function () {
                core.scene = "PLANT";
                core.reset();
                core.changeBasilScene();
            });
        };
        return AbstractBasilScene;
    }(objects.AbstractScene));
    var AbstractEndBasilScene = (function (_super) {
        __extends(AbstractEndBasilScene, _super);
        function AbstractEndBasilScene(message, dead_plant) {
            _super.call(this);
            this.reset_button = new objects.SpriteObject(core.buttonAtlas, "Reset", 860, 50);
            this.menu_button = new objects.SpriteObject(core.buttonAtlas, "Menu", 50, 50);
            var sprite = new objects.SpriteObject(core.veggiesAtlas, dead_plant, 530, 500);
            var back = new objects.Background("background");
            var txt = new objects.Label(message, "70px", "Intubli_t", "BLACK", 530, 430, true);
            var menu_btn = new createjs.ButtonHelper(this.menu_button);
            var reset_btn = new createjs.ButtonHelper(this.reset_button);
            menu_btn.overLabel = 5;
            menu_btn.outLabel = 4;
            reset_btn.overLabel = 3;
            reset_btn.outLabel = 2;
            this.alpha = 0;
            this.addChild(back, this.menu_button, this.reset_button, sprite, txt, txt.double);
            core.stage.addChild(this);
        }
        return AbstractEndBasilScene;
    }(createjs.Container));
    var Plant_scene = (function (_super) {
        __extends(Plant_scene, _super);
        function Plant_scene() {
            _super.call(this, "Venezuela", "Kazakistan", "Venezuela", "Venezuela", "What are you?", "Rapini");
            objects.current_score = 0;
            this.btn_cont.forEach(function (button) {
                button.on("click", function () {
                    if (this.name != "Kazakistan") {
                        core.transition(new Dead());
                    }
                    else {
                        IsSunned = true;
                        objects.current_score++;
                        core.transition(new Second_Step());
                    }
                    ;
                });
            });
        }
        return Plant_scene;
    }(AbstractBasilScene));
    basil_scenes.Plant_scene = Plant_scene;
    var Second_Step = (function (_super) {
        __extends(Second_Step, _super);
        function Second_Step() {
            _super.call(this, "Venezuela", "Kazakistan", "Venezuela", "Venezuela", "What say you?", "Rapini");
            var lbl = new objects.Label(objects.current_score.toString(), "70px", "Intubli_t", "BLACK", 530, 430, true);
            this.addChild(lbl, lbl.double);
            if (IsSunned) {
                this.addChild(this.Sun);
            }
            this.alpha = 1;
            this.btn_cont.forEach(function (button) {
                button.on("click", function () {
                    if (this.name != "Kazakistan") {
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
        return Second_Step;
    }(AbstractBasilScene));
    basil_scenes.Second_Step = Second_Step;
    var Third_Step = (function (_super) {
        __extends(Third_Step, _super);
        function Third_Step() {
            _super.call(this, "Venezuela", "Kazakistan", "Venezuela", "Venezuela");
            var lbl = new objects.Label(objects.current_score.toString(), "70px", "Intubli_t", "BLACK", 530, 430, true);
            this.addChild(lbl, lbl.double);
            if (IsSunned) {
                this.addChild(this.Sun);
            }
            this.alpha = 1;
            this.btn_cont.forEach(function (button) {
                button.on("click", function () {
                    if (this.name != "Kazakistan") {
                        objects.current_score--;
                    }
                    else {
                        objects.current_score++;
                    }
                    core.transition(new Fourth_Step());
                });
            });
        }
        return Third_Step;
    }(AbstractBasilScene));
    basil_scenes.Third_Step = Third_Step;
    var Fourth_Step = (function (_super) {
        __extends(Fourth_Step, _super);
        //check how many score, if less then 3 then bad if 1-0 then dead
        function Fourth_Step() {
            _super.call(this, "Venezuela", "Kazakistan", "Venezuela", "Venezuela");
            var self = this;
            this.btn_cont.forEach(function (button) {
                button.on("click", function () {
                    if (this.name != "Kazakistan") {
                        objects.current_score--;
                    }
                    else {
                        objects.current_score++;
                    }
                    self.checkOutcome(); //maybe just check score to make it easier?
                    if (self.dead) {
                        core.transition(new Dead());
                    }
                    else {
                        core.transition(new Perfect());
                    }
                });
            });
        }
        Fourth_Step.prototype.checkOutcome = function () {
            if (objects.current_score > 2) {
                this.dead = true;
            }
            else {
                this.perfect = true;
            }
        };
        return Fourth_Step;
    }(AbstractBasilScene));
    basil_scenes.Fourth_Step = Fourth_Step;
    var Dead = (function (_super) {
        __extends(Dead, _super);
        function Dead() {
            _super.call(this, "Dead it is!", "Rucola");
        }
        return Dead;
    }(AbstractEndBasilScene));
    basil_scenes.Dead = Dead;
    var Bad = (function (_super) {
        __extends(Bad, _super);
        function Bad() {
            _super.apply(this, arguments);
        }
        return Bad;
    }(AbstractEndBasilScene));
    basil_scenes.Bad = Bad;
    var Perfect = (function (_super) {
        __extends(Perfect, _super);
        function Perfect() {
            _super.call(this, "Dead it is Not!", "Rucola");
        }
        return Perfect;
    }(AbstractEndBasilScene));
    basil_scenes.Perfect = Perfect;
})(basil_scenes || (basil_scenes = {}));
//# sourceMappingURL=Basil.js.map