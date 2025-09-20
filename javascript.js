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