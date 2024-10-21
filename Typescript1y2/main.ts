import { series } from './data.js';
import { Serie } from './serie.js';

let seriesTbody: HTMLElement = document.getElementById('series-table')!;
const totalSeasonsElm: HTMLElement = document.getElementById("total-seasons")!;

// Renderizamos las series en la tabla
renderSeriesInTable(series);

// Calculamos el promedio de temporadas y lo mostramos
totalSeasonsElm.innerHTML = `Seasons average: ${getAverageSeasons(series).toFixed(0)}`;

function renderSeriesInTable(seriesList: Serie[]): void {
    console.log('Desplegando series');
    seriesList.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td>${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons += serie.seasons);
    return totalSeasons / series.length;
}
