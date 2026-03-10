// Варіант 6 — генерація робочого URL до НБУ

const currency = "USD";           // Валюта
const date = "20231001";          // Дата

// Створюємо URL через клас URL
const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

url.searchParams.append("valcode", currency);
url.searchParams.append("date", date);
url.searchParams.append("json", "");

console.log("Згенерований URL:");
console.log(url.toString());