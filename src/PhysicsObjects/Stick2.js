(function(){
    var Stick2 = cc.Sprite.extend({
        ctor: function(metadata){
            this._super( res.Pigs2_png, cc.rect(832, 0, 44, 126));
            this.x = metadata.x;
            this.y = metadata.y;
            return true;
        }
    });
    
    abird.Stick2 = Stick2;
})();