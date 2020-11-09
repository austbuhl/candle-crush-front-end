import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {NavLink} from 'react-router-dom'

const Candle = ({candle, clickHandler, selectCandle}) => {
  
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

  const addToCartHandler = () => {
    clickHandler(candle)
    
  }

  const passSelectedCandle = () => {
    selectCandle(candle)
  }

  



  return(
    <NavLink className="candle-card" to={`/candles/${candle.id}`} >
      <Card className={classes.root} onClick={passSelectedCandle} >
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
            <Typography gutterBottom variant="h6" component="h2">
              { `$${candle.price} - ${candle.scent}`}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {candle.description}
            </Typography> */}
          </CardContent>
        </CardActionArea>

        <Divider />
        <CardActions>
          <Button size="small" color="primary" onClick={addToCartHandler}>
            Add to Cart
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </NavLink>
  
  )
  // return (<h1>{candle.name}</h1>)
}

export default Candle