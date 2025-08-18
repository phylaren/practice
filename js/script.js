

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    container.addEventListener("click", (e) => {
        if(e.target.getAttribute("data-state") === "closed"){
            e.target.setAttribute("data-state", "open");
        }else {
            e.target.setAttribute("data-state", "closed");
        }
    }); 
});
