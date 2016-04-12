var abird;
(function(){
    var AngryBirdNamespace = cc.Class.extend({
        run: function(){
            this.space = new cp.Space();
            this.space.gravity = cp.v(0, -100);
            cc.director.runScene(new abird.MainGameScene());
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
                default:
                    throw "Unreconogized object type: " + obj.type;
            }
            return t;
        },
        space: null
    });
    abird = new AngryBirdNamespace();
})();