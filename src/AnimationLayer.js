(function(){
    var OBJECT_GROUP_NAME = "world";
    var AnimationLayer = cc.Layer.extend({
        map: null,
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
                    if(!abird.currentBird && sObj.Btype === "BIRD"){
                        cc.log("Entro a current");
                        abird.currentBird = sObj;
                    }
                
                    if(sObj.static) return;
                    self.addChild(sObj, 10);
                });
        }
    });
    abird.AnimationLayer = AnimationLayer;
})();