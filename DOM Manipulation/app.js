function addImgToDiv(){
    const imgSrc = "/DOM Manipulation/image.jpg";
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.style.width = "100%";
    document.getElementById("myDiv").appendChild(imgElement);
}
document.getElementById("btn").addEventListener("click",addImgToDiv);