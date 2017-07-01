import React, {Component} from 'react';
import Carta from '../carta/Carta'; 
import './Tablero.css';

class Tablero extends Component{
	render() {
		return(
			<div className="tablero">
				{
					this.props.memorama
					.map((carta,index) => { 
						const comparada= this.props.par.indexOf(carta) > -1;

						return <Carta
						 key={index}
						 icono={carta.icono}
						 comparacion={comparada}
						 seleccionCarta={()=>this.props.seleccionCarta(carta)}
						 Adivinada={carta.Adivinada}
						 />;
				})
				}
			</div>
		);
	}
};

export default Tablero;