import React, {Component} from 'react';
import './footer.css';

class Footer extends Component{
	render(){
		return(
				<div>
				<center>
				<a href="http://www.serchlab.com"><span>Made by Serchlab.com</span></a>
				<br/>
				<a href="https://github.com/Serchcode/memora-con-react"><i className="fa fa-github fa-3x colori" aria-hidden="true"></i></a>
				<br/>
				<a href="https://appdelante.com/cursos/juego-de-memoria-react"><span>Reference</span></a>
				</center>
				</div>
			)
	};
}

export default Footer;