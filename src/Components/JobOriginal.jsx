import React from 'react';

class C1 extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    );
  }
}

export default C1;
