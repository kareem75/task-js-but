document.querySelectorAll("button").forEach(function (btn) {
  btn.onclick = function () {
    var chosenColor = this.dataset.colorrr;
    document.querySelector("#demo").style.backgroundColor = chosenColor;

    var chosenAlign = this.dataset.align;
    document.querySelector("#demo").style.textAlign = chosenAlign;
  };
});