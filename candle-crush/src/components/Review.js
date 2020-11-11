import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({currentUser, cart, checkoutHandler, shippingAddress, paymentInfo}) {
  const classes = useStyles();
  
  const cartTotal = cart.reduce((acc, current) => acc + current.price, 0)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem className={classes.listItem} key={item.id}>
            <ListItemText primary={item.name} secondary={item.description} />
            <Typography variant="body2">${item.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${cartTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{shippingAddress.firstName + ' ' + shippingAddress.lastName}</Typography>
          <Typography gutterBottom>{shippingAddress.address1 + ', ' + shippingAddress.address2}</Typography>
          <Typography gutterBottom>{shippingAddress.city + ', ' + shippingAddress.state + ' ' + shippingAddress.zip}</Typography>
          <Typography gutterBottom>{shippingAddress.state + ', ' + shippingAddress.country}</Typography>

        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Visa</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{paymentInfo.cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>XXXX-XXXX-XXXX-{paymentInfo.cardNumber.substr(-4)}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry Date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{paymentInfo.expDate}</Typography>
            </Grid>
        
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
