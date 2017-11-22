import PropTypes from 'prop-types';
import React from 'react';

export default class MenuIntroduction extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { name: this.props.name };  // fgj change this later
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div id="introduction">
<p>FORTRAN CALCULUS is a very high order extension of the FORTRAN 77 language for calculus-based programming. 
This extension includes a set of calculus-level macro statement and a calculus
run-time environment. Together they provide an automatic programming platform
for inverse problems of higher mathematical systems -- problems involving
multidimensional systems of equations in which the unknowns are independent
variables or parameters, rather than dependent variables. Examples include
optimization problems, nonlinear systems of equations, boundary-value problems
of differential equations, implicit differential equations, model fitting and
process identification. Such problems may be defined as hierarchies of dynamic
problem units called <em>calculus processes</em>.</p>
<p>A calculus process consists of
</p>
<ul>
  <li>a problem statement,</li>
  <li>a model containing its equations, and</li>
  <li>a solver containing its solution algorithm</li>
</ul>
The problem statement and the model are the visible parts of the problem,
 defined by the user. The solver is an invisible tool that is part
  of the run-time environment. The problem statement is a calling sentence in an upper level subprogram
  which invokes the lower level of the hierarchy consisting of the model and solver subprograms.
<p>The form of the problem statement of the calculus process is provided by the
calculus-level&nbsp; macro statements, FIND, INVOKE, INITIATE, and INTEGTATE.
These extensions to FORTRAN syntax are translated into a sequence of FORTRAN
subroutine calls which define and control the calculus process.</p>
<p>The model is a new kind of FORTRAN subroutine whose real arithmetic operators
are overloaded for differentiation. Thus the equations of the model are
differentiated during execution with respect to independent variables defined by
the problem statement. This differentiation process is the central mechanism of
FORTRAN CALCULUS. It is an exact numerical process using analytic differentiaton
formulas in an extended arithmetic, but no symbolic derivation is involved. It
is the mathematical context of this differentiation which characterizes a
calculus process. This context is a coordinate system created dynamically by the
problem statement. This coordinate system is inherited by each model subroutine
as it is called during process execution. When the calculus process is
concluded, the coordinate system is destroyed.</p>
<p>The solver is a generic algorithm subsystem used as a solution control
system. It performs its function solely on the basis of an exchange of variable
and parital derivative values from the problem statement and one or more calls
to the model subroutine. The FORTRAN CACLULUS library contains a &quot;pantheon&quot; of
built-in solvers for general classes of problems.</p>
<p>The combination of macro statements, calculus environment, models, and
solvers is a platform for addressing application problem statements virtually,
divoid of mathematical mechanics, reducing or even eliminating the need for user
skill in numerical analysis. A by-product of this is the <em>purification</em> of engineering
 software of the entanglements that have inhibited software reusability. The
purified models become reusable elements that are easily recast into new
applications, and in some cases may become standardized engineering utilities,
employable in a broad base of applications.</p>
<p>A further effect is the elevation of existing engineering software from the
realm of simulation to the realm of optimization. This is an automatic run-time
process of the calculus environment, performed via differential arithmetic. This
it is completely invisible to the user and independent of the source code. In
effect, differential arithmetic turns a simulation model into an optimization
model for any arbitrary set of unknown independent parameters, when called upon
during execution. Potentially any engineering subroutine that generates
continuous or piecewise continuous function values can be elevated in this
manner. The net benefit is that such models can be used as inverse vehicles for
computing the input parameters that drive the engineering to meet specific
goals. Moreover, optimization methods are multidimensional one-to-many solution
methods, that are capable of simultaneously solving many of these driving
parameters.</p>
<p>The combined benefits of non-algorithmic programming, degregation of
engineering from solution mathematics, reusable engineering software, and
elevation from simulation to optimization, offar a software renaissance to
scientific softare developers and to engineering developers. Thad calculus
platform submerges the mathematics into the role of enginees rather than
programs, and programs become merely engineering utilities that can be submerged
into platform librariies in the manner of systems to guild application software
synthesis. FORTRAN CALCULUS and its other scientific language manifestations
will provide the foundation for this new order of scientific computing.</p>
<p>
  Fortran Calculus was created by Joseph Thames and has a long history of implementations, going back to the Apollo space program.
  Visit <a href="http://www.metacalculus.com/fc77.html">www.metacalculus.com</a> to understand some of this history.
  An excellent overview paper is <a href="http://www.metacalculus.com/doc/FC/Fortran_Calculus.pdf">FortranCalculus: A new implementation of synthetic calculus</a></p>
<p>Phil Brubaker has written a textbook, <a href="https://www.amazon.com/Engineering-Design-Optimization-Calculus-Methods-ebook/dp/B01FICKYQE/ref=mt_kindle?_encoding=UTF8&me=&dpID=51iheVJCWcL&preST=_SY445_QL70_&dpSrc=detail" >Engineering Design Optimization using Calculus Level Methods:
  A Casebook Approach: Math Modeling, Simulation, & Optimization</a> using this Fortran Calculus software.</p>
         </div>
    );
  }
}