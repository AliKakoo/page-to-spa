import router from "./router.js"

document.addEventListener('click',   event => {

    event.preventDefault();

    if (!event.target.className.includes('nav-link')) {
        return false;
    } 

    


    urlRoutes(event)

})

function urlRoutes(event){
    window.history.pushState({},"", event.target.href)
    locationHandler();
}

async function locationHandler(){
    const loc = window.location.pathname;
    
    const rout = router[loc] || router[404] ;
    
    const html = await fetch(rout.template).then(res => res.text())
    
    document.querySelector("#content").innerHTML = html;
    document.title = rout.title;

}

window.onpopstate = locationHandler;
