import React ,{useState ,useEffect} from 'react'
import {Editor, EditorState, ContentState} from "draft-js"
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


export default function MyEditor(props){
    const classes=useStyles()


    const[editorState, setEditorState] = useState(()=> 
    EditorState.createEmpty(),
    )
    const text=props.paragraph
    // const plainText=""//text.map(item => )
    // console.log(text)
    // const textArray=[].concat(text)
    // console.log(textArray)
    // const textObj=textArray.map((item)=>{
    //   return {data:item}
    // })
    // console.log(textObj)
    // const newText= textObj.map
    const content =ContentState.createFromText(text)

    useEffect(()=>{
    //     // const content =ContentState.createFromText(text)
        setEditorState(EditorState.createWithContent(content))

    },[text])

    // const content =ContentState.createFromText(plainText)
    // const edittorState=EditorState.createWithContent(content)

    function handleChange (){
       console.log("working")
        // setEditorState(EditorState.createWithContent(content))
    }
    return (
        <>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
           {props.question}
        </Typography>
        <Divider />

        <Typography paragraph variant="body2" component="p" align="justify">
        <Editor editorState={editorState} />    
        </Typography>
      </CardContent>
    </Card>
    <br/>
    </>
    )
      
}

{/* <Editor editorState={editorState} onChange={handleChange} /> */}
