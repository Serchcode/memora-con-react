import React, {Component} from 'react';
import Carta from '../carta/Carta'; 
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Tablero.css';

class Tablero extends Component{
	render() {
		return(
			<div className="tablero">
				<Grid fluid>
        		<Row around="lg">
  				{
					this.props.memorama
					.map((carta,index) => { 
						const comparada= this.props.par.indexOf(carta) > -1;

						return <Col xs={6} md={4} lg={2}>
          				<Carta
						 key={index}
						 icono={carta.icono}
						 comparacion={comparada}
						 seleccionCarta={()=>this.props.seleccionCarta(carta)}
						 Adivinada={carta.Adivinada}
						 />
						 </Col>
						 ;
				})
				}
				</Row>
      			</Grid>
			</div>
		);
	}
};

export default Tablero;