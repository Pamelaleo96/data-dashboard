/*
 * Funcionalidad de tu producto
 */
window.addEventListener('load', function() {
  var student = document.getElementById('student');// al quiero hacer click
  var container1 = document.getElementById('container1');// al que quiero que aparezca
  var overview = document.getElementById('overview');
  var overcon = document.getElementById('overcon');

  student.addEventListener('click', elige);
  function elige() {
    container1.style.display = 'block';
    overview.style.display = 'none';
  }
  overcon.addEventListener('click', over);
  function over() {
    overview.style.display = 'block';
  }
});

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
