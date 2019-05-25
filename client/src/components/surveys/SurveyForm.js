import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
// survey form shows a form of survey info

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        SurveyForm component
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
