let inventory= [];
 
function addStock(productName, id, price, quantity){
    let stockDescription = {
        productName : productName , id: id,
        price: price, quantity : quantity,
       
    };
inventory.push(stockDescription);
 
}