import  React  from 'react';
import Grid from "@material-ui/core/Grid"
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import app from "../Auth/base"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    MenuIcon:{
        paddingLeft:"8"
    },
    menuGrid:{
      textAlign: 'center',

    }
  
  }));

export default function Header() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    function handleSignOut(e){
      app.auth().signOut().then(function() {
          console.log("Sign-out successful")
        }).catch(function(error) {
          console.log("An error happened")
        });
        
  }
    
  
    return (
       <div className={classes.root} >
           <Grid container spacing={4} >
               <Grid item xs ={2}>
               </Grid>
               <Grid item xs={8}>

               </Grid>
            <Grid item xs={2} className={classes.menuGrid} >
                <IconButton > 
               
                <MenuRoundedIcon aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.MenuIcon}  />
            </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </Menu>
                </Grid>

           </Grid>
       </div>
    )
}