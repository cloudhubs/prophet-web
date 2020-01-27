import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import { ListSubheader } from '@material-ui/core';
import Communication from "../components/Communication";
import Canvas from "../components/Canvas";
import {useGlobalState} from "../state";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface ResponsiveDrawerProps {
    container?: Element;
}

export default function ResponsiveDrawer(props: ResponsiveDrawerProps) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [prophetAppData, update] = useGlobalState('prophetAppData');
    const [selectedMs, updateMs] = useGlobalState('ms');
    const [contextMap, updateContextMap] = useGlobalState('contextMap');
    const [communication, updateCommunication] = useGlobalState('communication');

    const activateMs = (ms: string) => {
        console.log(ms);
        updateContextMap(false);
        updateCommunication(false);
        updateMs(ms);
    }

    const activateGlobal = (global: string) => {
        console.log(global);
        if (global == "Context Map"){
            updateContextMap(true);
            updateCommunication(false);
            updateMs("");
        }

        if (global == "Communication") {
            updateContextMap(false);
            updateCommunication(true);
            updateMs("");
        }
    }



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <ListSubheader>Overview</ListSubheader>
            <Divider />
            <List>
                {['Context Map', 'Communication'].map((text, index) => (
                    <ListItem button key={text} onClick={(e) => activateGlobal(text)}>
                        <ListItemIcon>{ <FolderIcon /> }</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <ListSubheader>Microservices</ListSubheader>
            <Divider />
            <List>
                {['EMS', 'CMS'].map((text, index) => (
                    <ListItem button key={text} onClick={(e) => activateMs(text)}>
                        <ListItemIcon >{ <FolderIcon /> }</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Prophet App
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Canvas/>
            </main>
        </div>
    );
}