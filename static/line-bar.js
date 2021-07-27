
//d3.json("http://127.0.0.1:5000/data").then(function(data, err)   {
//console.log("data all =",data);
//console.log(data)
//console.log(data.AAPL)
//console.log(data.AAPL[0].Date)

//})

// function to display the initial chart before user uses dropdown list
function init() {
  var startStock = "AAPL";
  buildLineBar(startStock);
  console.log(startStock);
}

//function to plot the chart
function buildLineBar(stock) {
  //var apiKey = "cFwz-P45-QWqaBnWx8s9";

  //var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  d3.json("http://127.0.0.1:5000/data").then(function(data)   {
    //console.log("data all =",data);
    //console.log("AAPL =",data.AAPL);
    //console.log("AMZN =",data.AMZN);
    //console.log("AAPL 0=",data.AAPL[0].Date);
    //console.log("AAPL 1=",data.AAPL[1].Date);
    
    //var stocks = Object.keys(data);
    //console.log("stocks=",stocks);
var volumeData = [];
var closeData = [];
var dateData = [];


    var dropdownMenu = d3.select("#stockChoice");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    var filterData = data[dataset];
    console.log(filterData);
    
    var data2 = Object.entries(filterData)
    data2.forEach(function([key, value]) {
      //console.log(data2[key][1]["Date"]);

      dateData.push(data2[key][1]["Date"]);
      closeData.push(data2[key][1]["Adj. Close"]);
      volumeData.push(data2[key][1]["Volume"]);


    });

    var index = volumeData.length - 1;
    console.log(index);

    startDate = dateData[index];
    endDate = dateData[0];


    // console.log(dateData);
    // console.log(closeData);
    // console.log(volumeData);


    // keys.pop()
    // keys.forEach(function([key, value]) {
    //   var data2 = Object.entries(data[key]);
    //   data2.forEach(function([key, value]) {
    //     console.log(data2[key][1]["Date"]);


        



    // })



//})

    

    //d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    // var name = data.dataset.name;
    // var stock = data.dataset.dataset_code;
    // var startDate = data.dataset.start_date;
    // var endDate = data.dataset.end_date;
    // Print the names of the columns
    //console.log(data.dataset.column_names);
    // Print the data for each day
    //console.log(data.dataset.data);
    //var dates = data.dataset.data.map(row => row[0]);
    // console.log(dates);
    //var closingPrices = data.dataset.data.map(row => row[4]);
    // console.log(closingPrices);
    //var volume = data.dataset.data.map(row => row[5]);
    // console.log(volume);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: stock,
      x: dateData,
      y: closeData,
      yaxis: 'y2',
      line: {
        color: "DarkBlue"
      }
    };

    var trace2 = {
      type: "bar",
      name: stock,
      x: dateData,
      y: volumeData,
      marker: {
        color: "CornflowerBlue"
      }
    };

    var data = [trace1, trace2];

    var layout = {
      title: `${dataset} Stock Price / Volume`,
      //width: 1000,
      showlegend: false,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis2: {
        title: 'Closing Price',
        autorange: true,
        overlaying: 'y',
      },
      yaxis: {
        title: 'Daily Volume',
        autorange: true,
        side: 'right'
      }
    };
    Plotly.newPlot("line-bar", data, layout, {responsive: true});
  });
}

// this is for updating the chart based on user dropdown selection
d3.selectAll("#stockChoice").on("change", updatePlotly);

function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#stockChoice");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  console.log(dataset);
  buildLineBar(dataset);
}

init();


/** code to try for the dropdown instead
var keys = Object.entries(data)
keys.pop()
keys.forEach(function([key, value]) {
    d3.select("#stockChoice").append("option").attr("key",key).text(data[key][0].name);
})
*/

