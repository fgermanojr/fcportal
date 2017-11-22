import PropTypes from 'prop-types';
import React from 'react';

import * as myStyles from '../../../Styles.js';

import Jacobian from '../images/Jacobian.png'
import EuclideanNorm  from '../images/EuclideanNorm.png'
import Underdetermined  from '../images/Underdetermined.png'
import Squared_Norm  from '../images/Squared_Norm.png'
import DampingFormula  from '../images/DampingFormula.png'
import MaxG1Gn  from '../images/MaxG1Gn.png'
import UnknownsConvergence  from '../images/UnknownsConvergence.png'
import Inequalities  from '../images/Inequalities.png'
import Equalities  from '../images/Equalities.png'
import SlackVariable from '../images/SlackVariable.png'

export default class Chap4 extends React.Component {
  constructor(props) {
    super(props);
  }

// move to helper file
curlyStart = () => {
  return '{'
};

curlyEnd = () => {
  return '}'
};

render() {
  var s = myStyles.Styles;

  return(<div style={s.docDiv}>

<h1>4. General Algebraic Equations</h1>

<p>Many technical problems require the solution of polynomial equations, such as</p>

&nbsp;&nbsp;&nbsp;&nbsp;<i> x<sup>4</sup> + 3x<sup>3</sup> - 6x<sup>2</sup> + x - 3 = 0</i><br /><br />

or transcendental equations, such as<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>e<sup>x</sup> - x<sup>2</sup> = 0</i><br /><br />

or simultaneous equations which do not lend themselves to simple solution 
by substitution, such as<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>3x<sup>2</sup> + 2y<sup>2</sup> - 2 = 0<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;x<sup>2</sup> - z/y          = 0<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;y - z<sup>2</sup> - 2        = 0</i><br /><br />

An <i>Implicit algebraic equation</i> is an equation of the form<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>g(x) = 0</i><br /><br />

which may be linear or nonlinear and which may contain transcendental 
functions.  A system of implicit algebraic equations is a set of simultaneous 
equations of the form<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>g<sub>1</sub>(x<sub>1</sub>, x<sub>2</sub>,..., x<sub>m</sub>) = 0<br />

&nbsp;&nbsp;&nbsp;&nbsp;g<sub>2</sub>(x<sub>1</sub>, x<sub>2</sub>,..., x<sub>m</sub>) = 0<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<br />

&nbsp;&nbsp;&nbsp;&nbsp;g<sub>n</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) = 0</i><br /><br />

or in vector notation<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b><i>g</i></b>(<b><i>x</i></b>) = 0<br /><br />

The roots of these equations, i.e., the values of x which satisfy
them, may be determined by executing a statement having the typical
form<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>FIND</b> <i>x<sub>1</sub>, x<sub>2</sub>,..., x<sub>m</sub></i>;
<b>IN</b> <i>p</i>; <b>BY</b> <i>solver</i> <b>TO MATCH</b> <i>g<sub>1</sub>, g<sub>2</sub>
,..., g<sub>n</sub></i><br /><br />

where <i>p</i> is the MODEL which specifies the constraints <i>g(x)</i> which 
must be &quot;matched to zero.<h3>Example</h3>

<p>The three simultaneous equations cited above may be solved by a program 
containing the following statements:</p>


<p>Program:</p>
<pre>
{`
      FIND X,Y,Z; IN THREE(X,Y,Z,GX,GY,GZ); BY AJAX;
        TO MATCH G1,G2,G3

      MODEL THREE (X,Y,Z,G1,G2,G3)
        G1 = 3*X**2 + 2*Y**2 -2
        G2 = X**2 -Z/Y
        G3 = Y - Z**2 - 2
      END
`}
</pre>

<h2>4.1 Implicit Equations</h2>

<p>In any system of equations, some equations may be reducible to the 
form<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>x<sub>k</sub> = f<sub>k</sub> (x<sub>1</sub>,..., x<sub>k-1</sub>, x <sub>k+1</sub>, 
..., x<sub>m</sub>)</i><br /><br />

For example, in the simultaneous equations cited above, the equation<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;y - z<sup>2</sup> - 2 = 0<br /><br /> 

may be reduced to<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;y = z<sup>2</sup> + 2<br /><br /> 

Equations of this form are called explicit equations, since one of 
the unknowns may be computed directly in terms of the remaining unknowns 
of the simultaneous equation system.  The remaining equations which 
are not reducible to this form are called <i>implicit equations</i>.
</p>

<p>Whenever equations of a simultaneous system are separated into an 
explicit set and an implicit set, the "unknowns" computed by the explicit 
equations are no longer independent variables of the system. These 
unknowns and their associated constraints should be eliminated from 
the FIND statement, and there is no need to provide an initial estimate 
of their values.  If no estimate is supplied, however, they must be 
computed in the model before they are used.</p>


<h3>Example</h3>

The three simultaneous equations cited in the above example may be 
reduced to an explicit equation and two implicit equations and solved 
as follows:<br /><br /> 

<p>Program:</p>
<pre>
{`
      FIND X,Z; IN TWO (X,Z,G1,G2); BY AJAX; TO MATCH G1,G2
        :
      MODEL TWO (X,Z,G1,G2)
        Y = Z**2 + 2
        G1 = 3*X**2 + 2*Y**2 -2
        G2 = X**2 - Z/Y
      END
`}
</pre>

<p>It is usually desirable to separate a set of simultaneous equations 
into an explicit set and an implicit set in the above manner in order 
to reduce the computer's solution task.  However, if the algebraic 
reduction is difficult, much time may be saved by solving the equations 
in their original form.</p>

<a name="AJAX_SOLVER" id="AJAX_SOLVER"><h2>4.2 AJAX - Newton-Gauss Equations Solver</h2></a>

<p>AJAX is the nominal solver for general algebraic equations.  It is 
invoked by a FIND statement which has the general form<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp<b>FIND</b> <i>unknowns</i>; <b>IN</b> <i>model-call</i>; 
<b>BY AJAX</b> {<b>(<i>controller</i>)</b>}; 
{this.curlyStart}{this.curlyStart}<b>WITH</b>{this.curlyEnd}{this.curlyEnd}
  <b>LOWER</b>{this.curlyStart}<b>S</b>{this.curlyEnd} <i>bottoms</i>;{this.curlyEnd} {this.curlyStart}{this.curlyStart}
  <b>WITH</b>|<b>AND</b>{this.curlyEnd} 
  <b>UPPER</b>{this.curlyStart}<b>S</b>{this.curlyEnd} <i>tops</i>;{this.curlyEnd} 
  {this.curlyStart}<b>REPORTING</b> <i>names</i>{this.curlyEnd} {this.curlyStart}<b>WITH FLAG</b> <i>signal</i>;{this.curlyEnd} 
<b>TO MATCH</b> <i>constraints</i><br /><br />

The <i>model-call</i> symbol is the model name optionally followed 
by an argument list as in the right-hand-side of a CALL statement.  This 
form is not general, but is limited to certain solvers, including 
AJAX, MARS, HERA and THOR.</p>

<p>The optional clauses (in braces {}) may appear in any order.</p>

<p>The meaning of the clauses in the FIND statement is defined in Section 
1.3 and Section 2.2.2 (The flag variable signal is used to signal 
the condition of solution as explained in section 2.2.5.)</p> 


<h3>Examples</h3>

&nbsp;&nbsp;&nbsp;&nbsp;<b>(1)  FIND X; IN POLYNOM; BY AJAX; TO MATCH F</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>(2)  FIND X1, X2, X3; IN EQNS(SETUP);</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WITH LOWERS X1L,X2L,X3L;</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>AND UPPERS X1H,X2H,X3H;</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>REPORTING BRAV,DIV,EXPONENT;</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>TO MATCH C</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>(3)  FIND VECTORX IN MANYEQS; BY AJAX(ACON);</b><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WITH FLAG TEST TO MATCH VECTORG</b>

<p>The FIND operator initiates an iterative calculation during which 
the gradients with respect to the <i>unknowns</i> are automatically 
evaluated for use by AJAX.  Thus, the <i>unknowns</i> become the <i>independent 
variables</i> while the solution process is underway. During some 
of the iterations, first partial derivatives with respect to these 
unknowns are evaluated for all variables which depend on them. In 
particular, AJAX makes use of the Jacobian Matrix, which contains 
the gradients of the constraints with respect to the unknowns as its 
rows, i.e.,</p>

<div style={s.marginLeft}>
<img src={Jacobian} height="132" width="233" />
</div>

<p><b><i>Solution Process</i></b> - AJAX solves the general algebraic equations 
by successive approximation of the unknowns. The model procedure 
is executed iteratively until the constraints are matched to zero 
within a specified tolerance. During iteration <i>i</i> of this process, 
the <i>ith</i> approximation <i><b>x^</b><sub>(i)</sub></i> of the unknown vector 
<i><b>x</b></i> is computed according to the damped Newton formula<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>x<sub>(i)</sub></i> = <i>x<sub>(i-1)</sub></i> - 
&beta;<i><b>J</b><sub>(i-1)</sub><sup>-1</sup><b>g</b><sub>(i-1)</sub></i><br /><br />

where <i><b>J</b><sub>(i-1)</sub></i> is the Jacobian matrix evaluated during the 
<i>(i-1)th</i> iteration, and &beta; is a damping factor (nominally 
unity - corresponding to the undamped Newton method).
</p>


<p>AJAX will solve systems of equations which fall within any of the 
three classes of implicit algebraic equation systems:<br /><br />
 
&nbsp;&nbsp;&nbsp;&nbsp;(1) <i>Determined systems</i> - equal number of equations and unknowns<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;(2) <i>Overdetermined systems</i> - more equations than unknowns<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;(3) <i>Underdetermined systems</i> - fewer equations than unknowns
</p>

<p><b><i>Determined Systems</i></b> - If the number of equations <i>n</i> 
is equal to the number of independent variables <i>m</i>, then the 
problem is said to be determined.  In this case, the matrix <i><b>J</b><sup>-1</sup></i> 
is the true inverse of the Jacobian matrix <i><b>J</b></i> (In the actual 
computation of AJAX, the inverse is not determined <i>per se</i>, 
rather <i>&Delta;x = x<sub>(i)</sub> - x<sub>(i-1)</sub></i> is computed 
by a process known as sequential orthogonalization. The net effect
is the same as if the inverse were determined, but is more efficient.).</p>

<p>If the equations have more than one solution, as is usually true of 
nonlinear equations, the particular solution obtained will be the 
one nearest to the initial approximation of <i>x<sub>1</sub>,...,x<sub>m</sub></i> 
(the values of these variables upon initial execution of the model 
procedure).</p>

<p><b><i>Overdetermined Systems</i></b> - If the number of equations <i>n</i> 
is greater than the number of independent variables <i>m</i>, then 
the system is said to be overdetermined.  In a true sense, no solution 
to this system exists.  However, AJAX assumes that the n equations 
represent redundant approximations to m equations and solves the system 
by the method of least squares.  Again, the particular solution obtained 
will be the one nearest to the initial approximation <i>x<sub>1</sub>,...,x<sub>m</sub></i>.
In this case, the matrix <i><b>J</b><sup>-1</sup></i>is the <i>pseudo-inverse</i>
of the Jacobian matrix. (The pseudo-inverse of a matrix <b><i>A</i></b> is a 
matrix which has all of the relevant properties of a true inverse when used in place of a true 
inverse, even though <b><i>A</i></b> is singular or nonsquare, and the true 
inverse of <b><i>A</i></b> does not exist.</p> 

<p><b><i>Underdetermined or Ill-Conditioned Systems</i></b> - If the number 
of equations <i>n</i> is fewer than the number of independent variables 
<i>m</i>, then the system is said to be<i> underdetermined</i>.  The 
equivalent situation can also occur when <i>n=m</i> if the equations 
are unstable (ill-conditioned). Loosely stated, a system of equations 
is numerically unstable if small changes in the coefficients of the 
equations produce large changes in the solution. Apparent changes 
in coefficient values could arise due to the precision of matrix inversion.  For 
example, the coefficients of the following sets of linear equations 
differ by only a small amount, yet the solutions are entirely different:</p>

<div style={{paddingLeft: '25pt', paddingRight: '25pt'}}>

---hrtag---
<table>
  <tbody>
    <tr>
      <th style={{width: '40%'}}></th>
      <th style={{width: '30%'}}>(a)</th>
      <th>(b)</th>
    </tr>
    <tr>
      <td>Equations:&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td><i>&nbsp;&nbsp;&nbsp;&nbsp - y = 1</i></td>
      <td><i>&nbsp;&nbsp;&nbsp;&nbsp - y = 1</i></td>
    </tr>
    <tr>
      <td></td>
      <td><i>&nbsp;&nbsp;&nbsp;&nbsp; - 1.00001y = 0</i></td>
      <td><i>&nbsp;&nbsp;&nbsp;&nbsp - .9999y = 0</i></td>
    </tr>
    <tr>
      <td>Solutions:&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp(100001, 100000)</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp(-99999, -100000)</td>
    </tr>
  </tbody>
</table>

---hrtag---
</div>

<p>In either case, underdetermined or ill-conditioned, an infinite number 
of solutions exist.  However, by minimizing the Euclidean norm</p>

<div style={s.marginLeft}>
<img src={EuclideanNorm} height="74" width="230" />
</div>

<p>AJAX will find one of a finite number of smallest least squares solutions 
to the nonlinear equations.  The particular solution obtained will 
be the one nearest to the initial approximation of <i>x<sub>1</sub>,...,x<sub>m</sub></i>.
In this case, the matrix <i><b>J</b><sup>-1</sup></i> is the pseudo-inverse of the 
Jacobian matrix <b><i>J</i></b>.</p>

In essence the underdetermined case is a minimization problem in which 
the objective function


<div style={s.marginLeft}>
<img src={Underdetermined} height="103" width="158" />
</div>

is to be minimized.

<br /><br />

<em>Damping</em>  -  In cases where the Newton method would normally 
diverge or oscillate (in the case of a periodic function), damping 
is applied in AJAX.  Convergence problems arise when one or more components 
of the gradient of a constraint is small relative to the constraint. 
The result can be inordinately large changes in the independent variables, 
thereby (possibly) moving too far away from the solution point to 
achieve convergence.  Damping enforces convergence to a <i>stationary 
point</i> on the surface of the squared norm of the constraints

<div style={s.marginLeft}>
<img src={Squared_Norm} height="58" width="202" />
</div>

This convergence is a necessary but insufficient condition for a solution 
to the constraint equations (all solutions are stationary points, 
but not all stationary points are solutions).

Damping is applied in a sub-iteration procedure, which computes the 
damping fraction

<br />

<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &Beta; = 1/2<sup>n</sup> <br /><br />to be applied to the Newton step if necessary.  The exponent n is 
the smallest value that satisfies the damping inequality

<div style={s.marginLeft}>
<img src={DampingFormula} height="94" width="250" />
</div>

where DAMP is a control variable whose nominal value is 0.2.  At the 
end of each AJAX iteration, a Newton step, <b>D</b>x(i-1)=- 
<b>J</b>(i-1) -1 g (i-1) is computed and saved, 
and a <i>tentative</i>    <i>x</i>(i)=<b>x</b>(i-1)<i>+ D x (i-1)</i> 
is computed. Then, at the beginning of the next iteration, 
a sub-iteration of the model is executed. Partial derivative evaluation 
is not active during the subiteration execution of the model, since 
the Jacobian computed in the last iteration still specifies the Newton 
search direction.  XXXXX to compute the constraint vector <b>g</b>(i)
from the tentative <b>x</b>(i).  If the damping inequality is 
satisfied then the tentative step is accepted and the model is executed 
with derivative evaluation active to compute<i> <b>J</b>(i)</i> 
and complete the iteration.  If the inequality is not satisfied, <i>n</i> 
is increased by one and the resulting  b  is used to halve the 
previous step resulting in a new  <b>x</b>(i)=<b>x</b>(i-1)+ b D x (i-1). This 
value is used to repeat the sub-iteration process until the damping 
inequality is satisfied or until  b 10 -6 XXXXXXX.

<br /><br />Damping is a very effective control procedure which should normally 
never be disabled (DAMP=0) although smaller values of DAMP may be 
indicated for very flat constraint surfaces. <br /><br />

<i><em>Limiting Stepping</em></i>  -  An alternative control procedure may 
be employed to limit independent variable stepping, when the initial 
estimate is known to be good.  This procedure is imposed by the control 
variable VLIMIT which prescribes the maximum change of any independent 
variable during an iteration.  Thus it is only useful when all of 
the independent variables are of the same order of magnitude.  The 
nominal value of VLIMIT (10<sup>50</sup>) effectively disables this control.

<em><br /><br />Linear Equations</em>  -  In the case where the equations to be 
solved are linear, there is only one solution for each of the determined, 
overdetermined, or underdetermined/ill-conditioned cases.  The linear 
solution is achieved in a single execution of the model block by AJAX.

<br /><br />

<i><em>Nesting</em></i>  -  A FIND operation employing AJAX may appear in a 
model which itself is the operand of a FIND statement.  In such a 
case, AJAX is said to be nested within the solver of the outer FIND 
operation.  The solver of the outer FIND operation may also be AJAX, 
in which case AJAX is said to be self-nested.

<br /><br />AJAX may be self-nested to any level, or may be nested within other 
solvers to any level.  This principle is illustrated in Section 5.5, 
pertaining to the solution of implicit differential equations, and 
in Section 6.3.1, pertaining to optimization with equality constraints.
<br /><br /><em><strong>Control Variables</strong></em>  -  The control variables for AJAX include 
the following:

These control variables also apply for the solver MARS (Section 4.3):
<br />
<br />
<table>
  <tbody>
    <tr><td>Variable</td><td>Description</td><td>Preset Value</td></tr>
    <tr><td>DETAIL</td><td>Detailed iteration report option</td><td>0</td></tr>

    <tr><td>Value</td><td>Option</td><td></td></tr>
    <tr><td>0</td><td>No detailed report</td><td></td></tr>
    <tr><td>1</td><td>Detailed report for every iteration</td><td></td></tr>  
    <tr><td>n</td><td>Detailed report for iterations</td><td></td></tr>
    <tr><td></td><td>initial,n,2n,...,last</td><td></td></tr>
  </tbody>
</table>


<table style={{width: '100%'}}>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>Variable&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Description&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>Preset Value&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px', height: '34px'}}></td>
    <td style={{width: '161px', height: '34px'}}></td>
    <td style={{width: '586px', height: '34px'}}></td>
    <td style={{width: '163px', height: '34px'}}></td>
    <td style={{height: '34px'}}></td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>DETAIL&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Detailed Iteration report option&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>0&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px', height: '132px'}}></td>
    <td style={{width: '161px', height: '132px'}}></td>
    <td style={{width: '586px', height: '132px'}}>
    <table style={{width: '100%'}}>
      <tbody>
        <tr>
          <td style={{textDecoration: 'underline'}}>Value&nbsp;</td>
          <td style={{textDecoration: 'underline'}}>Option&nbsp;</td>
        </tr>
        <tr>
          <td>0&nbsp;</td>
          <td>No detailed report&nbsp;</td>
        </tr>
        <tr>
          <td>1&nbsp;</td>
          <td>Detailed report for every iteration&nbsp;</td>
        </tr>
        <tr>
          <td>n&nbsp;</td>
          <td>Detailed report for iterations initial, n,2n,...,last&nbsp;</td>
        </tr>
      </tbody>
    </table>
    &nbsp;</td>
    <td style={{width: '163px', height: '132px'}}></td>
    <td style={{height: '132px'}}></td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>SUMMARY&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Solution summary report option&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>1&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>
    <table style={{width: '100%'}}>
      <tbody>
        <tr>
          <td style={{textDecoration: 'underline', width: '81px'}}>Value&nbsp;</td>
          <td style={{textDecoration: 'underline'}}>Option&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '81px'}}>0&nbsp;</td>
          <td>No Summary report&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '81px'}}>1&nbsp;</td>
          <td>Generate &nbsp;solution summary</td>
        </tr>
      </tbody>
    </table>
    &nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px', height: '27px'}}></td>
    <td style={{width: '161px', height: '27px'}}><strong>CONVERGE&nbsp;</strong></td>
    <td style={{width: '586px', height: '27px'}}><strong>Converge option&nbsp;</strong></td>
    <td style={{width: '163px', height: '27px'}}><strong>1&nbsp;</strong></td>
    <td style={{height: '27px'}}></td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>
    <table style={{width: '100%'}}>
      <tbody>
        <tr>
          <td style={{textDecoration: 'underline', width: '85px'}}>Value&nbsp;</td>
          <td style={{textDecoration: 'underline'}}>Option&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px'}}>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px'}}>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    &nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>REMAX</strong></td>
    <td style={{width: '586px'}}><strong>Maximum number of allowed iterations&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>20&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>ZERO&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Zero tolerance for constraints 
    convergence&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>10<sup>-6</sup>&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>DELTA&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Tolerance on change in unknowns for 
    unknowns convergence&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>10<sup>-7</sup>&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>BREAKIN&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Interactive breakpoint option&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>0&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>
    <table style={{width: '100%'}}>
      <tbody>
        <tr>
          <td style={{textDecoration: 'underline', width: '84px'}}>Value&nbsp;</td>
          <td style={{textDecoration: 'underline'}}>Option&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '84px'}}>0&nbsp;</td>
          <td>No breakpoints&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '84px'}}>n&nbsp;</td>
          <td>Breakpoints after every nth iteration&nbsp;</td>
        </tr>
      </tbody>
    </table>
    &nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>VLIMIT&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Limit on the maximum change of the 
    independent variables during a single iteration&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>10<sup>50&nbsp;</sup></strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>DAMP&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Criterial for imposing damping&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>0.2&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>DETOUT&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Selection of detailed output medium&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>+1&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>
    <table style={{width: '100%'}}>
      <tbody>
        <tr>
          <td style={{textDecoration: 'underline', width: '85px'}}>Value&nbsp;</td>
          <td style={{textDecoration: 'underline'}}>Option&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px'}}>0&nbsp;</td>
          <td>Output to PRINTER&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px'}}>(&gt;0)&nbsp;</td>
          <td>Output to SCROLL&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px'}}>(&lt;0)&nbsp;</td>
          <td>Output to CONSOLE&nbsp;</td>
        </tr>
      </tbody>
    </table>
    &nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>SUMOUT&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Selection of summary output medium&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>-1&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>
    <table style={{width: '100%'}}>
      <tbody>
        <tr>
          <td style={{textDecoration: 'underline', width: '85px'}}>Value&nbsp;</td>
          <td style={{textDecoration: 'underline'}}>Option&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px'}}>0&nbsp;</td>
          <td>Output to PRINTER&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px', height: '26px'}}>(&gt;0)&nbsp;</td>
          <td style={{height: '26px'}}>Output to SCROLL&nbsp;</td>
        </tr>
        <tr>
          <td style={{width: '85px', height: '26px'}}>(&lt;0)</td>
          <td style={{height: '26px'}}>Output to CONSOLE</td>
        </tr>
      </tbody>
    </table>
    &nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>TAU&nbsp;</strong></td>
    <td style={{width: '586px'}}><strong>Maximum relative error in the 
    constraints being matched, <br />i.e. max (error-G)/G.&nbsp;</strong></td>
    <td style={{width: '163px'}}><strong>0.001&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>TAU must be positive. TAU permits the

      <br />specification of the approximate error

      <br />in the values computed in the calculus<br />model, for example errors due to 

      <br />measurement uncertainty in a data fitting 

      <br />problem.  This value is used to hold 

      <br />computational error to a point where it is 

      <br />negligible in comparison to the a priori 

      <br />error.  The value is also used to determine 

      <br />the rank of the problem, i.e. the larger the 

      <br />value of TAU the more likely that the 

      <br /> problem is rank deficient (ill-conditioned 

      <br />or singular). Obviously, an unreasonably 

      <br />small value for TAU may obscure the true 

      <br />nature of the problem and at the same time 

      <br />provoke unnecessarily extended computation.&nbsp;</td>

    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}><strong>PREDAMP</strong>&nbsp;</td>
    <td style={{width: '586px'}}><strong>Arbitrary damping factor to be applied 
    to the first iteratin. (0 &lt; PREDAMP &lt;=)</strong>&nbsp;</td>
    <td style={{width: '163px'}}><strong>1&nbsp;</strong></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>PREDAMP is used only when damping is 

