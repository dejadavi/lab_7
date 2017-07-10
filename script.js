////Item constructor
function Item(name, price,id){
  
  this.name=name;
  this.price=price;
  this.quantity=1;
  this.id=id;
  this.outputRow=undefined;

    
};

function Store(){

this.inventory={};
this.inventory["0"]=new Item("Apple", .50,0);
this.inventory["1"]=new Item("Orange", .50,0);
this.inventory["2"]=new Item("Pear", .75,1);
this.inventory["3"]= new Item("Grape", 3.00,2);
};

////populate dom with buttons, each with id from id




////Shopping cart constructor
function ShoppingCart(){
    //list of items
    this.items=[];
    this.total=0;
    this.rowNum=0;
  	

    /////print out your current list
    this.print= function(){
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
    this.addItem=function(addId){
      
        var  cartItemsList=this.items;
        //var _objectCheck=Object.getPrototypeOf(desStore[addId])==Object.getPrototypeOf(Item);
      	
       ////If function is not passed an item-type object, console log an error
        if(false){
            console.log("Invlaid input type, try again.")
            return false;
            }
       ////Else if f object type is item, use for loop to check if any onject with same name are already in list
        if (cartItemsList.length>0){
          
          for(var i=0;i<cartItemsList.length;i++){
          //  cartItemsList.(function(listItem,cartIndex){ 
                if(cartItemsList[i].id==addId){
                    cartItemsList[i].quantity++;
                    this.total+=cartItemsList[i].price;
                    console.log(cartItemsList[i]);
                    console.log("You added 1 more "+cartItemsList[i]);
                    return true;
                    ///update dom grid element
                }
            } 
       }
      
       var itemToAdd=desStore.inventory[addId];
       itemToAdd.outputRow=this.rowNum;
       console.log(itemToAdd);
       this.total+=itemToAdd.price;
       cartItemsList.push(itemToAdd);
      
       console.log("You added 1 "+itemToAdd.name);

        var total=document.getElementById("total");
    total.textContent=desCart.total;
        
       
    //    var icon=document.createElement("div");
    //    icon.setAttribute("class", "foodIcon");
    //    icon.textContent=itemToAdd.name;
       
    //    var parent=document.getElementById("panel2");
    //    parent.appendChild(icon);
    //    this.rowNum++;
       return true;
       
    }////Exit addItem
};////End shoppingCart constructor
  
  var dragged=undefined;

///Picked up object events




 document.addEventListener("drag", function( event ) {
     
  }, false);

  document.addEventListener("dragstart", function(event){
    //triggered once, start of drag
    dragged=event.target.cloneNode(false);
    event.target.style.opacity=.5;
    var potential=document.getElementsByClassName("dropable");
    for(var i=0;i<potential.length;i++){
         potential[i].style.backgroundColor="blue";
         potential[i].style.opacity=.5;
     }


  }, false);


  document.addEventListener("dragend", function(event){
 
}, false);

//drop target events

 

document.addEventListener("dragover",function(event){
    //ms delay, little bit of hover. allows drop to happen
            event.preventDefault();

    
},false);

document.addEventListener ("dragenter", function(event){
    //enter potential drag zone
    if(event.target.className=="dropable"){
            event.target.style.background="purple";
    }
}, false);

document.addEventListener ("dragleave", function(event){
    //leave potential drop zone
            
}, false);

document.addEventListener("drop", function(event){
    event.preventDefault();

    if(event.target.className=="dropable"){
           event.target.classList.add("dropped");
            event.target.classList.remove("dropable");
            event.target.style.opacity=null;
            event.target.style.background=null;
            event.target.dataset.id=dragged.id;
            event.target.onclick=desCart.addItem(event.target.dataset.id);
           event.target.textContent=desStore.inventory[event.target.dataset.id].name;
      

    }  
    
  
        
        var potential=document.getElementsByClassName("dropable");
    for(var i=0;i<potential.length;i++){
        if(potential[i].className=="dropable"){
         potential[i].style.backgroundColor=null;
         potential[i].style.opacity=null;}
         
   
     }
    //     dragged.style.opacity=.5;
      
    
}, false);







var desCart= new ShoppingCart();
var desStore= new Store();



// desCart.addItem(Apple);
// desCart.addItem(Apple);
// desCart.addItem(Pear);
//desCart.checkOut();
//console.log(Apple.price);
