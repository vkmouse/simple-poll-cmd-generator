import React from 'react';

interface Props {
  placeholder?: string
}

function Option(props: Props) {
  const { placeholder } = props;
  return (
    <div className='row'>
      <input className='vote vote-item' type='text' placeholder={placeholder} />
    </div>
  );
}

export default Option;