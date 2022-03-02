function checkCashRegister(price, cash, cid) {
  // in the cid sub-arrays, we have the currency and the total_value_in_cash available
  // in that currency.
  let change = cash - price; //this will change later in the code.
  const original_change = change; //so we save it here
  let return_object = { status : '', change : [] };
  // will be used to calculate the availability of each currency
  const currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  let total_in_drawer = 0;
  // summing all the money in the drawer
  cid.map(elem => {
    total_in_drawer += elem[1];
  });
  let original_cid = [...cid]; //we will need to return cid exactly as is when status is CLOSED
  // money in cid is given in ascending order of note value. reverse it so we can 
  // compare each sub-array with the correspondent one in currency array.
  cid.reverse();

// in each iteration, change the value of each currency in the result array to the number needed for the change.
  let result = [...currency];
  for(let i = 0; i < currency.length; i++) {
    let return_money = 0; //determines whether we return change in that currency/not
    let bill = cid[i][1]/currency[i][1];
    bill.toFixed(2);
    while(change.toFixed(2) >= currency[i][1] && bill >=1) {
      change -= currency[i][1];
      return_money += currency[i][1];
      bill--;
    }

    if(return_money > 0) {
      // check if the value of return_money is a decimal. if it is, round off to two
      if(return_money - Math.floor(return_money) !== 0) {
        result[i][1] = return_money.toFixed(2); //this returns string
        result[i][1] = parseFloat(result[i][1]); //convert back to number
      } else {
        // no need for rounding off
        result[i][1]= return_money;
      }
    }else{
      result[i][1] = return_money;
    }
  }

  let sum_result = 0; //we will store here all the money we can afford to return as change
  result.map(elem => {
    sum_result += elem[1];
  });

  sum_result.toFixed(2);

  if(total_in_drawer < original_change || sum_result < original_change) {
    return_object.status = 'INSUFFICIENT_FUNDS';
  } else if(total_in_drawer == original_change) {
    return_object.status = 'CLOSED';
    return_object.change = original_cid;
  } else {
    // we want to involve only the currency that has been used to return change
    let filtered_result = [];
    for(let x = 0; x < result.length; x++) {
      if(result[x][1] !== 0) {
        filtered_result.push(result[x]);
      }
    }
    return_object.status = 'OPEN';
    return_object.change = filtered_result;
  }

  return return_object;
}