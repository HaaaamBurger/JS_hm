function userCard(key,balance = 0,transactionLimit = 0,historyLogs = []) {
    let mainUser = {key,balance,transactionLimit,historyLogs}
    return {
        getCardOptions(){
            return {
                balance: mainUser.balance,
                transactionLimit: mainUser.transactionLimit,
                key: mainUser.key
            }
        },
        putCredits(setBalance){
            mainUser.balance += setBalance;
        },
        takeCredits(getCash){
            if(getCash <= mainUser.balance && getCash <= mainUser.transactionLimit){
                return mainUser.balance -= getCash;
            } else {
                console.log('Error!');
            }
        },
        setTransactionLimit(setTransactionLimit){
            mainUser.transactionLimit = setTransactionLimit;
        },
    }
}
let ret = userCard(4,500,0);
ret.setTransactionLimit(100);
ret.takeCredits(0);
