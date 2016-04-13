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
            this.initCollisions();
        },
        initCollisions: function(){
            abird.space.addCollisionHandler(
                WOOD, 
                PIG,
                this.collisionBegin.bind(this)
            );
        },
        collisionBegin : function (arbiter, space) {
            var shapes = arbiter.getShapes();
            var wood = null;
            var pigs = [];
            shapes.forEach(function(s){
                if(s.collision_type === WOOD)
                    wood = s
                else
                    pigs.push(s);
            });
            var woodMass = wood.body.m;
            
            abird.space.addPostStepCallback(function(){
                pigs.forEach(function(p){
                    if(p.body.m - woodMass <= 0){
                        p.die();
                        return;
                    }
                    p.body.m -= woodMass;
                });
            });
            return true;
        }
    });
    
    abird.WoodRectTriangle = WoodRectTriangle;
})();