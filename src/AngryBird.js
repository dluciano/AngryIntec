var abird;
(function(){
    var AngryBirdNamespace = cc.Class.extend({
        run: function(){
            cc.director.runScene(new abird.MainGameScene());
        }
    });
    abird = new AngryBirdNamespace();
})();