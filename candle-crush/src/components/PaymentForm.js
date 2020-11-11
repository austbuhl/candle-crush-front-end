import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm({paymentHandler, paymentInfo}) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            onChange={paymentHandler}
            value={paymentInfo.cardName}
            id="cardName"
            name="cardName" 
            label="Name on Card" 
            fullWidth 
            autoComplete="cc-name" 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={paymentHandler}
            value={paymentInfo.cardNumber}
            id="cardNumber"
            name="cardNumber"
            label="Card Number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
            required
            onChange={paymentHandler}
            value={paymentInfo.expDate} 
            id="expDate" 
            name="expDate"
            label="Expiry Date" 
            fullWidth 
            autoComplete="cc-exp" 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            onChange={paymentHandler}
            value={paymentInfo.cvv}
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </>
  );
}
