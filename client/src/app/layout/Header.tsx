import { ShoppingCart } from "@mui/icons-material";
import { Badge } from '@mui/material';
import { AppBar, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

const navStyles = {
    color: 'inherit', 
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} to='/' sx={navStyles} exact>
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem 
                            component={NavLink} 
                            to={path} 
                            key={path} 
                            sx={navStyles}
                            >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display="flex" alignItems='center'>
                <IconButton size='large' sx={{color: 'inherit'}}>
                    <Badge color='secondary' badgeContent={4}>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem component={NavLink} to={path} key={path} sx={{color: 'inherit', typography: 'h6'}}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}