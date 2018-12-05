import React, { Fragment } from 'react';

const PureNoteField = ({ label }) => (
  <Fragment>
    <label className="mt-3 auth-form__label" htmlFor="">
      {label}
    </label>
    <textarea
      className="textarea"
      name="note"
      id=""
      cols="30"
      rows="6"
      placeholder="Ghi chú"
    />
  </Fragment>
);

export default PureNoteField;
