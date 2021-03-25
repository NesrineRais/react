/**
 * @auteur Nesrine
 * Licence
 * Premier composant react
 */

import React,{Component} from 'react';

class StateCompo extends React.Component{
    constructor(props){
        super(props);
        console.log("label " + props.label);
        this.state = {nom : ''};
    }
    // handleChange(e){//le but qund on ecrit dans l iput but je veux passer dans cette fonction
    //     console.log("Je passe ici");
    //     this.setState({nom : "le new"});
    //     // this.handleChange = this.handleChange.bind(this);
    // }

    handleChange = (e) => {
        //e.target.value; //pour récuperer les valeurs de l'input
        //this.setState({nom : "le new"});//cette ecriture permet de metre par defaut dans l input le text le new
        console.log("value dans campo =>" +e.target.value);
        this.setState({nom : e.target.value});
        this.props.onInputChange(e.target.value);
    }
    //on utilison les fonction fléché on est pas besoin de binder le this
    render(){
        return(
            <div>
                <h6 className="state-h6">Compo state {this.props.label} </h6>
                {/* //pour appelr un props on fais this.props.labek*/}
                <input type="text" value = {this.state.nom} onChange={this.handleChange}></input>
                {/** on veut dans l'input quand on met le curseur dans le chapms et on ecrit il change le contenu
                
                il faut binder le this pour mettre le nouvelle valeur du nom*/}
            </div>
        );
    }
}
export default StateCompo;