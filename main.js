var planeTicketPriceInUsd = 500;
var hotelPlanPriceInUsd = 250;
var museumTicketPriceInEuro = 120;
let dollar = 9433.34;
let euro = 10354.03;

var planeTicketPriceInUzb = planeTicketPriceInUsd * dollar;
var hotelPlanPriceInUzb = hotelPlanPriceInUsd * dollar;
var museumTicketPriceInUzb = museumTicketPriceInEuro * euro;

var total = planeTicketPriceInUzb + hotelPlanPriceInUzb + museumTicketPriceInUzb
console.log(total);

let money = parseFloat(prompt('Qancha pul bor?'));

if(money >= total){
    console.log("Oq yo'l");
}else {
    console.log('Alisher ozgina sabr qilishi kerak');
}



