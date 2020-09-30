import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './style/main.sass';

document.getElementById("myinput").oninput = function() {
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
};
