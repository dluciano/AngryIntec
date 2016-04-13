(function(){
    var Points = cc.Sprite.extend({
        ctor: function(metadata){
            this._super(res.Scoring_png, cc.rect(0, 0, 124, 58));
            this.metadata = metadata;
            this.x = metadata.x;
            this.y = metadata.y;
            return true;
        },
        runAnimation: function(){
            var fade = cc.fadeOut(1.0);
            var move = cc.moveBy(1, cc.p(0, 50));
            var animation = cc.animate(cc.animationCache.getAnimation(this.metadata.anim));
            var action = cc.spawn(
                fade,
                animation,
                move
            );

            this.runAction(action);
        },
        metadata: null
    });
    
    abird.Points = Points;
})();