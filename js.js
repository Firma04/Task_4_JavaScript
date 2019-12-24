'use strict';




let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?: ", " ");
    time = prompt("Введите дату в формате YYYY-MM-DD: ", " ");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?: ", " ");
    }
}
start();

let appData = { //Методи
    cash: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце ", " "),
                b = prompt("Во сколько обойдется ?", " ");
    
            if(typeof(a)=== "string" && (typeof(a) != null && (typeof(b) != null && a !="" && b !="" && a.length < 50))){
                console.log("done");
            appData.expenses[a] = b;
            } else {
                console.log("Повтор");
                i = i - 1;
            }
        }
    },
    detectDayBudget: function(){
        appData.DayBudget = (appData.cash / 30).toFixed();
        alert("Ежедневный бютжет: " + appData.DayBudget + "USD - функция");
    
    },
    detectLevel: function(){
        if (appData.DayBudget > 1000){
            console.log("Доход слишком большой: " + appData.DayBudget + " USD");
        } else if (appData.DayBudget > 400 && appData.DayBudget < 1000){
            console.log("Доход достаточный: " + appData.DayBudget + " USD");
        } else if (appData.DayBudget < 400){
            console.log("Нужно улучшать доход: " + appData.DayBudget + " USD");
        } else {
            console.log("Ошибка: ");
        } 
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какая сума накопления? "),
                percent = +prompt("Под какой процент? ");
            appData.monthIncome = save/100/12*percent;
            alert("Доход с вашего депозита составляет: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 0; i <= 2; i++){
            let dontOptExpenses = prompt("Не обезательные росходы: ", "");
            appData.optionalExpenses[i] = dontOptExpenses;
            //console.log(appData.optionalExpenses); - не обезательно 
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        while (items == "" || items == null || typeof(items) != "string") {
            items = prompt("Ошибка, Повторите ище раз", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то ище?"));
        appData.income.sort();

        appData.income.forEach (function (newmassive, i){
            alert("Способы доп. заработка: " + (i+1) + " - " + newmassive);
        });
    }
};
for (let passkey in appData) {
    console.log("Наша программа включает в себя данные: " + passkey + " - "+ appData[passkey] );
}


