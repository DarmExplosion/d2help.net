$(document).ready(function(){

    
    
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });

function initiatepage() {var currentelement = 0;}



function scrollManager() {
  var currentelement = 0;
    document.addEventListener('wheel', (e) => {
        
       if(e.deltaY <= 1) { console.log('scrollup'); 

                          setTimeout(500);
                         
                          switch(currentelement) {
                            case 0: currentelement = 0; break;
                            case 1: document.getElementById('header1').scrollIntoView(); currentelement = 0; break;
                            case 2: document.getElementById('header2').scrollIntoView(); currentelement = 1; break;
                          }
      
      
      }
       if(e.deltaY >= 1) { console.log('scrolldown');
        setTimeout(500);
       switch(currentelement) {
        case 0: document.getElementById('header1').scrollIntoView(); currentelement = 1; break;
        case 1: document.getElementById('header2').scrollIntoView(); currentelement = 2; break;
        case 2: currentelement = 2; break;
      }
       
       
       }
    });



  }
