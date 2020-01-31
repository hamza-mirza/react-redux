import React, { Component } from "react"
import { connect } from "react-redux"

class Accessories extends Component {
  render() {
    const accessories = this.props.accessories.map(product => {
      return <li key={product.productName}>{ product.productName } | { product.price }</li>
    })
    return (
      <div>
        <h1>Accessories</h1>
        <div>
          <ul>
            {accessories}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({accessories}) => {
  return {
    accessories
  }
}

export default connect(mapStateToProps)(Accessories)