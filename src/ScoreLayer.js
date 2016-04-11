(function(){
    var ScoreLayer = cc.Layer.extend({
        ctor: function(map){
            this._super();
            map = new cc.TMXTiledMap(map);
            var pp = abird.getTmxObject(map, "menu", "PlayPause");
            
            // Create the button
            var button = new ccui.Button();
            button.setTouchEnabled(true);
            button.loadTextures(res.play, "", "");
            button.x = pp.x;
            button.y = pp.y;
            //button.addTouchEventListener(this.touchEvent, this);
//            button.addClickEventListener(function () {
//                cc.director.pushScene(new HelloWorldScene());
//            }); 
            this.addChild(button);
            
            return true;
        },
        map: null
    });
    
    abird.ScoreLayer = ScoreLayer;
})();