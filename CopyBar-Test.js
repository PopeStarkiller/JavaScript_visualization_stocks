d3.json("http://127.0.0.1:5000/data").then(function(data, error)   {
//console.log("data all =",data);
//console.log(data["AAPL"])
//console.log(data.AAPL)
//console.log(data.AAPL[0].Date)
//console.log(data.AAPL[1].Date)
​
var stocks = Object.keys(data);
console.log("stocks=",stocks);
​
var percentChangeBar = [];
/// code from javascript-challenge UFO-1
var tableData = [];
//ticker_list = ["AAPL", "MSFT", "AMZN", "FB", "GOOG"]
​
for (i = 0 ; i < stocks.length - 1; i++){
  tableData[i] = data[stocks[i]];
  //console.log ("tableData[i]= ",tableData[i]);
​
}
//console.log(tableData);
runEnter2();
​
var button = d3.select(".btn");
var form = d3.select("#form");
​
button.on("click", runEnter2);
form.on("submit", runEnter2);
​
​
function runEnter2() {
    console.log ("bar-test");
    //d3.event.preventDefault();
  
    var inputBeginDateElement = d3.select("#begindate");
    var inputEndDateElement = d3.select("#enddate");
  
    var inputBeginDateValue = inputBeginDateElement.property("value");
    var inputEndDateValue = inputEndDateElement.property("value");
  
   // console.log("input begin date = ", inputBeginDateValue);
   // console.log("input end date = ", inputEndDateValue);
   
   for (i = 0; i < tableData.length; i++){ 
    console.log("tableData.length=", tableData.length)
    var recordBeginDate = tableData[i].filter(stock => stock.Date === inputBeginDateValue);
    var recordEndDate = tableData[i].filter(stock => stock.Date === inputEndDateValue);
    console.log("recordBeginDate=",recordBeginDate);
    console.log("recordEndDate=",recordEndDate);
    
    if (recordBeginDate.length === 0) {
      var changeDifference = 0.00;
      var percentChange = 0.00;
      // var change = recordEndDate[0].Close;
      // var change2= change.toFixed(2)
      // var perChg = (recordEndDate[0].Close)*100;
      // var perChg2= perChg.toFixed(2)
    }
    else if (recordEndDate.length === 0) {
      var changeDifference = 0.00;
      var percentChange = 0.00;
      // var change = (0-recordBeginDate[0].Close);
      // var change2= change.toFixed(2)
      // var perChg = ((0 - recordBeginDate[0].Close) / recordBeginDate[0].Close)*100;
      // var perChg2= perChg.toFixed(2)
    }
    else {
      var change = (recordEndDate[0].Close - recordBeginDate[0].Close);
      var changeDifference= change.toFixed(2)
      var perChg = ((recordEndDate[0].Close - recordBeginDate[0].Close) / recordBeginDate[0].Close)*100;
      var percentChange= perChg.toFixed(2)
    }
    console.log("percentChange=", percentChange);
    percentChangeBar[i] = percentChange;
​
      
  }   
​
    
​
// Part 1
  var trace1 = {
    x: stocks,
    y: percentChangeBar,
    type: "bar"
  };
​
  var data = [trace1];
​
  var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Stocks"},
    yaxis: { title: "% of Change"},

  };
​
  Plotly.newPlot("plot", data, layout);
​
​
​
​
  }
  
}).catch(function(error) {
  console.log(error);
});