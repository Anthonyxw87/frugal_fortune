import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaidIcon from '@mui/icons-material/Paid';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const sideListItems = (
    <React.Fragment>
        <ListItemButton href='/'>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PaidIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary="Trends" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Investments" />
        </ListItemButton>
    </React.Fragment>
);
