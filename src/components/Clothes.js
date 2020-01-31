import React, { Component } from "react"
import { connect } from "react-redux"

class Clothes extends Component {
  render() {
    const clothes = this.props.clothes.map(product => {
      return <li key={product.productName}>{ product.productName } | { product.price }</li>
    })
    return (
      <div>
        <h1>Sportwear</h1>
        <div>
          <ul>
            {clothes}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({clothes}) => {
  return {
    clothes
  }
}

export default connect(mapStateToProps)(Clothes)