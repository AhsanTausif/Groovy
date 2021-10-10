import React from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Badge, Menu , Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link , useLocation } from 'react-router-dom';
import logo from "../../extras/logo.jpg"
import useStyles from "./styles.js"

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
           <Toolbar>
              <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                 <img src={logo} alt="groovy" height="45px" className={classes.image} /> Groovy
             </Typography>
             <div className={classes.grow}/>
             {location.pathname === '/' && (
             <div className={classes.button}>
               <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
               <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
               </Badge>
               </IconButton>
             </div>)}
            </Toolbar>
           </AppBar>     
        </>
    )
}

export default Navbar;
