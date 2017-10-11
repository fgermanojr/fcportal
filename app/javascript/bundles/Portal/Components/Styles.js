'use strict';
// This file contains all the styles used by the application. One could define
// additional exports to define a group of styles to be shared independently
// or for a large react object. In large applications one could have shared
// styles and one file per component for specific stuff. Keeping it all in
// one place for this application seemed to be the simplest. fgj

// Figure out how to do with scss as an alternative using yarn/webpacker to
// create application.css I think.
export const Styles = {

  tableStyle: {
    border: '1px solid black',
    width: '100%'
  },

  headerStyle:{
    color: 'blue',
    fontSize: '1.2em'
  },

  borderStyle: {
    border: '1px solid black'
  },

  sidebarStyle: {
    border: '1px solid black',
    width: '20%'
  },

  viewportStyle: {
    border: '1px solid black',
    textAlign: 'left',
  },

  fontSizeStyle: {
    color: 'blue'
  },

  domainspanStyle: {
    float: 'right'
  },

  btnStyleNormal: {
    backgroundColor: 'white'
  },

  btnStyleActive: {
    backgroundColor: 'red'
  },

  btnStyleLoggedIn: {
    backgroundColor: 'green'
  },

  listStyle: {
    listStyleType: 'none',
    textAlign: 'center'
  },

  menuStyle: {
    textAlign: 'left'
  },

  helpbtnStyle: {
    float: 'right'
  },

  submissionStyle: {
    border: '1px solid red',
    width: '50em'
  },

  submissionLeftStyle: {
    border: '1px solid red',
    textAlign: 'left',
    width: '50em'
  },

  submissionCenterStyle: {
    border: '1px solid red',
    width: '35em'
  },

  submissionRightStyle: {
    border: '1px solid red',
    width: '80em'
  },

  domainspanStyle: {
    float: 'right'
  }

};