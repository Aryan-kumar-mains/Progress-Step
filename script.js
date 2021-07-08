var totalProgress = document.querySelector(".progress");
var count = 1;
var clickedBtn_1 = document.querySelector(".next");
var clickedBtn_2 = document.querySelector(".prev");

// For Next Button
clickedBtn_1.addEventListener("click", function () {
    if (count < 4) {
        totalProgress.style.width = `${count * 33}%`;
        document.querySelectorAll("h3")[count].classList.add("active");
        document.querySelector(".prev").disabled = false;
        count++;
    }
    if(count==4){
        this.disabled = true;
    }
});

// For previous Button
clickedBtn_2.addEventListener("click",function(){
    count--;
    totalProgress.style.width = `${(count-1)*33}%`;
    document.querySelectorAll("h3")[count].classList.remove("active");
    document.querySelector(".next").disabled = false;
    if(count==1){
        this.disabled = true;
    }
});

