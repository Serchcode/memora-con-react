import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
	render(){
		return(
			<header>
				<div className="Titulo"> Memory game </div>
				<div className="Titulo">
					attempts: {this.props.intentos}
				</div>
				<div className="Titulo">
					seconds: {this.props.segundos}
				</div>
				<div>
				<button className="boton-reiniciar" onClick={this.props.resetear}>
					Restart
				</button>
				</div>
			</header>

			);
		}
	};

export default Header;