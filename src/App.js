import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Tablero from './components/tablero/Tablero';
import construir_rompe from './utils/construir_rompe';
import Footer from './components/footer/footer';
const getInitialState = () =>{
	const memorama = construir_rompe();
	return{
		memorama,
    par: [],
    comparacion: false,
    intentos: 0,
    segundos: 0,
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
        segundos={this.state.segundos}
        resetear={()=> this.resetear()}
        />
        <Tablero
        memorama={this.state.memorama}
        par={this.state.par}
        seleccionCarta={(carta)=>this.seleccionCarta(carta)}
        />
        <Footer/>
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

  unomas(){
    this.setState((prevState)=>({
      segundos: prevState.segundos + 1
    }));
  }

  componentDidMount(){
    this.interval = setInterval(()=>this.unomas(),1000);
  }

  verificarGanador(memorama){
    if(
      memorama.filter((carta)=> !carta.Adivinada).length === 0
      ){
        alert(`You won in ${this.state.intentos} attempts and in ${this.state.segundos} seconds!`);
        }
      }

  resetear(){
    this.setState(
      getInitialState()
      );
    }
  }

export default App;
