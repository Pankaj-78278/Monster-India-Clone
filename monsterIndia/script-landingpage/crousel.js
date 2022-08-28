// import footter from "../../fottercomponents/fotter.js";
// documnet.getElementById("footer").innerHTML=footter();

var elems = document.querySelector('.landpage-div4-box');
var flkty = new Flickity( elems, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 1500,
    pauseAutoPlayOnHover: true,
    freeScroll: true,
    pageDots: false,
});

var el = document.querySelector('.landpage-div5-box');
var flkt = new Flickity( el, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 1500,
    pauseAutoPlayOnHover: true,
    freeScroll: true,
    pageDots: false,
});

var el = document.querySelector('.main-carousels');

var flk = new Flickity( el, {
  // optons
  pageDots: false,
  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
    pauseAutoPlayOnHover: true,
    freeScroll: true,
});

function myalert(){
    let alertnumber = document.getElementById("alertnumber").value ;
    if(alertnumber.length>0){
        alert("our career counceller will contact you")
    }else{
        alert("try again")
    }
}

// function landing_page_alert(){
//   let landing_page_data= JSON.parse(localStorage.getItem('info'));


//   alert("Please Login")
// }

