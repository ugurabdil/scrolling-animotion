const boxes=document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes)

checkBoxes()
function checkBoxes(){
const trigerBottom=(window.innerHeight/6)*4    //! ------->sayfada görünen boyutu gösterir.
    
boxes.forEach(box=>{
    const boxTop= box.getBoundingClientRect().top //bir ögenin boyutu ve görünüm alanına göre konum belirler  
    if(boxTop<trigerBottom){
        box.classList.add("show");
        }else{
        box.classList.remove("show");
    }
})
}
