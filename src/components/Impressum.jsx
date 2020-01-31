//Autor: Hannes Vaupel; Matrikelnummer:1290217; Kurs: BIS-268 Mobile Computing, WiSe 2019/20, Merz;
import React from 'react';

//Einfaches Impressum ohne weitere Bearbeitungs-Algorythmen
class Impressum extends React.Component {
    render() {
        return (
            <div className="Impressum">
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2>Impressum</h2>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <th scope="row">Eigentümer der Webseite</th>
                                        <td>Hannes Vaupel</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-Mail</th>
                                        <td>hvaupel6@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Adresse</th>
                                        <td>Nur auf Anfrage per E-Mail</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Impressum;
