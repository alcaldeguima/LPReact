import React, { Component } from 'react';
import "./comentarios.css"

class Comentarios extends Component {
    constructor(props) {
        super(props)
        this.comentarios = this.props.comentarios.comentarios
        this.state = {
            comentarios: this.comentarios
        }
    }

    componentDidMount() {
        this.props.comentarios.inscrever(this._novosComentarios.bind(this))
    }

    _novosComentarios(comentario) {
        this.setState({...this.state, comentario})
    }

    render() {
        return (
            <div className="secao-comentarios center">
                <h2>{this.comentarios.length} Comentário(s)</h2>
                {this.comentarios.map((comentarios, index) => {
                    return (
                        <div key={index} className="comentario">
                            <h3 className="comentario_nome">{comentarios.nome}</h3>
                            <h4 className="comentario_email">{comentarios.email}</h4>
                            <p className="comentario_texto">{comentarios.comentario}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Comentarios