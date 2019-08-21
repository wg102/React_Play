import React from 'react';
import '../../style/calculatrice.scss';

const ClearButton = props => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;
