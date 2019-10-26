
    var acc = document.getElementsByClassName("accordian");
    var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var book-details = this.nextElementSibling;
        if (book-details.style.display === "block") {
          book-details.style.display = "none";
        } else {
          book-details.style.display = "block";
        }
      });
    }
  