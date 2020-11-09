import React from 'react'

class Purchases extends React.Component {
    state = {
        purchases: []
    }

     renderPurchases = () => {
        return this.state.purchases.map(purchase => <tr><td>{purchase.candle.name}</td>
        <td>{purchase.candle.price}</td>
        <td>{purchase.created_at}</td> 
        <td><button onClick={() => this.returnCandle(purchase.id)}>return</button></td></tr>)
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
                let updatedPurchases = this.state.purchases.filter(purchase => purchase.id !== data.id)
                this.setState({
                    purchases: updatedPurchases
                })
            })
            
        }
            
      render() {
          console.log(this.state.purchases)
          return (
              <>
        <table>
        <thead>
          <th>Candle Name</th>
          <th>Price </th>
          <th>Purchase Date</th>
          <th>Return?</th>
        </thead>
        <tbody>
          {this.renderPurchases()}
        </tbody>
        </table>
          


              </>
          )
      }
}

export default Purchases