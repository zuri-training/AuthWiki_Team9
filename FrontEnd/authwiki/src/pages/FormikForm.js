import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";

const form_id = "form_id";
class MaintenanceForm extends Component {
  editOnClick = (event) => {
    event.preventDefault();
    const data = !this?.props?.status?.edit;
    this.props.setStatus({
      edit: data
    });
  };

  cancelOnClick = (event) => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false
    });
  };

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
          {this?.props?.status?.edit ? (
            <React.Fragment>
              <button className="btn btn-save" type="submit" form={form_id}>
                Save
              </button>
              <button
                className="btn btn-cancel"
                onClick={this.cancelOnClick}
                style={{ marginLeft: "8px" }}
              >
                Cancel
              </button>
            </React.Fragment>
          ) : (
            <button className="btn btn-edit" onClick={this.editOnClick}>
              Edit
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <div className="form-label-container">
          <label className="label-title">First Name</label>
          <div className="label-container">
            <label type="text" name="brand_name" className="form-control">
              {this?.props?.fields?.firstName}
            </label>
          </div>
        </div>
        <div className="form-label-container">
          <label className="label-title">Last Name</label>
          <div className="label-container">
            <label type="text" name="brand_name" className="form-control">
              {this?.props?.fields?.lastName}
            </label>
          </div>
        </div>
        <div className="form-label-container">
          <label className="label-title">User Name</label>
          <div className="label-container">
            <label type="text" name="name" className="form-control">
              {this?.props?.fields?.userName}
            </label>
          </div>
        </div>
        <div className="form-label-container">
          <label className="label-title">Email</label>
          <div className="label-container">
            <label type="text" name="brand_name" className="form-control">
              {this?.props?.fields?.email}
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  };

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-label-container">
          <label className="label-title">First Name</label>
          <div className="label-container">
            <Field
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-label-container">
          <label className="label-title">Last Name</label>
          <div className="label-container">
            <Field
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-label-container">
          <label className="label-title">User name</label>
          <div className="label-container">
            <Field
              type="text"
              name="userName"
              className="form-control"
              placeholder="User Name"
            />
          </div>
        </div>
        <div className="form-label-container">
          <label className="label-title">Email</label>
          <div className="label-container">
            <Field
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Form id={form_id}>
          <h2>User Profile</h2>
          {this?.props?.status?.edit
            ? this._renderFormInput()
            : this._renderFormView()}
          {this._renderAction()}
          <h4>Current value</h4>
          {/* a sample of data da user update you can use it to send it back to the database */}
          <div className="data">
            <pre>
              <code>{JSON.stringify(this.props.fields, null, 2)}</code>
            </pre>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToStatus: (props) => {
    return {
      edit: props?.edit || false
    };
  },
  mapPropsToValues: (props) => {
    return {
      firstName: props.fields.firstName,
      lastName: props.fields.lastName,
      userName: props.fields.userName,
      email: props.fields.email
    };
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false
    });
  }
})(MaintenanceForm);

export default FormikForm;
