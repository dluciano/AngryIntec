(function(){
    var ScoreLayer = cc.Layer.extend({
        ctor: function(map){
            this._super();
            // Create the button
            
            
            
            var restartButton = new ccui.Button();
            restartButton.setTouchEnabled(true);
            restartButton.loadTextures(res.restart, "", "");
            restartButton.setScale(0.5);
            restartButton.x = 50;
            restartButton.y = 600;
            restartButton.addTouchEventListener(this.touchEvent, this);
            restartButton.addClickEventListener(function () {
                //abird.AbstractWoodObject.remove();
                var newScene = new abird.MainGameScene();
                cc.director.replaceScene(newScene);
            }, this); 

            this.addChild(restartButton,10);
            
            return true;
        },
        map: null
    });
    
    abird.ScoreLayer = ScoreLayer;
})();