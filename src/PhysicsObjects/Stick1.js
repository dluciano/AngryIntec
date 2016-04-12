(function(){
    var Stick1 = cc.Sprite.extend({
        ctor: function(metadata){
            this._super( res.Pigs2_png, cc.rect(0, 0, 40, 200));
            this.x = metadata.x;
            this.y = metadata.y;
            return true;
        }
    });
    
    abird.Stick1 = Stick1;
})();