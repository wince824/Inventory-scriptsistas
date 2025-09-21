<<<<<<< HEAD

function generateReport() {
   if (inventory.length == 0) {
       console.log("Inventory is empty");
       return;
   }
   let totalProducts = inventory.length;
   let totalValue = 0;
   let lowStockItems = [];
   for (let i = 0; i < inventory.length; i++) {
       let product = inventory[i];
       totalValue += product.price * product.quantity;
       if (checkLowStock(product)) {
           lowStockItems.push(product.productName);
       }
   }
   console.log("INVENTORY SUMMARY:")
   console.log("Total Products:", totalProducts);
   console.log("Total Inventory Value:", totalValue);
   console.log("Low Stock Items:", lowStockItems);
}

addStock("diapers", 1, 10000, 100);
addStock("wipes", 2, 3000, 9);
addStock("pads", 3, 2500, 9);
addStock("tampons", 4, 8000, 200);
console.log(inventory);
removeStock(1);
updatedStock(2, 100);
generateReport();
=======
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
>>>>>>> dbd6d5d2e2fb2fd7f9960bf8d5267a7558460d47
