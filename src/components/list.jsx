import React, { Component } from 'react';

class List extends Component{
    render() {
      return (
        <div className="Liste">{this.props.todos.length}</div>
      );
    }
  }

export default List;  