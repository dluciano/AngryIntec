(function(){
    var WoodSquare = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs4_png, cc.rect(0, 1, 82, 82));
            return true;
        }
    });
    
    abird.WoodSquare = WoodSquare;
})();