import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import ButtonCustom from '../ButtonCustom'

const headersData = [
    {
        label: "Главная",
        href: "/",
    },
    {
        label: "О приложении",
        href: "/application",
    },
    {
        label: "Блог",
        href: "/blog",
    },
    {
        label: "Взаимодействия",
        href: "/interactions",
    },
    {
        label: "Команда",
        href: "/team",
    },
];
const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "white",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#1B1642",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerContainer: {
        padding: "20px 30px",
        color: '#1B1642',
        height: '100%'
    },
}));

export default function Header() {
    const { header, menuButton, toolbar, drawerContainer } = useStyles();
    const history = useHistory()

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div>{getMenuButtons()}</div>
                <Box style={{ marginLeft: 15 }}>{ButtonAuth()}</Box>
            </Toolbar>
        );
    };
    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: '#1B1642' }}
                >
                    <MenuIcon />
                </IconButton>
                <div >{femmecubatorLogo}</div>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()} {ButtonAuth()}</div>
                </Drawer>
            </Toolbar>
        );
    };
    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        style: { textDecoration: "none", },
                        key: label,
                    }}
                    style={{ color: '#1B1642' }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };
    const ButtonAuth = () => {
        return <Box ><ButtonCustom text="Вход" onClick={() => { history.push('/auth') }} /></Box>
    }
    const femmecubatorLogo = (
        <div style={{ display: 'flex', flexDirection: 'row', marginRight: 15 }}>
            <img src={'/image/Element/LogoAh.png'} style={{ width: 40, height: 40, cursor: 'pointer', }} alt={''} onClick={() => {
                history.push('/')
            }} />
            <Typography style={{ color: '#1B1642', marginLeft: 5, }}>POCKET<br /> MEDIC</Typography>

        </div>
    );
    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }}
                    style={{ color: '#1B1642' }}
                >
                    {label}
                </Button>
            );
        });
    };
    return (
        <header>
            <AppBar className={header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}