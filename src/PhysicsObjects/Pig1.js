(function(){
    var Pig1 = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs_png, cc.rect(254, 641, 98, 98));
            this.animate();
            return true;
        },
        animate: function(){
            var frame1 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 641, 98, 98));
            var frame2 = new cc.SpriteFrame(res.Pigs_png,  cc.rect(254, 739, 98, 98));
            var anim1 = new cc.AnimationFrame(frame1, 1);
            var anim2 = new cc.AnimationFrame(frame2, 1);
            var animFrames = [anim1, anim2, anim1];
            var animation = new cc.Animation(animFrames, 3);
            this.runAction(cc.repeatForever(cc.animate(animation)));
        },
        initPhysics: function(){
            this.body = new cp.Body(5, cp.momentForBox(5, this.width, this.height));
            this.shape = new cp.BoxShape(this.body, this.width, this.height);
            this.shape.setElasticity(0);
            this.shape.setFriction(0.5);
        }
    });
    
    abird.Pig1 = Pig1;
})();