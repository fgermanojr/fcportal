import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from '../Styles.js';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var s = myStyles.Styles;
      return (
        <div id="introduction">
<p>This Manual is meant to serve as a reference handbook for calculus-based
programming. The following is a synopsis of the manual:</p>
<p>Chapter 1: THE CALCULUS ENVIRONMENT describes the software engineering
properties of the software system including the run-time structures of variables
and programs, the syntax and purpose of the macro statements, and usage
limitations. This discussion is an essential overview of the foundation of
calculus-based programming.</p>
<p>Chapter 2: PROBLEM ANALYSIS AND CALCULUS PROCESSES is a general treatment of
system-level problem structures and the dynamic roles played by program
elements. It discusses a unified approach to problem analysis, the different
kinds of processes and the principles common to them. It also discusses the
combining of processes to address multi-process problems.</p>
<p>Chapter 3: ELEMENTARY OPERATIONS AND UTILITIES is a compendium of
mathematical language extensions providing the tools for building mathematical
programs. Included are mechanisms for computing derivatives and definte
integrals; various utilities for tabular data fitting; dynamic array allocation
and output report generation; and linear algebra operations.</p>
<p>Chapter 4: GENERAL ALGEBRAIC EQUATIONS describes the process of solving for
roots of simultaneous equation systems, including determined, overdetermind, and
underdetermined systems. It provides detailed informtion about built-in solvers
for this kind of process.</p>
<p>Chapter 5: ORDINARY DIFFERENTIAL EQUATIONS is a full treatment of the subject
of simultaneous ODE&#39;s covering higher-order equations, implicit equations and
boundary-value problems. It provides detailed information about theuse of
differential equation solvers.</p>
<p>Chapter 6: UNCONSTRAINED OPTIMIZATION is a detailed treatment o non-linear
optimization and the hierarchic combination of processes for process
identification and optimal control.</p>
<p>Chapter 7: CONSTRAINED OPTIMIZATION is a treatment of linear, mixed integer
and nonlinear programming problems. It provides detailed information about the
use of mathematical programming solvers.</p>
<p>Chapter 8: GRAPHICS is a description of the graphics susbystem. It describes
the graphic database, the generation of graph objects, and the production
(display, printing, and plotting) of graphs, including contour graphs.&nbsp;
This chapter also contains several complete examples employing features
exmplained in previous chapters cobbined with graphics output.</p>
<p>APPENDIX A: GUIDELINES FOR DATA APPROXIMATION is a review of the various
techniques of chapters 2, 3, 6 &amp; 7 for applications of data fitting to
mathematical functions. It provides a requirements vs. capabilities matrix and
notes discussing the use of the various methods to different kinds of
approximation.</p>
</div>
    );


  }
}
