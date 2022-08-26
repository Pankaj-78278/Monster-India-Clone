
    var slideIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      var x = document.getElementsByClassName("landpage-div3-mySlide");
      x.set
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    

    var slideIndexs = 0;
    carousels();
    
    function carousels() {
      var i;
      var x = document.getElementsByClassName("landpage-div3-track2-2");
      x.set
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndexs++;
      if (slideIndexs > x.length) {slideIndexs = 1}
      x[slideIndexs-1].style.display = "block";
      setTimeout(carousels, 2000); // Change image every 2 seconds
    }