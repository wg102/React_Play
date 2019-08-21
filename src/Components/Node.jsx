import React from 'react';

export default class MyNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      next: null
    };
  }
}
