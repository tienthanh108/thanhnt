import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import classNames from 'classnames'

import CustomField from 'components/CustomField'

export const updateFields = []

export const validate = () => {
  // pass values if needed
  const errors = {}
  return errors
}

export class <%= pascalEntityName %>Form extends React.Component {
  render() {
    const { fields, handleSubmit } = this.props

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <%= pascalEntityName %> form sample
          <div className='form-group'>
            <label className='control-label'>
              <FormattedMessage id='key.sample.of.field.label.here' />
            </label>
            <Field component={CustomField}
              name='fieldNameSample'
              type='text'
              className='form-control'
              maxLength={50}
              placeholder='global.placeholder.typeHere'
            />
          </div>
          <div className='lgButton'>
            <button disabled={submitting || invalid}
              className={classNames('buttonDefaultGreen', 'buttonDefaultLg',
                invalid ? 'buttonDisable' : '')}
            >
              <FormattedMessage id='button.next' />
            </button>
          </div>
        </form>
      </div>
    )
  }
}

<%= pascalEntityName %>Form.propTypes = {
  submitting: React.PropTypes.bool.isRequired,
  invalid: React.PropTypes.bool.isRequired,
  handleSubmit: Function,
  fields: Object,
}

<%= pascalEntityName %>Form.defaultProps = {
  fields: {},
}

<%= pascalEntityName %>Form = reduxForm({
  form: '<%= pascalEntityName %>Form',
  destroyOnUnmount: false,
  touchOnChange: true,
  validate,
})(<%= pascalEntityName %>Form)

export const mapStateToProps = (state) => {
  return {}
}
export const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>Form)
