class Redbox{

    constructor(x,y,width,height){
    
        var options = {
    
            isStatic:true
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        fill(255,0,0);
    
        
        World.add(world, this.body);
    }
    
    display(){
    
    var pos = this.body.position;
    rect(pos.x,pos.y,this.width,this.height);
    fill(255);
    
    
    }
    
    
    }
