const container = document.querySelector(".start_container");
let start_button;

(function start() {
  const cheese_start = document.createElement("img");
  cheese_start.src = "Cheeses.jpg";
  cheese_start.classList.add("cheese_start");
  container.appendChild(cheese_start);
  start_button = document.createElement("button");
  start_button.classList.add("start_button");
  start_button.innerText = "Start Quiz";
  container.appendChild(start_button);
  return start_button;
})();

function removeChildren() {
  if (container.children.length > 0) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    } // removes all child nodes
  }
}

start_button.addEventListener("click", firstQuestion);

function firstQuestion() {
  removeChildren();
  const question1 = document.createElement("h2");
  question1.innerText = "Pick the funniest pet picture";
  container.appendChild(question1);
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img_container");
  container.appendChild(imgContainer);
  const img1 = document.createElement("img");
  img1.src = "petPicture1.jpg";
  img1.classList.add("container_img");
  imgContainer.appendChild(img1);
  const img2 = document.createElement("img");
  img2.src = "petPicture2.jpg";
  img2.classList.add("container_img");
  imgContainer.appendChild(img2);
  const img3 = document.createElement("img");
  img3.src = "petPicture3.jpg";
  img3.classList.add("container_img");
  imgContainer.appendChild(img3);
}
