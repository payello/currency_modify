
var currency = {
    
"Australia Dollar": "AUD",
"Bulgaria Lev": "BGN",
"Brazil Real": "BRL",
"Canada Dollar": "CAD",
"Switzerland Francs": "CHF",
"China Yuan": "CNY",
"Czechia Koruna": "CZK",
"Denmark Krone": "DKK",
"EURO": "EUR",
"United Kingdom Pound": "GBP",
"Hong Kong Dollar": "HKD",
"Croatia Kuna": "HRK",
"Hungary Forint": "HUF",
"Indonesian Rupiah": "IDR",
"Israel New Shekel": "ILS",
"India Rupees": "INR",
"Japan Yen": "JPY",
"South Korea Won": "KRW",
"Mexico Peso": "MXN",
"Malaysia Ringgit": "MYR",
"Norway Krone": "NOK",
"New Zealand Dollar": "NZD",
"Philippines Peso": "PHP",
"Poland Zloty": "PLN",
"Romania Leu": "RON",
"Russia Rubles":"RUB",
"Sweden Krona": "SEK",
"Singapore Dollar": "SGD",
"Thailand Baht": "THB",
"Turkey Lira": "TRY",
"US Dollars": "USD",
"South Africa Rand": "ZAR"
};

function setup() {
    createCanvas(200,200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&id=524901&APPID=661c83108c2653b9dfa1cafb96dfd281')
}
function gotData(data) {
    println(data);
}
function draw() {
    background(0);
}