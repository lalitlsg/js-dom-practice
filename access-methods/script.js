//getElementById

let js = document.getElementById("js");
// console.log(js);
let hello = document.getElementById("hello");
// console.log(hello);
let heading = document.getElementById("heading");
// console.log(heading);

let res = document.body.getElementsByTagName("p");
// console.log(res);

let tags = js.getElementsByTagName("*");
// console.log(tags);
//block level element will not appear in tags array if parent is other than container tags like div,section etc.

// for (let i of tags) {
//   console.log(i);
// }

let js1 = document.querySelector("#js");
let h1 = js1.getElementsByTagName("h1");
// console.log(js1);
// console.log(h1);

let qsall = document.querySelectorAll("span, #hello");
// console.log(qsall);
