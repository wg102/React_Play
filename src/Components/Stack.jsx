import React from 'react';
import MyNode from './Node';

export default class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      last: null,
      size: 0
    };
    this.IdiomaticReactList.bind(this);
  }


  render() {
    const items = [{ name: 1 }, { name: 2 }];
    return (
      <div>
        {items.map((item, index) => (
          <div key={index}> {item.name}</div>
        ))}
      </div>
    );
  }
}
