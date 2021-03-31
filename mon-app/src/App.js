import React, { Component } from 'react';
import './App.css';
import {PureCompo,PureCompoProps} from './components/PureCompo';
//importer les 2 composants
import StateCompo from './components/StateCompo';
import {CompoCycleVie} from './components/CompoCycleVie'
class App extends Component {
 constructor(props){
   super(props);
   this.state = {
     stateApp : ""
   }
 }
  // onInputChange (val) {
  //   console.log("val dans app =>"+val);
  //   this.setState({stateApp:val});
  //  }
   onInputChange = (val) =>{
    console.log("val dans app =>"+val);//ici je récupere le composant qui été dans state
   //composant val le plus bas l'enfant
    this.setState({stateApp:val});//on a mis le state app dans le state
   }
  render() {
    let mesLabel = [];
    mesLabel.push("mike")
    mesLabel.push("toto")
    mesLabel.push("titi")
    mesLabel.push("nesrine")

    return (
      <div className="App">
        <header className="App-header">
        <CompoCycleVie />
         {mesLabel.map((libelle)=>
          <StateCompo key={libelle} label={libelle} onInputChange={this.onInputChange}/>
        )}{/** boucler sur les composant boucle for c'est map*/}
           {/* <StateCompo label={"toto"} onInputChange={this.onInputChange}/>
          <StateCompo label={"titi"} onInputChange={this.onInputChange}/>
          <StateCompo label={"nesrine"} onInputChange={this.onInputChange}/> */}

          <PureCompo />
          {this.state.stateApp ? <PureCompoProps label={this.state.stateApp} age={"5ans"}/>:<div>Rien n'est remplis</div>}
          {/** condition if si contenu remplis on fais ca si nn : on fais l autre */}

          {/*//binde est liéer
          pour récuperer un valeur de la formulaire et on l utiliser dans un autre compo */}

        </header>
      </div>
    )
  };

}

export default App;
