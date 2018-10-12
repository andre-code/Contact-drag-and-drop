



var data = fetch("https://randomuser.me/api/?results=5");
data.then(function(result){
  return result.json();
}).then( resultjson => {
  const authors = resultjson.results;
  var index = 0;
  authors.forEach(element => {
    console.log(element);
    var articleElement = document.createElement("article");
    var figureElement = document.createElement("figure");
    var spanElement = document.createElement("span");
    var flagImgElement = document.createElement("img");
    var srcFlag = "https://www.countryflags.io/" + element.nat +"/flat/32.png";
    flagImgElement.src = srcFlag;

    spanElement.innerHTML = (element.name.first + " " + element.name.last);
    var pElement = document.createElement("p");
    pElement.innerHTML = ("Email: " + element.email + "<br>" + "Phone: " + element.phone );
    var figcaptionElement = document.createElement("figcaption");
    figcaptionElement.append ( spanElement );
    figcaptionElement.append ( flagImgElement );
    figcaptionElement.append ( pElement );
  
    var boxFavorites = document.querySelector(".box-favorites");
    
    var dragStart = function ( ev ) {
      
      ev.dataTransfer.setData("text", ev.target.id);
      console.log("en  dragstart");
      console.log(ev.target.id);
    }
    
    var dragIng = function( e ) {
      console.log("en dragIng");
    }
    
    var dragEnd = function( e ) {
      e.className = "box";
      console.log("en dragend");
    }
    
    var dragOver = function( e ) {
      //e.preventDefault();
      boxFavorites.classList.add("hovered");
      e.preventDefault();
    }
    
    var dragEnter = (e) => {
      //e.preventDefault();
    }
    
    var dragLeave = function( e ) {
      console.log("deberia ocultar los punticos");
      boxFavorites.classList.remove("hovered"); 

    }
    
    const container = document.querySelector('.holder');

    var dragDrop = function( ev ) {
      console.log("en drop");
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      container.appendChild(document.getElementById(data));
      //container.append( dragged );
      
      //e.append( box )
    }

    var imgElement = document.createElement("img");
    imgElement.src = element.picture.large;
    imgElement.className = "img-photo";

    var sectionElement = document.querySelector ("section");
    figureElement.append ( figcaptionElement );
    figureElement.append ( imgElement );
    articleElement.draggable = true;
    articleElement.id = "article-"+index;
    index++;
    articleElement.addEventListener('dragstart', dragStart, false);

    articleElement.append ( figureElement );
    sectionElement.append ( articleElement );

    articleElement.addEventListener("click", (e) => {
      console.log(e);
    });
    
    

    
    container.addEventListener("dragstart", dragStart);
    container.addEventListener("dragover", dragOver);
    container.addEventListener("dragenter", dragEnter);
    container.addEventListener("dragleave", dragLeave);
    container.addEventListener("drop", dragDrop);
    

  });

    //document.addEventListener("DOMContentLoaded", App.init
});