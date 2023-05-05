document.addEventListener('DOMContentLoaded', function () {
    //array de posits sin orden, nombrar a posits para usarlo en el resto de funciones
    let aposits = [
        ["DWES",
            "adadadad",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis consequatur harum incidunt eos voluptates enim corporis accusantium ex! Asperiores, expedita. Cumque optio voluptatibus omnis voluptatum eos molestiae aut itaque.",
            "09/10/2023",
            "50",
            "20"
        ],
        ["DWEC",
            "adadadad",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis consequatur harum incidunt eos voluptates enim corporis accusantium ex! Asperiores, expedita. Cumque optio voluptatibus omnis voluptatum eos molestiae aut itaque.",
            "09/10/2023",
            "30",
            "50",
            "lightblue"
        ],
        ["Diseño",
            "adadadad",
            "Que si quiere bolsa",
            "09/10/2023",
            "20",
            "30"
        ],
        ["Empresas",
            "adadadad",
            "Entrega nominas atrasadas",
            "09/10/2023",
            "60",
            "60",
            "red"
        ],
    ];
    //array de posits con orden, nombrar a posits para usarlo en el resto de funciones
    let posits = [
        ["DWES",
            "adadadad",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis consequatur harum incidunt eos voluptates enim corporis accusantium ex! Asperiores, expedita. Cumque optio voluptatibus omnis voluptatum eos molestiae aut itaque.",
            "09/10/2023",
            "15",
            "5"
        ],
        ["DWEC",
            "adadadad",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis consequatur harum incidunt eos voluptates enim corporis accusantium ex! Asperiores, expedita. Cumque optio voluptatibus omnis voluptatum eos molestiae aut itaque.",
            "09/10/2023",
            "15",
            "25",
            "lightblue"
        ],
        ["Diseño",
            "adadadad",
            "Que si quiere bolsa",
            "09/10/2023",
            "50",
            "5",
        ],
        ["Empresas",
            "adadadad",
            "Entrega nominas atrasadas",
            "09/10/2023",
            "50",
            "25",
            "red"
        ],
    ];
    let asignaturasEnlaces = document.getElementsByClassName("asignatura");
    for (let enlace of asignaturasEnlaces) {
        enlace.addEventListener("click", function () {
            let arrayPossits = document.getElementsByClassName("posit");
            for (let positToErase of arrayPossits) {
                positToErase.remove();
            }
            let asignatura = enlace.innerHTML;
            let positsFiltrados=null;
            if (asignatura == "Todos") {
                positsFiltrados = posits;
            }
            else positsFiltrados = posits.filter(element => element[0] == asignatura);
            positsFiltrados.forEach(element => {
                let div = document.createElement("div");
                div.setAttribute("class", "posit");
                if (element[6]!=undefined) div.setAttribute("style", "background-color:"+element[6]);
                let checkbox = document.createElement("input");
                checkbox.setAttribute("type","checkbox")
                div.appendChild(checkbox);
                let h2 = document.createElement("h2");
                h2.setAttribute("class", "title");
                h2.innerHTML = element[1];
                div.appendChild(h2);
                let p = document.createElement("p");
                p.setAttribute("class", "texto");
                p.innerHTML = element[2];
                div.appendChild(p);
                let p2 = document.createElement("p");
                p2.setAttribute("class", "fecha");
                p2.innerHTML = element[0]+" "+element[3];
                div.appendChild(p2);
                let a1 = document.createElement("a");
                a1.setAttribute("class", "editar");
                a1.setAttribute("href", "#");
                a1.innerHTML = "Editar";
                a1.addEventListener("click",editar(div));
                div.appendChild(a1);
                div.style.left = element[4] + "%";
                div.style.top = element[5] + "%";
                document.body.appendChild(div);
            });
        });
    };
});
function editar(div){
    console.log(div);
}