(function(){
    var MainGameScene = cc.Scene.extend({
        backgroundLayer: null,
        animationLayer: null,
        scoreLayer: null,
        worldTmx: null,
        ctor: function(){
            this._super();
            this.worldTmx = new cc.TMXTiledMap(res.map);
            this.backgroundLayer = new abird.BackgroundLayer(res.background);
            this.animationLayer = new abird.AnimationLayer(this.worldTmx);
            this.scoreLayer = new abird.ScoreLayer(this.worldTmx);
            this.scheduleUpdate();
            return true;
        },
        onEnter: function() {
            this.addChild(this.backgroundLayer, 1);
            this.addChild(this.animationLayer, 2);
            this.addChild(this.scoreLayer, 3);
            this.addChild(this.worldTmx, 4);
        },
        update: function(dt){
            abird.space.step(dt);
        },
    });
    
    abird.MainGameScene  = MainGameScene;
})();