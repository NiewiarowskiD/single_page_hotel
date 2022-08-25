


//Hamburger menu

const hamburger = document.querySelector(".menu-hamburger");
const menu = document.querySelector(".nav-link");


hamburger.addEventListener("click",() => {
    menu.classList.toggle("active-burger");
});

//Oferta weselna

const open = document.getElementById('open');

const modal_container=document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () =>{
    modal_container.classList.add('show');
});

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
});


// MENU

const open_menu = document.getElementById('menu_open');
const menu_container=document.getElementById('menu_container');
const close_menu = document.getElementById('close_menu');

open_menu.addEventListener('click', () =>{
    menu_container.classList.add('show');
});

close_menu.addEventListener('click', () =>{
    menu_container.classList.remove('show');
});



//Menu scroll

const contact = document.querySelector("#li-contact");
const home = document.querySelector("#li-home");
const about = document.querySelector("#li-about");
const wedding = document.querySelector("#li-weddings");
const offer = document.querySelector("#li-offer");
const gallery = document.querySelector("#li-gallery");
const menu_restaurant = document.querySelector("#li-menu");
const hotel = document.querySelector("#li-hotel");

contact.addEventListener("click", ()=>{
    document.querySelector("#contact-view").scrollIntoView();
})

home.addEventListener("click", ()=>{
    document.querySelector("#contact_view").scrollIntoView();
})

about.addEventListener("click", ()=>{
    document.querySelector("#about-view").scrollIntoView();
})

wedding.addEventListener("click", ()=>{
    document.querySelector("#wedding-view").scrollIntoView();
})

gallery.addEventListener("click", ()=>{
    document.querySelector("#gallery-view").scrollIntoView();
})

hotel.addEventListener("click", ()=>{
    document.querySelector("#hotel-view").scrollIntoView();
})

offer.addEventListener("click", ()=>{
    document.querySelector("#offer2-view").scrollIntoView();
})

menu_restaurant.addEventListener("click", ()=>{
    document.querySelector("#restaurant-menu-view").scrollIntoView();
})

home.addEventListener("click", ()=>{
    document.querySelector("#body-view").scrollIntoView();
})


// Carousel

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 10000);
}

//Oferty_TABA

$(function () {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.tabs-content li'),
        $tabslis = $('.tabs li');

    $contentlis.eq(activeIndex).show();

    $('.tabs').on('click', 'li', function (e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active-tab');
        $current.addClass('active-tab');
        $contentlis.hide().eq(index).show();
    });
});


// carousel 2 //
$(function(){
    var container = $(".slide_wrap");
    var slideShow = container.find(".slide_show");
    var slideImg = slideShow.find(".slide_img");
    var slides = slideImg.find(">div");                //슬라이드 이미지
    var slideBtn = container.find(".slide_btn")        //슬라이드 버튼

    var slideCount = slides.length;                    //슬라이드 개수
    var slideWidth = slides.innerWidth();                   //슬라이드 이미지의 가로 값
    var show_num = 3;
    var num = 0;

    var slideCopy = $(".slide:lt("+show_num+")").clone();
    slideImg.append(slideCopy);

    //이미지 움직이기
    function back(){
        if(num == 0){
            num == slideCount;
            slideImg.css("margin-left",-num * slideWidth +"px" )
        }
        num--;
        slideImg.animate({"margin-left": -slideWidth * num+"px"}, 500);
    };
    function next(){
        if(num == slideCount){
            num == 0;
            slideImg.css("margin-left",-num * slideWidth +"px");
        }
        num++;
        slideImg.animate({"margin-left": -slideWidth * num+"px"}, 500);
    };

    //버튼 클릭하기
    slideBtn.on("click", "a", function(){
        if($(this).hasClass("prev")){
            back();
        } else {
            next();
        }
    });

});