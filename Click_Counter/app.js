let count = 0;
const increaseBtn = document.getElementById("increase-btn");
increaseBtn.addEventListener("click",function(){
    count++;
    document.getElementById("p").innerText = count;
})