import React from 'react'
// import { app } from 'firebase'
import app from "../../Auth/base"
import SearchBar from '../UserInput/SearchBar';
// import Result from "../Result/Result"
import  Button  from '@material-ui/core/Button';
import TextEditor from "../UserInput/draft"
import Header from '../../Layout/Header';

const Home=() =>{
    console.log('rendering home')

   function handleSignOut(e){
        app.auth().signOut().then(function() {
            console.log("Sign-out successful")
          }).catch(function(error) {
            console.log("An error happened")
          });
          
    }
    return(
        <div>
            {/* <h1>you're in homepage</h1> */}
            <Header/>
            {/* <Button variant="contained" color="primary" onClick={handleSignOut}>Sign Out</Button> */}
            <SearchBar/>
            <br/>
            {/* <Result/> */}

        </div>
    )
}
// ()=>app.auth().singOut()

export default React.memo(Home)