(function(){
    var Bird = abird.AbstractWoodObject.extend({
        ctor: function(metadata){
            this._super(metadata, res.Pigs2_png, cc.rect(732, 800, 58, 58));
            this.animate();
            this.initCollisions();
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
            
        },
        initCollisions: function(){
            abird.space.addCollisionHandler(
                BIRD, 
                PIG,
                this.collisionBegin.bind(this)
            );
        },
        birdImpulse: function(){
            this.body.applyImpulse(cp.v(1000, 800), cp.v(0, 0));
        },
        collisionBegin : function (arbiter, space) {
            var shapes = arbiter.getShapes();
            var bird = null;
            var pigs = [];
            shapes.forEach(function(s){
                if(s.collision_type === BIRD)
                    bird = s
                else
                    pigs.push(s);
            });
            var birdMass = bird.body.m;
            var self = this;
            abird.space.addPostStepCallback(function(){
                pigs.forEach(function(p){
                    abird.birdExplosion(self.x, self.y);
                    if(p.body.m - birdMass <= 0){
                        p.die();
                        return;
                    }
                    p.body.m -= birdMass;
                });
            });
            return true;
        }

    });
    
    abird.Bird = Bird;
})();