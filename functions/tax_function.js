function getSocSecTax(grosspay) {
    let taxrate = (6.2 / 100);
    return taxrate * grosspay;
  }
  
  function getMediacarTax(grosspay) {
     let taxrate = (1.45 / 100);
     return taxrate * grosspay;
  }
  function getFederalTax(grosspay, witholdingcode) 
  {
    if (witholdingcode == 0) {
       let taxrate = (23 / 100);
      return taxrate * grosspay;
    }
    else if (witholdingcode == 1) {
       let taxrate = (21 / 100);
      return taxrate * grosspay;
    }
    else if (witholdingcode == 2) {
       let taxrate = (19.5 / 100);
      return taxrate * grosspay;
    }
    else {
       // 18% 
       let result = witholdingcode - 4;
       let taxrate  = 18 - (result * 0.5);
      return (taxrate/100) * grosspay;
    }
  }
  
  let input = 750;
  let Socsectax =  getSocSecTax(input);
  let MediaCarTax =  getMediacarTax(input);

