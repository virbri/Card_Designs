

$(document).ready(function() {

    

    const api = axios.create({
      baseURL: 'http://localhost:5000/api/v1/cardCharacters'
    });
    
    const getCardsByRarity = async (rarity, count) => {
      try {
        const res = await api.get(`?rarity=${rarity}`);
        const cardArray = res.data.cardCharacters;
        const cards = [];
        while (cards.length < count) {
          const randomIndex = Math.floor(Math.random() * cardArray.length);
          const card = cardArray[randomIndex];
          if (!cards.some(c => c.name === card.name)) { // ensure no duplicate cards
            cards.push(card);
          }
        }
        return cards;
      } catch (err) {
        console.error(err);
      }
    };
    
    const fetchCards = async () => {
        const [common1, uncommon, legendary, rare, common2] = await Promise.all([
          getCardsByRarity('common', 1),
          getCardsByRarity('uncommon', 1),
          getCardsByRarity('legendary', 1),
          getCardsByRarity('rare', 1),
          getCardsByRarity('common', 2),
        ]);
        const randomCards = [  ...common1, ...uncommon, ...legendary, ...rare, ...common2];
       
        return randomCards;
      };
      
    
      function displayCard() {
        const energyElements = document.getElementsByClassName("energy");
        const titleElements = document.getElementsByClassName("title");
        const healthElements = document.getElementsByClassName("health");
        const damageElements = document.getElementsByClassName("damage");
        const descriptionElements = document.getElementsByClassName("description");
    
        let i = 0; // Declare and initialize i
        fetchCards().then(cards => {
                const cardFronts = $(".card .face.front");
                for (let i = 0; i < cards.length; i++) {
                  const imageSrc = cards[i].image ? cards[i].image : "";
                  const rarityFrame = {
                    "common": "frame_common.png",
                    "uncommon": "fram_uncom.png",
                    "rare": "frame_rare.png",
                    "legendary": "frame_leg.png"
                  };
                  const backgroundURL = `url(https://github.com/virbri/Card_Designs/blob/main/${rarityFrame[cards[i].rarity]}?raw=true), url(${imageSrc})`;
                  const cssProperties = {
                    "background-image": backgroundURL,
                    "background-size": "cover",
                    "background-position": "center",
                    "width": "253px",
                    "height": "337px",
                    "position": "absolute"
                  };
                  setTimeout(function() {
                  $(cardFronts[i]).css(cssProperties);
                   }, 500);
                  //--------------------------------------------------------------------
                  setTimeout(function() {
                  if(cards[i].deckType == "MechDeck"){
                    titleElements[i].style.color = "rgb(80,80,80)";
                    descriptionElements[i].style.color = "rgb(80,80,80)";
                    healthElements[i].style.color = "white";
                    damageElements[i].style.color = "white";
                    energyElements.style.textShadow = "0 0 5px #97a697db, 0 0 10px #757e75, 0 0 15px #7b807b, 0 0 20px #8c928c";
                  }else if(cards[i].deckType == "OrganicDeck"){
                    titleElements[i].style.color = "darkgreen";
                    descriptionElements[i].style.color = "darkgreen";
                    healthElements[i].style.color = "darkgreen";
                    damageElements[i].style.color = "darkgreen";
                    energyElements[i].style.textShadow = "0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00";
                  }else if(cards[i].deckType == "DesertDeck"){
                    titleElements[i].style.color = "DarkGoldenRod";
                    descriptionElements[i].style.color = "DarkGoldenRod";
                    healthElements[i].style.color = "DarkGoldenRod";
                    damageElements[i].style.color = "DarkGoldenRod";
                    energyElements[i].style.textShadow = "0 0 5px #cdd18e, 0 0 10px #e4ef96, 0 0 15px #ddef94, 0 0 20px #f3ef80";
                  }else if(cards[i].deckType == "clown"){
                    titleElements[i].style.color = "Crimson";
                    descriptionElements[i].style.color = "Crimson";
                    healthElements[i].style.color = "Crimson";
                    damageElements[i].style.color = "Crimson";
                    energyElements[i].style.textShadow = "0 0 5px #ff004c, 0 0 10px #ff0080, 0 0 15px #ff003c, 0 0 20px #ff003c";
                   
                  }else{
                    titleElements[i].style.color = "#D27D2D";
                    descriptionElements[i].style.color = "#D27D2D";
                    healthElements[i].style.color = "lemonchiffon";
                    damageElements[i].style.color = "lemonchiffon";
                    energyElements[i].style.textShadow = " 0 0 7px #ffb300, 0 0 13px #ffb300, 0 0 18px #ffb700, 0 0 24px #ffbb00";
                  }
                }, 500);
    //============================================================================================================
                    setTimeout(function() {
                      healthElements[i].innerHTML = cards[i].hp;
                      damageElements[i].innerHTML = cards[i].attackDmg;
                      energyElements[i].innerHTML = cards[i].energy;     
                      titleElements[i].innerHTML = cards[i].name;
                      descriptionElements[i].innerHTML = cards[i].cardInfo;
    
                      if (healthElements[i].innerHTML == "0" && damageElements[i].innerHTML == "0" || healthElements[i].innerHTML == 0 && damageElements[i].innerHTML == 0 || healthElements[i].innerHTML == null && damageElements[i].innerHTML == null || healthElements[i].innerHTML == "" && damageElements[i].innerHTML == "") {
                        healthElements[i].innerHTML = ""; 
                        damageElements[i].innerHTML = "";
                      }
                    }, 500);
    
    ///=================================================================================================
            
    
                
    ////=============================================================================================
                }
    
              }).catch(error => {
                console.error(error);
              });
             
            
      
      }
      
      
      
    ///---------------------------------------
    var number = 0;

    // Define secondClick function
    $("#myButton").on("click", async function () {

     
        if ($(".card01 .back").hasClass("flipped")) {
          $(".card01 .back").hide();
          $(".card01 .back").hide();
        }
        if ($(".card02 .back").hasClass("flipped")) {
          $(".card02 .back").hide();
        }
        if ($(".card03 .back").hasClass("flipped")) {
          $(".card03 .back").hide();
        }
        if ($(".card04 .back").hasClass("flipped")) {
          $(".card04 .back").hide();
        }
        if ($(".card05 .back").hasClass("flipped")) {
          $(".card05 .back").hide();
        }
  
        $(".card01 .back").fadeOut();
        $(".card02 .back").fadeOut();
        $(".card03 .back").fadeOut();
        $(".card04 .back").fadeOut();
        $(".card05 .back").fadeOut();
  
        $(".card01 .front").fadeOut();
        $(".card02 .front").fadeOut();
        $(".card03 .front").fadeOut();
        $(".card04 .front").fadeOut();
        $(".card05 .front").fadeOut();
        // Remove animIn and shake classes from card backs
        $(".card01 .back").removeClass("animIn shake  ");
        $(".card02 .back").removeClass("animIn shake  ");
        $(".card03 .back").removeClass("animIn shake  ");
        $(".card04 .back").removeClass("animIn shake  ");
        $(".card05 .back").removeClass("animIn shake  ");
  
        setTimeout(function () {
          $(".card01 .back").removeClass(" fade");
          $(".card02 .back").removeClass(" fade");
          $(".card03 .back").removeClass(" fade");
          $(".card04 .back").removeClass(" fade");
          $(".card05 .back").removeClass("fade ");
        }, 1000);
  
        setTimeout(function () {
          $(".card01 .back").removeClass("flipped ");
          $(".card01 .back").closest(".card").removeClass("flipped");
          $(".card02 .back").removeClass("flipped ");
          $(".card02 .back").closest(".card").removeClass("flipped");
          $(".card03 .back").removeClass("flipped ");
          $(".card03 .back").closest(".card").removeClass("flipped");
          $(".card04 .back").removeClass("flipped ");
          $(".card04 .back").closest(".card").removeClass("flipped");
          $(".card05 .back").removeClass("flipped ");
          $(".card05 .back").closest(".card").removeClass("flipped");
        }, 400);
  
        $(".card01").css("pointer-events", "auto");
        $(".card02").css("pointer-events", "auto");
        $(".card03").css("pointer-events", "auto");
        $(".card04").css("pointer-events", "auto");
        $(".card05").css("pointer-events", "auto");
      
  
    });
 
  
    $("#myButton2").on("click", async function () {
      const cards = await fetchCards();
      displayCard(cards);
  
     
      // Call secondClick function
      //secondClick();
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
          document.getElementById("myButton").disabled = false;
          nxt();
        });
    });
  });
 

  function shake() {
    this.className += " shake";
  }

        var packOpeningCount = 0;
    
        var cards = document.querySelectorAll('.card');
    
            [...cards].forEach((card)=>{
            card.addEventListener( 'click', function() {
                card.classList.toggle('is-flipped');
            });
    });
    let canvas = document.getElementById('myCanvas');
    const canvasType = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