<br />applied (control 
variable DAMP nonzero).<br />The damping scheme 
involves a comparison of

<br />successive estimates 
of the norm of the <br />constraints and 
hence cannot be applied to <br />                                 the initial estimate.  Thus, 
there is some 

<br />                                 possibility of 
an inordinately large Newton 

<br />                                 step on the first 
iteration.  When this is<br />anticipated, perhaps 
from a previous attempt 

<br />                                 at a solution, 
PREDAMP may be used to limit 

<br />                                 the first step.

    &nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '121px'}}>&nbsp;</td>
    <td style={{width: '161px'}}>&nbsp;</td>
    <td style={{width: '586px'}}>&nbsp;</td>
    <td style={{width: '163px'}}>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>


<br /><br /><em>Convergence Criteria</em> -  The convergence criteria for 
AJAX consist of either or both of the criteria<em> constraints convergence</em> 
or <em>unknowns convergence</em> as specified by the control variable 
<strong>CONVERGE.</strong> Constraints convergence is satisfied if 

<div style={s.marginLeft}>
<img src={MaxG1Gn} height="54" width="173" />
</div>

where <em>g</em><sub><em>1</em></sub><em>  ... g</em><sub>n</sub> are the constraint variables 
to be matched to zero. <i>Unknowns convergence is satisfied if  XXXXXXXXXXXXXXXXXXXXXXXXX  </i>

