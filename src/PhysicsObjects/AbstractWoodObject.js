(function(){
    var AbstractWoodObject = cc.Sprite.extend({
        ctor: function(metadata, image, rect){
            this._super(image, rect);
            this.metadata = metadata;
            this.attr({
                x: metadata.x,
                y: metadata.y
            });
            return true;
        },
        metadata: null
    });
    
    abird.AbstractWoodObject = AbstractWoodObject;
})();