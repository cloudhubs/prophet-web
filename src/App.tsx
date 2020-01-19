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
import ResponsiveDrawer from "./ui-elements/ResponsiveDrawer";
import mermaid from "mermaid";
import {UMLClassDiagram} from "./components/UMLClassDiagram";
import {CommunicationDiagram} from "./components/CommunicationDiagram";
import {ConfigurationForm} from "./components/ConfigurationForm";

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







    render() {
        return (
            <div>
                <ResponsiveDrawer/>

            </div>


        );
    }
}

export default App;
