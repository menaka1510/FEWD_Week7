window.onload = function() {
  console.log("Testing 1 2 3");

  $(document).ready(function() {
    $('#menu').click(function(){
      $('nav').slideToggle("slow").show();
      return false;
    })
  })

  }
