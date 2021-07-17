
d3.json("http://127.0.0.1:5000/data").then(function(data, err)   {
console.log(data)
console.log(data.AAPL)
console.log(data.AAPL[0].Date)

})

