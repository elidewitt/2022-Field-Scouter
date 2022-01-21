const tabHeaders = document.getElementsByClassName("tabHeader");

for (let i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}