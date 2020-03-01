class Chain {
    constructor(bodyA,pointB){
var opt={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1.0,
    length:10
    

}
this.pointB = pointB
this.chain=Constraint.create(opt);
World.add(world, this.chain);
    }
 display(){
     
    if(this.chain.bodyA){
     var pointA=this.chain.bodyA.position;
     var pointB=this.pointB
     strokeWeight(5);
     line (pointA.x,pointA.y,pointB.x,pointB.y);
 }

}
Fly(){
    this.chain.bodyA = null;
}
}
