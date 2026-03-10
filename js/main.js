let category_btn = document.querySelector(".category_btn");
let category_nav_list = document.querySelector(".category_nav_list");

category_btn.addEventListener("click", open_catg_list);

function open_catg_list() {
    category_nav_list.classList.toggle("active");
}

var swiper=new Swiper(".mySwiper",{

    pagination:{
        el:".swiper-pagination",
        dynamicBullets:true,
        clickable:true},

    autoplay:{delay:1000},
    loop:true
})
