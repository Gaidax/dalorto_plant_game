/// <reference path="../core/game.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var AbstractScene = (function (_super) {
        __extends(AbstractScene, _super);
        function AbstractScene(button_1, button_2, button_3, button_4, q_text, sprite) {
            _super.call(this);
            this.reset_button = new objects.SpriteObject(core.buttonAtlas, "Reset", 860, 50);
            this.menu_button = new objects.SpriteObject(core.buttonAtlas, "Menu", 50, 50);
            var menu_btn = new createjs.ButtonHelper(this.menu_button);
            var reset_btn = new createjs.ButtonHelper(this.reset_button);
            menu_btn.overLabel = 5;
            menu_btn.outLabel = 4;
            reset_btn.overLabel = 3;
            reset_btn.outLabel = 2;
            //this.background = new objects.Background("background");
            this.choice_1 = new objects.Option(button_1, 200, 670, true);
            this.choice_2 = new objects.Option(button_2, 400, 670, true);
            this.choice_3 = new objects.Option(button_3, 600, 670, true);
            this.choice_4 = new objects.Option(button_4, 800, 670, true);
            //this.score = 0;
            this.btn_cont = new Array();
            this.btn_cont = [this.choice_1, this.choice_2, this.choice_3,
                this.choice_4];
            if (q_text) {
                this.question_text_label = new objects.Label(q_text, "45px", //1150, 530
                "Intubli_q", "BLACK", 530, 500, true);
            }
            if (sprite) {
                this.plant_sprite = new objects.SpriteObject(core.veggiesAtlas, sprite, 350, 160);
                this.plant_title = new objects.Label(sprite + ": ", "70px", "Intubli_t", "BLACK", 530, 430, true);
            }
            this.menu_button.on("click", function () {
                core.scene = "MENU";
                core.changeMenuScene();
            });
        }
        AbstractScene.prototype.Start = function () {
            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.choice_1);
            this.addChild(this.choice_2);
            this.addChild(this.choice_3);
            this.addChild(this.choice_4);
            this.addChild(this.menu_button);
            this.addChild(this.reset_button);
            if (this.plant_sprite) {
                //this.addChild(this.plant_title);
                //this.addChild(this.plant_title.double);  
                this.addChild(this.plant_sprite);
            }
            if (this.question_text_label) {
                this.addChild(this.question_text_label);
                this.addChild(this.question_text_label.double);
            }
        };
        return AbstractScene;
    }(createjs.Container));
    objects.AbstractScene = AbstractScene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map