window.onload = function () {

    const showMenu = (toggleId, navId) => {

        const toggle = document.getElementById(toggleId),
            menu = document.getElementById(navId);

        toggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }

    showMenu('nav_toggle', 'nav_menu');


    $('li a').click(function () {
        console.log($(this).data('value'));
        $('html , body').animate({
            // scrollTop: $('#Edocution-id').offset().top
            scrollTop: $('#' + $(this).data('value')).offset().top


        }, 1500);
    });


ScrollReveal({
            reset: true,
            distance: '50px',
            duration: 1500,
            delay: 200
        });


        ScrollReveal().reveal('.container-img', { delay: 700, origin: 'top' });

        ScrollReveal().reveal('.home-title', { delay: 150, origin: 'top' });
        ScrollReveal().reveal('.title', { delay: 200, origin: 'bottom' });
        ScrollReveal().reveal('.text', { delay: 250, origin: 'bottom' });
        ScrollReveal().reveal('.shoping', { delay: 300, origin: 'bottom' });

        // ScrollReveal().reveal('.row2', { delay: 300, origin: 'right' });
        // ScrollReveal().reveal('.row3', { delay: 300, origin: 'left' });


        // ScrollReveal().reveal('.sp span', { delay: 200, origin: 'bottom', interval: 100 });
        // window.sr = ScrollReveal();

      let products =  ScrollReveal({
            reset: true,
            distance: '50px',
            duration: 1500,
            // delay: 200
        });

        products.reveal('.product-title', { delay: 100, origin: 'left' ,interval: 100});
        // products.reveal('.col-md-3', { delay: 300, origin: 'bottom' },50);
        products.reveal('.pro-2', { delay: 300, origin: 'bottom' });
        products.reveal('.pro-3', { delay: 400, origin: 'bottom' });
        products.reveal('.pro-4', { delay: 500, origin: 'bottom' });
        products.reveal('.pro-1', { delay: 200, origin: 'bottom' });



 let footer =  ScrollReveal({
            reset: true,
            distance: '30px',
            duration: 1500,
            delay: 200
        });
        footer.reveal('.logo-links', { origin: 'bottom' });
        footer.reveal('.details-contact', { origin: 'top' });
        footer.reveal('.aboute-company', { origin: 'bottom' });






    const sneaker_img = document.querySelectorAll('.image'),
        nike_green = document.getElementById('n_g'),
        nike_black = document.getElementById('n_b'),
        nike_smi_black = document.getElementById('n_s_b'),
        sneaker_figure = document.querySelector('.back-img'),
        select_img = document.querySelectorAll('.nike');

    select_img.forEach((el) => {

        el.onclick = () => {
              removeActive();
            sneaker_img.forEach((el2)=>{
                if(el.getAttribute('id') == el2.getAttribute('data-id')){
                 el2.classList.add('active');
                 el2.parentElement.style.borderColor = el2.getAttribute('data-color'); 
                 sneaker_figure.style.backgroundColor = el2.getAttribute('data-color');
                }

            });
        };
    });

    function removeActive() {
        sneaker_img.forEach((el2) => {
            el2.classList.remove('active');
        });
    }

    function changeImage(img_id) {
        sneaker_img.forEach((el2) => {
            if (img_id == el2.getAttribute('data-id')) {
                el2.classList.add('active');
                el2.parentElement.style.borderColor = el2.getAttribute('data-color');
                sneaker_figure.style.backgroundColor = el2.getAttribute('data-color');

            }
        });
    }

    
// nike_green.onclick = () => {
//     removeActive();
//     changeImage(nike_green.getAttribute('id'));
// }
// nike_black.onclick = () => {
//      removeActive();
//     changeImage(nike_black.getAttribute('id'));
// }
// nike_smi_black.onclick = () => {
//      removeActive();
//     changeImage(nike_smi_black.getAttribute('id'));
// }
}