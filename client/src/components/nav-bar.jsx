import {
    Box,
    Button,
    CssBaseline,
    Divider,
    Stack,
    SvgIcon,
    Typography,
    useMediaQuery,
    List,
    AppBar,
    Toolbar,
    IconButton
} from '@mui/material';
import { sideListItems } from './side-listItems';
import { Logo } from './logo';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 180

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
    },
});


export const NavBar = (props) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: drawerWidth
                }}>
                <Toolbar>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                        style={{ fontWeight: 'bold' }}
                    >
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth
                }}
            >
                <List>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '50px',
                            width: '100%',
                            marginBottom: '10%'
                        }}
                    >
                        <Logo />
                    </Box>

                    {sideListItems}
                </List>
                <Divider />
            </Drawer>
        </Box>
    );
};