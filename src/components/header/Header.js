import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
	render(){
		return(
			<header>
				<div>
				<button className="boton-reiniciar" onClick={this.props.resetear}>
					Reiniciar
				</button>
				</div>
				<div className="Titulo"> Memorama </div>
				<div className="Titulo">
					Intentos: {this.props.intentos}
				</div>
			</header>
			);
		}
	};

export default Header;