const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "css/light.css") {
    theme.href = "css/dark.css";
  } else {
    theme.href = "css/light.css";
  }
});

function change() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      theme.href = "css/dark.css";
    } else {
      theme.href = "css/light.css";
    }
}

window.onload = change();


}
