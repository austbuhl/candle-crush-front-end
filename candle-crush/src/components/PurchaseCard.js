import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import IconButton from '@material-ui/core/IconButton';


const PurchaseCard = ({purchase, returnCandle}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      height: 150,
      display: "flex",
      flexDirection: "column",
      alignContent: "center"
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 8,
    },
    cardActions: {
      alignSelf: "center"
    }
  });

  const classes = useStyles();

  return(

    <Card className={classes.root} key={purchase.id}>
    <CardContent>
      <Typography variant="h6" component="h2">
        {purchase.candle.name}
      </Typography>
      <Typography className={classes.pos} variant="h8" color="textSecondary">
        {purchase.candle.created_at.slice(0, 10)}
      </Typography>
      <Typography variant="body2" component="p">
        {`$${purchase.candle.price.toFixed(2)}`}
      </Typography>
    </CardContent>
    <CardActions className={classes.cardActions}>
      <IconButton size='small' edge='start' >
        <SwapHorizontalCircleIcon SwapHorizontalCircleIcon onClick={() => returnCandle(purchase.id)}></SwapHorizontalCircleIcon>
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default PurchaseCard