<div style={s.marginLeft}>
<img src={UnknownsConvergence} height="49" width="357" />
</div>

where<em> x</em><sub><em>1</em></sub><em>, ..., x</em><sub>m</sub> are the unknowns of the FIND 
statement and <em>&Delta;x</em><sub><em>1</em></sub><em> , ..., &Delta;x</em><sub><em>m</em></sub> are the changes 
in these unknowns from the previous iteration.

<em><br /><br />Printed Reports</em>  -  AJAX automatically accumulates, formats, 
and issues printed reports whenever specified by the control variables 
<b>SUMMARY</b> and <b>DETAIL</b>.  To illustrate the formats of these 
reports, consider the computed solution of the system of nonlinear 
equation

<br />

<br />&nbsp;&nbsp;&nbsp;&nbsp; y<sub>1</sub> = 12.5 - 3x<sub>1</sub>x<sub>2</sub> - x<sub>3</sub> = 0

<br />&nbsp;&nbsp;&nbsp;&nbsp; y<sub>2</sub> = 3.317 - sin(x<sub>1</sub>) - exp(x<sub>2</sub>) = 0

<br />&nbsp;&nbsp;&nbsp;&nbsp; y<sub>3</sub> = 1.609 - x<sub>2</sub> ln(x<sub>3</sub>) =0

