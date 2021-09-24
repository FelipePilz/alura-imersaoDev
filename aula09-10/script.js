/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var publicId;

var statusBotao = [{
  status: false,
},{
  status: false,
}];

function myFunction(dropdownId) {
    publicId = dropdownId;
    document.getElementById("myDropdown"+dropdownId).classList.toggle("show");
    if(statusBotao[dropdownId].status == false){
      document.getElementById("dropbtn"+dropdownId).style.color = "#F7F7F7";
      document.getElementById("dropbtn"+dropdownId).style.fontWeight = "550";
      statusBotao[dropdownId].status = true;
    }else{
      document.getElementById("dropbtn"+dropdownId).style.color = "#1C1C1C";
      document.getElementById("dropbtn"+dropdownId).style.fontWeight = "400";
      statusBotao[dropdownId].status = false;
    }
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      
      for(var x = 0; x < statusBotao.length;x++){
        document.getElementById("dropbtn"+x).style.color = "#1C1C1C";
        document.getElementById("dropbtn"+x).style.fontWeight = "400";
        statusBotao[x].status = false;
      }
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  function mudaTema(){
    document.body.classList.toggle("dark");
  }