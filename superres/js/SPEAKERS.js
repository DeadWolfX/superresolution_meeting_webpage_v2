function cargarEntradas() {
    const url = "http://localhost:8080/api/pasos/"
    let insert = document.getElementById("botones")
    var contador = 7;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (let index = 0; index < data.data.length; index++) {
                var ct =
                    `
                    <div id="colBotones" class="col-sm-auto mx-auto ms-md-4 me-md-4 ms-sm-0 me-sm-0 ">
                        <button id="botonCotizacion" type="button" class="btn botones" data-bs-toggle="modal"
                            data-bs-target="#modal${data.data[index].pasosTitulo}"></button>
                        <br>
                        <span id="spanCotizacion" class="text-center">
                            <span id="spancol">`+ contador +`.</span> <br> ${data.data[index].pasosTitulo}
                        </span>                       
                    </div>
                                                  
                <div class="modal fade" id="modal${data.data[index].pasosTitulo}" tabindex="-1" aria-labelledby="headerMotalCotiza"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div id="encabezadoModales" class="modal-header">
                            <h5 class="modal-title" id="headerMotalCotiza">Cotización</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="cuerpoModales" class="modal-body">

                        ${data.data[index].pasosCuerpo}

                        </div>
                        <div id="encabezadoModales" class="modal-footer">
                            <button type="button" class="btn " data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>`
                contador++;
                console.log(data.data[index.cuerpocursos]);


                insert.insertAdjacentHTML("beforeend", ct)

            }

        })
        .catch((err) => console.log('error', err))
}