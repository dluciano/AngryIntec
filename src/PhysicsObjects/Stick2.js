(function(){
    var Stick2 = cc.Sprite.extend({
        ctor: function(metadata){
            this._super( res.Pigs2_png, cc.rect(832, 0, 44, 126));
            this.x = metadata.x-28;
            this.y = metadata.y+72;
            return true;
        }
    });
    
    abird.Stick2 = Stick2;
})();