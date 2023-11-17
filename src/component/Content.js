import React from 'react'
import PropTypes from 'prop-types';

export default function Content({name, age }) {
  return (
    <div>
        <h1 className='content'>{name} {age} </h1>
    </div>
  );
}
Content.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};
