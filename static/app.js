console.log("hello world")

// var svgWidth = 960;
// var svgHeight = 500;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 80,
//   left: 100
// };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// var svg = d3.select("#chart")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);



  
//   data.forEach(function(data) {
//     data.healthcare = +data.healthcare;
//     data.poverty = +data.poverty;
//   });
 

//   var xLinearScale = d3.scaleLinear()
//     .domain([d3.min(data, d => d[chosenXAxis]) * 0.8,
//       d3.max(data, d => d[chosenXAxis]) * 1.2
//     ])
//     .range([0, width]);
  
//   var yLinearScale = d3.scaleLinear()
//     .domain([0, d3.max(data, d => d.poverty)])
//     .range([height, 0]);

//   var bottomAxis = d3.axisBottom(xLinearScale);
//   var leftAxis = d3.axisLeft(yLinearScale);

//   chartGroup.append("g")
//   .attr("transform", `translate(0, ${height})`)
//   .call(bottomAxis);

// chartGroup.append("g")
//   .call(leftAxis);




//   chartGroup.selectAll("stateText")
//   .data(data)
//   .enter()
//   .append("text")
//   .classed("aText", true)
//   .attr("x", d => xLinearScale(d[chosenXAxis]))
//   .attr("y", d => yLinearScale(d.poverty))
//   .attr("dy", "4px")
//   // .attr("dx", "-6px")
//   // .attr("font-size", '10px')
//   .text(d => d.abbr);


//   var circlesGroup = chartGroup.selectAll("circle")
//     .data(data)
//     .enter()
//     .append("circle")
//     .attr("cx", d => xLinearScale(d[chosenXAxis]))
//     .attr("cy", d => yLinearScale(d.poverty))
//     .attr("r", 15)
//     .attr("fill","#89bdd3")
//     .attr("opacity", ".5")
    
//     chartGroup.append("g")
//     .attr("transform", `translate(${width / 2}, ${height + 20})`)
//     .append("text")
//     .attr("x", 0)
//     .attr("y", 20)
//     .classed("axis-text", true)
//     .text("Poverty");

//     chartGroup.append("g")
//     .attr("transform", "rotate(-90)")
//     .append("text")
//     .attr("y", 0 - margin.left)
//     .attr("x", 0 - (height / 2))
//     .attr("dy", "1em")
//     .classed("axis-text", true)
//     .text("Healthcare");

//     var toolTip = d3.tip()
//     .attr("class", "tooltip")
//     .offset([80, -60])
//     .html(function(d) {
//       return (`<strong>${d.state}<br>Healthcare: ${d.healthcare}%<br>Poverty: ${d.poverty}%`);
//     });

//    chartGroup.call(toolTip);

//    circlesGroup.on("mouseover", function(d) {
//     toolTip.show(d, this);
//   })
 
//     .on("mouseout", function(d) {
//       toolTip.hide(d);
//     });

