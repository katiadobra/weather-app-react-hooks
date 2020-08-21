import React from 'react';
import './Form.scss';

const Form = props => {
  return (
    <div className="form-wrap">
      <form onSubmit={props.getWeather}>
        <input
          type='text'
          placeholder='city'
          name='city'
        />

        <input
          type='text'
          placeholder='country'
          name='country'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;
