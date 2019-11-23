onClick(e){
    // div.style.display = "none";
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    this.copyTextIntoClipboard(this.employeeOnboardingFulfillLink);
    var left  = (e.clientX - 30)  + "px";
    var top  = (e.clientY + 20)  + "px";

    var div = document.getElementById('copied-text');

    div.style.left = left;
    div.style.top = top;
    div.style.display = "block";
    this.intervalId = setInterval(() => {
      div.style.display = "none";
    }, 500)
  }
