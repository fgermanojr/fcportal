import PropTypes from 'prop-types';
import React from 'react';
import MenuIntroduction from './MenuIntroduction';
import Submission from './Submission';

// Inline styles
const tableStyle = {
  border: '1px solid black',
  width: '100%'
}

const headerStyle = {
  color: 'blue',
  fontSize: '1.2em'
}

const borderStyle = {
  border: '1px solid black'
}

const sidebarStyle = {
  border: '1px solid black',
  width: '20%'
}

const viewportStyle = {
  border: '1px solid black',
  textAlign: 'left'
}

const fontSizeStyle = {

}

export default class Content extends React.Component {
  static propTypes = { // *** finish
    content: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { current_menu_item: this.props.current_menu_item };  // fgj change this later
  }

  updateContent = (current_menu_item) => {
    this.setState({ current_menu_item });
  };

  render() {
    // We render results in the content object depending on the value of the current_menu_item.
    let view_object = null;
    // let current_menu_item = null;
    // current_menu_item = this.props.current_menu_item;

    switch(this.props.current_menu_item) {
      case 'Introduction':
        view_object = <MenuIntroduction name="unused"/>;
        break;
      case 'Model Submission':
        view_object = <Submission model="amodel"/>;
        break;
    }

    return (<div> {view_object} </div>);

  }
}