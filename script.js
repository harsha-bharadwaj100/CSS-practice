starer = (rating) => {
    console.log("running");
    for (let i = 0; i < document.getElementsByClassName("star").length; i++) {
        document.getElementsByClassName("star")[i].classList.remove("stared");
    }
    for (let i = 0; i < rating; i++) {
        document.getElementsByClassName("star")[i].classList.add("stared");
        console.log("added stared");
    }
}