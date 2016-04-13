var abird;
(function(){
    var AngryBirdNamespace = cc.Class.extend({
        space: null,
        animLayer: null,
        currentBird:null,
        run: function(){
            this.loadAnimation();
            this.space = new cp.Space();
            this.space.gravity = cp.v(0, -100);
            cc.director.runScene(new abird.MenuGameScene());
        },
        getTmxObject: function (tmx, key, name){
            var objs = tmx
                .getObjectGroup(key)
                .getObjects();
            for(var i = 0; i < objs.length; i++){
                if(objs[i].name === name)
                    return objs[i];
            }
        },
        tmxObjectBuilder : function(obj){
            var t;
            obj.collision_type = NONE;
            switch(obj.type){
                case "WoodBall":
                    obj.collision_type = WOOD;
                    t = new abird.WoodBall(obj);
                    break;
                case "WoodSquare":
                    obj.collision_type = WOOD;
                    t = new abird.WoodSquare(obj);
                    break;
                case "WoodRectTriangle":
                    obj.collision_type = WOOD;
                    t = new abird.WoodRectTriangle(obj);
                    break;
                case "PolyWall":
                    t = new abird.PolyWall(obj);
                    break;
                case "Pig1":
                    obj.collision_type = PIG;
                    t = new abird.Pig1(obj);
                    break;
                case "Bird":
                    obj.collision_type = BIRD;
                    t = new abird.Bird(obj);
                    break;
                case "Stick1": //Parte del palito que va de fondo
                    t = new abird.Stick1(obj);
                    break;
                case "Stick2": //Parte del palito que va de frente
                    t = new abird.Stick2(obj);
                    break;
                default:
                    throw "Unreconogized object type: " + obj.type;
            }
            return t;
        },
        loadAnimation: function(){
            pig1();
        },
        pigExplosion: function(x, y){
            var fire = new cc.ParticleFire();
            fire.setDuration(0.2);
            fire.setTextureWithRect(cc.textureCache.addImage(res.Pigs2_png), cc.rect(169, 514, 115, 115));
            fire.attr({
                x: x, 
                y: y
            });
            this.animLayer.addChild(fire, 10);
        }
    });
    abird = new AngryBirdNamespace();
    
    function pig1(){
        var frame1 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 641, 98, 98));
        var frame2 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 739, 98, 98));
        var anim1 = new cc.AnimationFrame(frame1, 1);
        var anim2 = new cc.AnimationFrame(frame2, 0.1);
        var animFrames = [anim1, anim2, anim1];
        var animation = new cc.Animation(animFrames, 3);
        cc.animationCache.addAnimation(animation, "pig1");
    }
})();