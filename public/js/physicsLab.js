function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  var create = document.getElementById("createbtn");
  var cancel = document.getElementById("cancelbtn");
  var modalToaster = document.getElementById("myModalToaster");
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  create.onclick = function() {
    modal.style.display = "none";
    modalToaster.style.display="block";
  }
  cancel.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
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