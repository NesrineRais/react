/**
 * @auteur Nesrine
 * Licence
 * Premier composant react
**/
import React from 'react';
import './PureCompo.css'

export function PureCompo(){
    return(
        <div>
            <h6 className="pure-h6">Pure compo react</h6>
        </div>
    );
}

export function PureCompoProps({label, age}){
    return(
        <div>
            <h6 className="pure-h6-red">Pure compo {label} {age}</h6>
        </div>
    );
}


// export default PureCompo; qu on a bcps composant on dois
//exporter par un