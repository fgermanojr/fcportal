import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js';
import axios from 'axios';

export default class Submission extends React.Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { model: this.props.model, user: this.props.user};
  }

  updateModel = (model) => {
    console.log(model);
    this.setState({ model: model });
  };

  updateUser= (user) => {
    console.log(user);
    this.setState({ user: user });
  };

  submitForm = (e) => {
    e.preventDefault();

    var form = document.getElementById('formSubmission');
    var formData = new FormData(form);
    // TBD Generalize: cycle all input fields, pack values into formData.
    // var formData = new FormData();
    formData.append('userName',document.getElementById('userName').value);
    formData.append('modelName',document.getElementById('modelName').value);

    var fcFile = document.getElementById('fc_file');
    var files = fc_file.files;
    var file = files[0];
    formData.append('fcFile', file, file.name);

    var datFile = document.getElementById('dat_file');
    if(datFile.value != '') {
      files = dat_file.files;
      file = files[0];
      formData.append('datFile', file, file.name);
    }

    formData.append('checkBoxMap',document.getElementById('checkBoxMap').checked);
    formData.append('checkBoxBuild',document.getElementById('checkBoxBuild').checked);
    formData.append('checkBoxRun',document.getElementById('checkBoxRun').checked);
    formData.append('checkBoxRtnFile',document.getElementById('checkBoxRtnFile').checked);

    axios.post('/submissions/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
      }
    });

  };

  updateFCFile = (evt) => {
//       evt.preventDefault();
// alert(evt.target);
//       var file = evt.target.files[0];
// alert(file);
// alert(file.type);
//       var formData = new FormData();
//       var form = document.querySelector('#formSubmission');
//alert(form);

  };

  handleChange = (event) => {
     alert(JSON.stringify(event));
  };

  render() {
    var s = myStyles.Styles;
    var csrfToken = document.querySelector("meta[name=csrf-token]").content;

    return (
       <form id="formSubmission" acceptCharset="UTF-8" encType="multipart/form-data">
       <input type='hidden' name='authenticity_token' value={csrfToken} />

      <table id="submission-table" style={s.submissionStyle}>
        <tbody>
          <tr>
            <th style={s.submissionLeftStyle}>Manage Model Submission</th>
            <th style={s.submissionCenterStyle}>FORTRAN CALCULUS</th>
            <th style={s.submissionRightStyle}>
              <button id="button-submit" onClick={this.submitForm.bind(this)}>Submit</button>
            </th>
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
            <td style={s.submissionRightStyle}><span>{this.props.status}</span></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Upload FC File</td>
            <td style={s.submissionCenterStyle}>
               <input id="fc_file" type="file" onChange={this.updateFCFile.bind(this)}/>
            </td>
            <td style={s.submissionRightStyle}></td>
          </tr>
          <tr>
            <td style={s.submissionLeftStyle}>Upload DAT File</td>
            <td style={s.submissionCenterStyle}>
              <input id="dat_file" type="file"/>
            </td>
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