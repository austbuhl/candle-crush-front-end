import React from 'react'

const Profile = props => {

  const renderPurchases = () => {
    return props.purchases.map(purchase => <li>{purchase.name}</li>)
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <span>{props.currentUser.username}</span>
      <ul>
        {renderPurchases()}
      </ul>
    </div>
  )
}

export default Profile