const queryParams = window.location.search;
const query = new URLSearchParams(queryParams);
const id = query.get("productID");
console.log(id);

import { getData } from "./request.js";

const title = document.getElementById("title");
const description = document.getElementById("description");
const image = document.getElementById("image");
const price = document.getElementById("price");
const rating = document.getElementById("rating");

const updateUI = (product) => {
  image.src = product.thumbnail;
  title.textContent = product.title;
  description.textContent = product.description;
  price.textContent = `${product.price} $`;
  rating.textContent = product.rating;
};

getData("https://dummyjson.com/products" + `/${id}`)
  .then((product) => {
    updateUI(product);
  })
  .catch((err) => {
    console.log(err);
  });
