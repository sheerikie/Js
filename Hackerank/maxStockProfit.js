function maxStock(array) {
  let buyPrice = 0;
  let sellPrice = 0;
  let maxProfit = -1;
  let changePrice = true;

  for (let i = 0; i < array.length; i++) {
    if (changePrice) buyPrice = array[i];
    sellPrice = array[i + 1];
    if (sellPrice < buyPrice) {
      changePrice = true;
    } else {
      let difference = sellPrice - buyPrice;
      if (difference > maxProfit) maxProfit = difference;
      changePrice = false;
    }
  }

  return maxProfit;
}
maxStock([12, 23, 34, 48, 78]);
