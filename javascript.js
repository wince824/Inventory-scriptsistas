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