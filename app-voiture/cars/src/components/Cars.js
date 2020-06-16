import React from 'react';

const Car = ({children, color}) => {

    const colorInfo = color ? (<p> Couleur : { color }</p>) : (<p> Couleur : Non Connu</p>);
    const nameInfo = children ? (<p> Marque :: { children }</p>) : (<p> Marque : Non Connu</p>);

    if(children) {
        return (
            <div style={{color: "white", backgroundColor: "blue", width: "400px", padding: "10px", margin: "5px auto"}}>
                { nameInfo }
                { colorInfo }
            </div>
        )
    }
    else {
        return (
            <div style={{color: "white", backgroundColor: "blue", width: "400px", padding: "10px", margin: "5px auto"}}>
                <p>Pas de données !! </p>
            </div>
        )
    }
}


export default Car;