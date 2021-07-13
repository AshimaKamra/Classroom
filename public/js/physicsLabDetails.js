function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var modalExp = document.getElementById("myModalExp");
  var btnExp = document.getElementById("exp-add-btn");
  var spanExp = document.getElementsByClassName("close-exp")[0];

  var create = document.getElementById("createbtn");
  var cancel = document.getElementById("cancelbtn");
  var modalToaster = document.getElementById("myModalToaster");
  btnExp.onclick = function() {
    modalExp.style.display = "block";
  }
  spanExp.onclick = function() {
    modalExp.style.display = "none";
  }
  create.onclick = function() {
    modalExp.style.display = "none";
    modalToaster.style.display="block";
  }
  cancel.onclick = function() {
    modalExp.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modalExp) {
      modalExp.style.display = "none";
    }
  }
  var spanToaster = document.getElementsByClassName("closeToaster")[0];
  spanToaster.onclick = function() {
    modalToaster.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modalToaster) {
      modalToaster.style.display = "none";
    }
  }