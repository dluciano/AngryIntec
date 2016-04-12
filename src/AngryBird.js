var abird;
(function(){
    var AngryBirdNamespace = cc.Class.extend({
        run: function(){
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
                default:
                    throw "Unreconogized object type: " + obj.type;
            }
            return t;
        }
    });
    abird = new AngryBirdNamespace();
})();