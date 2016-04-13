var abird;
(function(){
    var AngryBirdNamespace = cc.Class.extend({
        space: null,
        animLayer: null,
        points: 0,
        currentBird:null,
        pigs: [],
        birds: [],
        reset: function(){
            this.animLayer= null;
            this.points= 0;
            this.currentBird=null;
            this.pigs= [];
            this.birds= [];
            this.space = new cp.Space();
            this.space.gravity = cp.v(0, -100);
        },
        run: function(){
            this.reset();
            this.loadAnimation();
            cc.director.runScene(new abird.MenuGameScene());
        },
        gameStatus: function(){
            if(abird.pigs.length === 0)
                console.log("Won!");
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
                    this.pigs.push(t);
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
            pointsAnim1000();
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
            
            var a = (new abird.Points({x: x, y: y, anim: "1000points"}));
            this.animLayer.addChild(a, 11);
            a.runAnimation();
            this.pigs.pop();
            this.points += 1;
            
            cc.audioEngine.playEffect(res.sonidocerdito, false);
        },
        birdExplosion: function(x, y){
            var fire = new cc.ParticleFire();
            fire.setDuration(0.2);
            fire.setTextureWithRect(cc.textureCache.addImage(res.Pigs2_png), cc.rect(169, 514, 115, 115));
            fire.attr({
                x: x, 
                y: y
            });
            this.animLayer.addChild(fire, 10);
            
            this.birds.pop();
        },
    });
    abird = new AngryBirdNamespace();
    
    function pointsAnim1000(){
        var frame1 = new cc.SpriteFrame(res.Scoring_png,  cc.rect(0, 178, 124, 58));
        var frame2 = new cc.SpriteFrame(res.Scoring_png,  cc.rect(0, 237, 124, 58));
        var frame3 = new cc.SpriteFrame(res.Scoring_png,  cc.rect(0, 296, 124, 58));
        var anim1 = new cc.AnimationFrame(frame1, 0.33);
        var anim2 = new cc.AnimationFrame(frame2, 0.33);
        var anim3 = new cc.AnimationFrame(frame3, 0.34);
        var animFrames = [anim1, anim2, anim3];
        var animation = new cc.Animation(animFrames, 1);
        cc.animationCache.addAnimation(animation, "1000points");
    }
    
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