   let inventory= [];
 
function addStock(productName, id, price, quantity){
    let stockDescription = {
        productName : productName , id: id,
        price: price, quantity : quantity,
       
    };
inventory.push(stockDescription);
 
}

function findProduct(stockId) {
   for (let i = 0; i < inventory.length; i++) {
       if (inventory[i].id === stockId) {
           return inventory[i];
       }
   }
   return null;
}
 
function checkLowStock(product) {
   if (product.quantity < 10) {
       console.log("Warning:", product.productName, "is running low only", product.quantity, " items left");
       return true;
   }
   return false;
}
   
   function removeStock(productId){
   let product = findProduct(productId);
   if (!product) {
       console.log("Product with id", productId, "not found");
       return inventory;
   }
   inventory = inventory.filter(function(stock){
       if( stock.id == productId){
      console.log("product removed" , product);
      return false
       }
       else{
           return true;
       }
   });
  console.log("new inventory", inventory);
   return inventory;
}
   
   function updatedStock(stockId, incrementalStockQuantity){
   let product = findProduct(stockId);
   if (!product) {
       console.log("Product with id", stockId, "not found");
       return inventory;
   }
   checkLowStock(product);
   product.quantity += incrementalStockQuantity;
   console.log("updated inventory" , inventory);
   return inventory;
}