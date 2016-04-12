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
            
            
            this.button.loadTextures(res.play,res.play);
            this.button.setAnchorPoint(cc.p(0,0));
            this.button.x=cc.winSize.width/2;
            this.button.y=cc.winSize.height/2;
            this.addChild(this.button);
        
            this.button.addTouchEventListener(this.touchEvent, this);
            this.button.addClickEventListener(function () {
                cc.director.runScene(new abird.MainGameScene());
            }, this); 
            
            var snd = new Audio('res/musicafondo.mp3') 
            snd.play();
            
            return true;
        },
        
    });
    
    abird.MenuGameScene= MenuGameScene;
})();