(function(){
    var WoodBall = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs4_png, cc.rect(170, 160, 74, 74));
            return true;
        },
        initPhysics: function(){
            this.body = new cp.Body(5, cp.momentForBox(5, this.width, this.height));
            this.shape = new cp.BoxShape(this.body, this.width, this.height);
            this.shape.setElasticity(0);
            this.shape.setFriction(0.5);
        }
    });
    
    abird.WoodBall = WoodBall;
})();