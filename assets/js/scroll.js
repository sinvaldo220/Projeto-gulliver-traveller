window.addEventListener('scroll', () =>{
    const headerPage = document.querySelector('.header-page');
    headerPage.classList.toggle('active-scroll', window.scrollY > 100)
})