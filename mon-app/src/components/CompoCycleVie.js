/**
 * @auteur Nesrine
 * Licence
 * Premier composant react
 */

 import React,{Component} from 'react';

 export class CompoCycleVie extends React.Component{
    constructor(props){
        super(props);
        console.log("je passe dans le constructor");
        //voir cycle de vie d'un composant
    }
    //si tu veux dans un composant voir quelque chose avant que le htl soit fait
    //on utilise
    componentWillMount(){
        console.log("je passe dans le component will mount avant le html qui charge");

    }

    render(){
        console.log("je passe dans le render");

        return(
            <div>
                
            </div>
        );
       
    }
    
    componentDidMount(){
        console.log("je passe dans le componentDidMount");

    }
    componentWillReceiveProps(){
        console.log("je passe dans le componentWillReceiveProps CompoCycleVie");
        //si on a pas de nouveau props on ne passe pas dans willreceive
    }

   
    shouldComponentUpdate(){
        console.log("je passe dans le shouldcomponentUpdate");
        //c'est une rendue de component true ou false
 //c'é pour augmenter les performance je peux dire au composant de faire le mise a jour oui ou nn
   //je peux dire oui ou nn pour voir le contenu de composant
    }
    
    componentWillUpdet(){
        console.log("je passe dans le componentWillUpdet");
           // pour dire oui on vas passer au  update

    }

    componentDidUpdate(){
        console.log("je passe dans le componentDidUpdate");
        //c'est pour ne plus faire l'update de component
    }
    //resumer cycle de vie : dans le cycle de vie on utilise pas toujours les fonctions
    //on dois étre alaise avec le constructeur willmount et didmount
}
// export default CompoCycleVie();

//pratique cycle de vie 
//compnentwillMount : cette fonction permet de montage de la composotant
// dans le cycle de vie, on utilise le constructeur , on utilise componentwillmount eet componentdidmount et le renderrr
    


