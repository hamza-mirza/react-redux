import React, { Component } from "react"
import { connect } from "react-redux"

class FrozenDept extends Component {
  render() {
    const sportsWearCollection = this.props.sportsWear.map(product => {
      return <li key={product.productName}>{ product.productName } | { product.price }</li>
    })
    return (
      <div>
        <h1>{sportsWearCollection}</h1>
      </div>
    )
  }
}

const mapStateToProps = ({sportsWear}) => {
  return {
    sportsWear
  }
}

export default connect(mapStateToProps)(FrozenDept)