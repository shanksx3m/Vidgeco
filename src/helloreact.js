import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloReact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anzahl: 1
        };
    }

    static defaultProps = { name: "Hannes" }
    render() {
        return (
            <div>
                <h1>
                    <Greeting welcome={this.props.welcome} /> {this.props.name}
                </h1>
                {this.state.anzahl}
            </div>
        );
    }
}

class Greeting extends React.Component {
    render() {
        if (this.props.welcome === true)
            return (<span>Willkommen</span>);
        else {
            return <span>Tschüüüüss</span>;
        }
    }
}

ReactDOM.render(< HelloReact welcome={true} />, document.getElementById('root'));
