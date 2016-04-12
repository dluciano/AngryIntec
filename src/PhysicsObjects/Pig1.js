(function(){
    var Pig1 = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs_png, cc.rect(254, 641, 98, 98));
            this.animate();
            return true;
        },
        animate: function(){
            this.runAction(cc.repeatForever(cc.animate(cc.animationCache.getAnimation("pig1"))));
        },
        initPhysics: function(){
            var self = this;
            this.body = new cp.Body(5, cp.momentForBox(5, this.width, this.height));
            this.shape = new cp.BoxShape(this.body, this.width, this.height);
            this.shape.setElasticity(0);
            this.shape.setFriction(0.5);
            
            this.shape.die = function(){
                self.stopAllActions();
                abird.pigExplosion(self.x, self.y);
                self.remove();
            };
        }
    });
    
    abird.Pig1 = Pig1;
})();