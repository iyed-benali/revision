



function MakeCar(numOfPass,MaxNumOfPas,fuel,counter){
    var obj = {} 
    obj.numOfPass = numOfPass
    obj.MaxNumOfPas = MaxNumOfPas
    obj.fuel = fuel
    obj.counter = counter
    obj.mount = mount 
    obj.dismount = dismount
    obj
    return obj
}

function  mount (){
    if(this.numOfPass < this.MaxNumOfPas){
        return  this.numOfPass =this.numOfPass+1  
    }
    else{
        return 'no more space'
    }
}

function dismount (){
    if(this.numOfPass ===0){
        return 'no one left'
    }
    else{
        this.numOfPass = this.MaxNumOfPas -1
    }
}



function run (miles){
    var fuelUsed = miles / this.numOfPass 
if(this.numOfPass === 0){
    return 'no driver'
}
 if(fuelUsed > this.fuel){
    return 'not enough fuel'
 }
 this.fuel = this.fuel - fuelUsed
 this.counter = this.counter + miles 
 return this.fuel
}





