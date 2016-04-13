(function(){
    var ScoreLayer = cc.Layer.extend({
        ctor: function(map){
            this._super();
            // Create the button
            var button = new ccui.Button();
            button.setTouchEnabled(true);
            button.loadTextures(res.play, "", "");
            //button.x = pp.x;
            //button.y = pp.y;
            //button.addTouchEventListener(this.touchEvent, this);
//            button.addClickEventListener(function () {
//                cc.director.pushScene(new HelloWorldScene());
//            });
            this.addChild(button);
            
            
                 var restartButton = new ccui.Button();
            restartButton.setTouchEnabled(true);
            restartButton.loadTextures(res.restart, "", "");
            restartButton.x = 50;
            restartButton.y = 650;

            this.addChild(restartButton);
            
            return true;
        },
        map: null
    });
    
    abird.ScoreLayer = ScoreLayer;
})();