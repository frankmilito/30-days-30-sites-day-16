// $(document).ready(function () {
//     $('#autoWidth').lightSlider({
//         autoWidth: true,
//         loop: true,
//         onSliderLoad: function () {
//             $('#autoWidth').removeClass('cS-hidden');
//         }
//     });
// });


$(document).ready(function () {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit");

menu.addEventListener("click", function (e) {
    // nav.classList.toggle("menu-items");
    // nav.style.transform = "scaleY(1)";
    nav.style.width = '100%';
    e.preventDefault();
});
exit.addEventListener("click", function (e) {
    // nav.classList.add("menu-items");
    nav.style.width = "0";
    e.preventDefault();
});