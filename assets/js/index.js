const menuLis = $(".menu li");
const menuBar = $(".menu li:last-child");

menuBar.on("click", showIcons);

function showIcons() {
  menuLis.not(menuBar).toggleClass("hidden show");
}
