document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".question-toggle");
  
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });
  