import React,{useContext} from "react"
import { Route,Redirect } from "react-router-dom"
import { AuthContext } from '../Auth/auth';

const PrivateRoute= ({component:RouteComponent, ...rest})=>{
    const{currentUser}=useContext(AuthContext)

    console.log("rendering private route")
    return(
        <Route 
        {...rest}
        render={routeProps=>!! currentUser ? (<RouteComponent {...routeProps}/>):(<Redirect to={"/singin"}/>)}
         />
    )
}

export default PrivateRoute