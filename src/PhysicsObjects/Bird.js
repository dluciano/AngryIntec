(function(){
    var Bird = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs2_png, cc.rect(732, 800, 58, 58));
//            this.animate();
            return true;
        },
        animate: function(){
//            var frame1 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 641, 98, 98));
//            var frame2 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 739, 98, 98));
//            var spriteFrames = [frame1, frame2];
//            var animation = new cc.Animation(spriteFrames, 0.1);
//            this.runAction(cc.repeatForever(cc.animate(animation)));
        },
        initPhysics: function(){
            this.body = new cp.Body(5, cp.momentForBox(5, this.width, this.height));
            this.shape = new cp.BoxShape(this.body, this.width, this.height);
            this.shape.setElasticity(0);
            this.shape.setFriction(0.5);
        }
    });
    
    abird.Bird = Bird;
})();