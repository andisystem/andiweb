let showDate = document.getElementById('date');
let showHour = document.getElementById('hour');

let date = new Date();

let dayWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let monthYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

showDate.innerHTML = `${dayWeek[date.getDay()]}, ${date.getDate()} de ${monthYear[date.getMonth()]} de ${date.getFullYear()}`;

setInterval(() => {
    let hour = new Date();
    showHour.innerHTML = hour.toLocaleTimeString();
});