import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    retypePassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    town: "",
    region: "",
    postcode: "",
    country: "United Kingdom",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    }

    if (formValues.password !== formValues.retypePassword) {
      errors.retypePassword = "Passwords do not match";
    }

    if (!formValues.firstName) {
      errors.firstName = "Please insert First Name";
    }

    if (formValues.firstName && formValues.firstName.length > 4) {
      errors.firstName =
        "First Name must be less than or equal to 4 characters";
    }

    if (!formValues.lastName) {
      errors.lastName = "Please insert Last Name";
    }

    if (!formValues.phoneNumber) {
      errors.phoneNumber = "Please insert Phone Number";
    }

    if (formValues.phoneNumber && formValues.phoneNumber.length != 10) {
      errors.phoneNumber = "Phone Number must be 10 digit";
    }

    if (!formValues.address) {
      errors.address = "Please insert Address";
    }

    if (!formValues.region) {
      errors.region = "Please insert Region";
    }

    if (!formValues.postcode) {
      errors.postcode = "Please insert Postcode";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);

      console.log("Form submitted successfully", formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Register here</h4>
      <h3>USER REGISTRATION</h3>

      <div>
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}
      </div>

      <div>
        <label>Password *</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <p>{formErrors.password}</p>}
      </div>

      <div>
        <label>Retype Password *</label>
        <input
          type="password"
          name="retypePassword"
          value={formValues.retypePassword}
          onChange={handleChange}
        />
        {formErrors.retypePassword && <p>{formErrors.retypePassword}</p>}
      </div>

      <div>
        <label>First Name *</label>
        <input
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        {formErrors.firstName && <p>{formErrors.firstName}</p>}
      </div>

      <div>
        <label>Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && <p>{formErrors.lastName}</p>}
      </div>

      <div>
        <label>Phone Number *</label>
        <input
          type="number"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
        />
        {formErrors.phoneNumber && <p>{formErrors.phoneNumber}</p>}
      </div>

      <div>
        <label>Address *</label>
        <input
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleChange}
        />
        {formErrors.address && <p>{formErrors.address}</p>}
      </div>

      <div>
        <label>Town</label>
        <input
          type="text"
          name="town"
          value={formValues.town}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Region *</label>
        <input
          type="text"
          name="region"
          value={formValues.region}
          onChange={handleChange}
        />
        {formErrors.region && <p>{formErrors.region}</p>}
      </div>

      <div>
        <label>Postcode *</label>
        <input
          type="number"
          name="postcode"
          value={formValues.postcode}
          onChange={handleChange}
        />
        {formErrors.postcode && <p>{formErrors.postcode}</p>}
      </div>

      <div>
        <label>Country *</label>
        <select
          name="country"
          value={formValues.country}
          onChange={handleChange}
        >
          <option value="United Kingdom">United Kingdom</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
        </select>
      </div>

      <button type="submit">Register</button>
      {isSubmitted && <p>Registration Successful!</p>}
    </form>
  );
}

export default RegistrationForm;
