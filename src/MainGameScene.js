(function(){
    var MainGameScene = cc.Scene.extend({
        backgroundLayer: null,
        animationLayer: null,
        scoreLayer: null,
        worldTmx: null,
        moveBird: function(){
              
            cc.log("klk");
         abird.currentBird.birdImpulse();
            var ubicacion = location.getLocation();
        cc.log(ubicacion.x +"x"+ ubicacion.y+"y");
            
            
        var  event = event.getCurrentTarget();    
            
            cc.log(event.abird.currentBird);
            
        },
       onTouch: function(location, event){
           var ubicacion = location.getLocation();
        cc.log(ubicacion.x +"x"+ ubicacion.y+"y");
/*
		var  juego = event.getCurrentTarget();
		
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
        event: cc.EventListener.MOUSE,
        onMouseMove: function(event){
            //se asigna al pajarito la posicion del move
            // do something...
            var x = event.getLocationX();
            var y = event.getLocationY();
            
            if(x<19) x = 25;
            if(x>141) x = 75;
            if(y<81) y = 150;
            if(y>385) y = 200;
            abird.currentBird.body.setPos(cc.p(x,  y));
            
        },
        onMouseUp: function(event){
            var str = "Mouse Up detected, Key: " + event.getButton();
            // do something...
            //Cuando se suelta el mouse se llama la funcion que aplica el impulso
            cc.log(str);
        },
        onMouseDown: function(event){
            var str = "Mouse Down detected, Key: " + event.getButton();
            // cuando se presiona el mouse el pajarito se le asigna la posicion del mismo si se encuentra dentro del recuadro de lanzamiento
            // do something...
            cc.log(str);
        }
    },this);
            
            return true;
        },
        update: function(dt){
            abird.space.step(dt);
        }
    });
    
    abird.MainGameScene = MainGameScene;
})();