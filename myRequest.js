const request = require('request');

var myRequest = (waluta, callback) => {


request(
  {url:'http://api.nbp.pl/api/exchangerates/rates/A/'+waluta+'/?format=json',
    json:true}
  , (error, request, body) => {

callback({
  kurs: body.rates[0].mid,
  nazwaWaluty: body.currency,
});
});
}

module.exports.myRequest = myRequest;
