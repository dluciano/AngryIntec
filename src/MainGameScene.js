(function(){
    var MainGameScene = cc.Scene.extend({
        ctor: function(){
            this._super();
            this.backgroundLayer = new abird.BackgroundLayer(res.background);
            this.scoreLayer = new abird.ScoreLayer(res.map);
            return true;
        },
        onEnter: function() {
            this.addChild(this.backgroundLayer, 1);
//            this.addChild(this.animationLayer, 2);
            this.addChild(this.scoreLayer, 3);
        },
        backgroundLayer: null,
        animationLayer: null,
        scoreLayer: null,
        worldTmx: null
    });
    
    abird.MainGameScene  = MainGameScene;
})();