//https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa
//the json spritesheet i pasted here (json exported from adobe aniamte where it was animated)
// i made the aniamtion and sprite sheet in adobe animate ex macromedia flash
let spriteSheet = {"frames": [
 
    {
        "filename": "anim0000",
        "frame": {"x":20,"y":20,"w":462,"h":137},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":417,"y":504,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0001",
        "frame": {"x":502,"y":20,"w":471,"h":133},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":412,"y":508,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0002",
        "frame": {"x":993,"y":20,"w":479,"h":130},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":408,"y":511,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0003",
        "frame": {"x":1492,"y":20,"w":481,"h":129},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":407,"y":512,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0004",
        "frame": {"x":20,"y":177,"w":483,"h":128},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":406,"y":513,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0005",
        "frame": {"x":523,"y":177,"w":473,"h":133},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":411,"y":508,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0006",
        "frame": {"x":20,"y":20,"w":462,"h":137},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":417,"y":504,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0007",
        "frame": {"x":1016,"y":177,"w":461,"h":137},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":416,"y":503,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0008",
        "frame": {"x":1497,"y":177,"w":469,"h":138},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":406,"y":499,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0009",
        "frame": {"x":20,"y":335,"w":466,"h":146},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":395,"y":483,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0010",
        "frame": {"x":506,"y":335,"w":462,"h":165},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":373,"y":447,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0011",
        "frame": {"x":988,"y":335,"w":462,"h":285},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":276,"y":306,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0012",
        "frame": {"x":1470,"y":335,"w":369,"h":365},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":111,"y":113,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0013",
        "frame": {"x":1859,"y":335,"w":321,"h":372},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":39,"y":44,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0014",
        "frame": {"x":20,"y":727,"w":304,"h":386},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":9,"y":13,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0015",
        "frame": {"x":344,"y":727,"w":300,"h":389},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":1,"y":5,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0016",
        "frame": {"x":664,"y":727,"w":299,"h":389},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0017",
        "frame": {"x":983,"y":727,"w":306,"h":399},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0018",
        "frame": {"x":1309,"y":727,"w":326,"h":415},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0019",
        "frame": {"x":1655,"y":727,"w":346,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0020",
        "frame": {"x":2021,"y":727,"w":354,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0021",
        "frame": {"x":20,"y":1167,"w":352,"h":424},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":0,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0022",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0023",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0024",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0025",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0026",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0027",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0028",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0029",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0030",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0031",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0032",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0033",
        "frame": {"x":392,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0034",
        "frame": {"x":764,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0035",
        "frame": {"x":764,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
    ,{
        "filename": "anim0036",
        "frame": {"x":764,"y":1167,"w":352,"h":420},
        "rotated": false,
        "trimmed": true,
        "spriteSourceSize": {"x":0,"y":4,"w":889,"h":641},
        "sourceSize": {"w":889,"h":641}
    }
]};
let wildcardVisible = true;
let shouldPlay = false;
let image = new Image();
//the png that is the spritesheet
image.src = '../images/carpack3.png';

//https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3
let currentFrame = 1;
let frameCount = spriteSheet.frames.length;

let startX = canvas.width / 2;
let startY = canvas.height / 2;


let x = startX;
let y = startY;

//at the start tsart counter is set to 0 and start selay is set to 6 so we hold the aniamtion still for 6 frames before playing it out
let startDelay = 6;
let startCounter = 0;



let overshootX = 20;
let overshootY = 70;

let frameCounter = 0;


//https://stackoverflow.com/questions/22531190/jquery-easing-functions-with-one-parameter
// creatuign an ease for the aniamtion movement
function easeOutBack(x, y) {
    y = 1.70158;
    x = x - 1;
    return (x * x * ((y + 1) * x + y) + 1);
}

let offTime = 0;

function drawFrame() {
    if (!shouldPlay) {
        return; // exit the function if canvas should be paused
      }
        //the spritesheet will play the current frame
        frame = spriteSheet.frames[currentFrame].frame;
        //increase the current frame
        currentFrame++;
    

        console.log('if statement executed');
    if (currentFrame >= 8 && frameCounter < 1 ) {

        let easedFC = easeOutBack(frameCounter);
        x = startX + (overshootX - startX) * easedFC;
        y = startY + (overshootY - startY) * easedFC;
        frameCounter += 1 / (frameCount - currentFrame);

    }  
    console.log('if statement executed');
    if (currentFrame >= 27) {
        let easedFC = easeOutBack(frameCounter);
            x -= 60* easedFC;
        

    }
    if (currentFrame >= 33) {
        canvas.classList.add('canvas-hidden');
    }

 //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
    //clear the entire canvas before drawing a new frame of the animation.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw a frame of the animation onto the canvas at the specified position.
    ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, x, y, frame.w, frame.h);
    
    //https://www.w3schools.com/howto/howto_js_animate.asp
    //so once my png starts playing out i start the ease and move towards top left
    //frameCounter is used as a kind of timer to see what frame we are at to control the anaimtion
    //remeber we only move to frame 2 in the spritesheet after the start delay of 6 frames
    requestAnimationFrame(drawFrame);
}



image.onload = function() {
 
    let frame = spriteSheet.frames[0].frame;
   
    ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, x, y, frame.w, frame.h);
};
let clicked = false;

canvas.addEventListener('click', () => {
    if (canvasCLicakble){
        if (!wildcardVisible) {
          
    if (!clicked) {
        clicked = true;
          // Reset the currentFrame variable to 1
    currentFrame = 1;
    document.getElementById('myButton2').click();
    document.getElementById('myButton2').style.display = "block";
    // Set an interval to call the drawFrame function every 50 milliseconds
    let interval = setInterval(() => {
        // Check if the currentFrame is less than or equal to frameCount
        if (currentFrame <= frameCount) {
            // Call the drawFrame function
            drawFrame();
        } else {
            // Clear the interval
            clearInterval(interval);
         
        }
    }, 50);
}
}}
});

function resetCanvas() {
    // get the canvas element and its context
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // make the canvas visible by removing the "hidden" class
    canvas.classList.remove('hidden');

    // clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // reset the animation to the first frame without playing it out
    currentFrame = 1;
    x = startX;
    y = startY;
    frameCounter = 0;

    // draw the first frame of the animation onto the canvas
    let frame = spriteSheet.frames[0].frame;
   
    ctx.drawImage(image, frame.x, frame.y, frame.w, frame.h, x, y, frame.w, frame.h);

    clicked = false;
    canvasCLicakble = true;
    wildcardVisible = false;
    canvasType.style.pointerEvents = 'auto';
    
}
canvas.addEventListener('mouseover', () => {
    if (canvasCLicakble){
    if (!clicked) {
    // Reset the currentFrame variable to 1
    currentFrame = 1;
    // Set an interval to call the drawFrame function every 50 milliseconds
    let interval = setInterval(() => {
        // Check if the currentFrame is less than or equal to 6
        if (currentFrame <= 5) {
            // Call the drawFrame function
            drawFrame();
        } else {
            // Clear the interval
            clearInterval(interval);
        }
    }, 50);
}}
});

  

  setTimeout(() => {
    // add a click event listener to the canvas
    canvas.addEventListener('click', function handleClick() {
      // set shouldPlay to true and remove the event listener
      shouldPlay = true;
      canvas.removeEventListener('click', handleClick);
    });
  }, 2000); // adjust the delay as needed

// wait for the canvas to be drawn on the stage before allowing it to be clicked
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        shouldPlay = false; // pause canvas until clicked
        observer.disconnect(); // stop observing
      }
    });
  });
  
  observer.observe(canvas.parentNode, { childList: true }); // start observing for changes to parent node

