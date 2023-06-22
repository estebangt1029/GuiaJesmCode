// ajustes=document.getElementById("ajustes")

// ajustes.ad("click", ()=> {
//   console.log('dzb')
//     var menu = document.getElementById("menu");
//     if (menu.style.display === "none") {
//         menu.style.display = "block";
//     } else {
//       menu.style.display = "none";
//     }
//   });
  
let ajustes=document.getElementById('ajustes');
let menu=document.getElementById('menu');

ajustes.addEventListener('click',()=>{
    if(menu.style.display === "none"){
        menu.style.display='block'
    }else{
        menu.style.display='none'
    }
})