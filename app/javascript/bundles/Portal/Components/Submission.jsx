import PropTypes from 'prop-types';
import React from 'react';

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
  textAlign: 'center'
}

const fontSizeStyle = {

}

const domainspanStyle = {
  float: 'right'
}

const submissionStyle = {
  border: '1px solid red',
  width: '50em'
}

const submissionLeftStyle = {
  border: '1px solid red',
  textAlign: 'left',
  width: '50em'
}
const submissionCenterStyle = {
  border: '1px solid red',
  width: '35em'
}
const submissionRightStyle = {
  border: '1px solid red',
  width: '80em'
}

export default class Submission extends React.Component {
  static propTypes = { // *** finish
    model: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { model: this.props.model};  // fgj change this later
  }

  updateModel = (model) => {
    this.setState({ model });
  };

    //       <label htmlFor="name">
    //         Say hello to:
    //       </label>
    //       <input
    //         id="name"
    //         type="text"
    //         value={this.state.name}
    //         onChange={(e) => this.updateName(e.target.value)}
    //       />

  render() {
    return (
       <form id="formSubmission">
      <table id="submission-table" style={submissionStyle}>
        <tbody>
          <tr>
            <th style={submissionLeftStyle}>Manage Model Submission</th>
            <th style={submissionCenterStyle}>FORTRAN CALCULUS</th>
            <th style={submissionRightStyle}><button id="button-submit">Submit</button></th>
          </tr>
          <tr>
            <td style={submissionLeftStyle}>
              <span>
                <label htmlFor="userName">
                  User
                </label>
                <input id="userName" type="text" value={this.state.user}
                        onChange={(e) => this.updateModel(e.target.value)} />
              </span>
            </td>
            <td style={submissionCenterStyle}>
              <span>
                <label htmlFor="modelName">
                  Model
                </label>
                <input id="modelName" type="text" value={this.state.model}
                       onChange={(e) => this.updateProblem(e.target.value)} />
              </span>
            </td>
            <td style={submissionRightStyle}><span>STATUS</span></td>
          </tr>
          <tr>
            <td style={submissionLeftStyle}>Upload FC File</td>
            <td style={submissionCenterStyle}><input id="fc_file" type="file"/></td>
            <td style={submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={submissionLeftStyle}>Upload DAT File</td>
            <td style={submissionCenterStyle}><input id="dat_file" type="file"/></td>
            <td style={submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={submissionLeftStyle}>Create MAP File</td>
            <td style={submissionCenterStyle}><input id="checkBoxMap" type="checkbox"/></td>
            <td style={submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={submissionLeftStyle}>Build Model</td>
            <td style={submissionCenterStyle}><input id="checkBoxBuild" type="checkbox"/></td>
            <td style={submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={submissionLeftStyle}>Run Model</td>
            <td style={submissionCenterStyle}><input id="checkBoxRun" type="checkbox"/></td>
            <td style={submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={submissionLeftStyle}>Return File Results</td>
            <td style={submissionCenterStyle}><input id="checkBoxRtnFile" type="checkbox"/></td>
            <td style={submissionRightStyle}></td>
          </tr>
        </tbody>
      </table>
      </form>
    );


  }
}