<br />with initial guesses x<sub>1</sub> = x<sub>2</sub> = x<sub>3</sub> = 2.

<br /><br />The FC program for this problem is shown in Figure 4-1.  In this program, 
the  statement DETAIL=1 in the controller SET will generate a detailed 
iteration report for every iteration. Also, because of the preset 
value of the control variable SUMMARY (=1), the solution summary report 
is generated after the FIND operation is complete.

<pre>
{`

     PROBLEM SIMUL
       DIMENSION X(3),Y(3)
       DATA X/2,2,2/
       FIND X; IN EQS(X,Y); BY AJAX(SET); TO MATCH Y
     END

     MODEL EQS(X,Y)
        DIMENSION X(*),Y(*)
        Y(1) = 12.5 - 3*X(1)*X(2) - X(3)
        Y(2) = 3.317 - SIN(X(1)) - EXP(X(2))
        Y(3) = 1.609 - X(2)*LOG(X(3))
      END

      CONTROLLER SET(AJAX)
      DETAIL=1
      END

FIG. 4-1 Simultaneous Equations Solving Program
`}
</pre>

<i>Detailed Iteration Report </i>-  An example of the detailed 
iteration report is given in Figure 4-2.  While the information provided 
in this report is not essential to effective solving of equations, 
it is sometimes helpful in understanding peculiarities of particular 
problems.
<pre>
{`
 ----AJAX ITERATION 2 INVOKED AT SIMUL[3] FOR MODEL EQS


     JACOBIAN MATRIX [DG(I)/DX(J)]

                  (   1)         (   2)         (   3)
     (   1)   -3.212651E+00  -7.885323E+00  -1.000000E+00
     (   2)    8.712017E-01  -2.917956E+00   0.
     (   3)    0.            -1.330697E+00  -2.830629E-01


     JACOBIAN (SCALED)

                  (   1)         (   2)         (   3)
     (   1)   -3.747326E-01  -9.197662E-01  -1.166428E-01
     (   2)    2.860867E-01  -9.582037E-01   0.
     (   3)    0.            -9.781209E-01  -2.080372E-01


     RANK ..... 3


     UNKNOWNS - X

       2.628441E+00   1.070884E+00   3.783681E+00

     DELTA-X  (NEWTON STEP FOR NEXT ITERATION)

      -6.671173E-02  -5.140623E-02   8.917324E-01

     ABSOLUTE DELTA-X / X

       2.538072E-02   4.800356E-02   2.356785E-01

     CONSTRAINTS - (||G|| = 3.410349E-01)

       2.720562E-01  -9.188176E-02   1.839781E-01


     CONVERGENCE CONDITION
        UNKNOWNS NOT CONVERGED
        CONSTRAINTS UNSATISFIED
        SPECIFIED CRITERIA UNSATISFIED

 ----END AJAX ITERATION 2 

FIG. 4-2 Example of Detailed Iteration Report
`}
</pre>



