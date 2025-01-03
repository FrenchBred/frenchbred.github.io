document.querySelector("#title").addEventListener("click", (e) => {
    e.target.innerText = "french bread";
    document.title = "french bread";
})