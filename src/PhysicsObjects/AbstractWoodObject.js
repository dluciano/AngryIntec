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
            
            return true;
        },
        initPhysics: function(){
            throw "Physics not implemented";
        }
    });
    
    abird.AbstractWoodObject = AbstractWoodObject;
})();