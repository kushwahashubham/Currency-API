$(document).ready(function(){

    $('#getDogButton').click(function(){
        var value1 = $("#inputField1").val(); 
        var value2 = $("#inputField2").val(); 
        var value3 = $("#inputField3").val(); 
        var value4 = $("#inputField4").val(); 
      $.get(" https://sonar.trading/api/v1/convert?from="+value1+"&to="+value2+"&amount="+value3+"&decimal_places="+value4, function(matchdata) {
	   console.log(matchdata);
        var currencyFrom = "Currency From : " + matchdata.from;
          var cureencyTo = "Currency To : " + matchdata.to[0].code;
          var amount = "Amount : " + matchdata.amount;
          var rate ="Current Rate : " + matchdata.to[0].rate;
          $(".card-title").append("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-<br>");
          $(".card-title").append(currencyFrom + "<br>");
          $(".card-title").append(cureencyTo+ "<br>");
          $(".card-title").append(amount+ "<br>");
          $(".card-title").append(rate + "<br>");
          $(".card-title").append("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-<br>");
          
          
});

  })
      });
    
