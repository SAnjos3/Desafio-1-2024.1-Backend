function checkCashRegister(price, cash, cid) {
  let troco = cash - price
    let result = []
  let caixas = {
    "PENNY": 0.01, 
    "NICKEL": 0.05, 
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let calcTroco = {
    status: undefined,
    change: undefined
  }
  for(let i=cid.length-1;i>=0;i--){
    if(troco>=caixas[cid[i][0]]){
      if(troco>=cid[i][1] && cid[i][1]!=0){
        result.push([cid[i][0],cid[i][1]])
        troco -= cid[i][1]
        troco = troco.toFixed(2)
        cid[i][1] = 0
        }

      else if(troco<cid[i][1]){
        let num = troco/caixas[cid[i][0]] |0;
        result.push([cid[i][0],num*caixas[cid[i][0]]])
        troco = (troco%caixas[cid[i][0]])
        troco = troco.toFixed(2)
        cid[i][1] -= troco
        }
      }
    } 
    if(troco == 0){
      if(cid.every(caixa => caixa[1] == 0)){
        for(let i in cid){
        let loc = cid[i].indexOf(result[0][0])
        if(loc != (-1)){
          cid.splice(loc,1,result[0])
          break;
        }
        }
        calcTroco.status = "CLOSED"
        calcTroco.change = cid
    }else{
      calcTroco.status = "OPEN"
      calcTroco.change = result
    }
    }
    else{
      result = []
      calcTroco.status = "INSUFFICIENT_FUNDS"
      calcTroco.change = result
    }
return calcTroco
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.