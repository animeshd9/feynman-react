import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function SimpleCard(props) {
  const classes = useStyles();
  // const content= props.items.map((item)=>(
  //   <div key={item.input}>{item.input}</div>
  //   ))
  // console.log(props.input)
  // console.log(props.level)
    // console.log(props.data)
  return (
    <>
   <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {props.question}
        </Typography>
        <Typography paragraph variant="body2" component="p" align="justify">
          {props.answer}       
        </Typography>
      </CardContent>
    </Card>
    <br/>
    </>

  );
}
