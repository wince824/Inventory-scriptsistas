   let inventory= [];
 
function addStock(productName, id, price, quantity){
    let stockDescription = {
        productName : productName , id: id,
        price: price, quantity : quantity,
       
    };
inventory.push(stockDescription);
 
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