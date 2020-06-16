import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component {

    noCopy = () => {
        alert('Ne pas copiez de texte svp');
    }

/*   changeStyle = (e) => {

        if(e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        } else {
            e.target.classList.toggle('styled');
        }

    }
*/
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p onCopy={this.noCopy}> lorem ipsum, dolor sit amet consecteteur.</p>
                <Car color="Yellow"> Ford </Car>
                <Car color="Black"> Mercedes </Car>
                <Car></Car>
            </div>
        )
    }
}

export default Mycars;