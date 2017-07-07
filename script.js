////Item constructor
function Item(name, price){
  
  this.name=name;
  this.price=price;
  this.quantity=1;
  
  this.scanItem= function(){
      console.log("Item Name:"+this.name+"\n"+"Item Price:"+this.price);
  }
  
  
};

////Shopping cart constructor
function ShoppingCart(){
    //list of items
    this.items=[];
    this.total=0;
  	

    /////print out your current list
    this.printList= function(){
        this.items.forEach(function(thing){
        console.log(thing.name+":"+thing.quantity+"\r");
       })
   
     } 
    
    ////Builds on printlist, prints curent status of cart
    this.cartCheck=function(){
        console.log("*******Total Cart*******");
        this.printList();
        console.log("Cart total:$ "+this.total+"\r\r");
      	
    }
		
    ////Close out and payup
    this.checkOut=function (){
       console.log("*****Checking Out*******");
       this.printList();
       console.log("Total due:"+this.total+"\r"+"Cash or credit?");
       console.log("*****************");
       //return false;
    }
    
    
    ////check items list and update number if appropiate
    this.addItem=function(itemToAdd){
      
        var  cartItemsList=this.items;
        var _objectCheck=Object.getPrototypeOf(itemToAdd)==Object.getPrototypeOf(Item);
      	
       ////If function is not passed an item-type object, console log an error
        if(_objectCheck){
            console.log("Invlaid input type, try again.")
            return false;
            }
       ////Else if f object type is item, use for loop to check if any onject with same name are already in list
        if (cartItemsList.length>0){
          
          for(var i=1;i<cartItemsList.length;i++){
          //  cartItemsList.(function(listItem,cartIndex){ 
                if(cartItemsList[i].name==itemToAdd.name){
                    cartItemsList[i].quantity++;
                    this.total+=listItem.price;
                    this.cartCheck();
                    return true;
                }
            } 
       } 
       cartItemsList.push(itemToAdd);
       this.total+=itemToAdd.price;
        console.log("You added 1 "+itemToAdd.name);
        this.cartCheck();
    }////Exit addItem
};////End shoppingCart constructor
  
  
  
var Apple =new Item("Apple", .50);
var Pear =new Item("Pear", .75);
var desCart= new ShoppingCart();
desCart.addItem(Apple);
desCart.addItem(Apple);
desCart.addItem(Pear);
desCart.checkOut();
//console.log(Apple.price);
