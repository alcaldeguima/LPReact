import alcalde from "../assets/images/alcalde.jpeg"
import lucas from "../assets/images/lucas.jpeg"
import mariana from "../assets/images/mariana.jpeg"
import pedro from "../assets/images/pedro.jpeg"

export default class Integrantes {
    constructor() {
        this.integrantes= [
            {nome: "João Pedro", colunas: "two-columns", scroll:"#scroll-jp", id:"joaopedro", background: "personal", src: alcalde, text: "Apaixonado por tecnologia, sempre fui entusiasta e gostei de me manter atualizado com as novidades do mercado. Esse interesse me levou a entrar no ensino médio técnico em informática no Instituto Federal (IFSul), onde atualmente curso o 3º ano. Sou uma pessoa dedicada e que gosta de desafios, tanto no âmbito profissional, quanto no pessoal." },
            {nome: "Lucas", colunas: "two-columns reversed", scroll:"#scroll-lucas", id:"lucas", background: "personal reversed", src: lucas, text: "Dedico diariamente um momento para estudar e colocar em prática os conhecimentos absorvidos, relativos a programação (tecnologia) e comunicação (soft skills). Além disso, gosto muito de apresentar projetos e utilizar a criatividade, com a finalidade de impactar as pessoas."},
            {nome: "Mari", colunas: "two-columns", scroll:"#scroll-mari", id:"mari", background: "personal", src: mariana, text: "Comecei a estudar sobre programação em abril de 2021 quando entrei para o projeto #TeuFuturo. Dentro do projeto conheci muitas pessoas experientes na área, as quais nos deram inúmeras dicas. Hoje eu pretendo seguir a carreira de engenharia computacional e futuramente trabalhar na perícia computacional."},
            {nome: "Pedro", colunas: "two-columns reversed", scroll:"#scroll-pedro", id:"pedro", background: "personal reversed", src: pedro, text: "Desde criança, sempre gostei de criar. Me aventurei em todas as áreas possíveis para descobrir com o que eu quero trabalhar, mas foi pela programação que eu me apaixonei. Vejo a tecnologia como o caminho que escolhi para criar e deixar um impacto positivo no mundo."}
        ];
    }
}