<pre>
{`
 ----AJAX SUMMARY, INVOKED AT SIMUL[3] FOR MODEL EQS

     CONVERGENCE CONDITION
        UNKNOWNS CONVERGED
        CONSTRAINTS SATISFIED
        ALL SPECIFIED CRITERIA SATISFIED



   LOOP NUMBER .........   [INITIAL]         1             2

   UNKNOWNS

            X (  1)      2.000000E+00  2.294485E+00  2.628441E+00
            X (  2)      2.000000E+00  1.342432E+00  1.070884E+00
            X (  3)      2.000000E+00  2.678497E+00  3.783681E+00

   CONSTRAINTS

            Y (  1)     -1.500000E+00  5.809312E-01  2.720562E-01
            Y (  2)     -4.981354E+00 -1.260712E+00 -9.188176E-02
            Y (  3)      2.227056E-01  2.863608E+01  1.839781E-01



   LOOP NUMBER .........   [INITIAL]         3             4

   UNKNOWNS

            X (  1)      2.000000E+00  2.561729E+00  2.506922E+00
            X (  2)      2.000000E+00  1.019477E+00  1.001978E+00
            X (  3)      2.000000E+00  4.675413E+00  4.967233E+00

   CONSTRAINTS

            Y (  1)     -1.500000E+00 -1.028819E-02 -2.877234E-03
            Y (  2)     -4.981354E+00 -2.655155E-03 -4.237323E-04
            Y (  3)      2.227056E-01  3.664223E-02  2.966356E-03



   LOOP NUMBER .........   [INITIAL]         5             6

   UNKNOWNS

            X (  1)      2.000000E+00  2.500841E+00  2.500787E+00
            X (  2)      2.000000E+00  1.000336E+00  1.000323E+00
            X (  3)      2.000000E+00  4.994990E+00  4.995219E+00

   CONSTRAINTS

            Y (  1)     -1.500000E+00 -2.996827E-05 -2.094964E-09
            Y (  2)     -4.981354E+00  7.323269E-06  6.219238E-10
            Y (  3)      2.227056E-01  2.473896E-05  1.643819E-09


 ----END OF LOOP SUMMARY FIG. 4-3 Example of Solution Summary Report
`}
</pre>
The range of application of the two solvers is roughly identical. 
Both are suitable for under-, over-, and exactly-determined problems 
and both may be used when ill-conditioning of singularities reduce 
the rank of the problem.  The principal distinction arises in the 
very common area of overdetermined systems, examples of which include 
regression analysis, parameter estimation, and process identification, 
or more generally, least-squares optimization.  AJAX addresses such 
problems by forming the normal equations and then solving the resulting 
square system by taking the pseudo-inverse through an orthogonalization 
method.  Conversely, MARS directly solves the rectangular system by 
a QR-decomposition technique employing householder elementary transformations.  This 
method involves rather more computation than AJAX, although there 
is a compensating increase in precision.



