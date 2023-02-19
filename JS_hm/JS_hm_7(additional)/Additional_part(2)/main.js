function userCard(key,balance = 0,transactionLimit = 0,historyLogs = []) {
    return {
        getCardOptions(){
            return {
                balance,
                transactionLimit,
                key
            }
        },
        putCredits(setBalance){
            balance += setBalance;
        },
        takeCredits(getCash){
            if(getCash <= balance && getCash <= transactionLimit){
                return balance -= getCash;
            } else {
                console.log('Error!');
            }
        },
        setTransactionLimit(setTransactionLimit){
            transactionLimit = setTransactionLimit;
        },
    }
}
let ret = userCard(4,500,100);
ret.takeCredits(0);
console.log(ret.getCardOptions());