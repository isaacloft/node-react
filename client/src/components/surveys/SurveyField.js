// Survey filed contains the logic to render
// a single label and text

import React from 'react';

// survey new shows survey form
export default ({ input, label }) => {
  console.log(input);
  return (
    // redux form passes event handlers to the customised components. Without wiring those mannually, we just use spread operator.
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
