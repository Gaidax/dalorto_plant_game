var config;
(function (config) {
    (function (Scenes_game) {
        Scenes_game[Scenes_game["MENU"] = 0] = "MENU";
        Scenes_game[Scenes_game["BASIL"] = 1] = "BASIL";
        Scenes_game[Scenes_game["PARSLEY"] = 2] = "PARSLEY";
        Scenes_game[Scenes_game["TOMATO"] = 3] = "TOMATO";
        Scenes_game[Scenes_game["ZUCHINI"] = 4] = "ZUCHINI";
        Scenes_game[Scenes_game["LETTUCE"] = 5] = "LETTUCE";
        Scenes_game[Scenes_game["EGGPLANT"] = 6] = "EGGPLANT";
    })(config.Scenes_game || (config.Scenes_game = {}));
    var Scenes_game = config.Scenes_game;
    (function (Basil_scenes) {
        Basil_scenes[Basil_scenes["PLANT"] = 0] = "PLANT";
        Basil_scenes[Basil_scenes["FIRST_STEP"] = 1] = "FIRST_STEP";
        Basil_scenes[Basil_scenes["SECOND_STEP"] = 2] = "SECOND_STEP";
        Basil_scenes[Basil_scenes["THIRD_STEP"] = 3] = "THIRD_STEP";
        Basil_scenes[Basil_scenes["FINAL"] = 4] = "FINAL";
        Basil_scenes[Basil_scenes["DEAD"] = 5] = "DEAD";
        Basil_scenes[Basil_scenes["BAD"] = 6] = "BAD";
        Basil_scenes[Basil_scenes["PERFECT"] = 7] = "PERFECT";
    })(config.Basil_scenes || (config.Basil_scenes = {}));
    var Basil_scenes = config.Basil_scenes;
    (function (Parsley_scenes) {
        Parsley_scenes[Parsley_scenes["PLANT"] = 0] = "PLANT";
        Parsley_scenes[Parsley_scenes["FIRST_STEP"] = 1] = "FIRST_STEP";
        Parsley_scenes[Parsley_scenes["SECOND_STEP"] = 2] = "SECOND_STEP";
        Parsley_scenes[Parsley_scenes["THIRD_STEP"] = 3] = "THIRD_STEP";
        Parsley_scenes[Parsley_scenes["DEAD"] = 5] = "DEAD";
        Parsley_scenes[Parsley_scenes["WORSE"] = 6] = "WORSE";
        Parsley_scenes[Parsley_scenes["PERFECT"] = 7] = "PERFECT";
    })(config.Parsley_scenes || (config.Parsley_scenes = {}));
    var Parsley_scenes = config.Parsley_scenes;
    (function (Tomato_scenes) {
        Tomato_scenes[Tomato_scenes["PLANT"] = 0] = "PLANT";
        Tomato_scenes[Tomato_scenes["FIRST_STEP"] = 1] = "FIRST_STEP";
        Tomato_scenes[Tomato_scenes["SECOND_STEP"] = 2] = "SECOND_STEP";
        Tomato_scenes[Tomato_scenes["THIRD_STEP"] = 3] = "THIRD_STEP";
        Tomato_scenes[Tomato_scenes["FLOWERS"] = 4] = "FLOWERS";
        Tomato_scenes[Tomato_scenes["STEP_FOUR"] = 5] = "STEP_FOUR";
        Tomato_scenes[Tomato_scenes["STEP_FIVE"] = 6] = "STEP_FIVE";
        Tomato_scenes[Tomato_scenes["TOMATO"] = 7] = "TOMATO";
        Tomato_scenes[Tomato_scenes["CAGING_STEP"] = 8] = "CAGING_STEP";
        Tomato_scenes[Tomato_scenes["BITE_DEAD"] = 9] = "BITE_DEAD";
        Tomato_scenes[Tomato_scenes["BAD"] = 10] = "BAD";
        Tomato_scenes[Tomato_scenes["DEAD"] = 11] = "DEAD";
        Tomato_scenes[Tomato_scenes["PERFECT"] = 12] = "PERFECT";
    })(config.Tomato_scenes || (config.Tomato_scenes = {}));
    var Tomato_scenes = config.Tomato_scenes;
    (function (Zucchini_scenes) {
        Zucchini_scenes[Zucchini_scenes["PLANT"] = 0] = "PLANT";
        Zucchini_scenes[Zucchini_scenes["FIRST_STEP"] = 1] = "FIRST_STEP";
        Zucchini_scenes[Zucchini_scenes["SECOND_STEP"] = 2] = "SECOND_STEP";
        Zucchini_scenes[Zucchini_scenes["THIRD_STEP"] = 3] = "THIRD_STEP";
        Zucchini_scenes[Zucchini_scenes["FLOWERS"] = 4] = "FLOWERS";
        Zucchini_scenes[Zucchini_scenes["STEP_FOUR"] = 5] = "STEP_FOUR";
        Zucchini_scenes[Zucchini_scenes["STEP_FIVE"] = 6] = "STEP_FIVE";
        Zucchini_scenes[Zucchini_scenes["STEP_SIX"] = 7] = "STEP_SIX";
        Zucchini_scenes[Zucchini_scenes["BUILDUP"] = 8] = "BUILDUP";
        Zucchini_scenes[Zucchini_scenes["BUG_DEAD"] = 9] = "BUG_DEAD";
        Zucchini_scenes[Zucchini_scenes["BAD"] = 10] = "BAD";
        Zucchini_scenes[Zucchini_scenes["DEAD"] = 11] = "DEAD";
        Zucchini_scenes[Zucchini_scenes["PERFECT"] = 12] = "PERFECT";
    })(config.Zucchini_scenes || (config.Zucchini_scenes = {}));
    var Zucchini_scenes = config.Zucchini_scenes;
    (function (Lettuce_scenes) {
        Lettuce_scenes[Lettuce_scenes["PLANT"] = 0] = "PLANT";
        Lettuce_scenes[Lettuce_scenes["FIRST_STEP"] = 1] = "FIRST_STEP";
        Lettuce_scenes[Lettuce_scenes["SECOND_STEP"] = 2] = "SECOND_STEP";
        Lettuce_scenes[Lettuce_scenes["THIRD_STEP"] = 3] = "THIRD_STEP";
        Lettuce_scenes[Lettuce_scenes["NET_STEP"] = 4] = "NET_STEP";
        Lettuce_scenes[Lettuce_scenes["BLOOM"] = 5] = "BLOOM";
        Lettuce_scenes[Lettuce_scenes["BUG_DEAD"] = 6] = "BUG_DEAD";
        Lettuce_scenes[Lettuce_scenes["BAD"] = 7] = "BAD";
        Lettuce_scenes[Lettuce_scenes["DEAD"] = 10] = "DEAD";
        Lettuce_scenes[Lettuce_scenes["PERFECT"] = 11] = "PERFECT";
    })(config.Lettuce_scenes || (config.Lettuce_scenes = {}));
    var Lettuce_scenes = config.Lettuce_scenes;
    (function (Eggplant_scenes) {
        Eggplant_scenes[Eggplant_scenes["PLANT"] = 0] = "PLANT";
        Eggplant_scenes[Eggplant_scenes["FIRST_STEP"] = 1] = "FIRST_STEP";
        Eggplant_scenes[Eggplant_scenes["SECOND_STEP"] = 2] = "SECOND_STEP";
        Eggplant_scenes[Eggplant_scenes["THIRD_STEP"] = 3] = "THIRD_STEP";
        Eggplant_scenes[Eggplant_scenes["BLOOM"] = 4] = "BLOOM";
        Eggplant_scenes[Eggplant_scenes["SQUIRREL_DEAD"] = 6] = "SQUIRREL_DEAD";
        Eggplant_scenes[Eggplant_scenes["BAD"] = 7] = "BAD";
        Eggplant_scenes[Eggplant_scenes["DEAD"] = 10] = "DEAD";
        Eggplant_scenes[Eggplant_scenes["PERFECT"] = 11] = "PERFECT";
    })(config.Eggplant_scenes || (config.Eggplant_scenes = {}));
    var Eggplant_scenes = config.Eggplant_scenes;
})(config || (config = {}));
//# sourceMappingURL=scenes_questions.js.map