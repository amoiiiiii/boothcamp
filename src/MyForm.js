import React from 'react';
import { Form, Field } from 'react-final-form';
import './MyForm.css';

// Fungsi untuk validasi form
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.employed) {
    errors.employed = 'Required';
  }
  return errors;
};

// Fungsi untuk menangani submit form
const onSubmit = (values) => {
  // Logika untuk menangani submit form
  console.log(values);
  alert(JSON.stringify(values, null, 2)); // Menampilkan hasil dalam alert
};

// Komponen untuk pilihan Education
const EducationPicker = ({ input }) => (
  <div className="radio-wrapper">
    <label>
      <Field name="education" component="input" type="radio" value="master" />{' '}
      Master
    </label>
    <label>
      <Field name="education" component="input" type="radio" value="other" />{' '}
      Other
    </label>
  </div>
);

// Komponen untuk checkbox Experience
const ExperiencePicker = ({ input }) => (
  <div className="checkbox-wrapper">
    <label>
      <Field name="experience" component="input" type="checkbox" value="html" />{' '}
      HTML
    </label>
    <label>
      <Field name="experience" component="input" type="checkbox" value="css" />{' '}
      CSS
    </label>
    <label>
      <Field
        name="experience"
        component="input"
        type="checkbox"
        value="javascript"
      />{' '}
      JavaScript
    </label>
    <label>
      <Field name="experience" component="input" type="checkbox" value="nodejs" />{' '}
      Node.js
    </label>
    <label>
      <Field
        name="experience"
        component="input"
        type="checkbox"
        value="reactjs"
      />{' '}
      React.js
    </label>
  </div>
);

const MyForm = () => (
  <div className="my-form-container">
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit} className="my-form">
          <h2>Employee Form</h2>
          <div className="form-section">
            <label>First Name</label>
            <div className="input-wrapper">
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                className="input-field"
              />
            </div>
          </div>
          <div className="form-section">
            <label>Last Name</label>
            <div className="input-wrapper">
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
                className="input-field"
              />
            </div>
          </div>
          <div className="form-section">
            <label>Employed</label>
            <div className="input-wrapper">
              <Field
                name="employed"
                component="input"
                type="checkbox"
                className="input-field"
              />
            </div>
          </div>
          <div className="form-section">
            <label>Education</label>
            <EducationPicker />
          </div>
          <div className="form-section">
            <label>Experience</label>
            <ExperiencePicker />
          </div>
          <div className="form-section">
            <label>Notes</label>
            <Field
              name="notes"
              component="textarea"
              placeholder="Notes"
              className="input-field"
            />
          </div>
          <div className="form-section button-group">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button type="reset" onClick={form.reset} disabled={submitting || pristine}>
              Reset
            </button>
          </div>
          {/* Menampilkan hasil form dalam bentuk array */}
          <div className="form-section">
            <pre>{JSON.stringify(form.getState().values, null, 2)}</pre>
          </div>
        </form>
      )}
    />
  </div>
);

export default MyForm;
