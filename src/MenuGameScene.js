(function(){
    var MenuGameScene = cc.Scene.extend({
        backgroundLayer: null,
        button:new ccui.Button(),
        cuadro: null,
        ctor: function(){
            this._super();
            this.scheduleUpdate();
            
            this.background=new abird.BackgroundLayer(res.menuBack);
            
            this.addChild(this.background,0);
            
            
            this.button.loadTextures(res.lev1,res.lev1);
            this.button.setAnchorPoint(cc.p(0,0));
            this.button.x=cc.winSize.width/2-155;
            this.button.y=cc.winSize.height/2-250;
            this.addChild(this.button);
        
            this.button.addTouchEventListener(this.touchEvent, this);
            this.button.addClickEventListener(function () {
                cc.director.runScene(new abird.MainGameScene());
            }, this); 
            
            
            return true;
        },
        
    });
    
    abird.MenuGameScene= MenuGameScene;
})();