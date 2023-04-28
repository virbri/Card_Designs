$("#myButton2").on("click", async function () {
     
      const cards = await fetchCards();
      displayCard(cards);
   
     
      // Call secondClick function
      secondClick();
      // Change value of number variable
      number = 1;
  
      // Card 05
      $(".card05 .back")
        .delay(1000)
        .queue(function (nxt) {
          $(this).show();
          $(".card05 .back").css(
            "background-image",
            "url('https://raw.githubusercontent.com/virbri/Card_Designs/main/card_back_small.png')"
          );
          document.getElementById("glowing5").style.visibility = "visible";
          this.className += " animIn";
          // Card 05
          $(".card05 .back")
            .delay(1200)
            .queue(function (nxt) {
              this.className += " shake";
              nxt();
            });
          $(this).click(function () {
            $(".card05").css("pointer-events", "none");
            // Add flipped class to .card element
            $(".card05 .back").addClass("fade");
            $(this).closest(".card").delay(800).addClass("flipped");
            setTimeout(function () {
              $(".card05 .back").css("background-image", "none");
            }, 1000);
            // Show .front element without animation
            $(".card05 .front").css("display", "block");
            document.getElementById("glowing5").style.visibility = "hidden";
            $(".card05 .front").addClass("flipped");
          });
          nxt();
        });
      // Card 04
      $(".card04 .back")
        .delay(1200)
        .queue(function (nxt) {
          $(this).show();
          $(".card04 .back").css(
            "background-image",
            "url('https://raw.githubusercontent.com/virbri/Card_Designs/main/card_back_small.png')"
          );
          document.getElementById("glowing4").style.visibility = "visible";
          this.className += " animIn";
          // Card 04
          $(".card04 .back")
            .delay(1500)
            .queue(function (nxt) {
              this.className += " shake";
              nxt();
            });
          $(this).click(function () {
            $(".card04").css("pointer-events", "none");
            // Add flipped class to .card element
            $(".card04 .back").addClass("fade");
            $(this).closest(".card").delay(800).addClass("flipped");
            setTimeout(function () {
              $(".card04 .back").css("background-image", "none");
            }, 1000);
            // Show .front element without animation
            $(".card04 .front").css("display", "block");
            document.getElementById("glowing4").style.visibility = "hidden";
            $(".card04 .front").addClass("flipped");
          });
          nxt();
        });
  
      // Card 03
      $(".card03 .back")
        .delay(1500)
        .queue(function (nxt) {
          $(this).show();
          $(".card03 .back").css(
            "background-image",
            "url('https://raw.githubusercontent.com/virbri/Card_Designs/main/card_back_small.png')"
          );
          document.getElementById("glowing3").style.visibility = "visible";
          this.className += " animIn";
          // Card 03
          $(".card03 .back")
            .delay(1800)
            .queue(function (nxt) {
              this.className += " shake";
              nxt();
            });
          $(this).click(function () {
            $(".card03").css("pointer-events", "none");
            // Add flipped class to .card element
            $(".card03 .back").addClass("fade");
            $(this).closest(".card").delay(800).addClass("flipped");
            setTimeout(function () {
              $(".card03 .back").css("background-image", "none");
            }, 1000);
            // Show .front element without animation
            $(".card03 .front").css("display", "block");
            document.getElementById("glowing3").style.visibility = "hidden";
            $(".card03 .front").addClass("flipped");
          });
          nxt();
        });
      // Card 02
      $(".card02 .back")
        .delay(2000)
        .queue(function (nxt) {
          $(this).show();
          $(".card02 .back").css(
            "background-image",
            "url('https://raw.githubusercontent.com/virbri/Card_Designs/main/card_back_small.png')"
          );
          document.getElementById("glowing2").style.visibility = "visible";
          this.className += " animIn";
          // Card 02
          $(".card02 .back")
            .delay(2300)
            .queue(function (nxt) {
              this.className += " shake";
              nxt();
            });
          $(this).click(function () {
            $(".card02").css("pointer-events", "none");
            // Add flipped class to .card element
            $(".card02 .back").addClass("fade");
            $(this).closest(".card").delay(800).addClass("flipped");
            setTimeout(function () {
              $(".card02 .back").css("background-image", "none");
            }, 1000);
            // Show .front element without animation
            $(".card02 .front").css("display", "block");
            document.getElementById("glowing2").style.visibility = "hidden";
            $(".card02 .front").addClass("flipped");
          });
          nxt();
        });
  
      // Card 01
      $(".card01 .back")
        .delay(2300)
        .queue(function (nxt) {
          $(".card01 .back").css(
            "background-image",
            "url('https://raw.githubusercontent.com/virbri/Card_Designs/main/card_back_small.png')"
          );
          $(this).show();
          document.getElementById("glowing1").style.visibility = "visible";
  
          this.className += " animIn";
  
          $(".card01 .back")
            .delay(2500)
            .queue(function (nxt) {
              this.className += " shake";
              nxt();
            });
          $(this).click(function () {
            $(".card01").css("pointer-events", "none");
            // Add flipped class to .card element
            $(".card01 .back").addClass("fade");
            $(this).closest(".card").delay(800).addClass("flipped");
            setTimeout(function () {
              $(".card01 .back").css("background-image", "none");
            }, 1000);
  
            // Show .front element without animation
            $(".card01 .front").css("display", "block");
            document.getElementById("glowing1").style.visibility = "hidden";
            $(".card01 .front").addClass("flipped");
          });
          nxt();
        });

      $(myButton)
        .delay(6000)
        .queue(function (nxt) {
          myButton.disabled = false;
          document.querySelector('.button-control').classList.add('show');
      
          document.getElementById("myButton2").style.left = "50%";
        document.getElementById("myButton2").style.transform = "translateX(-50%)";
     
          nxt();
        });
    });
  });
    