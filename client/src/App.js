import React, { Fragment } from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Header } from "semantic-ui-react";
import "./App.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        }
    }


    componentDidMount() {
        const getData = async () => {
            try {
                const res = await axios.get("https://localhost:5001/api/Values");
                this.setState({
                    ...this.state,
                    values: res.data
                });
            } catch(e) {

            }
        }
        getData();
    }

    render() {
        return (
            <Fragment>
                <Header as='h2' icon='users' content='Reactivities' />
                <ul>
                    {this.state.values.length > 0 && this.state.values.map(value => <li key={value.id}>{value.name}</li>)}
                </ul>
            </Fragment>
        )
    }

}

export default App;
