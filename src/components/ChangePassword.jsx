import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class ChangePassword extends React.Component {
    
    render() {
        const { savePassword} = this.props.mainStore;
        return (
            <div className="ChangePassword">                
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label for="loginPassword">Altes Passwort</label>
                                <input type="password" className="form-control" id="loginPassword1" />
                            </div>
                            <div className="form-group">
                                <label for="newPassword1">Neues Passwort</label>
                                <input type="password" className="form-control" id="loginPassword1" />
                            </div>
                            <div className="form-group">
                                <label for="newPassword2">Neues Passwort wiederholen</label>
                                <input type="password" className="form-control" id="loginPassword2" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={savePassword}>Passwort ändern</button>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
        );

    }
}
export default ChangePassword;