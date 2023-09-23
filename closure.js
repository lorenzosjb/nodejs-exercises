var houseRent = (function() {
    var rent = 100000;
    function changeBy(amount) {
      rent += amount;
    }
    return {
      raise: function() {
        changeBy(10000);
      },
      lower: function() {
        changeBy(-10000);
      },
      currentAmount: function() {
        return rent;
      }
    };
  })(); 
 
  console.log(houseRent.currentAmount()); // $100,000
  houseRent.raise(); 
  houseRent.lower(); 
  houseRent.raise(); 
  console.log(houseRent.currentAmount()); // $100,000
  console.log(houseRent.rent); // undefined
   
 