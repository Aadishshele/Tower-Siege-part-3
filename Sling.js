class Slingshot{
    constructor(BodyA,pointB){
        var options={
            bodyA : BodyA,
            pointB : pointB,
            length : 50,
            stiffness : 0.01
        
        }
        

        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }
    display(){
        push()
        strokeWeight(5)
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        }
        pop()
        
    }
    Fly(){
        this.sling.bodyA=null
    }
    Attach(body){
        this.sling.bodyA=body
    }
}