The major benefits of MARS are twofold.  First, it is a more stable 
computational scheme and is less impacted by the errors arising in 
large and/or poorly scaled problems.  More importantly, it is far 
less subject to difficulty when the problem is ill-conditioned. Since 
the condition number of the normal system is the square of that of 
the basic problem, overdetermined systems are often ill-conditioned 
when the method of AJAX is used.  Another area of advantage to MARS 
involves boundary value problems in which the equations are very sensitive 
to the boundary conditions.

The FIND statements for MARS and AJAX are identical and both employ 
the same control variables.  

A point to note in using MARS is that the influence of control variable 
TAU is somewhat different from the case of AJAX due to their different 
algorithms.  Effectively, MARS takes a less conservative view of computational 
error, as is consistent with its relative stability.  Thus, for the 
same value of  TAU, MARS may converge more rapidly than AJAX but with 
a larger solution norm.  When necessary, tighter solutions may be 
obtained by reducing DELTA and/or TAU. For overdetermined systems, 
control variable ZERO has little influence since constraint convergence 
is rarely possible.

<h2>4.4. Inequality Constraints</h2>

In applications of solvers MARS and AJAX, it is frequently necessary 
to bound the allowable values of the independent variables, both in 
the final solution and during the iterative solution process.  This 
need most commonly arises in least-squares optimization problems, 
i.e. data fitting and parameter estimation, and for these, one recourse 
is to use one of the constrained optimization solvers, such as JUPITER 
or THOR.  When the required bounds are constant, however, the simpler 
and more efficient methods of MARS and AJAX may be used to specify 
constant inequality constraints.

