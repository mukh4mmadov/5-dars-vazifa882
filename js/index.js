import { getData } from "./request.js";

const temp = document.querySelector(".template-1");
const list = document.querySelector("#list");

const updateUI = (data) => {
  data.forEach((prod) => {
    const clone = temp.content.cloneNode(true);

    const img = clone.querySelector(".images");
    const h2 = clone.querySelector(".h2-title");
    const link = clone.querySelector(".batafsil-link");

    img.setAttribute("src", prod.thumbnail);
    h2.textContent = prod.title;
    link.href = `/about.html?productID=${prod.id}`;

    list.appendChild(clone);
  });
};

getData("https://dummyjson.com/products")
  .then((data) => {
    updateUI(data.products);
  })
  .catch((err) => {
    console.log(err);
  });
