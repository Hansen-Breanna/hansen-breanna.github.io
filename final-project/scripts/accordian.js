
    var acc = document.getElementsByClassName("accordian");
    var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var bookDetails = this.nextElementSibling;
        if (bookDetails.style.display === "block") {
          bookDetails.style.display = "none";
        } else {
          bookDetails.style.display = "block";
        }
      });
    }
  