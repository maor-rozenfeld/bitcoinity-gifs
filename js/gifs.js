$(document).ready(function(){
var gifs = `9000.gif
$9000
Nov 26, 2017


8000.gif
$8000
Nov 13, 2017


7000.gif
$7000
Nov 2, 2017


6000.gif
$6000
Oct 20, 2017


5000.gif
$5000
Oct 12, 2016


4000.gif
$4000
Aug 13, 2017


2500.gif
$2500
May 25, 2017


1000.gif
$1000
Nov 27, 2013


900.gif
$900
Nov 26, 2013


800.gif
$800
Nov 23, 2013


700.gif
$700
Nov 18, 2013


600.gif
$600
Nov 18, 2013
`;

var ul = $('ul.properties_list');
var dataArr = gifs.split('\n\n\n');
console.log(dataArr);
console.log(dataArr.length);
dataArr.forEach(function(x) {	
	x = x.split('\n');
	console.log(x);
	$(`			<li>
					<a href="img/${x[0]}" target="_blank">
						<img src="img/${x[0]}" alt="" title="" class="property_img"/>
					</a>					
					<div class="property_details">
						<h1>
							${x[1]}
						</h1>
						<h2>${x[2]}</h2>
					</div>
				</li>	`).appendTo(ul);
});




});