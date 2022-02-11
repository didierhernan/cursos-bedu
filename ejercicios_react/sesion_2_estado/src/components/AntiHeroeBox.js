import React, {Component} from "react";

class AntiHeroes extends Component{

    render(){
        return(
            <div className={this.props.className}>
                <h1>Mi nombre es : {this.props.name} y yo soy {this.props.antiHeroe} </h1>
                <h2>Biografia de {this.props.antiHeroe}</h2>
                <img alt={this.props.antiHeroe} src= {this.props.photo} />
            </div>
        )
    }
}

export default AntiHeroes;

//Componente de class
//Componenete inteligente
//Componenete con estado o state