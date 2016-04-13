(function(){
    var MainGameScene = cc.Scene.extend({
        backgroundLayer: null,
        animationLayer: null,
        scoreLayer: null,
        worldTmx: null,
        moveBird: function(){
         abird.currentBird.birdImpulse();
        },
       onTouch: function(location, event){
          
        var score;
        
   /*     var size = cc.winSize;
		var  juego = event.getCurrentTarget();
		var ubicacion = location.getLocation();
        
             if(ubicacion.x<275)
                ubicacion.x = 275;
        
             if(ubicacion.x > 675)
                ubicacion.x = 675;
        
		juego.sprConejo.setPosition(ubicacion.x, size.height * 0.15);
	*/	     

	}
        ,
        ctor: function(){
            this._super();
            this.scheduleUpdate();
            this.schedule(abird.allPigsKilled, 5);
            this.worldTmx = new cc.TMXTiledMap(res.map);
            this.backgroundLayer = new abird.BackgroundLayer(res.background);
            abird.animLayer = this.animationLayer = new abird.AnimationLayer(this.worldTmx);
            this.scoreLayer = new abird.ScoreLayer(this.worldTmx);
            
            this.addChild(this.backgroundLayer, 1);
            this.addChild(this.animationLayer, 2);
            this.addChild(this.scoreLayer, 3);
            this.addChild(this.worldTmx, 4);
            this.debugNode = new cc.PhysicsDebugNode(abird.space);
            this.addChild(this.debugNode, 100);
            
            
               cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouch,
			onTouchMoved: this.moveBird
			
		}, this);
            
            return true;
        },
        update: function(dt){
            abird.space.step(dt);
        }
    });
    
    abird.MainGameScene = MainGameScene;
})();