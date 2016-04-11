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
        }
    });
    abird = new AngryBirdNamespace();
})();