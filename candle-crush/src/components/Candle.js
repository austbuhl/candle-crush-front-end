import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Candle = ({candle, clickHandler}) => {
  
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '1em'
    },
    media: {
      height: 140,
    }
  });

  const classes = useStyles()

  const localClickHandler = () => {
    clickHandler(candle)
  }


  return(
    
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={candle.image}
        title={candle.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {candle.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          { `$${candle.price} - ${candle.scent}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {candle.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" onClick={localClickHandler}>
        Add to Cart
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
  )
  // return (<h1>{candle.name}</h1>)
}

export default Candle