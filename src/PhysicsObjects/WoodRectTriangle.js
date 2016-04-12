(function(){
    var WoodRectTriangle = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs4_png, cc.rect(169, 0, 80, 80));
            return true;
        },
        metadata: null
    });
    
    abird.WoodRectTriangle = WoodRectTriangle;
})();