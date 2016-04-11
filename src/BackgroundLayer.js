(function(){
    var BackgroundLayer = cc.Layer.extend({
        ctor: function(image){
            var size = cc.winSize;
            this._super();
            var i = new cc.Sprite(image);
            i.attr({
                x: 0,
                y: 0,
                anchorX: 0,
                anchorY: 0
            });
            this.addChild(i);
            return true;
        }
    });
    
    abird.BackgroundLayer = BackgroundLayer;
})();