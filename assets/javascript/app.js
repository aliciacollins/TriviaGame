
    $( "#set2" ).slideUp( 300 ).hide( 1800 );
    $( "#set1" ).fadeIn( 1800 );
    $("#submit").hide();
    
    var answers = ["D","B","A","C","A","A","D","B"], 
tot = answers.length;

function getCheckedValue( radioName ){
var radios = document.getElementsByName( radioName );
console.log("radioName",radioName); // Get radio group by-name
for(var y=0; y<radios.length; y++)
    if(radios[y].checked) return radios[y].value; // return the checked value

}

function getScore(){
var score = 0;
for (var i=0; i<tot; i++)
if(getCheckedValue("Question"+i)===answers[i]) score += 1; // increment only
return score;
}

function returnScore(){
$("#score").text("You have completed the quiz you scored " + getScore() + " out of 8 points");
console.log("get score",getScore());
$("#set1").hide();
$("#set2").hide();
$("#score").show();
}   
$(document).ready(function () {
    $("#hide").click(function () {
        $("#set1").hide();
        $("#set2").show();
        $("#hide").hide();
        $("#submit").show();
    });

    
});



var time_in_minutes = 3;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );

	return {'total':t,'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = 'minutes: '+t.minutes+'<br>seconds: '+t.seconds;
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);
 

