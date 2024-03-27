function initTabNav() {


    const tabMenu = document.querySelectorAll('.js-tabmenu li');

    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ative');

        function ativeTab(index) {
            tabContent.forEach((section) => {

                section.classList.remove('ative');
            });

            tabContent[index].classList.add('ative');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                ativeTab(index);
            }
            )
        })
    }

}
initTabNav();

function initAccordion() {


    const accordionList = document.querySelectorAll('.js-accordion dt');


    if (accordionList.length) {
        accordionList[0].classList.add('ative');
        accordionList[0].nextElementSibling.classList.add('ative');


        function activeAccordion() {
            this.classList.toggle('ative');
            this.nextElementSibling.classList.toggle('ative');
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

//scrool suave linksInternos

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        /*forma alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        });*/
    }
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

//animaçâo ao scroll
function initAnaimaScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length); {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible)
                    section.classList.add('ative');

            })
        }
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initAnaimaScroll();























