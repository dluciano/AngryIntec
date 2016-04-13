(function(){
    var AbstractWoodObject = cc.PhysicsSprite.extend({
        metadata: null,
        body: null,
        shape: null,
        ctor: function(metadata, image, rect){
            this._super(image, rect);
            this.metadata = metadata;
            
            this.initPhysics();
            abird.space.addBody(this.body);
            abird.space.addShape(this.shape);
            this.setBody(this.body);
            this.body.setPos(cc.p(metadata.x,  metadata.y));
            this.shape.setCollisionType(metadata.collision_type);
            
            return true;
        },
        initPhysics: function(){
            throw "Physics not implemented";
        },
        remove: function(){
            var shapeList = this.body.shapeList;
            for(var i = 0; i < shapeList.length; i++){
                abird.space.removeShape(shapeList[i]);
                shapeList[i] = null;
            }
            
            abird.space.removeBody(this.body);
            this.removeFromParent(true);
        }
    });
    
    abird.AbstractWoodObject = AbstractWoodObject;
})();