Some typical uses for this feature are:

<ul>
<li>A regression problem in which the curve must have a positive 
ordinate intercept;</li>

<li>The solution of a set of equations which are mathematically 
invalid for some values of the unknowns, e.g. because of negative 
square roots, etc.;</li>

<li>The solution of implicit equations with multiple roots, 
for which the root closest to the initial guess is required.</li>
</ul>

Constant inequality constraints are specified by UPPERS and LOWERS 
clauses in the FIND statement.

<h4>Example</h4>

The following program will fit a cubic to a set of 20 data points 
and require that the curve must be non-negative at x=0.
<pre>
{`
     PROBLEM FIT
       DIMENSION X(20), Y(20), DIFF(20)
 C   INPUT DATA AND INITIAL CONDITIONS FOR THE UNKNOWN COEFFICIENTS
 C   OF THE CURVE, I.E. A,B,C,D SUCH THAT Y=A*X**3+B*X**2_C*X+D
 C   SET UP LOWER LIMITS ALO, BLO, CLO, DLO
       DATA/ALO,BLO,CLO,DLO/3*-E50,0/
       READ *,X,Y
 C   COMPUTE AND OUTPUT THE SOLUTION
       FIND A,B,C,D IN CUBIC(A,B,C,D,X,Y,DIFF); BY MARS;
     ~    WITH LOWERS ALO,BLO,CLO,DLO;
     ~    TO MATCH DIFF
      END

      MODEL CUBIC(A,B,C,D,X,Y,DIFF)
        DIMENSION X(*),Y(*),DIFF(*)
        DO 10 I=1,20
          DIFF(I)=Y(I)-((A*X(I)+B)*X(I)+C)*X(I)+D
 10     CONTINUE
      END
`}
</pre>
&nbsp;Note the way in which the limits were specified.  When any unknown 
is limited, limits must be set for all (The limits are associated 
with the unknowns in left-to-right sequence.)  In this case, the limits 
on A, B, and C were set essentially at "infinity". An alternate, and 
more certain, approach would be to specify upper limits also and to 
develop the limits for the unconstrained unknowns A, B, and C.
<h2>4.5. Systems of Inequalities</h2>

The use of slack variables is a common technique in linear programming 
for reducing an arbitrary linear program to standard form.  That is, 
slack variables are used to convert inequality constraints into equality 
constraints.

To see how this approach works, consider the following linear inequality

<div style={s.marginLeft}>
  <img src={Inequalities} height="73" width="140" /> </div>

Since the left hand side is greater than or equal to zero there exists 
a nonnegative quantity, z, such that 

<div style={s.marginLeft}>
  <img src={Equalities} height="93" width="149" /> </div>

The nonnegative quantity z is called a slack variable.  It is required 
to be nonnegative only by convention and practice; however, by adhering 
to this, much confusion over choice of signs can be avoided.

The same technique also works in nonlinear programming; in fact, its 
application is even more straightforward than in the linear case. 
Obviously, in the latter case, the variable z was required to enter 
linearly; otherwise the linearity of the original problem would be 
lost.  Hence, in the linear case, an additional constraint z 
XXXXXXXXX
f128M  147tag  f2555d ntag 0, 
XXXXXXXXX
must always be explicitly adjoined to the problem.  In the nonlinear 
case, the slack variable need not be linear (although it may be if 
so desired).  In particular, if the slack variables enter the inequalities 
as squared terms then these terms are automatically nonnegative and 
the additional constraints, required in the linear program, are not 
present in the nonlinear case.<br /><br />Consider the set of general algebraic equations of the form

<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; h<sub>1</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) = 0

<br />&nbsp;&nbsp;&nbsp;&nbsp; h<sub>2</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) = 0<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
         :

<br />&nbsp;&nbsp;&nbsp;&nbsp; h<sub>j</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) = 0

and the set of inequalities 

<br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>2</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) &ge;0

<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            :

<br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>k</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) &ge;0

<br /><br />Subtracting l slack variables brings the system of inequalities into the form

<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>1</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) - z<sub>1</sub> 
= 0

<br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>2</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) - z<sub>2</sub> 
= 0

<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           :
<br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>k</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>)  - z<sub>k</sub> 
= 0

<br /><br />Thus the original system of j equalities and k inequalities in m unknowns 
has been transformed into a system of j+k equalities in m+k unknowns.  The 
advantage gained from this transformation is that pseudo-inverse methods 
can be used to directly solve the transformed system.  In FC, this 
can be done quite easily employing the solver, AJAX.  The transformed 
system is typically non-square, however, since AJAX can solve over- 
or underdetermined systems this poses no additional difficulties.

