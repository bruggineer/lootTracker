import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GameTable from "../components/GameTable";
import BudgetProgressBar from "../components/BudgetProgressBar";
import AddGame from "../components/AddGame";


function WishList() {

    let remaining = 50;

    const wishlist = [
        "Must use ReactJS in some way (even if minimal)",
        "Must use a Node and Express Web Server",
        "Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM",
        "Must have both GET and POST routes for retrieving and adding new data",
        "Must be deployed using Heroku (with Data)",
        "Must utilize at least two libraries, packages, or technologies that we haven’t discussed",
        "Must allow for or involve the authentication of users in some way",
        "Must have a polished frontend/UI ",
        "Must have folder structure that meets MVC Paradigm",
        "Must meet good quality coding standards (indentation, scoping, naming)",
        "Must not expose sensitive API key information on the server]",
    ];

    return (
        <>
            <Paper>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={12}>
                            <Table>                                
                                {/* <TableBody>
                                    {wishlist.map((wishlist, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell >{idx + 1}</TableCell >
                                            <TableCell >{wishlist}</TableCell >
                                        </TableRow>
                                    ))}
                                </TableBody> */}
                                <AddGame/>
                                <BudgetProgressBar remaining={remaining}/>
                                <GameTable/>
                            </Table>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}

export default WishList;