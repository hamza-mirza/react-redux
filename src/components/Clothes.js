import React, { Component } from "react"
import { connect } from "react-redux"

class FrozenDept extends Component {
  render() {
    console.log(this.props.frozenData)
    return (
      <div>
        <h1>Gay boi</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    frozenData: state.frozen
  }
}

export default connect(mapStateToProps)(FrozenDept)