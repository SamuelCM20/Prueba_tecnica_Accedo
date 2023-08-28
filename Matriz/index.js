const matriz = document.getElementById('matriz');
const filas = 10;
const columns = 5;
const max = 5;
let seleccion = 0;



// Crear la matriz y agregar eventos de clic
for (let i = 0; i < filas; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < columns; j++) {

        const cell = document.createElement('td');
        cell.dataset.row = i;  
        cell.dataset.col = j;
        cell.addEventListener('click', clickCelda);
        row.appendChild(cell);
        
    }
    matriz.appendChild(row); 
}



// Manejar el evento de clic en una celda
function clickCelda(event) {

    const cell = event.target; 
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (!cell.classList.contains('disabled') && seleccion < max) {
        cell.classList.toggle('selected');

      
        Desabilitarfila(row);
        DesabilitarColum(col);

        seleccion++;
    }
}

// Deshabilitar una fila
function Desabilitarfila(row) {
    for (let i = 0; i < columns; i++) {
        const cell = matriz.rows[row].cells[i];
        cell.classList.add('disabled'); 
    }
}

// Deshabilitar una columna
function DesabilitarColum(col) {
    for (let i = 0; i < filas; i++) {
        const cell = matriz.rows[i].cells[col];
        cell.classList.add('disabled');
    }
}






