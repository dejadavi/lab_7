////Item constructor
function item(name, price){
  
  this.name=name;
  this.price=price;
  this.quantity=1;
  
  this.scanItem= function(){
      console.log("Item Name:"+this.name+"\n"+"Item Price:"+this.price);
  }
  
  
};

////Shopping cart constructor
function shoppingCart(){
    //list of items
    this.items=[];
    this.total=0;
  	

       /////print out your current list
    this.printList= function(){
        this.items.forEach(function(thing){
        console.log(thing.name+":"+thing.quantity+'\n');
       })
   
     } 
    
    
    this.cartCheck=function(){
        console.log("*******Total Cart*******");
        this.printList();
        console.log("Cart total:$ "+this.total+"/n/n");
      	
    }

    this.checkOut=function (){
       console.log("*****Checking Out*******");
       this.printList();
       console.log("Total due:"+this.total+'\n'+"Cash or credit?");
      console.log("*****************");
       return false;
    }
    
    
    ////check items list and update number if appropiate
    this.addItem=function(itemToAdd){
        var _contained=false;
        var _objectCheck=false;
      	var _location;
       ////If function is not passed an item-type object, console log an error
        if(_objectCheck){
            console.log("Invlaid input type, try again.")
       ////Else if f object type is item, use for loop to check if any onject with same name are already in list
        } else if (this.items.length===0){
            _contained=false;
          	//console.log("Empty cart");
        } else {
      	    ////For loops through object items list and 
                for(var i=0;i<this.items.length;i++){
                ////If name of item to add equals any name of object in items list, increase quantity of that item
                    if(this.items[i].name===itemToAdd.name){  
                      _location=i;
                      _contained=true;
                     
                } 
                
             } ////Exit for loop
                  
         }//exit else
      
      if(_contained){
				
       this.total+=itemToAdd.price;
       this.items[_location].quantity++;
       console.log("Added another "+itemToAdd.name+" to your cart.");
       } else if (!_contained){
               this.items.push(itemToAdd);
               this.total+=itemToAdd.price;
               console.log("Added a\(n\) "+itemToAdd.name);
       } else {console.log("Error, check input")} ////Exit Else loop   
    
    this.cartCheck();
    }////Exit addItem
  
};////End shoppingCart constructor
  
  
  
var Apple =new item("Apple", .50);
var Pear =new item("Pear", .75);
var desCart= new shoppingCart();
desCart.addItem(Apple);
desCart.addItem(Apple);
desCart.checkOut();
//console.log(Apple.price);
