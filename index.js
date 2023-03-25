const searchBtn = document.querySelector("button");
const imgContainer = document.querySelector(".result");
const searchInput = document.querySelector("input");

const bringGif = () => {
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
      }
      fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=U1W79RO2zIjzXZFlpofggO2sH7V5Lniv&s=${searchInput.value}`,
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => {   
          const newImg = document.createElement("img");
          newImg.src = response.data.images.original.url;
          imgContainer.appendChild(newImg);
        })
        .catch(() => {
          const newImg = document.createElement("img");
          const error = document.createElement("p");
          error.setAttribute("id", "error");
          error.textContent = "no result";
          newImg.src = "./images/rick-roll.gif";
          imgContainer.append(error, newImg);
        });
}

searchBtn.addEventListener("click", () => {
    bringGif();
    searchInput.value = "";
});

searchInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        bringGif();
        searchInput.value = "";
    }
});
