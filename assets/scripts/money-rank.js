  function userChart() {
    var tempAmount = 0;
    var bar1Amount = 0;
    
    // get the default amount fort he html and input text
    tempAmount = Number($("#amount").val());
    bar1Amount = Number($('#bar-1 > .wrap > .bar-percentage[data-percentage]').attr('data-percentage'));
    
    // set the amount for the first bar
    $('#bar-1 > .wrap > .bar-percentage[data-percentage]').attr('data-percentage', tempAmount + bar1Amount);
    
    barChart();
  }
  
  
  
  function barChart(){
        var goalAmnt = 500;
        $('.bar-percentage[data-percentage]').each(function () {
        var progress = $(this);
        var percentage = $(this).attr('data-percentage');

        
        $({countNum: 0}).animate({countNum: percentage}, {
          duration: 2000,
          easing:'linear',
          step: function() {
            // What todo on every count
          var width = "";
          var amount = "";
          
          // calculate the width
          width = this.countNum * 100/goalAmnt;
          
          if(percentage == 0){
            width = Math.floor(width) + '%';
            amount = "$" + percentage;
          }else{
            width = Math.floor(width+1) + '%';
            amount = "$" + percentage;
          }
          
          progress.text(amount) && progress.siblings().children().css('width',width);
          }
        });
      });
    }
    
    
 $(document).ready(function(){
   barChart();
    
     $(window).resize(function(){
         barChart();
     });
   
 });