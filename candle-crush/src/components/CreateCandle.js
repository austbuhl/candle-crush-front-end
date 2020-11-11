import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';



const CreateCandle = props => {
  const useStyles = makeStyles((theme) => ({
    
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
   
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  
  const classes = useStyles()
  return (


    <div  className={classes.layout}>
      <Paper className={classes.paper}>

      <Typography variant="h6" gutterBottom>
        Create Your Candle Listing
      </Typography>
      
      <Grid container spacing={3} justify='center'>
        <Grid item xs={12}>
      <TextField fullWidth  label="Enter Name" name="name" value={props.name} onChange={props.changeHandler}/>

        </Grid>

      <Grid item xs={12}>
      <TextField fullWidth  label="Enter Description" name="description" value={props.description} onChange={props.changeHandler}/>

      </Grid >

      <Grid item xs={5}>

      <TextField  fullWidth  label="Enter Scent" name="scent" value={props.scent} onChange={props.changeHandler}/>
      </Grid>

      <Grid item xs={5}>

      <TextField fullWidth  label="Enter Quantity" name="quantity" value={props.quantity} onChange={props.changeHandler}/>
      </Grid>

      <Grid item xs={5}>

      <TextField fullWidth  label="Enter Price"  name="price" value={props.price} onChange={props.changeHandler}/>
      </Grid>

      <Grid item xs={5}>

      <TextField fullWidth  label="Enter Image URL"  name="image" value={props.image} onChange={props.changeHandler}/>
      </Grid>
      
      
      <Grid item xs={12} >

      <Button fullWidth onClick={props.submitHandler} variant="contained" color="primary">Submit Your Listing</Button>
      </Grid>

      </Grid>
      </Paper>
      
    </div>
  )
}

export default CreateCandle