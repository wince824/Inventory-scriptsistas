
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
