import React, {useState,useEffect,useCallback, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import App from "../../Auth/base"
// import Body from '../../Layout/Body';
import Result from "../Result/Result"
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typewriter from "typewriter-effect"
import Draft from "./draft"
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "auto",
    textAlign:"center"
    // marginLeft:'15%'
},
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  grid:{
    paddingLeft:"30%",
    paddingTop:"13%",
    paddingRight:"30%"
    // paddingInline:'center',
  }
}));

// const data=[]

 function SearchBar() {
  const classes = useStyles();                                                                                          
  const [search , setSearch]= useState("")
  const [isSending, setIsSending]=useState(true)
  const[submit,setSubmit]=useState(false)
  const[result, setResutl]=useState([])
  const [data, setData]=useState([])
  const [card, setCard]=useState([])
  const [bool,setBool]=useState([])
  const [level, setLevel]=useState("Default")
  // const [isMounted]=useRef(true)
  function handleSearch(e){
      setSearch(e.target.value)
      
    }
  function handleSubmit(e){
    e.preventDefault()
    setSubmit((prev)=>!prev)
    const data={input:`${search}`}
    // setCard(card=>[...card, data])
    setCard([data])
    // setId(id+1)
    setData([])
  }

  function handleLevel(e){
    setLevel(e.target.value)
  }
  console.log(level)

 // temporarily saving the fetch data in a array
  
  // const data=useCallback(()=>{
  //   data.push(result)

  // },[result])
// console.log(result)

// data.push(result)
// console.log(data)
console.log(card)
useEffect(()=>{
  let eventSource= new EventSource("http://localhost:5000/stream")
  eventSource.onmessage= e=> {
    // let item=e.data
  // console.log(typeof(e.data))
  const item =JSON.parse(e.data)
  console.log(item)
  setData(data=>[...data,item]) ////updatedData(JSON.parse(e.data))
  console.log('rendering event')}

},[])

// const updatedData=(d)=> {
//   console.log("updating")
//   // setData(Object.assign({...data}, { data: d }))
//   setData([...data, d])
// }

useEffect(()=>{
  if (search !== "")
  App.auth().currentUser.getIdToken().then((idToken)=>{
  console.log(idToken)
  console.log("rendering token")
  setSearch()
  fetch('/api/v1/res',{
    method:'POST',
    // mode: 'cors',
    headers:{
      // 'Access-Control-Allow-Origin':'http://localhost:5000/api/v1/res',  
      'Content-Type':'application/json',
      'access-token':`${idToken}`
    },
    body:JSON.stringify(
      {
        id:1,
        Input:`${search}`,
        Level: `${level}`,
      }
  )

  })
    .then(response => response.json())
    .then(json => {
      setIsSending(false)
      setResutl([...result,json])
      // console.log(json)
      })
      
      
      .catch(error=>console.log(error))}
  ).catch(error=>console.log(error))
  
  // e.preventDefault()
      },[submit])

  console.log(result)
  console.log(data)
  console.log(search)
  const paragraph = data.map((item=> item.data)).join("")
  console.log(typeof(paragraph))

  // useEffect(()=>{
  //   setBool(bool=>[...bool,paragraph])
  //   console.log('dkjsk')

  // },[data])
 
  console.log(bool)
  const content= result.map((item)=>
  <Result key={item.id} question={item.question} answer={item.answer}  />
  )
    console.log(result.input)

  const textEditor= card.map((item)=>
  <Draft paragraph={paragraph} question={item.input} key={item.input}/>
)


  return (< div className={classes.grid} >
  {/* console.log(result) */}
  {/* <Typewriter
  options={{
    strings:paragraph,
    autoStart: true,
    loop: false,
  }}
/> */} <Grid container >
  <Grid item  xs={12}   justify="center">
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <InputBase
        className={classes.input}                                                                                                
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={search}
        onChange={handleSearch}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </Grid>
    </Grid>
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" >
      <FormControlLabel 
    value="Default" 
    control={<Radio color="primary" />}
    label="Default"
    onChange={handleLevel} />
    <FormControlLabel 
    value="Kid" 
    control={<Radio color="primary" />}
    label="Kid" 
    onChange={handleLevel} />
      </RadioGroup>
    </FormControl>

  {/* <h1>{result.input}</h1> */}
    <br></br>
    {/* {content} */}
    {textEditor}
  {/* <Draft paragraph={paragraph} question={search}/> */}
  {/* <Draft paragraph={paragraph} question={card.input} key={card.input}/> */}

    </div>
  );
  }

export default React.memo(SearchBar)