<em><br /><br />Finding Feasible Solutions</em>  -  Slack variable techniques can 
also be used to achieve initial feasibility ( or maintain it) in inequality 
constrained nonlinear programs.  Such applications generally lead 
to an underdetermined system of equations.  It was pointed out earlier 
that underdetermined systems have no unique solution.  Thus, the solution 
to a set of inequalities is merely the nearest of a set of points 
in a feasible subspace of (x<sub>1</sub>,...,x<sub>n</sub>) bounded by the 
inequality constraints.  However, finding any point in this subspace, 
i.e., any feasible point, is an important initial step in constrained 
optimization, or may be employed as a substep of an unconstrained 
optimization search in order to solve a constrained optimization problem.

<br /><br />The following approach can be used to solve systems of inequalities 
of the above form.

<pre>
{`
      GLOBAL ALL
      PROBLEM CONSTRAINTS
        DYNAMIC X,Z,G
        READ *,N,M : ALLOT X(N),Z(M),G(M)
        <Z>=1
        FIND X,Z; IN SLACK; BY AJAX; TO MATCH G
      END

      MODEL SLACK
        DYNAMIC X,Z,G
        CALL INEQLS
        &LT;ZSQ&GT;=&lt;Z&gt;*&lt;Z&gt;
        &lt;G&gt;=&lt;G&gt;+&lt;ZQS&gt;
      END

      MODEL INEQLS
        DYNAMIC X,Z
        G(1)= ... -Z(1)
          :
        g(M)= ... -Z(M)
      END
`}
</pre>
In this code, the slack variables are initialized to unity.  This 
is not necessary in general, but for certain functions, and particular 
choices of initial guesses for the original n variables, the resulting 
Jacobian matrix may be exactly the zero matrix unless the slack variables 
are given nonzero initial values.

A further consideration in the use of slack variables is that it is 
often necessary to change the convergence criteria of AJAX, especially 
for very large problems.  Experience in using this technique has shown 
that both the relative change in the function (i.e., the values of 
the constraints) and in the independent variables must be less than 
the required tolerance (the control variable ZERO).  The default criterion 
for AJAX is that only one or the other of these be less than zero.  If 
this is permitted, it is possible for the change in the independent 
variables to become less than the tolerance even though the constraints 
are not satisfied. Thus, it is advisable to set CONVERGE=2 in a CONTROLLER 
block for AJAX.
<h2>4.6. Multiple Roots of Nonlinear Equations</h2>
Another use of the slack variable technique is to permit the application 
of AJAX to the problem of finding multiple roots of nonlinear systems.  One 
of the main difficulties of this problem is that of avoiding a root 
already found, during the search for the next root.  In principle, 
this can be accomplished quite easily.  The trick is simply to enclose 
each root, as it is found, in an n-sphere, and then constrain further 
searches to regions outside the n-sphere (or for more than two roots 
outside the union of n-spheres).  The resulting constraints are necessarily 
inequalities, having the form 


<div style={{marginLeft: '50px', width: '578px'}}>
  <img src={SlackVariable} height="97" width="201" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  (1)</div>

where

<br />&nbsp; &nbsp;&nbsp;&nbsp; x<sub>0</sub> = (x<sub>01</sub>, ..., x<sub>0n</sub>) is the known 
root<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x = (x<sub>1</sub>, ..., x<sub>n</sub>) is an arbitrary point, 
and

<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; r is the radius of the n-sphere

The inequality can be put into the form of an equality constraint 
by adding the slack variable z:

<div style={{marginLeft: '50px', width: '297px'}}>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

If the original system consisted of the equations

<br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>1</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>n</sub>)  = 0&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
(2)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g<sub>n</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>n</sub>) = 0
<br /><br />The new system, used to find the second root, is

<br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>n</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>n</sub>) 
= 0<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
(3)<br />&nbsp;&nbsp;&nbsp;&nbsp; g<sub>n+1</sub>(x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>n+1</sub>)  = 0


<br /><br />This system is still a determined system, just as the original system 
was.

The following code may be used to solve a system of the form (2), 
by automatically converting it to the form (3), as successive roots 
are found.
<pre>
{`
     PROBLEM ROOTS
       COMMON/CONS/KROOT,N,RADIUS,XO
       DYNAMIC X,G,X0
       READ *,N,RADIUS,NUMROOTS
       ALLOT X(N),G(N)
       READ *,(X(J),J=1,N)
       KROOT=0
 10    FIND X; IN FN(X,G); BY AJAX; TO MATCH G
       IF(KROOT.LT.NUMROOTS-1) THEN
         KROOT=KROOT+1
         ALLOT X(N+KROOT),G(N+KROOT),X0(KROOT,N)
         DO 20 J=1,N
           X0(KROOT,J)=X(J)
           X(J)=X0(KROOT,J)+2*RADIUS
 20      CONTINUE
         X(N+KROOT)=1
         GOTO 10
       ELSE
         STOP
       ENDIF
     END

     MODEL FN(X,G)
       COMMON /CONS/KROOT,N,RADIUS,X0
       DYNAMIC X0,X,G
       IF(KROOT.GT.0) CALL CONSTRAINTS(X,G)
       G(1) = ...
         :
       G(N) = ...
     END

     MODEL CONSTRAINTS(X,G)
       COMMON /CONS/KROOT,N,RADIUS,X0
       DYNAMIC X0,X,G
       DO 10 I=1,KROOT
         G(N)=RADIUS**2+X(N+I)**2
         DO 10 J=1,N
           G(N+I)=G(N+I)-(X0(I,J)-X(J))**2
 10    CONTINUE
     END
`}
</pre>

</div>);

}
}