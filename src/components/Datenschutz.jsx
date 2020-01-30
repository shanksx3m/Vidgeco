import React from 'react';
import { observer, inject } from 'mobx-react';

//Einfache Datenschutzerklärung (Beispieltext) ohne weitere Bearbeitungs-Algorythmen
class Datenschutz extends React.Component {
    render() {
        return (
            <div className="Datenschutz">
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2>Datenschutzerklärung</h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                            
                    </div>
                </div>
            </div>
        );
    }
}

export default Datenschutz;
