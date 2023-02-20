function userCard(key, balance = 0, transactionLimit = 100, historyLogs = []) {
    return {
        getCardOptions() {
            return {
                key,
                balance,
                transactionLimit,
                historyLogs
            }
        },
        putCredits(money) {
            balance += money;
            const historyLog = {
                operationType: 'Recieved Credits',
                credits: money,
                operationTime: new Date()
            };
            historyLogs.push(historyLog);
        },
        takeCredits(takeMoney) {
            if (balance >= takeMoney && takeMoney <= transactionLimit) {
                balance -= takeMoney;
            } else {
                console.error('poipoi!');
            }
            const historyLog = {
                operationType: 'Output Credits',
                credits: takeMoney,
                operationTime: new Date()
            };
            historyLogs.push(historyLog);
        },
        setTransactionLimit(setLimit) {
            transactionLimit = setLimit;
            const historyLog = {
                operationType: 'Limit Change',
                credits: setLimit,
                operationTime: new Date()
            };
            historyLogs.push(historyLog);
        },
        transferCredits(money, card) {
            money += (money * 100) / 0.5;
            if (balance >= money && money <= transactionLimit) {
                balance -= money;
                card.putCredits(money);
            }
        }
    }
}

function UserAccount(name, cards = []) {
    return {
        name,
        cards,
        addCard() {
            if (cards.length < 3) {
                cards.push(userCard(cards.length + 1));
            }
        },
        getCardByKey(id) {
            if (id > 0 && id <= 3 && cards.length <= 3) {
                return cards[id-1];
            }
        }
    }
}

// let user1 = UserAccount('Vasya');
// user1.addCard();
// user1.addCard();
//
// let card1 = user1.getCardByKey(1);
// let card2 = user1.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300,card2);
//
// card2.takeCredits(0);
//
// console.log(card1.getCardOptions());