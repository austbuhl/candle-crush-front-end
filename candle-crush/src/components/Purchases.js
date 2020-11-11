import React from 'react'
import Typography from '@material-ui/core/Typography';

import PurchaseCard from './PurchaseCard'


class Purchases extends React.Component {
    state = {
        purchases: []
    }

     renderPurchases = () => {
      let sortedPurchases = this.state.purchases.sort((a, b) => a.id - b.id)
      return sortedPurchases.map(purchase => <PurchaseCard returnCandle={this.returnCandle} purchase={purchase} />)
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
              <Typography variant='h4' gutterBottom>Your Purchases</Typography>
              {this.renderPurchases()}
            </>
          )
      }
}

export default Purchases