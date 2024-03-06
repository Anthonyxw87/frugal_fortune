import { Box } from "@mui/material";
import { NavBar } from "../components/nav-bar";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export default function Overview() {
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                {/* Main content */}
                <Container maxWidth="lg" sx={{ mt: 4 }}>
                    <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                        <Grid item xs={12} md={4} sx={{ mt: 4 }}>
                            <Paper elevation={1} sx={{ p: 2, border: "1px solid rgba(0, 0, 0, 0.1)", height: "100%" }}>
                                <div>
                                    <p>User ID: </p>
                                    <p>Date: </p>
                                    <p>Color: </p>
                                    <p>Hours of Sleep: </p>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>

    );
}