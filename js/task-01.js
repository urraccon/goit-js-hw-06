// const parentCategory = document.querySelector("#categories");
const numOfCat = document.getElementById("categories").childElementCount;
console.log(`Number of categories: ${numOfCat}`);
// const titleAllCat = document.getElementsByTagName("h2");
// const titleFirstCat = titleAllCat[0].innerText;
// console.log(`Category: ${titleFirstCat}`);
const allCat = document.getElementsByClassName("item");
console.dir(allCat);
// const numOfElFirstCat = allCat[0].childElementCount;
// console.log(`Elements: ${numOfElFirstCat}`);
for (const category of allCat) {
  const titleCat = category.querySelectorAll("h2")[0].textContent;
  //   const titleCatValue = titleCat[0].textContent;
  console.log(titleCat);
  console.log(`Category: ${titleCat}`);
  const numElCat = category.getElementsByTagName("ul")[0].childElementCount;
  console.log(numElCat);
  console.log(`Elements: ${numElCat}`);
}

//De ce nu pot itera arrayul allCat folosind metoda forEach?
