import { series } from './data.js';
var seriesTbody = document.getElementById('series-table');
var totalSeasonsElm = document.getElementById("total-seasons");
// Renderizamos las series en la tabla
renderSeriesInTable(series);
// Calculamos el promedio de temporadas y lo mostramos
totalSeasonsElm.innerHTML = "Seasons average: ".concat(getAverageSeasons(series).toFixed(0));
function renderSeriesInTable(seriesList) {
    console.log('Desplegando series');
    seriesList.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                               <td>").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