canvas.addEventListener('mouseout', () => {
    // Clear the interval
    clearInterval(interval);
    // Reset the currentFrame variable to 1
    currentFrame = 1;
});



  // random number in range
  function getRandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // maximum and minimum are inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  var cards = document.querySelectorAll(".card");
  
  [...cards].forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.toggle("is-flipped");
    });
  });
  
  //new elements
  const goBackButton = document.getElementById("myButton");
  const overallButtonWrapper = document.querySelector(".overallButtonWrapper");
  const wildOpen = document.getElementById("wildOpen");
  const packSegment = document.getElementById("hiddenContent");
  const pack = document.querySelector(".pack");
  const buttonControl = document.querySelector(".button-control");
  const openButton = document.querySelector(".myCanvas");
  
  let totalPacks = 0;
  
  function buyWild() {
    console.log("pack bought");
    totalPacks += 1;
    document.getElementById("totalPacks").innerHTML = totalPacks;
    addTotalPacks();
    updateWildButton();
  }
  
  function updateWildButton() {
    console.log("wilds");
    console.log("button updated");
    
    if (totalPacks > 0) {
      wildOpen.removeAttribute("disabled");
    } else {
      wildOpen.setAttribute("disabled", "");
    }
  }


  function revealWild() {
    console.log("reveal");
    document.getElementById("totalPacks").innerHTML = totalPacks;
    updateWildButton();
    packOpening();
    // got bing chats help here
    document.getElementById("myCanvas").style.display = "block";
  
    goBackButton.style.left = "-9999px";
    document.getElementById("myButton").disabled = true;

    totalPacks -= 1;
    document.getElementById("totalPacks").innerHTML = totalPacks;
    document.getElementById("topRight").innerHTML = totalPacks;
    resetCanvas();
  }
  function packOpening() {
    overallButtonWrapper.style.display = "none";
    pack.style.display = "";
    buttonControl.style.display = "";
  }
  
  function goBack() {
    overallButtonWrapper.style.display = "";
    pack.style.display = "none";
    buttonControl.style.display = "none";
    openButton.style.display = "";
    button.style.display = 'none';
    canvas.classList.add('hidden');
    canvasCLicakble = false;
    wildcardVisible = true;
    canvasType.style.pointerEvents = 'none';
  }
  function addTotalPacks() {
    document.getElementById("topRight").innerHTML = totalPacks;
  }
  
  function hideOpenButton() {
    openButton.style.display = "none";
    totalPacks -= 1;
    document.getElementById("totalPacks").innerHTML = totalPacks;
    document.getElementById("topRight").innerHTML = totalPacks;
  }


  goBackButton.addEventListener("click", function() {
    // Call first function
    secondClick2();
  
    // Call second function
    goBack();
  });
  



