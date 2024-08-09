import React from 'react';

function Button(props) {
  return (
    <div>
      <button
      className={' px-7 py-4 border text-lg leading-none rounded-full hover:scale-110 max-lg:hidden hover:bg-'+props.bgcolor+' transition-all text-'+props.color+' border-'+props.bordercolor}>
        {props.text}
    </button>
    </div>
  );
}

export default Button;