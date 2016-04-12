(function(){
    var OBJECT_GROUP_NAME = "world";
    var AnimationLayer = cc.Layer.extend({
        ctor: function(map){
            this._super();
            this.map = map;
            this.placeObjects();
            return true;
        },
        placeObjects: function(){
            var self = this;
            this.map
                .getObjectGroup(OBJECT_GROUP_NAME)
                .getObjects()
                .forEach(function(obj){
                    var sObj = abird.tmxObjectBuilder(obj);
                    cc.log(sObj);
                    self.addChild(sObj, 10);
                });
        },
        map: null
    });
    abird.AnimationLayer = AnimationLayer;
})();