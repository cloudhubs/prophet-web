import React from 'react';
import './App.css';
import {render} from "react-dom";
import TopAppBar from '@material/top-app-bar/component'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from "./ResponsiveDrawer";

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
                Drawer:
                <ResponsiveDrawer/>

                <p>{this.state.github}</p>
                https://github.com/<input type="text" value={this.state.github} onChange={this.onChange}/>
                <button type="submit" onClick={this.onSubmit}>Submit</button>
            </div>


        );
    }
}

export default App;
