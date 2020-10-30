
d3.select("#heading").text("Warehouse Optimization")
.style("font", "30px times")
.style("color", "blue");

function gridData() {
    // Initialize the grid data
    var data = new Array();
    var xpos = 100;
    var ypos = 100;
    var height = 50;
    var width = 50;
    var click = 0;

// Create the grid using loop
for(var i=0;i<7;i++)
{
    data.push(new Array());
    for(var j=0;j<14;j++)
    {
        data[i].push({
            x:xpos,
            y:ypos,
            width:width,
            height:height,
            click:click
        })
        xpos+=width;
    }
    xpos=100;
    ypos+=height;
}
return data;
}

var gridData = gridData();
console.log(gridData);


var grid = d3.select("#grid")
	.append("svg")
	.attr("width","1002px")
	.attr("height","510px");
	
var row = grid.selectAll(".row")
	.data(gridData)
	.enter().append("g")
	.attr("class", "row");
	
var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
	.attr("class","square")
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
	.style("fill", "white")
	.style("stroke", "black")
	.on('click', function(d) {
       d.click ++;
       if ((d.click)%3 == 0 ) { d3.select(this).style("fill","#fff"); }
	   if ((d.click)%3 == 1 ) { d3.select(this).style("fill","blue"); }
	   if ((d.click)%3 == 2 ) { d3.select(this).style("fill","red"); }
    });