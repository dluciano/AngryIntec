(function(){
    function convertToStaticShape(obj, space, prop){
            var staticsObjs = [];
            var p1 = obj.polylinePoints[0];
            for(var i = 1; i <= obj.polylinePoints.length - 1; i++){
                var p2 = obj.polylinePoints[i];
                //Every point in polyline is using traditional coordinate system
                //For that reason I'm inverting it using (-) sign.
                //Also points are located releated to object position so I had
                //To add the obj.x and obj.y coors.
                //It's important to convert point to ints, 'cause they originally 
                //Are strings values
                var v1 = cp.v(parseInt(p1.x) + obj.x, (-parseInt(p1.y)) + obj.y);
                var v2 = cp.v(parseInt(p2.x) + obj.x, (-parseInt(p2.y)) + obj.y);
                var seg = new cp.SegmentShape(space.staticBody, v1 , v2, 0);
                staticsObjs.push(seg);
                p1 = p2;
            }
            var e = (prop && prop.elasticity) ? prop.elasticity : 0;
            var f = (prop && prop.friction) ? prop.friction : 20;

            staticsObjs.forEach(function(obj2){
                obj2.setElasticity(e);
                cc.log(f);
                obj2.setFriction(f);
                space.addStaticShape(obj2);
            });
    }
    
    
    var PolyWall = cc.Class.extend({
        ctor: function(metadata){
            convertToStaticShape(metadata, abird.space);
        },
        static: true
    });
    
    abird.PolyWall = PolyWall;
})();