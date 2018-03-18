import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class <%= pascalEntityName %> extends React.Component {
  render() {
    return (
      <div>
        <%= pascalEntityName %> Component smart connected to store
      </div>
    )
  }
}

<%= pascalEntityName %>.propTypes = {

}

export const mapStateToProps = (state) => {
  return {}
}
export const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>)
