(function(){
    var WoodRectTriangle = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs4_png, cc.rect(169, 0, 80, 80));
            return true;
        },
        initPhysics: function(){            
            this.body = new cp.Body(5, cp.momentForBox(5, this.width, this.height));
            this.shape = new cp.BoxShape(this.body, this.width, this.height);
            this.shape.setElasticity(0);
            this.shape.setFriction(0.5);
        }
    });
    
    abird.WoodRectTriangle = WoodRectTriangle;
})();