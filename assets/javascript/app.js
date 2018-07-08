
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

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
alert("Your score is "+ getScore() +"/"+ tot);
}   
    $(document).ready(function () {
        $("#hide").click(function () {
            $("#set1").hide();
        });
        $("#hide2").click(function () {
            $("#set2").hide();
        });
        $("#show").click(function () {
            $("#set1").show();
        });
        $("#show2").click(function () {
            $("#set2").show();
        });
    });

