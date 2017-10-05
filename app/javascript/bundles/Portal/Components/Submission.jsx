import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js';

export default class Submission extends React.Component {
  static propTypes = {
    model: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { model: this.props.model};
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
    var s = myStyles.Styles;
    return (
       <form id="formSubmission">
      <table id="submission-table" style={s.submissionStyle}>
        <tbody>
          <tr>
            <th style={s.submissionLeftStyle}>Manage Model Submission</th>
            <th style={s.submissionCenterStyle}>FORTRAN CALCULUS</th>
            <th style={s.submissionRightStyle}><button id="button-submit">Submit</button></th>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>
              <span>
                <label htmlFor="userName">
                  User
                </label>
                <input id="userName" type="text" value={this.state.user}
                        onChange={(e) => this.updateModel(e.target.value)} />
              </span>
            </td>
            <td style={s.submissionCenterStyle}>
              <span>
                <label htmlFor="modelName">
                  Model
                </label>
                <input id="modelName" type="text" value={this.state.model}
                       onChange={(e) => this.updateProblem(e.target.value)} />
              </span>
            </td>
            <td style={s.submissionRightStyle}><span>STATUS</span></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Upload FC File</td>
            <td style={s.submissionCenterStyle}><input id="fc_file" type="file"/></td>
            <td style={s.submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Upload DAT File</td>
            <td style={s.submissionCenterStyle}><input id="dat_file" type="file"/></td>
            <td style={s.submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Create MAP File</td>
            <td style={s.submissionCenterStyle}><input id="checkBoxMap" type="checkbox"/></td>
            <td style={s.submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Build Model</td>
            <td style={s.submissionCenterStyle}><input id="checkBoxBuild" type="checkbox"/></td>
            <td style={s.submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Run Model</td>
            <td style={s.submissionCenterStyle}><input id="checkBoxRun" type="checkbox"/></td>
            <td style={s.submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Return File Results</td>
            <td style={s.submissionCenterStyle}><input id="checkBoxRtnFile" type="checkbox"/></td>
            <td style={s.submissionRightStyle}></td>
          </tr>
        </tbody>
      </table>
      </form>
    );


  }
}