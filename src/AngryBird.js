var abird;
(function(){
    var AngryBirdNamespace = cc.Class.extend({
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
            switch(obj.type){
                case "WoodBall":
                    t = new abird.WoodBall(obj);
                    break;
                case "WoodSquare":
                    t = new abird.WoodSquare(obj);
                    break;
                case "WoodRectTriangle":
                    t = new abird.WoodRectTriangle(obj);
                    break;
                case "PolyWall":
                    t = new abird.PolyWall(obj);
                    break;
                case "Pig1":
                    t = new abird.Pig1(obj);
                    break;
                case "Bird":
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
        space: null,
        loadAnimation: function(){
            var frame1 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 641, 98, 98));
            var frame2 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 739, 98, 98));
            var anim1 = new cc.AnimationFrame(frame1, 1);
            var anim2 = new cc.AnimationFrame(frame2, 0.1);
            var animFrames = [anim1, anim2, anim1];
            var animation = new cc.Animation(animFrames, 3);
            cc.animationCache.addAnimation(animation, "pig1");
        },
    });
    abird = new AngryBirdNamespace();
})();