import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class ChangePassword extends React.Component {
    onOldPasswordInput() {
        const { updateOldPassword } = this.props.mainStore;
        const { value } = document.getElementById("oldPassword");
        updateOldPassword(value)
    }

    onNewPassword1Input() {
        const { updateNewPassword1 } = this.props.mainStore;
        const { value } = document.getElementById("newPassword1");
        updateNewPassword1(value)
    }
    
    onNewPassword2Input() {
        const { updateNewPassword2 } = this.props.mainStore;
        const { value } = document.getElementById("newPassword2");
        updateNewPassword2(value)
    }
    
    render() {
        const { savePassword} = this.props.mainStore;
        return (
            <div className="ChangePassword">                
                <div className="Content" className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            <div className="form-group">
                                <label for="oldPassword">Altes Passwort</label>
                                <input type="password" onChange={this.onOldPasswordInput.bind(this)} className="form-control" id="oldPassword" />
                            </div>
                            <div className="form-group">
                                <label for="newPassword1">Neues Passwort</label>
                                <input type="password" onChange={this.onNewPassword1Input.bind(this)} className="form-control" id="newPassword1" />
                            </div>
                            <div className="form-group">
                                <label for="newPassword2">Neues Passwort wiederholen</label>
                                <input type="password" onChange={this.onNewPassword2Input.bind(this)} className="form-control" id="newPassword2" />
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