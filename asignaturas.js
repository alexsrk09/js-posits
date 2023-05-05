document.addEventListener('DOMContentLoaded', function() {
    //array de asignaturas
    let asignaturas = ["Todos","DWES","Diseño","Empresas","DWEC","Despliegue"];
    asignaturas.forEach(element => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "asignatura");
        a.innerHTML = element;
        li.appendChild(a);
        document.getElementById("asignaturas").appendChild(li);
        a.addEventListener("click", function(){
            document.getElementById("asignaturaName").innerHTML = element;
        });
    });
    //por defecto seleccionamos la primera asignatura
    document.getElementById("asignaturaName").innerHTML = "Todos";
});