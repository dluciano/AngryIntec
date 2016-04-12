var res = {
    HelloWorld_png : "res/HelloWorld.png",
    Scoring_png: "res/scoring.png",
    Pigs_png: "res/sprite_INGAME.png",
    Pigs2_png: "res/sprite1.png",
    Pigs3_png: "res/sprite2.png",
    Pigs4_png: "res/sprite3.png",
    Transparency_png: "res/transparency.png", 
    background: "res/world.png",
    play: "res/play.png",
    f: "res/buttons.png",
    map: "res/halloMap.tmx",
    menuBack:"res/menu.png",
    lev1:"res/playg.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}