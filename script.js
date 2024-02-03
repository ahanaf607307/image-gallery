let gallery = document.querySelector(".gallery");

let left = document.querySelector("#left")
let right = document.querySelector("#right")

gallery.addEventListener("wheel",(e)=>{
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
    
    gallery.style.scrollBehavior = "auto";
})

left.addEventListener("click",()=>{
    gallery.scrollLeft -= 900;
    gallery.style.scrollBehavior = "smooth"

})

right.addEventListener("click", ()=>{
    gallery.scrollLeft += 900;
    gallery.style.scrollBehavior = "smooth"
})