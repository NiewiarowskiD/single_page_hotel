


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
