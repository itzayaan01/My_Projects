decreasebtn = document.getElementById("decrease")
resetbtn = document.getElementById("reset")
increasebtn = document.getElementById("increase")
countdis = document.getElementById("count")

let count = 0;

decreasebtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        countdis.textContent = count;
    }
});

resetbtn.addEventListener("click",function(){
    count=0;
    countdis.textContent = count
})

increasebtn.addEventListener("click",function(){
    count++;
    countdis.textContent = count
})


