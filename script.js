$(document).ready(function() {
    // append an img tag with our picture of Ryu
    // url: http://i.imgur.com/90Mmdcm.png

    $('#ryu').append('<img src="http://i.imgur.com/90Mmdcm.png">');

    // change the img src on hover to the animated gif of Ryu
    // url: http://i.imgur.com/nTj3Fxx.gif


    //pick the element we to apply this to and then apply the handler to it

    $('#ryu > img').hover(function(){
      this.src = "http://i.imgur.com/nTj3Fxx.gif";
    },  function() {
        this.src = 'http://i.imgur.com/90Mmdcm.png';
    });

    // when a user clicks, change Ryu's stance
    //mousedown
    // url: http://i.imgur.com/Rfj0a80.png

    $('#ryu > img').on('mousedown', function() {
      this.src = 'http://i.imgur.com/Rfj0a80.png'; });

    // add the Hadouken!
    //mousedown
    // url: http://i.imgur.com/oTyQRvX.gif

    $('#ryu > img').on('mousedown', function() {
      $('#ryu').append('<img class ="demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif">');
  });

    // animate that Hadouken

    $('#ryu > img').on('mousedown', function() {
      $('.demo-hadouken').animate({
        "margin-left": "600px"
      }, 1000, 'swing', function() {
        this.remove();
      });
    });

    // let Ryu relax
    //mouseup
    // url: http://i.imgur.com/90Mmdcm.png

    $('#ryu > img').on('mouseup', function() {
      console.log(this);
      this.src = "http://i.imgur.com/90Mmdcm.png";
    });
});
