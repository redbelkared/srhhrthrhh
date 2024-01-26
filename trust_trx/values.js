var data = {
    "balance_rub": "52 472 163,37 ₽",
    "usdt": {
        "balance": "593 173,9021",
        "balance_rub": "52 472 163,37 ₽",
        "rate": "88,46 ₽",
        "percent": "-0,01 %",
        "color": "red",
    },
    "trx": {
        "balance": "0,000005",
        "balance_rub": "0,00 ₽",
        "rate": "10,15 ₽",
        "percent": "+3,02 %",
        "color": "green",
    },
    "btc": {
        "balance": "0",
        "balance_rub": "0,00 ₽",
        "rate": "3 728 198,24 ₽",
        "percent": "-4,23 %",
        "color": "red",
    },
    "eth": {
        "balance": "0",
        "balance_rub": "0,00 ₽",
        "rate": "199 741,43 ₽",
        "percent": "+2,28 %",
        "color": "green",
    },
    "bnb": {
        "balance": "0",
        "balance_rub": "0,00 ₽",
        "rate": "27 999,61 ₽",
        "percent": "-0,47 %",
        "color": "red",
    },
    "twt": {
        "balance": "0",
        "balance_rub": "0,00 ₽",
        "rate": "100,42 ₽",
        "percent": "+3,49 %",
        "color": "green",
    },
};

// Вставка данных в HTML теги
document.getElementById('balance_rub').innerHTML = data['balance_rub'];

document.getElementById('usdt_balance').innerHTML = data['usdt']['balance'];
document.getElementById('usdt_balance_rub').innerHTML = data['usdt']['balance_rub'];
document.getElementById('usdt_rate').innerHTML = data['usdt']['rate'];
document.getElementById('usdt_percent').innerHTML = data['usdt']['percent'];

document.getElementById('t_usdt_balance').innerHTML = data['usdt']['balance'] + " USDT";
document.getElementById('t_usdt_balance_rub').innerHTML = "≈ " + data['usdt']['balance_rub'];
document.getElementById('t_usdt_rate').innerHTML = data['usdt']['rate'];
document.getElementById('t_usdt_percent').innerHTML = data['usdt']['percent'];

document.getElementById('trx_balance').innerHTML = data['trx']['balance'];
document.getElementById('trx_balance_rub').innerHTML = data['trx']['balance_rub'];
document.getElementById('trx_rate').innerHTML = data['trx']['rate'];
document.getElementById('trx_percent').innerHTML = data['trx']['percent'];

// document.getElementById('btc_balance').innerHTML = data['btc']['balance'];
// document.getElementById('btc_balance_rub').innerHTML = data['btc']['balance_rub'];
// document.getElementById('btc_rate').innerHTML = data['btc']['rate'];
// document.getElementById('btc_percent').innerHTML = data['btc']['percent'];

document.getElementById('eth_balance').innerHTML = data['eth']['balance'];
document.getElementById('eth_balance_rub').innerHTML = data['eth']['balance_rub'];
document.getElementById('eth_rate').innerHTML = data['eth']['rate'];
document.getElementById('eth_percent').innerHTML = data['eth']['percent'];

document.getElementById('twt_balance').innerHTML = data['twt']['balance'];
document.getElementById('twt_balance_rub').innerHTML = data['twt']['balance_rub'];
document.getElementById('twt_rate').innerHTML = data['twt']['rate'];
document.getElementById('twt_percent').innerHTML = data['twt']['percent'];

// document.getElementById('bnb_balance').innerHTML = data['bnb']['balance'];
// document.getElementById('bnb_balance_rub').innerHTML = data['bnb']['balance_rub'];
// document.getElementById('bnb_rate').innerHTML = data['bnb']['rate'];
// document.getElementById('bnb_percent').innerHTML = data['bnb']['percent'];


window.onload = function () {
    if (data['usdt']['color'] == "red") {
        document.getElementById('usdt_percent').classList.add("text-error");
        document.getElementById('t_usdt_percent').classList.add("text-error");
    } else {
        document.getElementById('usdt_percent').classList.add("text-textBuy");
        document.getElementById('t_usdt_percent').classList.add("text-textBuy");
    }


    if (data['trx']['color'] == "red") {
        document.getElementById('trx_percent').classList.add("text-error");
    } else {
        document.getElementById('trx_percent').classList.add("text-textBuy");
    }
    
    // if (data['btc']['color'] == "red") {
    //     document.getElementById('btc_percent').classList.add("text-error");
    // } else {
    //     document.getElementById('btc_percent').classList.add("text-textBuy");
    // }

    if (data['eth']['color'] == "red") {
        document.getElementById('eth_percent').classList.add("text-error");
    } else {
        document.getElementById('eth_percent').classList.add("text-textBuy");
    }

    // if (data['bnb']['color'] == "red") {
    //     document.getElementById('bnb_percent').classList.add("text-error");
    // } else {
    //     document.getElementById('bnb_percent').classList.add("text-textBuy");
    // }

    if (data['twt']['color'] == "red") {
        document.getElementById('twt_percent').classList.add("text-error");
    } else {
        document.getElementById('twt_percent').classList.add("text-textBuy");
    }
}