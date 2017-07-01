import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Tablero from './components/tablero/Tablero';
import construir_rompe from './utils/construir_rompe';

const getInitialState = () =>{
	const memorama = construir_rompe();
	return{
		memorama,
    par: [],
    comparacion: false,
    intentos: 0
	};
}

class App extends Component {
  constructor(props){
  	super(props);
  	this.state=getInitialState();
  }

  render() {
    return (
      <div className="App">
        <Header
        intentos={this.state.intentos}
        resetear={()=> this.resetear()}
        />
        <Tablero
        memorama={this.state.memorama}
        par={this.state.par}
        seleccionCarta={(carta)=>this.seleccionCarta(carta)}
        />
      </div>
    );
  }
  seleccionCarta(carta){
    if(
      this.state.comparacion ||
      this.state.par.indexOf(carta) > -1 ||
      carta.Adivinada
    ){
      return;
    }
    const par = [...this.state.par, carta];
    this.setState({
      par
    });
    if(par.length === 2){
      this.comparapareja(par);
    }
  }
  comparapareja(par){
    this.setState({estaComparando:true});

    setTimeout(()=>{
    const [primeraCarta, segundaCarta] = par;
    let memorama = this.state.memorama;

    if (primeraCarta.icono === segundaCarta.icono){
      memorama=memorama.map((carta)=>{
        if(carta.icono !== primeraCarta.icono){
          return carta;
        }

        return {...carta, Adivinada: true};
      });
    }
    this.verificarGanador(memorama);
    this.setState({
      par:[],
      memorama,
      comparacion: false,
      intentos: this.state.intentos +1
    })
    }, 1000)
  }

  verificarGanador(memorama){
    if(
      memorama.filter((carta)=> !carta.Adivinada).length === 0
      ){
        alert(`Ganaste en ${this.state.intentos} intentos!`);
        }
      }

    resetear(){
      this.setState(
        getInitialState()
        );
    }
  }

export default App;
