// Call function when open button is clicked
let buttonOpenArr = document.querySelectorAll(".modal-open");
let buttonCloseArr = document.querySelectorAll(".modal-close");
let parentSpaceArr = document.querySelectorAll(".global-modal-window");

buttonOpenArr.forEach(function(e) {
    e.addEventListener("click", openModal);
});

buttonCloseArr.forEach(function(e) {
    e.addEventListener("click", closeModal);
});

parentSpaceArr.forEach(function(e) {
    	e.addEventListener("click", function(e) {
        	e = window.event || e;
        	if (this === e.target) {
            	this.style.display = "none";
        	}
    	});
});


// Open modal window
function openModal() {

    let modalId = this.getAttribute("modal-id");
    document.getElementById(modalId).style.display = "flex";

}


// Close modal window
function closeModal() {

    let className = ".global-modal-window";
    this.closest(className).style.display = "none";

}