var Fila = null
function onSubmit() {
        let DataForm = Leer()
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
    }
}
function Leer() {
    let DataForm = {}
    DataForm["nom"] = document.getElementById("nom").value
    DataForm["ape"] = document.getElementById("ape").value
    DataForm["origen"] = document.getElementById("origen").value
    DataForm["destino"] = document.getElementById("destino").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.nom
    columna2 = Fila.insertCell(1).innerHTML = data.ape
    columna3 = Fila.insertCell(2).innerHTML = data.origen
    columna4 = Fila.insertCell(3).innerHTML = data.destino
    columna5 = Fila.insertCell(4).innerHTML = `<input class="edt" type="button"   onClick="Editarr(this)" value="Editar" >
                                            <input class="borr" type="button" onClick="Borrarr(this)"  value="Borrar" >`
    document.getElementById("nom").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("nom").value = ""
    document.getElementById("ape").value = ""
    document.getElementById("origen").value = ""
    document.getElementById("destino").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("nom").value = Fila.cells[0].innerHTML
    document.getElementById("ape").value = Fila.cells[1].innerHTML
    document.getElementById("origen").value = Fila.cells[2].innerHTML
    document.getElementById("destino").value = Fila.cells[3].innerHTML
}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.nom
    Fila.cells[1].innerHTML = DataForm.ape
    Fila.cells[2].innerHTML = DataForm.origen
    Fila.cells[3].innerHTML = DataForm.destino
    document.getElementById("nom").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
