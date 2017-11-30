/*
 * Funcionalidad de tu producto
 */
window.addEventListener('load', function() {
  var student = document.getElementById('student');// al quiero hacer click
  var container1 = document.getElementById('container1');// al que quiero que aparezca
  var overview = document.getElementById('overview');
  var overcon = document.getElementById('overcon');
  var menu = document.getElementById('menu');// al que le aplico el evento2
  var opcionMenu = document.getElementById('options-menu');// al que quiero mostrar2
  // var btnmenu = document.getElementById('menu');
  // var menu = document.getElementById('options-menu');

  student.addEventListener('click', elige);
  function elige() {
    container1.style.display = 'block';
    overview.style.display = 'none';
  }
  overcon.addEventListener('click', over);
  function over() {
    overview.style.display = 'block';
    container1.style.display = 'none';
  }
  menu.addEventListener('click',icono);
  function icono() {
  opcionMenu.style.display = 'block';
  }

  

  
 /* btnmenu.addEventListener('click', showMenu);
  function showMenu() { 
    if (menu.classList.contains('disabled-menu')) { 
      menu.classList.add('enabled-menu'); 
      menu.classList.remove('disabled-menu');
    } else {
      
      menu.classList.add('disabled-menu');
      menu.classList.remove('enabled-menu');
    }
  }*/
  
  
 
   // overview.style.display = 'none';
  /* menu.addEventListener('click', option);
  function option() {
      alert('hola');
    if (opcionMenu.classList.contains('disabled-menu')) {
      opcionMenu.classList.add('enabled-menu');
      opcionMenu.classList.remove('disabled-menu');   
    } else {
      opcionMenu.classList.add('disabled-menu');
      opcionMenu.classList.remove('enabled-menu');
    }
  }*/
});  

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
