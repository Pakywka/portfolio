const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-nav-btn').addEventListener('click', () => {
    selectElement('.site-header').classList.toggle('active');
    selectElement('body').classList.toggle('noscroll');
});

/* selectElement('.gn-btn').addEventListener('click', () => {
    selectElement('nav').classList.remove('active');
    selectElement('body').classList.remove('noscroll');
}); */



/* Filter
========================== */

let filter = $("[data-filter]");

filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if (cat == 'all') {
        $("[data-cat]").removeClass('hide');
    } else {
        $("[data-cat]").each(function () {
            let workCat = $(this).data('cat');

            if (workCat != cat) {
                $(this).addClass('hide');
            } else $(this).removeClass('hide');
        });
    }
});

/* Modal
========================== */

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal')

    $(modalId).addClass('show');
    $("body").addClass('noscroll');

    $('#worksSlider').slick('setPosition');
});


modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal')

    modalParent.removeClass('show');
    $("body").removeClass('noscroll');
});


$(".modal").on("click", function(event) {
    $(this).removeClass('show');
    $("body").removeClass('noscroll');
});


$(".modal-inner").on("click", function(event) {
    event.stopPropagation();
});


/* Slider: https://kenwheeler.github.io/slick/
===================================*/
$('#worksSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

$('.slickPrev').on("click", function(event) {
    event.preventDefault();

    let currentSlider =
    $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");
});

$('.slickNext').on("click", function(event) {
    event.preventDefault();

    let currentSlider =
    $(this).parents('.modal').find('[data-slider="slick"]');


    currentSlider.slick("slickNext");
});






/* selectElement('.resume').addEventListener('click', () => {
    selectElement('.modal').classList.toggle('active'),
    selectElement('body').classList.toggle('no-scroll');
}); */