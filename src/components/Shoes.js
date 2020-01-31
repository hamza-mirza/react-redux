import React, { Component } from "react"
import { connect } from "react-redux"

class Shoes extends Component {
  render() {
    const shoeCollection = this.props.shoes.map(product => {
      return <li key={product.productName}>{ product.productName } | { product.price }</li>
    })
    return (
      <div>
        <h1>Shoes</h1>
        <div>
          <ul>
            {shoeCollection}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({shoes}) => {
  return {
    shoes
  }
}

export default connect(mapStateToProps)(Shoes)