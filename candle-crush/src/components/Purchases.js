import React from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import IconButton from '@material-ui/core/IconButton';

class Purchases extends React.Component {
    state = {
        purchases: []
    }

     renderPurchases = () => {
      let sortedPurchases = this.state.purchases.sort((a, b) => a.id - b.id)
      return sortedPurchases.map(purchase => {
        return (
          <Grid item key={purchase.id}>
            <ListItem>
              <ListItemText primary={purchase.candle.name}/>
                <Divider variant="inset" component="li"/>
              <ListItemText primary={purchase.candle.price}/>
                <Divider variant="inset" component="li"/>
              <ListItemText primary={purchase.candle.created_at}/>
                <Divider variant="inset" component="li"/>
              <IconButton size='small' edge='end'>
                <SwapHorizontalCircleIcon onClick={() => this.returnCandle(purchase.id)}></SwapHorizontalCircleIcon>
              </IconButton>
            </ListItem> 
          </Grid>
        )
      })
      }

      componentDidMount() {
        const token = localStorage.getItem('token')
          fetch('http://localhost:3000/api/v1/purchases', {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }).then(resp => resp.json())
          .then(data => {
              this.setState({
                  purchases: data
              })
          })
      }

      returnCandle = (id) => {

          const token = localStorage.getItem('token')
          fetch(`http://localhost:3000/api/v1/purchases/${id}`, {
              method: "DELETE",
              headers: {
                  Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                let updatedPurchases = this.state.purchases.filter(purchase => purchase.id !== data.id)
                console.log(updatedPurchases)
                this.setState({
                    purchases: updatedPurchases
                })
            })
            
        }
            
      render() {
          return (
            <>
                <ListItem>
                  <ListItemText primary="Candle" />
                  <ListItemText primary="Price" />
                  <ListItemText primary="Purchase Date" />
                  <ListItemText primary="Return" />
                </ListItem>

              {this.renderPurchases()}
            </>
          )
      }
}

export default Purchases