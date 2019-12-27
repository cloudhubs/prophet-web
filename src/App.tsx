import React from 'react';
import './App.css';
import {render} from "react-dom";

interface Props {}

interface State {
    github: string;
    prophetAppUrl: string;
    prophetRequest: ProphetRequest;
};

interface ProphetRequest {
    url: string
}

class App extends React.Component<Props, State> {

    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            github: '',
            prophetAppUrl: "localhost:8080/",
            prophetRequest: {
                url: ''
            }
        };
    }

    // typing on RIGHT hand side of =
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        this.setState({"github": e.currentTarget.value})
        //this.state.github = e.currentTarget.value;
    };

    async onSubmit() {
        const response: any = await this.http;
        console.log(response);
    }

    http = async () => {
        console.log(this.state.github);
        this.state.prophetRequest.url = this.state.github;
        try {
            const response = await fetch(this.state.prophetAppUrl, {
                method: "post",
                headers: new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }),
                body: JSON.stringify(this.state.prophetRequest)
            });
            return response.ok;
        } catch (ex) {
            return false;
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.github}</p>
                https://github.com/<input type="text" value={this.state.github} onChange={this.onChange}/>
                <button type="submit" onClick={this.onSubmit}>Submit</button>
            </div>


        );
    }
}

export default App;
