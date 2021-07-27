

// function to display the initial chart before user uses dropdown list
function init() {
  var startStock = "AAPL";
  buildLineBar(startStock);
  console.log(startStock);
}

//function to plot the chart
function buildLineBar(stock) {
  d3.json("http://127.0.0.1:5000/data").then(function(data)   {

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

