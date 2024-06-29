const show = document.querySelector("#champion");
const button = document.querySelector(".tour-btn");
const close = document.querySelector(".btn")
const clear = document.querySelector(".remove")


button.addEventListener('click', function() {
    show.style.display = 'block';
    button.style.display = 'none';
});    

clear.addEventListener('click', function() {
    show.style.display = 'none';
    
});


// button.addEventListener('click', () => {
//     clear.style.display = 'none';
// })


// button.addEventListener('click', function() {
//     show.style.display = 'block';
    
// button.addEventListener('click', function() {
//     show.style.display = 'none';
//     button.style.display = 'none';  
// });
// });

