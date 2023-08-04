const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
btn1.addEventListener("click",function(){
    const imgElement = document.getElementById("img");
    imgElement.src = "/Img_Switch/img2.jpg";
})
btn2.addEventListener("click",function(){
    const imgElement = document.getElementById("img");
    imgElement.src = "/Img_Switch/img1.jpg";
})