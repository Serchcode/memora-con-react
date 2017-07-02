import React,{Component} from 'react';
import './Carta.css';

import FlipCard from 'react-flipcard';

class Carta extends Component{
	render(){
		return(
			<div className="carta" onClick={this.props.seleccionCarta}>
				<FlipCard
				flipped={this.props.comparacion || this.props.Adivinada}
				disabled={true}>
				<div className="portada"></div>
				<div className="contenido">
				<i className={`fa ${this.props.icono} fa-5x`}></i>
				</div>
				</FlipCard>
			</div>
			);
	}
};

export default Carta;