export default class Comments {
    constructor() {
        this.comentarios = [
            {nome: "Pedro", email: "zardin@teste", comentario: "Adorei a landing page!"}
        ]
        this._inscritos = []
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar () {
        this._inscritos.forEach(func => func(this.comentarios))
    }

    criarComentario (nome, email, comentario) {
        const novoComentario = {nome, email, comentario}
        this.comentarios.push(novoComentario)
        this.notificar()
    }
}