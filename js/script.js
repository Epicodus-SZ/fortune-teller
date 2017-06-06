//Business Logic
var goodLuck = 4;
var badLuck = 0;

function calcFortune(omen) {
  if (omen === "good") goodLuck++
  else badLuck++;
}

function findFortune(luck){
  results = ["an uber fail whale of unluckiness.","very unlucky.","sort of unlucky.","unlucky.","neither.","lucky.","very lucky.","extremely luck.","at Brad Pitt's level of luck."];
  return results[luck];
  }


//UI Logic
$(document).ready(function(){

  //create a form submission event listener
  $("#fortuneForm").submit(function(event){
    event.preventDefault();
    $("#results").show(); // show the results

    //Write out the results in HTML
    $('#results').append("Because of your history of with...");
    $("input:checkbox[name=Omen]:checked").each(function(){
      var Omens = $(this).val();
      $('#results').append(Omens + ", ");
      calcFortune($(this).attr('class'));
    });

    $('#results').append("I consider you...");

    // determine the fortune
    $('#results').append(findFortune(goodLuck-badLuck));
    console.log("goodluck=",goodLuck, " badluck = ", badLuck);
  });
});
