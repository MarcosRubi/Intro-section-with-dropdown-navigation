function toggleMenu(){
    document.querySelector('.content-menu').classList.toggle('visible')
}
function toggleSubMenu(id){
    const subMenus = document.querySelectorAll('.submenu')

    const subMenu = subMenus[id]
    subMenu.classList.toggle('visible')
    icon = subMenus[id].parentElement.children[0].childNodes[1]

    icon.src.includes('arrow-up') ? icon.src = "images/icon-arrow-down.svg" : icon.src = "images/icon-arrow-up.svg"
}

window.onload = ()=>{
    const logo = document.querySelector('.logo')
    const iconHamburguer = document.querySelector('.icon-hamburguer')
    const contentMenu = document.querySelector('.content-menu nav')
    const contentMenuButtons = document.querySelector('.content-menu .buttons')
    const heroTitle = document.querySelector('.hero h1')
    const heroDescription = document.querySelector('.hero p')
    const heroBtn = document.querySelector('.hero .btn')
    const heroSponsors = document.querySelector('.hero .sponsors')
    const heroImg = document.querySelector('.hero__img')
    const attribution = document.querySelector('.attribution')

    const startAnimation = (entries, observe)=>{
        entries.forEach(element => {
            if(element.isIntersecting){
                element.target.classList.add('show')
            }
        });
    }

    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin : "0px",
        threshold: 0.1
    })


    observer.observe(logo)
    observer.observe(iconHamburguer)
    observer.observe(contentMenu)
    observer.observe(contentMenuButtons)
    observer.observe(heroTitle)
    observer.observe(heroDescription)
    observer.observe(heroBtn)
    observer.observe(heroSponsors)
    observer.observe(heroImg)
    observer.observe(attribution)
}