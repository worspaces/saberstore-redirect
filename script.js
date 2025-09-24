var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "css/light.css") {
    theme.href = "css/light.css";
  } else {
    theme.href = "css/dark.css";
  }
});

function change() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      theme.href = "css/light.css";
    } else {
      theme.href = "css/light.css";
    }
}

window.onload = change();


}
/*
     FILE ARCHIVED ON 20:15:00 Jun 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:00:05 Sep 24, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, INTERNET ARCHIVE.
*/
