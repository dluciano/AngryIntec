(function(){
    var WoodBall = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs4_png, cc.rect(170, 160, 74, 74));
            return true;
        },
        metadata: null
    });
    
    abird.WoodBall = WoodBall;
})();