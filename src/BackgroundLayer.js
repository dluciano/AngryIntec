(function(){
    var BackgroundLayer = cc.Layer.extend({
        ctor: function(image){
            var size = cc.winSize;
            this._super();
            var i = new cc.Sprite(image);
            i.attr({
                x: size.width/2,
                y: size.height/2,
            });
            this.addChild(i);
            return true;
        }
    });
    
    abird.BackgroundLayer = BackgroundLayer;
})();