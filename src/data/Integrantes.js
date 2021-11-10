import alcalde from "../assets/images/alcalde.jpeg"
import lucas from "../assets/images/lucas.jpeg"
import mariana from "../assets/images/mariana.jpeg"
import pedro from "../assets/images/pedro.jpeg"

export default class Integrantes {
    constructor() {
        this.integrantes= [
            {nome: "João Pedro", scroll:"#scroll-jp", id:"joaopedro", src: alcalde},
            {nome: "Lucas", scroll:"#scroll-lucas", id:"lucas", src: lucas},
            {nome: "Mari", scroll:"#scroll-mari", id:"mari", src: mariana},
            {nome: "Pedro", scroll:"#scroll-pedro", id:"pedro", src: pedro}
        ];
    }
}