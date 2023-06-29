// ========= This is BuBBer Code ===============

// const modal = document.querySelector(".modal-cart");
// const overlay = document.querySelector(".overlay");

// const openModal = () => { 
    
//     modal.classList.add("active");
//     overlay.classList.add("overlayactive");
//     console.log("modal is open");

// };

// const closeModal = () => {
    
//     modal.classList.remove("active");
//     overlay.classList.remove("overlayactive");
//     console.log("modal is colosed");

// };















// =========================================================================================================
// ========= This is MY Code ===============


const addRemoveCss  = document.querySelector(".modal-cart");

const openModal = () => { 
    
    addRemoveCss.style.scale = "1";
    console.log("modal is open");

};

const closeModal = () => {
    
    addRemoveCss.style.scale = "0";
    console.log("modal is colosed");

};