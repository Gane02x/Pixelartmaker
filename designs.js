// Select color input

// Select size input


// When size is submitted by the user, call makeGrid()
        const grid = document.querySelector('#pixelCanvas')
        const submitButton = document.querySelector('#sizePicker');  

            submitButton.addEventListener('submit', function submit(event){
            event.preventDefault();
            const height = document.querySelector('#inputHeight').value;
            const width = document.querySelector('#inputWidth').value;
            makeGrid(width,height);
        });
    /**
     * 
     * @param {int} rows - number of squares representing the height of the grid
     * @param {int} cells - number of squares representing the height of the grid
     */
    function makeGrid(rows,cells){
        $('tr').remove();
        for (let row=1; row<=rows; row++){
            const grid = document.querySelector('table');
            rowBlock=document.createElement('tr');
            grid.append(rowBlock);

           for (let cell=1; cell<=cells; cell++){
                cellBlock=document.createElement('td');
                rowBlock.append(cellBlock);
                cellBlock.addEventListener('click', paint)
            }
        }
        function paint (click) {
        const color = document.querySelector('#colorPicker').value;
        click.target.style.backgroundColor = color;
    }
}