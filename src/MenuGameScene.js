(function(){
    var MenuGameScene = cc.Scene.extend({
        backgroundLayer: null,
        var level: null,
        ctor: function(){
            this._super();
            this.scheduleUpdate();
            
            this.background=new abird.BackgroundLayer(res.menuBack);
            this.level= new cc.Sprite(res.play);
            this.level.setPosition(size.width / 2,size.height / 2);
            
            this.addChild(this.background,0);
            this.addChild(this.level,1);
            
            cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event) {
                if(cc.rectContainsPoint(this.level.getBoundingBox,touch.getLocation)){
                cc.director.runScene(new abird.MainGameScene());
            }
            },
			
			
		}, this);
        
            return true;
        },
        
    });
    
    abird.MainGameScene = MainGameScene;
})();