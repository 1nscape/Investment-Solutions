function takeInput(){
  var userInput = document.querySelector("#input");
  var formatType = document.querySelector("#format-input-type")
  var formatCategory = document.querySelector("#format-input-category")



}

function searchData(){

}


function showStockResults(resultObj) {

  var inputData = document.querySelector("#textResult");
  inputData.innerHTML = ""
  
  for (var i = 0; (i < resultObj.results.length); i++) {
    var result = document.createElement("div");
    result.innerHTML = resultObj.results[i].ticker;

    inputData.appendChild(result);
  }





}
function showCryptoResults(resultObj) {

  var inputData = document.querySelector("#textResult");
  inputData.innerHTML = ""
  
  for (var i = 0; (i < resultObj.length); i++) {
    var result = document.createElement("div");
    result.innerHTML = resultObj[i].name;

    inputData.appendChild(result);
  }


}








function cryptoApi() {
  
  var coinGeckoApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=music&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  
  fetch(coinGeckoApi)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log("This is crypto")
          console.log(data)
          showCryptoResults(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function () {
      alert('Unable to connect to GitHub');
    })
}

cryptoApi();


function stockApi() {
  var coinPolygonReference = "https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&apiKey=UAmJhIVKMGMQmJfv7Tja6hKiWkViJV6z";
  var input = "Electronic"
  coinPolygonReference = ("https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&search=" + input + "&apiKey=UAmJhIVKMGMQmJfv7Tja6hKiWkViJV6z")
  console.log(coinPolygonReference)
  fetch(coinPolygonReference)
    .then(function (response) {
      console.log(response)
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data)
          showStockResults(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function () {
      alert('Unable to connect to GitHub');
    })
}



stockApi();




var hideValueOptions = document.querySelector("#format-input-category");
var hideValueCategory = document.querySelector('#format-input-type'); 

hideValueOptions.style.visibility = "hidden";


hideValueCategory.addEventListener('change', function (event) {
 if (event.target.value == "stocks") {
  hideValueOptions.removeAttribute("style");
 }

else {
  
}
})
