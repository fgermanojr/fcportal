import PropTypes from 'prop-types';
import React from 'react';

import * as myStyles from '../../../Styles.js';

import GeneralIter70 from '../images/GeneralIter70.png'
import MixedModel50 from '../images/MixedModel50.png'
import ExplicitODESolution70 from '../images/ExplicitODESolution70.png'
import GasEquations2 from '../images/ExplicitODESolution70.png'
import PumpSys60 from '../images/PumpSys60.png'
import Circuit42 from '../images/Circuit42.png'
import AdmitEq1 from '../images/AdmitEq1.png'
import AdmitEq2 from '../images/AdmitEq2.png'
import AdmitEq3 from '../images/AdmitEq3.png'
import AdmitEq4 from '../images/AdmitEq4.png'
import SurgeHt90 from '../images/SurgeHt90.png'
import SurgeHtEq1 from '../images/SurgeHtEq1.png'
import SurgeHtEq2 from '../images/SurgeHtEq2.png'
import SurgeHtEq3 from '../images/SurgeHtEq3.png'
import SurgeHtEq4 from '../images/SurgeHtEq4.png'
import SurgeHtEq5 from '../images/SurgeHtEq5.png'
import SurgeHtEq6 from '../images/SurgeHtEq6.png'
import ImpdesEq1 from '../images/ImpdesEq1.png'
import ImpdesEq2 from '../images/ImpdesEq2.png'
import ImpdesStructure1 from '../images/ImpdesStructure1.png'
import MotionEquations from '../images/MotionEquations.png'
import BvodesStructure1 from '../images/BvodesStructure1.png'
import MotionVariables from '../images/MotionVariables.png'
import SherwoodUnconstrainedOptFormula from '../images/SherwoodUnconstrainedOptFormula.png'
import ConsoptObj from '../images/ConsoptObj.png'
import ConsoptC1 from '../images/ConsoptC1.png'
import ConsoptC2 from '../images/ConsoptC2.png'
import ConsoptC3 from '../images/ConsoptC3.png'
import ConsoptC4 from '../images/ConsoptC4.png'
import ConsoptC5 from '../images/ConsoptC5.png'
import ModelProc80 from '../images/ModelProc80.png'
import SolverProcess60 from '../images/SolverProcess60.png'
import Gener5step70 from '../images/Gener5step70.png'
import ODERates5step70 from '../images/ODERates5step70.png'
import DiffIntegral from '../images/DiffIntegral.png'
import ydotode from '../images/ydotode.png'
import yPrimePrimeODE from '../images/yPrimePrimeODE.png'
import ConstraintModel5step70 from '../images/ConstraintModel5step70.png'
import UnconstrainedOpt5step70 from '../images/UnconstrainedOpt5step70.png'
import ConsOpt5step70 from '../images/ConsOpt5step70.png'

export default class Chap2 extends React.Component {
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
<h1> 2.0 Modeling Templates and Processes</h1>
<p>***Simplify***Metacalculus extends ordinary programming languages for modeling and solving mathematical
applications in their natural <i>holistic</i> form as <i>inverse problems</i>, involving multiple
unknowns shared by nonlinear simultaneous equations which cannot be reduced. Such problems require
hidden solution engines from a library supported by differential calculus arithmetic. This 
arithmetic extends basic hardware arithmetic to produce arrays of numbers called <i>fluxions</i> 
by Isaac Newton, who invented them as tools to understand particle motion. We know them as rates 
of change of variables with respect to the dimensions in which they vary, like velocity and 
acceleration. They measure the slopes of curves at every point. Most of the study of calculus 
involves the derivation and use of these quantities. But that is not the purpose here, because 
the computer is equipped to do that for us. Thus the metacalculus modeler-programmer is not 
involved in calculus methods, in the way that Newton and all subsequent generations have been. 
Models only involve algebraic formulas (like in spreadsheets), even though some of them may 
contain <i>rate</i> variables (fluxions), and integrals (<i>fluents</i> - Newton's other term, 
subsequently discarded by mathematicians who were focused on deriving calculus methods rather 
than modeling).</p>


<p>One of the advantages of thinking holistically about mathematical problems is that modeling 
is greatly simplified if we don't worry about how to solve the equations. In learning to 
convert word problems into algebraic formulas, middle-school students easily learn how to 
convert facts into formulas. It is relatively easy to scan a word problem statement to find 
all of its facts, then convert them to formulas. But this usually results in simultaneous 
equations that share variables (i.e. holism). And since math teachers have been taught to reduce 
simultaneous equations to single equations in one unknown (by algebraic substitution), that is 
generally what they teach students to do. This is how the art of mathematical modeling became 
subordinate to the logic of algebraic manipulation, of which the next seven years or so in a 
student's life becomes dedicated to in following a technical career. But with computers, this can 
be a huge waste of time. First, because it is only possible to solve problems this way in limited 
cases, and second because it is learning to do by mental gymnastics what computers are far better
at. It tends to discourage intuitive talent where real human creativity is superior. The only 
real valuable thing is intuition, Einstein said.
</p>

<p>By subordinating calculus solution methods (algorithms) into language semantics where the computer 
does all the work, metacalculus unifies and simplifies the posing and solving of higher mathematical 
systems which are hierarchies of holistic problems. This shifts our focus toward intuitive 
understanding of mathematics and true symbiosis of the talents of man and computer.</p>

<p>This chapter describes a pattern of thinking about holistic  
systems and the metacalculus processes of solving them.  It is divided 
into two parts, holistic synthesis and metacalculus processes. The first 
is an orientation in the basic structure of holistic systems mathematics, delineating 
how systems problems are conceptualized and posed.   The second part 
is an orientation about the metacalculus processes formed by 
the combination of the problem definitions and the built-in solution 
engines.  These processes are dynamic transactions of numerical variables, 
having characteristic behavior which is easy to learn.  They 
are also building-blocks, from which higher-order processes are composed.  The 
treatment focuses on the basic processes, but some examples of higher-order 
nested structure are given.</p>

<a name="HOLISYN" id="HOLISYN"><h2>2.1 Holistic Synthesis </h2></a>

<p>Holistic mathematical systems may be loosely defined as sets of formulas which share
more than one unknown.  System models representing real systems 
are usually composite blends of relationships including some, such 
as integrals, differential "rate" equations or implicit equations, that are 
computationally intractable, i.e., require indirect solution procedures.  Program 
development must focus on defining a structure that applies  general 
solution techniques to the intractable portions, while treating the 
tractable portions (i.e. explicit algebraic formulas) as auxiliary 
calculations.</p>

An explicit formula system:<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; <i>f<sub>i</sub> = e<sub>i</sub>(v<sub>j</sub>)</i>,
&nbsp;&nbsp;&nbsp;&nbsp; <i> i=1,...,m,&nbsp;&nbsp;&nbsp;&nbsp;
j=1,...,n</i><br /><br />

can be used to represent a set of equations in terms of a set of input 
variables <i>v<sub>j</sub></i> and a set of output variables <i>f<sub>i</sub></i>.  The 
solution of such a system is a set of values of the variables which 
satisfy output conditions or criteria.  Three kinds of criteria may 
be employed:<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;Simulation criteria:  <i>m=n  (determined)</i>,    <i>f<sub>i</sub> = 0 </i><br />

&nbsp;&nbsp;&nbsp;&nbsp;Optimization criteria: <i>m&lt;&lt;n (underdetermined), </i> 
<i>f<sub>k</sub></i> = optimum, etc.<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;Correlation criteria:  <i>m>>n  (overdetermined), </i> error(<i>f<sub>i</sub></i>) 
= minimum, etc<br /><br />
<p>Thus holistic synthesis may be subdivided into three related methodologies 
for finding solutions to holistic mathematical systems.</p>

<a name="SYMSYN" id="SYMSYN"><b><i>Simulation Synthesis</i></b></a> - 
<p>Simulation employs the relationships 
of a model to compute a set of output variable values for a given 
set of input-variable values.  The number of unknowns of the model 
must equal the number of equations.  Thus, there is no freedom for 
the solution to vary, i.e., it is uniquely determined for a given 
set of inputs.</p>

<div style={s.marginLeft}>
<img src={TypeModels70} height="414" width="558" /><br /> 
<b>Figure 2-1  Explicit and Implicit Problems</b>
<br />
</div>

<p>The relationships of the model may be explicit, implicit or combinations 
of both.  If all of the formulas are explicit, the unknowns of the 
model are the output (dependent) variables and knowns are the input 
(independent) variables. This is the well-known form of spreadsheet computations.
If the relationships are implicit, the unknowns are the input variables and the 
output must be constrained to equal zero. This is the form of <i>inverse problems</i>. 
For example, an irreducible implicit formula in the form of 
a FORTRAN assignment<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; <i>x<sub>i</sub> = f<sub>i</sub>(<b>x</b>)</i><br /><br /> 

must be recast as a constraint relationship by defining an equality 
constraint<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; <i>g<sub>i</sub> = x<sub>i</sub> - f<sub>i</sub>(<b>x</b>)</i> = 0<br /><br />

and we must find the values of the <i><b>x</b></i>-vector which causes the 
constraint vector <i><b>g</b></i> to equal zero.  This is accomplished by 
an iterative technique, as illustrated in Figure 2-2.  In essence 
we are converting an implicit model into an explicit one whose output 
must be a known constant, namely zero.  The iterative technique is 
a classical approach known as Newton's method.  It employs partial 
derivatives of the output of the model, the constraint vector, with 
respect to its input, the unknowns.  During each iteration, the values 
of these partials, collectively known as the Jacobian matrix, are 
evaluated as the model is executed and supplied to the Newton solver, 
which uses them to compute an updated estimate of the <i><b>x</b></i>-vector for 
the next iteration.  Newton's method epitomizes the general methodology 
of solving implicit systems.  It uses the partial derivatives to differentially 
estimate all of the unknowns simultaneously, resulting in a step change 
within all of the dimensions of the problem at once!  This provides 
a new position in the coordinate system of the unknowns from which 
to evaluate the model for the next iteration. I believe that this manifestation
of mathematical leverage is grossly unappreciated by all mathematicians and
scientists. I suspect this is the root of Einstein's great regard for the 
mind of Newton.</p>

<div style={s.marginLeft}>
<img src={GeneralIter70} height="264" width="452" />
<br />
<b>Figure 2-2 Stucture of Implicit Problems</b>
<br />
</div>

<p>In a mixed model, namely</p>

&nbsp;&nbsp;&nbsp;&nbsp; <i><b>g</b>(<b>x</b>,<b>y</b>)</i> = 0

<p>where</p>

&nbsp;&nbsp;&nbsp;&nbsp; <i>g<sub>i</sub> = y<sub>i</sub> - f<sub>i</sub>(<b>x</b>) &nbsp;&nbsp;&nbsp; i=1,..., 
k</i>

<p>or</p>

&nbsp;&nbsp;&nbsp;&nbsp; <i>y<sub>i</sub>=f<sub>i</sub>(<b>x</b>)</i>

<p>and</p>

&nbsp;&nbsp;&nbsp;&nbsp; <i>g<sub>j</sub>=h<sub>j</sub>(<b>x</b>,<b>y</b>) &nbsp;&nbsp;&nbsp; j=k+1,...,m</i><p>The relationships consist of an implicit set and an explicit set.  In 
this case, some of the unknowns, namely the dependent variables  <i>y<sub>i</sub></i> 
may be solved for directly from the explicit equations</p>

&nbsp;&nbsp;&nbsp;&nbsp;  <i>y<sub>i</sub> = f<sub>i</sub>(<b>x</b>)</i><br />

<p>Then these values of <i>y<sub>i</sub></i> may be used, along with estimates 
of the unknown independent variables <i><b>x</b></i> to compute the constraints 
<i>g<sub>j</sub></i> which must be driven to zero via an iterative process.  Note 
that, although the solution process is iterative, the number of unknowns 
is still the same as the number of equations (m=n), thus we still 
have a <i>determined</i> system of equations.  This is what characterizes 
a simulation process. The solution is not free to vary, but is restricted 
to determined values which satisfy the equation system.  Of course, 
a nonlinear system may have more than one set of values that are solutions.</p>

<div style={s.marginLeft}>
<img src={MixedModel50} height="237" width="415" />
<br />
<b>Figure 2-3 Stucture of Mixed Problems</b>
<br />
</div>


<a id="OPTSYN" name="OPTSYN"><b><i>Optimization Synthesis</i></b></a><p> - 
Optimization is the generalization 
of simulation where one or more input variables is varied by an iterative 
procedure until some specified output variable is optimized. Each 
iteration is equivalent to a simulation.  In order to optimize something, 
we must have freedom to vary the input of a model to find the input 
values which lead to the optimal desired output.  Freedom implies 
that certain input variables must remain unconstrained over a range 
of values, so that they may be varied and the effect  on the desired 
optimum output variable be used to control the iterative process.</p>

<p>Before we define any model relationships, all unknowns are independent 
and are free to take on any values, thus the number of degrees of 
freedom is equal to the number of unknowns.  As we define an <i>equality 
constraint</i> (implicit equation) we fix the value of one independent unknown, 
thus we decrease the number of degrees of freedom by one. We can define explicit 
equations without altering the number of degrees of freedom, because they do not
fix the independent unknowns of optimization, but may merely define additional 
dependent variables.  In simulation, there are no degrees of freedom because the 
number of unknowns is equal to the number of equations.  Optimization is 
characterized by the number of independent unknowns being greater than the number of 
equations, and the number of degrees of freedom is the difference 
between them.  In this case the model is said to be <i>underdetermined.</i> It 
often occurs that independent unknowns are also subject to <i>inequality</i> 
constraints, which serve to restrict the range of allowed values. 
But only equality relationships truly bind independent unknowns, thus 
only equality constraints can eliminate degrees of freedom.</p>
<p>In optimization, the values of the free input variables are determined 
by iteratively varying their values in a systematic way until optimization 
criteria are satisfied.</p>  

<p>The following four cases of optimization arise in practice:</p>

<ol>
    <li><i>Unconstrained optimization</i>, where the unknowns may 
take on any values and the number of degrees of freedom is equal to 
the number of unknowns.  In this case the objective must be a nonlinear 
function of the unknowns, otherwise no optimum exists.</li> 

<li><i>Optimization with inequality constraints</i>, where the 
unknowns may be restricted but unspecified values, thus the number 
of degrees of freedom is still equal to the number of unknowns; however, 
the objective may be linear.</li>

<li><i>Optimization with equality constraints</i>, where the 
number of degrees of freedom is equal to the number of unknowns minus 
the number of equality constraints, some of the unknowns being specified 
by the constraints.</li>

<li><i>Optimization with mixed constraints</i> (same as in 3).</li>
</ol>

<p>The optimization criteria is that one of the output variables, the 
objective variable, must be an extremum and that constraints, if any, 
must be satisfied.</p>

<p>When solving a constrained optimization problem, we 
often start out by ignoring the constraints and finding the unconstrained 
optimum if the objective function is nonlinear.  This is much easier 
in general, and useful insight into the properties of the function 
is gained.  Moreover, when only inequality constraints are involved, 
often none of the constraints are active and the unconstrained solution 
is the same as the constrained solution.</p>

<a name="CORSYN" id="CORSYN"><b><i>Correlation Synthesis</i></b></a><p> - 
In correlation synthesis, the 
number of equations is greater than the number of unknowns, which 
are the free parameters in the model.  In this case, the problem is 
said to be <i>overdetermined</i>, i.e., there is redundant information.  The 
difference between the number of equations and the number of unknowns 
is called the number of degrees of redundancy.</p>

<p>Correlation problems most often arise where the output of a model 
is being matched (co-related) to the measured output of a physical 
process that the model represents, as in an experimental test.  Each 
correlated measurement is an equation relating an output (dependent) 
variable to a measurement parameter (program input) or constant. This 
must be an implicit equation defining an equality constraint as the 
difference between the output variable and the measurement parameter 
or constant. The number of such equations is often much larger than 
the number of unknowns, since the greater the redundancy, the greater 
the confidence of the solution, in general.</p>

<p>Correlation problems are solved by optimization methods to find a 
set of values of the unknown parameters that minimizes the error between 
the model outputs and the measurements.  The most common method is 
least-squares optimization.</p>

<p><i><b>Problem Characterization</b></i> - The first step in defining a metacalculus program is the characterization
of the problem according to the three categories of determinancy; the
character of the unknowns as explicit or implicit; and the kind of equations (algebraic
or calculus). In general we may associate the three categories of determinancy with the
three types of synthesis:</p>

<ul>
<li><i><b>simulation</b></i>: &nbsp;&nbsp;#equations = #unknowns (determined)</li>
<li><i><b>optimization</b></i>: &nbsp;&nbsp;#equations &lt; #unknowns (underdetermined)</li>
<li><i><b>correlation</b></i>: &nbsp;&nbsp;#equations &gt; #unknowns (overdetermined)</li>
</ul>

<p>If all of the unknowns of a problem are dependent variables, then the problem is
explicit. If all of the unknowns are independent variables then the problem is implicit.
If some unknowns are dependent, and some are independent, the problem is mixed.
In optimization and correlation problems, the primary unknowns are always independent
variables. In simulation problems, the unknowns may be either dependent or
independent variables. If simulation is used to solve initial value problems of ordinary
differential equations, then the unknowns are dependent variables, hence the simulation
problem is explicit. If a determined system of simultaneous equations is solved by
simulation, the unknowns are independent variables, so the simulation problem is
implicit.</p>

<p>The final characterization relates to the form of the equations, algebraic or calculus
equations. Calculus equations include differential equations, integral equations and
equations involving both differentials and integrals.</p>

<h4>Examples</h4>

<div style={s.marginLeft}>

<p>(a) <i>Problem Statement</i>: Given the following equations, the object is to find x, y and
z.</p>
&nbsp;&nbsp;&nbsp;&nbsp;<i>3x<sup>2</sup> + y<sup>2</sup> - 2 = 0</i><br />
&nbsp;&nbsp;&nbsp;&nbsp;<i>x<sup>2</sup> - z/y = 0 </i><br />
&nbsp;&nbsp;&nbsp;&nbsp;<i>y - z<sup>2</sup> - 2 =0 </i><br />

<p><i>Problem characterization</i>: There are three equations and three unknowns. Three
unknowns give us three degrees of freedom but each equation takes away one
degree of freedom. Therefore three unknowns and three equations give us no
degree of freedom and the system is a determined one.</p>

<p>Now look at the equations. These are algebraic nonlinear and implicit equations because
knowns and unknowns cannot be separated. So the characterization of
the problem may be stated as: determined system of nonlinear and implicit algebraic
equations.</p>

<p>(b) <i>Problem Statement</i>: The cost of a certain operation is given by two variables
x and y such that:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<i>Cost = (x-2)<sup>2</sup> + (y-1)<sup>2</sup></i><br />
&nbsp;&nbsp;&nbsp;&nbsp;<i>1 - x<sup>2</sup> - y &ge; 0</i><br />
&nbsp;&nbsp;&nbsp;&nbsp;<i>e<sup>xy</sup> - x - 2 = 0</i><br />

<p>The objective is to find x, y such that Cost is minimum.</p>

<p><i>Problem Characterization</i>: There are two unknowns and three relationships At
first glance it may appear that it is an overdetermined system, but this is not the case
because the first relationship is an explicit equation. It does not remove a degree
of freedom because the variable Cost is not fixed. The second relationship is an
inequality constraint allowing x and y to take on any values so long as the total
result is greater than or equal to zero. In other words, if the value of one variable
is fixed, many different values of the other variable can still satisfy the relationship
and therefore no degree of freedom is lost. However, the third relationship is an
implicit equation constituting an equality constraint; i.e., if we fix a value for one
variable the other variable has to have only a certain value to satisfy the equation.
Therefore we lose one degree of freedom. Thus, although we have two unknowns
there is only one true equation; and this problem falls in the category of underdetermined
systems.</p>

<p>The equations are algebraic, nonlinear and implicit. So this problem may be
characterized as an underdetermined system of nonlinear and implicit algebraic
equations. This problem would be solved by optimization techniques.</p>

<p>(c) <i>Problem Statement</i>: Solve for x<sub>1</sub> and x<sub>2</sub> in the equations</p>
&nbsp;&nbsp;&nbsp;&nbsp;<i>x<sub>l</sub> + 2x<sub>2</sub> = 4</i><br />
&nbsp;&nbsp;&nbsp;&nbsp;<i>2x<sub>1</sub> - x<sub>2</sub> = 5</i><br />
&nbsp;&nbsp;&nbsp;&nbsp;<i>x<sub>1</sub> - 2x<sub>2</sub> = 2</i><br />

<p><i>Problem Characterization</i>: There are two unknowns and three equations, therefore,
the system belongs to overdetermined case. Furthermore, the equations are
algebraic, linear and implicit. So this problem is characterized as an overdetermined
system of linear and implicit algebraic equations. Truly speaking these
systems do not have an exact solution. However, they can be solved as optimization
problems by minimizing the error of approximate solutions. This kind of technique
is called least squares optimization.</p>

</div>

<p><b><i> Solution  Processes </i></b> - In regard to solution techniques, each 
problem may be termed as direct or indirect, explicit or implicit.  Direct 
problems are characterized by one pass solutions, not requiring a 
solution technique other than the primitive arithmetic of the computer. 
This is the spreadsheet scenario. Iterative or indirect problems require the 
problem model to be executed iteratively until convergence criteria are met.</p> 

<p><i>Direct Procedures:</i>  When each equation has only one independent 
unknown and the unknown from each equation can be separated from the 
knowns such that the unknown is on the left hand side of the equal 
sign and all terms containing knowns can be brought to the right hand 
side, then the system can be solved in one pass.  In this case the 
solution technique is the arithmetic of the computer, and there is 
no distinction between the model and its solution process.  Consequently, 
only one procedure is usually involved.</p>
<p><i>Indirect Processes </i> are hierarchies involving at least three program 
elements, a driver, a solver, and a model.  Models are user-defined 
systems of equations and solvers are independent numerical algorithms 
which control the execution of the models.  A driver is the user defined 
program element (procedure or model) that invokes a solver to operate 
on a model.  The structure and control of metacalculus processes is further 
discussed in Section 2.2.</p>

<p><i>Explicit Indirect Problems:</i>  If some or all the equations are 
explicit differential equations, an external integration solver must 
be employed in a multiple pass procedure as illustrated in Figure 
2-4.  The differential equations are formulated in a model, computing 
the differential rate variables on the left of the equal sign.  The 
model is executed in multiple passes by the solver to obtain the rate 
values intermittantly during the integration process.  Its output 
is a set of dependent variable values tracing out the integral functions 
over the interval of the independent variable <i>t</i> from <i>t<sub>0</sub></i> to 
<i>t<sub>f</sub></i>.</p>

<div style={s.marginLeft}>
<img src={ExplicitODESolution70} height="344" width="519" />
<br />
<b>Figure 2-4 Solution of Explicit Differential Equations</b> 
</div>


<p><i>Implicit Indirect Problems:</i>  Implicit problems are characterized 
by the unknowns being input (independent) variables or parameters.  The 
solution is specified by conditions on output (dependent) variables, 
such as constraint variables to be satisfied, or objective variables 
to be optimized or both.  Implicit problems include determined, underdetermined, 
overdetermined systems, boundary value differential equations problems, 
optimization problems and data matching (curve fitting) problems. 
Unlike explicit problems, solution of implicit problems is started 
by guessing certain values of the independent unknowns.</p>

<p>If the output conditions based on these guessed input values are not 
satisfied, a new guess is made for the unknowns by the solver, and 
the model is re-executed.  This iterative procedure is continued until 
a convergence criteria is satisfied. The methodology, common to all 
implicit problems is shown in Figure 2-3.</p>

<h3>Illustration Problems</h3>

<p>The application problems to follow are designed to illustrate the 
points made earlier.  We will talk about the following types of problems:</p>

<ol>
    <li>Simulation with explicit & Implicit Algebra</li> 

    <li>Simulation with Explicit ODE's</li> 

    <li>Simulation with Implicit ODE's and Boundary Value 
        Problems</li>

        <li>Unconstrained and Constrained Optimization</li>
</ol>

<a name="IP1:IMALEQ" id="IP1:IMALEQ"><h4>Illustration Problem No. 1 - Implicit Algebraic Equations</h4></a>

<p>The following equations can be shown to relate the temperatures and 
pressures on either side of a detonation wave that is moving into 
a zone of unburned gas:</p>

<div style={s.marginLeft}>
<img src={GasEquations2} height="108" width="321" />
</div>

where<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;T = absolute temperature&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H<sub>r</sub> = heat of reaction<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;P = absolute pressure&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C<sub>p</sub> = specific heat at constant pressure<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;&gamma; = ratio of specific heat at constant pressure to specific heat at constant volume<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;m = mean molecular weight<br /><br />

<p>and the subscripts 1 and 2 refer to the unburned and burned gas respectively.</p>

<p>Find <i>T<sub>2</sub></i> and <i>P<sub>2</sub></i> which relate to the burned gas mixture 
with the following given data for the detonation of a mixture of hydrogen 
and oxygen: <i>m<sub>1</sub></i>=12, <i>m<sub>2</sub></i>=18, <i>T<sub>1</sub></i>=300K, <i>P<sub>1</sub></i>=1 
atm, <i>g<sub>2</sub></i>=1.31, <i>H<sub>r1</sub></i>=-58300, and <i>C<sub>p2</sub></i>=9.86.</p> 

<p><i>FC Program:</i> We will use universal correlation solver AJAX. There will be two FC procedures.  The 
PROBLEM procedure will read in data, initialize the problem and make 
a call to AJAX to operate on the MODEL procedure which will contain 
the equations written as equality constraint relationships to be matched 
to zero.</p>

<h5>Program Variables</h5>

&nbsp;&nbsp;&nbsp;&nbsp;GAMMA2 &equiv; &gamma;<sub>2</sub>&nbsp;&nbsp;&nbsp;&nbsp;EM1 &equiv; m<sub>1</sub>&nbsp;&nbsp;&nbsp;&nbsp;P2 &equiv; P<sub>2</sub>&nbsp;&nbsp;&nbsp;&nbsp;HR1 &equiv; H<sub>r1</sub><br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;EM2 &equiv; m<sub>2</sub>&nbsp;&nbsp;&nbsp;&nbsp;T1 &equiv; T<sub>1</sub>&nbsp;&nbsp;&nbsp;&nbsp;P1 &equiv; P<sub>1</sub>&nbsp;&nbsp;&nbsp;&nbsp;CP2 &equiv; C<sub>p2</sub><br /><br />

<h5>Program</h5>
<pre>
{`
   PROBLEM IMPLICIT
     COMMON/VARIABLS/GAMMA2,EM2,EM2,P2,P1,HR1,CP2,T1
     NAMELIST/DATA/GAMMA2,EM2,EM2,P2,P1,HR1,CP2,T1
     READ DATA
     P2=20 : T2=5000 ! Initial Guess
     FIND P2,T2; IN ALGEBRA; BY AJAX; TO MATCH G1,G2
   END
   
   MODEL ALGEBRA
     COMMON/VARIABLS/GAMMA2,EM2,EM2,P2,P1,HR1,CP2,T1 
     G1 = GAMMA2*EM2*T1/(EM1*T1)*(P2/P1)**2-(GAMMA2+1)*P2/P1+1
     G2 = (GAMMA2-1)*EM2/(2*GAMMA2*EM1)*(P2/P1-1)
  ~       *(1+EM1*T2*P1/(EM2*T1*P2))-HR1/(CP2*T1)-T2/T1+1
   END
`}
</pre>

<a name="IP2:EIMALEQ" id="IP2:EIMALEQ"><h4>Illustration Problem No. 2 - 
Explicit &amp; Implicit Algebra Simulation</h4></a>

<div style={s.marginLeft}>
<img src={PumpSys60} height="383" width="461" />
<br />
<b>Figure 2-5 Centrifugal Pump Piping System</b>
<br />
</div>

<p>The design of a piping system employing centrifugal pumps is a typical 
example of simultaneous nonlinear algebraic equations.  For flow of 
a liquid in an inclined pipe between two points i and j, the pressure 
drop is given by<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; <i>P<sub>i</sub> - P<sub>j</sub></i> = 0.5 <i>f<sub>m</sub>&rho;u<sub>m</sub><sup>2</sup> 
L/D + &rho;(Z<sub>j</sub> - Z<sub>i</sub>)</i><br /><br />

where <i>P<sub>i,j</sub></i> denotes pressure and <i>Z<sub>i,j</sub></i> elevation at the 
respective points, <i>f<sub>m</sub></i> is the Moody friction factor, <i>&rho;</i>  
is the liquid density, <i>u<sub>m</sub></i> is the mean velocity, <i>L</i> is the pipe 
length and <i>D</i> is the pipe diameter.  Assuming a constant value for 
the friction factor, this equation can be rewritten for turbulent 
flow in pipes of average roughness in terms of the volumetric flow 
rate <i>Q</i> in gpm as:<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; <i>Z<sub>j</sub> - Z<sub>i</sub></i> + 2.31(<i>P<sub>j</sub> - P<sub>i</sub></i>) + 8.69x10<sup>-4</sup> 
<i>Q<sup>2</sup>L/D<sup>5</sup></i> = 0</p> 

<p>The pressure rise across a centrifugal pump can be represented by</p>

&nbsp;&nbsp;&nbsp;&nbsp; <i>&Delta;P = &alpha; - &beta;Q<sup>2</sup></i><br /><br />

where &alpha; and &beta; are constants dependent upon a particular 
pump.

For the piping system shown in Fig. 2-6, the pressures P<sub>1</sub> and 
P<sub>2</sub> are both essentially atmospheric (0 psig); there 
is an increase in elevation between points 4 and 5, but pipes C and 
D are horizontal.  Using the above equations as modeling elements, 
the governing equations for this system are:<br /><br /><i>

&nbsp;&nbsp;&nbsp;&nbsp; P<sub>2</sub> = &alpha; <sub>A</sub> - &beta;<sub>A</sub>Q<sub>C</sub><sup>2</sup><br /><br />



&nbsp;&nbsp;&nbsp;&nbsp; 2.31(P<sub>4</sub>-P<sub>2</sub>) + 8.69x10<sup>-4</sup>Q<sub>C</sub><sup>2</sup>L<sub>C</sub>/D<sub>C</sub><sup>5</sup> = 0<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; P<sub>3</sub> = &alpha;<sub>B</sub> - &beta;<sub>A</sub>Q<sub>D</sub><sup>2</sup><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; 2.31(P<sub>4</sub>-P<sub>3</sub>) + 8.69x10<sup>-4</sup>Q<sub>D</sub><sup>2</sup>L<sub>D</sub>/D<sub>d</sub><sup>5</sup> = 0<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; Q<sub>E</sub> = Q<sub>C</sub> +Q<sub>D</sub><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;Z<sub>5</sub> - Z<sub>4</sub> + 2.31(0-P<sub>4</sub>) +8.69x10<sub>-4</sub>Q<sub>E</sub><sup>2</sup>L<sub>E</sub>/D<sub>E</sub><sup>5</sup> = 0<br /><br />

</i>
A program is required to solve these equations for the unknowns, P<sub>2</sub>, 
P<sub>3</sub>, P<sub>4</sub>, Q<sub>C</sub>,Q<sub>D</sub>, Q<sub>E</sub> if Z<sub>5</sub>-Z<sub>4</sub>
is given as 70 feet and the pump and pipe characteristics are
&nbsp;
<div style={s.marginLeft}>
<table width="60%">
  <tbody>
    <tr><th style={s.width109}>Pump</th><th style={s.width109}>&alpha;,psi</th><th>&beta;,psi(gpm)<sup>2</sup></th></tr>
    <tr><td style={s.width109Centered}>A</td><td style={s.width109Centered}>156.6</td><td style={s.width109}>0.00752</td></tr>
    <tr><td style={s.width109Centered}>B</td><td style={s.width109Centered}>117.1</td><td style={s.width109}>0.00427</td></tr>
  </tbody>
</table>
<table width="60%">
  <tbody>
    <tr><th style={s.width20Pc}>Pipe</th><th style={s.width20Pc}>D, in.</th><th>L, ft.</th></tr>
    <tr><td style={s.width109}>C</td><td style={s.width109}>1.278</td><td style={s.width109}>125</td></tr>
    <tr><td style={s.width109}>D</td><td style={s.width109}>20.67</td><td style={s.width109}>125</td></tr>
    <tr><td style={s.width109}>E</td><td style={s.width109}>2.469</td><td style={s.width109}>145</td></tr>
  </tbody>
</table>
</div>

<p></p>The variables Q<sub>E</sub>, P<sub>2</sub>, and P<sub>3</sub> are computed explicitly 
in the first three equations, thus they are dependent rather than 
independent variables.  Since the remaining three equations are implicit 
in the unknowns Q<sub>C</sub>, Q<sub>D</sub>, and P<sub>4</sub>, these equations 
can be represented by the constraints G<sub>C</sub>, G<sub>D</sub>, and G<sub>E</sub>,<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;G<sub>C</sub> = 2.31(P<sub>4</sub>-P<sub>2</sub>) + 8.69x10<sub>-4</sub>Q<sub>C</sub><sup>2</sup>L<sub>C</sub>/D<sub>C</sub><sup>5</sup><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;G<sub>D</sub> = 2.31(P<sub>4</sub>-P<sub>3</sub>) +8.69x10<sub>-4</sub>Q<sub>D</sub><sup>2</sup>L<sub>D</sub>/D<sub>D</sub><sup>5</sup><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;G<sub>E</sub> = Z<sub>5</sub>-Z<sub>4</sub> -2.31P<sub>4</sub> + 8.69x10<sub>-4</sub>Q<sub>D</sub><sup>2</sup>L<sub>E</sub>/D<sub>E</sub><sup>5</sup><br /><br />

<h5>Program</h5><pre>
{`
      PROBLEM TWOPUMP(10000,1000,1000)
        COMMON/RESULTS/QC,QD,QE,P2,P3,P4,GC,GD,GE
        QC=53 : QD=50 : P4=75  ! Initial guesses
        FIND QC,QD,P4; IN PUMPSY; BY AJAX;
     ~     REPORTING QE,P2,P3; TO MATCH GC,GD,GE
      END

      MODEL PUMPSY
        COMMON/RESULTS/QC,QD,QE,P2,P3,P4,GC,GD,GE
        DATA ALPHAA,BETAA,ALPHAB,BETAB,CD,CL,DD,Z5,Z4,ED,EL
     ~  /156.6,.00752,117.1,.00427,1.278,125,2.067,125,70,0,2.469,145/
        QE=QC+CD
        P2=ALPHAA-BETAA*QC**2
        P3=ALPHAB-BETAB*QD**2
        GC=2.31*(P4-P2)+8.69E-4*QC**2*CL/CD**5
        GD=2.31*(P4-P3)+8.69E-4*QD**2*DL/DD**5
        GE=Z5-Z4-2.31*P4+8.69E-4*QE**2*EL/ED**5
      END
`}
</pre>

<a name="IP3:IMALCO" id="IP2:IMALCO"><h4>Illustration Problem No. 3 - Implicit Algebra Correlation</h4></a>

The admittance (1/resistance) of an AC circuit has been measured at 
21 frequencies in a breadboard experiment.  An equivalent circuit 
containing two inductors and a capacitor is diagrammed below.
<div style={s.marginLeft}>
<img src={Circuit42} height="204" width="335" />
<br />
<b>Figure 2-6 Admittance Ciruit</b>
<br />
</div>

<p>The admittance for this equivalent circuit is given by</p>

<div style={s.marginLeft}>
<img src={AdmitEq1} height="67" width="177" />
</div>

<p>For the lossless case, L, L<sub>s</sub>, and C<sub>s</sub> are real and Y<sub>12</sub> 
is imaginary. Replacing Y<sub>12</sub> by 0+jY and rearranging yields</p>

<div style={s.marginLeft}>
<img src={AdmitEq2} height="68" width="154" />
</div>

<p>Given the 21 measurements of Y at frequencies from 2900x10<sup>6</sup>
cps to 3900x10<sup>6</sup> cps, it is desired to find the parameters L, 
L<sub>s</sub>, and C<sub>s</sub> to match the measurements.  For each measurement 
Y<sub>i</sub> at frequency &omega;<sub>i</sub> we may estimate a matching admittance 
Y<sub>ci</sub> as follows:</p>

<div style={s.marginLeft}>
<img src={AdmitEq3} height="88" width="178" />
</div>

<p>With i = 1,...,21, this results in 21 equations in only three unknowns.  To 
solve these equations by least squares correlation, we form a constraint 
vector:</p>

<div style={s.marginLeft}>
<img src={AdmitEq4} height="46" width="198" />
</div>

<p>and execute the find statement</p>

&nbsp;&nbsp;&nbsp;&nbsp;FIND L, L<sub>s</sub>, C<sub>s</sub>;  ...  TO MATCH R<br />

<p>This program is given below</p>
<pre>
{`
      PROBLEM CIRCUIT (5000,1000,1000)
        DIMENSION F(21),Y(21),R(21),W(21),YC(21)
        DATA Y/1.273,1.278,1.392,1.604,1.708,1.950,2.148,2.297,
     ~         2.503,2.893,3.305,4.005,5.077,8.069,14.84,39.47,
     ~           -15.06,-.9705,-7.368,-5.286,-3.9097/
        DO 10 I=1,21
          F(I)=2850+50*I
          W(I)=6.28318E6*F(I)
   10   CONTINUE
        FIND EL,ELS,CS IN FIT(F,Y,R,W,YC) TO MATCH R
      END

      MODEL FIT(F,Y,R,W,YC)
        DIMENSION F(*),Y(*),R(*).W(*),YC(*)
        DO 10 I=1,21
          YC(I)=-1/(W(I)*EL-1/(W(I)*CS-1/(W(I)*ELS)))
          R(I)=1/YC(I)-1/Y(I)
   10   CONTINUE
      END
`}
</pre>


<a name="IP4:EXPODES" id="IP2:EXPODES"><h4>Illustration Problem No. 4 - Explicit ODE's</h4></a>

<div style={s.marginLeft}>
<img src={SurgeHt90} height="320" width="463" />
<br />
<b>Figure 2-7 Surge Tank Problem</b>
<br />
</div>


<p>The installation shown above delivers water from a reservoir 
of constant elevation H to a turbine.  The surge tank of diameter 
D is intended to prevent excessive pressure rises in the pipe whenever 
the valve is closed quickly during an emergency.  Assuming constant 
density, and neglecting the effect of acceleration of water in the 
surge tank, a momentum balance on the water in the pipe leads to</p>

<div style={s.marginLeft}>
<img src={SurgeHtEq1} height="42" width="213" />
</div>

<p>where</p>

&nbsp;&nbsp;&nbsp;&nbsp;h= height of water in the surge tank<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;f<sub>m</sub> = Moody friction factor<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;u = mean velocity in the pipe<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;g = gravitational acceleration<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;t = time<br /><br />

<p>Also, continuity requires that</p>

<div style={s.marginLeft}>
<img src={SurgeHtEq2} height="45" width="144" />
</div>

<p>The flow rate Q<sub>v</sub> through the valve in the period 0&le;t&le;t<sub>c</sub> 
during which it is being closed is approximated by</p>

<div style={s.marginLeft}>
<img src={SurgeHtEq3} height="32" width="161" />
</div>

<p>where the constant k depends on the particular valve and the downstream 
head h* depends on the particular emergency at the turbine.</p>

<p>During and after an emergency shut down of the valve, compute the 
variation with time of the level in the surge tank with the given 
data as follows:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<i>g = 32.2 ft/sec<sup>2</sup>, H=100 ft, h<sub>0</sub> = 88 ft, f<sub>m</sub> = 0.024, L = 2000 ft, d = 2 ft </i><br /><br />

The above statement of the problem leads us to the following diagnosis:

<p><b><i>Unknowns:</i></b>  We want to find h as a function of t.  However, 
<i>u</i> and <i>Q<sub>v</sub></i> are also functions of t which are unknown in advance.  Therefore, 
there are three unknowns<i>h, u</i> and <i>Q<sub>v</sub></i>.</p>


<p><b><i>Knowns:</i></b>  All variables except <i>h, u</i> and <i>Q<sub>v</sub></i> are given.</p>

<p><b><i>Connecting Relationships:</i></b>  There are three equations:</p>

<div style={s.marginLeft}>
<img src={SurgeHtEq4} height="32" width="244" />
</div>

<div style={s.marginLeft}>
<img src={SurgeHtEq5} height="52" width="244" />
</div>

<div style={s.marginLeft}>
<img src={SurgeHtEq6} height="42" width="246" />
</div>

<p>As we can see there are two explicit ODE's and one algebraic equation.</p>

<p><b><i>Programming:</i></b>  The intractible aspect of this problem is that 
we must solve explicit differential equations.  Thus a numerical 
integration solver is required, and programming is structured to apply 
the solver to the equations in the most straightforward manner.  There 
is no need to worry about the nonlinearity of the equations, because 
numerical integration solvers treat linear and nonlinear equations 
the same.</p>

<p>The program has two FC procedures. The main 
(PROBLEM) procedure reads in data, initializes the problem and makes 
a call to an integration solver, JANUS, to be extracted from the FC 
library.  In addition the PROBLEM will print the desired output quantities.  The 
second procedure will be the MODEL  containing the equations of the 
problem.  The integration solver will operate on this Model, calling 
it repeatedly, to solve the equations.</p> 
<pre> 
{`
      PROBLEM  SURGEHT
        COMMON QV,DHDT,DUDT,CAY,T,TC,H,HSTAR,PIO4,U,DCAP,EL,HCAP,FM
        NAMELIST/DATA/G,HCAP,H0,FM,EL,D,DCAP,TC,CAY,HSTAR 
        READ DATA
        H=H0 : T=0 : DT=0.3 : TF=0 : TP=.5 : TC=6
        QV=CAY*(1-T/TC)*SQRT(H-HSTAR) ! At t=0  steady conditions
        DHDT=0 : PIO4=3.1415926/4 : U=QV/(PIO4*DPIPE**2) 
        PRINT *,'       T       H       U       Qv'
        PRINT '(5X,56.2,3(F8.2)',T,H,U,QV
        INITIATE JANUS; FOR FLOW; EQUATIONS DHDT/H,DUDT/U;
     *     OF T; STEP DT; TO TC
        DO WHILE (TC.LE.TF)
          TC=TC+TP
          INTEGRATE FLOW; BY JANUS
          PRINT '(5X,56.2,3(F8.2)',T,H,U,QV 
        END DO
      END

      MODEL FLOW
        COMMON QV,DHDT,DUDT,C,T,TC,H,HSTAR,PIO4,U,DCAP,EL,HCAP,FM 
        QV=CAY*(1-T/TF)*SQRT(H-HSTAR) 
        DHDT=(PIO4*DPIPE**2*U-QV)/(PIO4*DCAP**2)
        DUDT=32.174/L*(HCAP-H)-FM*U**2/(2*DPIPE)
      END
`}
</pre>
<a name="IP5:IMPODES" id="IP5:IMPODES"><h4>Illustration Problem No. 5  -  Implicit ODE's</h4></a>

<p>Implicit ODE problems generally appear in two basic forms.   One form 
involves an initial value problem in which derivative variables are 
implicit in the equations.   The other common form is the boundary-value 
problem where one or more initial conditions are unknown.  Both of 
these forms involve the nesting of problems similar to problems 2 
and 3.  This example is one of the first form, where the differential 
equations  are implicit in their algebraic structure, as follows:</p>

<div style={s.marginLeft}>
<img src={ImpdesEq1} height="54" width="389" />
</div>

<div style={s.marginLeft}>
<img src={ImpdesEq2} height="54" width="397" />
</div>

<p>These equations represent a liquid rocket feed system operating with 
damping longitudinal vibration. It is clear that if the derivatives 
of x and y (oxidizer and fuel flow rates) are treated as simple variables, 
the equations reduce to an <i>algebraic</i> implicit system, similar 
to those of problem 4, and these flow-rate variables may be solved 
<i>at any given value of time </i>using a problem structure similar 
to Figure 2-5.   If we regard this part of the problem as a "black 
box", corresponding the the MODEL procedure of problem 2, then we 
may integrate the black box, using a program structure similar to 
Figure 2-7.  Thus the program structure to solve the implicit differential 
equations is a nested combination of the structures of Figures 2-5 
and 2-9, as shown in Figure 2-10. 
XXX below div width: 1259px also  width="40%" height="100%" on img tag below</p>

<div style={s.marginLeft}>

<img src={ImpdesStructure1} height="402" width="600" />
<br />
<b>Figure 2-10 Structure of Implicit Differential Equations</b>
<br />
</div>

<h5>Program:</h5>
<pre>
{`
      PROBLEM IDIFEQ  
        COMMON XDOT,X,YDOT,Y,T
        X=14000 : Y=7000       ! Initial Conditions
        XDOT=-50 : YDOT=-25    ! Initial Rate Guesses
        T=0 : DT=.25 : TP=.5
        INITIATE JANUS; FOR IDEQ; EQUATIONS 
     *    XDOT/X, YDOT/Y; OF T; STEP DT; TO TF;
        PRINT *,'        TIME           XDOT           X   '         
     *         ,'        YDOT              Y'
        TF=TP
        DO WHILE (TF.LE.50)
          INTEGRATE RATES; BY JANUS
          PRINT '(5E15.6)',T,XDOT,X,YDOT,Y
          TF=TF+TP   
        END DO
      END

      MODEL IDEQ   ! Implicit Differential Equations
        COMMON XDOT,X,YDOT,Y,T
        FIND XDOT,YDOT; IN IRATE(GX,GY); BY AJAX(ACON); TO MATCH GX,GY
      END

      MODEL RATES(GX,GY)  ! Implicit Rate Equations
        COMMON XDOT,X,YDOT,Y,T
        GX=XDOT+3.2*SQRT(1-(XDOT+YDOT)*EXP(-T/20)
     ~     *(1.15+57.5/(20000+X+Y)))
     ~     *(1+.1*EXP(-T/10)*SIN(1.5708*T))
        GY=YDOT+1.59*SQRT(1-(XDOT+YDOT)*EXP(-T/20)
     ~     *(1.15+36.2/(20000+X+Y)))         
     ~     *(1+.1*EXP(-T/10)*SIN(1.5708*T))
      END                  

      CONTROLLER ACON(AJAX)
        SUMMARY=0
      END
`}
</pre>

<a name="IP6:BVODES" id="IP6:BVODES"><h4>Illustration Problem 6 - Boundary Value Problem</h4></a>

<p>In the second form of implicit ODE problem, boundary values must be 
satisfied and unknown initial conditions must be found by an iterative 
"shooting" technique.  In this case, referring to Figure 2-11, the 
initial-value problem is treated as a "black box" that "shoots a trajectory" 
and computes implicit constraints for the implicit-equation solver 
(e.g. AJAX).   These constraints are the boundary or "target" conditions, 
and the unknowns to be solved for are the initial conditions.  A variation 
of this kind of problem would involve unknowns that are parameters 
of the differential equations, in addition to or in place of the initial 
conditions.</p>

<p>An object climbs from (0,0) to (2000,1000) in one second, distances 
being in feet.  If equations of motion are:</p>

<div style={s.marginLeft}>
<img src={MotionEquations} height="124" width="145" />
</div>


<p>Find the initial velocity of the trajectory ending at (x(1)=2000, 
y(1)=1000 ).</p>

<div style={s.marginLeft}>
<img src={BvodesStructure1} height="402" width="600" />
<br />
<b>Figure 2-11 Structure of Boundary Value Differential Equations</b>
<br />
</div>

<p>In this process, AJAX makes a calculated guess for the unknown initial 
conditions and then the ODE's are integrated using ISIS to see if 
the algebraic constraints are satisfied; i.e., each iteration involves 
both solutions of ODE's and of algebraic equations.</p>

<p>Since AJAX employs a Newton method, it requires partial derivatives 
of the constraints with respect to the unknowns.  This requires that 
both the models MATCH and CLIMB, and the solver ISIS be "overloaded" 
to perform differential arithmetic.  This enables partial derivatives 
to be propagated through the numerical integration process, producing 
partials of the boundary conditions with respect to the initial conditions.</p> 

<p><b>Program Variables</b></p>

<div style={s.marginLeft}>
<img src={MotionVariables} height="172" width="380" />
</div>

<p><b>Program</b></p>
<pre>
{`
      GLOBAL ALL
      PROBLEM BVODES
        NAMELIST/DATA/DT,TFINAL,DIXO,DIYO
        READ DATA
        FIND DIXO,DIYO IN TRAJECT TO MATCH GX,GY
      END
	  
      MODEL TRAJECT
        T=O : X=O : Y=O : D1X=D1XO : D1Y=D1YO ! Initial conditions
        INITIATE ISIS; FOR CLIMB;
          EQUATIONS D2X/D1X,D1X/X,D2Y/D1Y,D1Y/Y;
          OF T; STEP DT; TO TFINAL
        INTEGRATE CLIMB; BY ISIS
        GX=2000-X
        GY=lOOO-Y
        TERMINATE CLIMB
      END

      MODEL CLIMB
        V=SQRT(D1X**2+D1Y**2)          ! absolute velocity
        ALPHA=ATAN(D1Y/D1X)            ! angle of attack
        D2X=-O.1*SQRT(V)*COS(ALPHA)    ! y-acceleration rate ODE
        D2Y=-32-0.1*SQRT(V)*SIN(ALPHA) ! y-acceleration rate ODE
      END
`}
</pre>

<a name="IP7:UNCONSOP" id="IP7:UNCONSOP"><h4>Illustration Problem No. 7  -  Unconstrained Optimization</h4></a>

<p>Sherwood (Sherwood, T.K., A Course in Process Design, The MIT Press, 
Cambridge, Mass.  1963, pp 85-96) considered the optimum design of 
a gas transmission line.  He obtained the following expression for 
the annual charges:</p>

<div style={s.marginLeft}>
<img src={SherwoodUnconstrainedOptFormula} height="60" width="516" />
</div>

where<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;R = Ratio of pressure at inlet to pressure at outlet<br />
&nbsp;&nbsp;&nbsp;&nbsp;L = Length of section between compressors<br />
&nbsp;&nbsp;&nbsp;&nbsp;D = Diameter<br /><br />

<p>Find R, L and D which minimizes C</p>

<p><i><b>Problem Synthesis:</b></i> There is one equation and three unknowns, 
therefore the system is underdetermined.  In fact all optimization 
problems must be underdetermined systems.  There are two degrees of 
freedom in this optimization problem.  Further examination shows that 
the objective function, C, is a nonlinear function of the independent 
variables R, L and D.</p>

<p>Since there are no restrictions on R, L, D or C, this is a unconstrained 
optimization problem.  It may be checked in table 2 that the proper 
solver to use for this problem is HERA.  Since this is a very simple 
problem, we give the FC code below without further comment.</p>
<pre>
{`
      PROBLEM PIPEDES
        R=2 : EL=100 : D=2
        FIND R,EL,D IN COST(C,R,EL,D); BY HERA; TO MINIMIZE C
      END

      MODEL COST(C,R,EL,D)
        C=8.62E+5*SQRT(EL)*R/(SQRT(R*R-l)*D**O.666667)+450000
     ~    +36900*D+6.57E+6/EL+7.72E+08*(R**O.219)/EL
      END
`}
</pre>	  

<a name="IP8:CONSOPT" id="IP8:CONSOPT"><h4>Illustration Problem No. 8  -  Constrained Optimization</h4></a>

<p>In considering the design of a three-member structural form, the following 
optimization problem has been derived</p>

Minimize<br />

<div style={s.marginLeft}>
<img src={ConsoptObj} height="28" width="130" />
</div>

Subject to<br />

<div style={s.marginLeft}>
<img src={ConsoptC1} height="52" width="196" />
</div>
<div style={s.marginLeft}>
<img src={ConsoptC2} height="52" width="201" />
</div>
<div style={s.marginLeft}>
<img src={ConsoptC3} height="24" width="106" />
</div>
<div style={s.marginLeft}>
<img src={ConsoptC4} height="49" width="188" />
</div>
<div style={s.marginLeft}>
<img src={ConsoptC5} height="41" width="106" />
</div>


<p><i><b>Problem Synthesis:</b></i> There are three unknowns one equation and 
five inequality relationships.  Recalling that inequality relationships 
do not eliminate any degrees of freedom (only equality constraints 
can eliminate degrees of freedom), there are 3 degrees of freedom.  We 
have five constraints, each inequality relationship making one constraint.  The 
problem is similar to the previous one except that now we have constraints 
on the independent variables.  Any of the constrained optimization 
solvers should work. Since THOR is faster than other constrained optimization 
solvers, we will first try THOR.</p>

<p><b>Program:</b></p>
<pre>
{`
      PROBLEM STRUCT
        DIMENSION G(5)
        Xl=2 : X2=3 : X3=3
        FIND Xl,X2,X3; IN VOLUME(Xl,X2,X3,G,V); BY THOR;
     ~    HOLDING G; TO MINIMIZE V
      END
	  
      MODEL VOLUME(Xl,X2,X3,G,V)
        DIMENSION G(S)
        V=240*Xl*X2+240*x3**2
        G(1)=(Xl*X2**2*X3**2+Xl*X2**3)/(10800*X3**4)-0.741
        G(2)=(Xl*X2**2*X3**4+Xl*X2**3)/(10800*X3**4+Xl*X2**3)-0.714
        G(3)=Xl*X2-164
        G(4)=21600*X3/(X3**4+X1*X2**3)+60/X3**2-1.35
        G(S)=Xl/X2-0.5
      END
`}
</pre>

<a name="MCPROC" id="MCPROC"><h2>2.2 Metacalculus Processes</h2></a>

<p>In this section, the language extension (template) statements associated with metacalculus 
processes are discussed.  For those, such as FIND, which have optional forms, 
only the generic aspects are treated.  The specifics are explained 
in subsequent chapters where their applications are described.</p>

<p>A basic metacalculus process is a program structure to solve one of the 
basic holistic problems.  This structure consists of</p>

&nbsp;&nbsp;&nbsp;&nbsp;(a)  Process template statements<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;(b)  A <i>model</i> procedure designated as an operand 
of these statements<br />

&nbsp;&nbsp;&nbsp;&nbsp;(c)  A <i>solver</i> algorithm<br />

&nbsp;&nbsp;&nbsp;&nbsp;(d)  A <i>controller</i> procedure containing solver control variables<br />

<p>The process template statements set up the process by identifying the 
model and the solver and by transferring information and control to 
the solver.  The solver then proceeds to execute the designated model 
as many times as necessary to achieve a solution.  Once the solution 
is reached, the process ends by returning execution control to the 
statement following the last executed template statement.</p>

<p><i><b>Problem Definition</b></i> -  The definition of an holistic problem 
consists of the model procedure containing the formulas of the problem, 
and a specification of the principal variables of the problem.</p>

<p>The principal variables of an holistic problem consist of</p>

<ul><li><i><b>Independent variables</b></i> - variables defining the coordinate 
system in terms of which the model formulas are expressed and whose 
values are to be varied by the solver to find or generate a solution.</li>

<li><i><b>Criteria  variables</b></i> - variables computed via model 
formulas which define the essential functions of the problem and the 
numerical conditions for solution.</li></ul>

<p>The independent variables are input to the model from the solver, 
so that the criteria  variables may be computed from their current 
values in the model.  The values and the derivatives of the criteria 
variables are subsequently used by the solver to vary the independent 
variables and to test for satisfaction of the solution condition. </p>

<p>The <i>unknowns</i> of a metacalculus process are variables computed by 
the solver algorithm whose values are the solution of the problem 
whenever the criteria variables satisfy the solution conditions.  For 
optimization processes, the unknowns are the independent variables. 
For ordinary differential equations, they are dependent variables.</p>

<p>Additional variables may be computed as intermediate or auxiliary 
variables of the process for output purposes or to conveniently store 
the results of intermediate calculations.  From a modeling viewpoint, 
such variables may be important unknowns of the problem; however, 
they are not unknowns in the mathematical sense because they have 
no special significance in the solution process.  (They are not principal 
variables to the solver.)</p>

<div style={s.marginLeft}>
<img src={ModelProc80} height="236" width="627" />
<br /><br />
<b>Figure 2-11 Relstionships of variables to the model</b>
</div>

<p>The independent variables are always input to the model program and 
are not changed within it.  The model output variables are computed 
as functions of the independent variables from the model formulas. 
The unknowns are varied by the solver algorithm and a considered constant 
by the model.</p>

<p><i><b>Solver Procedure</b></i>  -  The functions performed by the solver 
algorithm are:</p>

&nbsp;&nbsp;&nbsp;&nbsp;(a)  Execution of the model program with current values 
of the independent variables;<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;(b)  Testing of the criteria for process termination;<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;(c)  Ending the process if the test succeeds;<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;(d)  Varying the independent variables and computing the 
unknowns;<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;(e)  Repeating from (a);<br />

<p>This procedure is illustrated in Figure 2-12.</p>

<div style={s.marginLeft}>
<img src={SolverProcess60} height="292" width="436" />
<br /><br />
<b>Figure 2-12 Generic Steps of a Metacalculus Solver</b>
</div>

<p>The criteria test determines whether the solution has been achieved 
(i.e., the objective has been optimized, constraints have been satisfied, 
integration limits have been reached, etc.) or whether a process stopping 
condition has been met (e.g., the allowed number of model iterations 
have been reached, a model abort has been executed, etc.).  If neither 
has occurred, then the process continues with variation of the independent 
variables and computation of the unknowns.</p>

<p>The variation of the independent variables is usually accomplished 
with the aid of <i>derivative quantities</i>.  In the case of ordinary 
differential equations, some or all of these derivatives may be computed 
directly from the model formulas and are transmitted as principal 
variables.  Otherwise, the derivative quantities consist of partial 
derivatives, automatically evaluated during model execution under 
control of the solver.  These partial derivatives are not variables 
of the user's program but are stored as internal arrays, in the calculus 
environment.  They may be accessed, however, in the manner described 
in Section 3.2 and 3.3</p>.

<p><i><b>Process Profile</b></i> - The overall structure of a basic metacalculus 
process is illustrated in Figure 2-13.  The upper part of the diagram 
illustrates the portion of the process which is visible in FC language 
syntax.  The lower part illustrates the portion that is hidden in 
the semantics of the language.  The flow of data quantities is represented 
by the large arrows, while the flow of execution control is represented 
by the small dashed arrows.  The five basic steps of the process are 
described as follows:</p>

<div style={s.marginLeft}>
<img src={Gener5step70} height="362" width="608" />
<br /><br />
<b>Figure 2-13 Profile of a Metacalculus Process</b>
</div>


<ol>

<li>The template statements define the problem and pass control 
to the solver.</li><br />

<li>The solver passes control to the model for execution 
with the current values of the independent variables.</li><br />

<li>The criteria test is performed based upon the values 
of the criteria variables returned to the solver from the model.</li><br /> 

<li>If the criteria test passes, the process is exited 
by passing control to the next statement following the last executed 
process statement. In the case of integration processes there are 
three process statements, the first being the INITIATE statement. The 
values of all variables of the model at this point are the final output 
values of the process.</li><br />

<li>Otherwise, the independent variables are varied (usually 
employing derivative quantities obtained from the model), the unknowns 
of the problem are computed, and step two is repeated.</li>
</ol>

<p>As indicated in the figure, the process statements do not execute 
the model directly, but rather execute the solver.  The solver then 
totally controls the execution of the model.  The initial values of 
the independent variables are the values existing at the time the 
first process statement is executed, thus they must be set prior to 
its execution.</p>

<p>A critical link between the problem and the metacalculus process is provided 
by the variables employed in the model equations, whose values and 
(possibly) derivatives are used by the solver.  Hence, not only are 
these variables identified during the initiation stage, they are also 
pre-empted by the process.  This means that, while the process is 
in the execution stage, such variables must be protected against potentially 
destructive usages.  If they are dynamic array elements, the size 
of their arrays may not be altered (via PURGE or ALLOT) while they 
are pre-empted.</p>

<p><i><b>Process Statements</b></i> - There are two distinct kinds of basic 
metacalculus processes:</p>

<ul><li><i>Integration</i> processes in which function points are 
generated step-by-step by varying an independent variable over a prescribed 
interval;
</li>
<li><i>Optimization</i> processes in which independent variables 
are varied in an iterative search procedure to find their respective 
values that satisfy optimization criteria.</li></ul>

<p>Procedural control of integration processes is provided by three operation 
statements:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>INITIATE</b> to define and initialize the process<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;<b>INTEGRATE</b> to perform step-by-step variation and 
point generation<br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>TERMINATE</b> to  release the association of variables, 
model, and solver<br />

<p>Procedural control of optimization processes is provided by a single 
operation statement:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>FIND</b> to define the process and search for the unknown 
values of the independent variables which satisfy specific optimization 
criteria<br />

<a name="INTPROC" id="INTPROC"><h3>2.2.1 Integration Processes</h3></a>

<p>In an integration process, the principal formulas define ordinary 
derivative variables <i>y<sub>i</sub>&acute;,...,y<sub>n</sub>&acute;</i>. 
The results of integration are dependent variable functions <i> 
y<sub>i</sub>,...,y<sub>n</sub> </i> represented as a "table" of point values 
corresponding to discrete, contiguous values of an independent variable 
<i>x</i> over a prescribed interval, from the initial value of <i>x</i> 
to a final value, <i>x<sub>f</sub></i>.  Thus, integration is a process 
of <i>generating</i> solution functions, point by point.  Figure 2-14 illustrates 
the profile of an integration process.
</p>

<div style={s.marginLeft}>
<img src={ODERates5step70} height="398" width="627" />
<br /><br />
<b>Figure 2-14 Integration Process Profile</b>
</div>


<p><i>Integration Statements</i> - The operation statements for an integration 
process have the general form:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>INITIATE</b> <i>solver</i>{this.curlyStart} (<i>controller</i>){this.curlyEnd}
{this.curlyStart}<b>WITH</b> <i>type parameters</i>{this.curlyEnd} <b>FOR</b> <i>model</i><br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>EQUATIONS</b> <i>ode</i>/<i>vars</i> <b>OF</b> 
<i>ind-var</i> <b>STEP</b> <i>delta</i> <b>TO</b> <i>limit</i><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>INTEGRATE</b> <i>model</i> <b>BY</b> <i>solver</i><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>TERMINATE</b> <i>model</i><br />

<p>The order in which these statements are executed is 
as specified; however, they need not appear together but may be dispersed 
in various models and in any structure of program logic.</p>

<p><i>Solver</i> - The solver is simply a short identifying name applied 
to each solution algorithm by FORTRAN CALCULUS.  Examples are ISIS 
for Runge-Kutta integration and JANUS for Adams-Moulton integration.
</p>

<p><i>Controller</i> - The label of a controller procedure may be provided 
in the optional parenthesized phrase if the solver allows controls 
and their default values are unacceptable. (The mechanisms of solver 
control are described in Section 2.2.6).</p>

<p><i>Parameters</i> - The optional WITH clause permits one or more program 
variables to be associated with the solver as some type of parameters.  A 
typical type is FLAG, which provides the solver with a means 
of communicating information to the program which might be useful 
in determining the success or accuracy of a given step. Some solvers 
allow no parameters, while others have several types.  For the latter, 
as many WITH clauses as are needed may be used.</p>

<p><i>Model</i> - The operand of the process is specified by the label 
<i>model</i>, referencing the model procedure associated with the 
differential equations to be solved in the process.</p>

<p><i>Ode</i>/<i>vars</i> - The differential equations are identified 
in the <b>EQUATIONS</b> clause by the <i>ode</i>/<i>vars</i> list, 
having the form</p>

&nbsp;&nbsp;&nbsp;&nbsp;<i>der</i>/<i>var</i>, <i>der</i>/<i>var</i>, ...<br />

<p>where each <i>der/var</i> pair is a pair of arrays of the same size, a pair 
of real scalars (any combination of simple scalars and array elements) 
or each representing derivative(s) and associated dependent variable(s) 
respectively. Arrays may be "full" or "reduced".  A full array is represented 
by the array name.  A reduced array has the form ARRAY[size] where size is the 
number of elements of the array beginning with the first. </p>

<p><b>Example</b></p>

<div style={s.marginLeft}>

<p>In a problem where there are three ODEs, for example</p>

&nbsp;&nbsp;&nbsp;&nbsp;<i>y<sub>1</sub>&acute; = f(x, y<sub>1</sub>, 
y<sub>2</sub>, y<sub>3</sub>, y<sub>1</sub>&acute;, y<sub>2</sub>&acute;, 
y<sub>3</sub>&acute;)</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>y<sub>2</sub>&acute; = g(x, y<sub>1</sub>, 
y<sub>2</sub>, y<sub>3</sub>, y<sub>1</sub>&acute;, y<sub>2</sub>&acute;, 
y<sub>3</sub>&acute;)</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;<i>y<sub>3</sub>&acute; = h(x, y<sub>1</sub>, 
y<sub>2</sub>, y<sub>3</sub>, y<sub>1</sub>&acute;, y<sub>2</sub>&acute;, 
y<sub>3</sub>&acute;)</i><br />

<p>the model could represent the ODE variables by the vectors 
<b>DY</b> and <b>Y</b>, i.e.,</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>DY(1)</b> &equiv; y<sub>1</sub>&acute;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>DY(2)</b> &equiv; y<sub>2</sub>&acute;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>DY(3)</b> &equiv; y<sub>3</sub>&acute;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y(1)</b> &equiv; y<sub>1</sub><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y(2)</b> &equiv; y<sub>2</sub><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y(3)</b> &equiv; y<sub>3</sub><br />
 
<p>In this case, the ode/vars list would simply be <b>DY/Y</b>.</p>

</div>

<p>As an alternative, the scalar form may be used.  In this form, each 
of the variables is a scalar and there is a separate specification 
for each equation, separated by commas.  For example,</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>Y1DOT/Y1,Y2DOT/Y2,...,YNDOT/YN</b>

would be a representative scalar <i>ode/vars</i> list in which <b>Y1DOT</b> 
represents the first derivative of Y1, etc.

<p><b>Example</b></p>

<div style={s.marginLeft}>

<p>The preceding example could have employed a model in which 
the variables were</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>Y1P</b> &equiv; y<sub>1</sub>&acute;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y2P</b> &equiv; y<sub>2</sub>&acute;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y3P</b> &equiv; y<sub>3</sub>&acute;<br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y1</b> &equiv; y<sub>1</sub><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y2</b> &equiv; y<sub>2</sub><br />
&nbsp;&nbsp;&nbsp;&nbsp;<b>Y3</b> &equiv; y<sub>3</sub><br />

<p>In this case, the <i>ode-vars </i> list would specify 
the two equations by</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>Y1P/Y1,  Y2P,Y2,  Y3P/Y3</b><br />

</div>

<p><i>Higher-order Equations</i> - Both the preceding examples illustrate 
the specification of first order equations.  This does not reflect 
a limitation, however.  The specification of higher order equations 
is defined by the successive appearance of the same variable name 
in a derivative position and in a dependent variable position in the 
<i>ode/vars</i> list, as in</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>JERK/ACCEL, ACCEL/VEL, VEL/DIST</b><br />

<p>defining the relationship of high order derivatives to lower order 
derivatives in a single higher order differential equation, i.e.,where
</p>

<p>In this example, if the variables JERK, ACCEL, VEL, and DIST were 
vectors, they must all be of the same dimension, and this dimension 
would correspond to the number of higher order differential equations 
in the simultaneous system.
</p>

<p><i>Ind-var</i> - The independent variable of the process is identified 
by the name ind-var appearing in the <b>OF</b> phrase, These variables 
must be scalar (simple or array elements).</p>

<p><i>Delta</i> - The step internal of the independent variable is 
identified by the variable named delta appearing in the <b>STEP</b> 
phrase.</p>

<p><i>Limit</i> - Finally, the limit of integration is 
identified by the variable named limit in the <b>TO</b> phrase.  In 
the case of some integration solvers.
</p>

<p><b>Examples</b></p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>INITIATE ISIS FOR AERO EQUATIONS DYDX/Y OF X STEP 
DX TO XF</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>INITIATE MERCURY(SETUP) FOR MANYO</b><br />  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>EQUATIONS UDOT/U, U/X, VDOT/V, V/Y OF T STEP DT 
TO TF</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>INITIATE JANUS WITH FLAG V FOR DYNAMIC</b><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>EQUATIONS DXDT/X, DYDT/Y, DZDT/Z OF T STEP DT 
TO TEND</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>INTEGRATE DYNAMIC BY JANUS</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>TERMINATE AERO</b><br />


<p><i>Initiation</i> - The <b>INITIATE</b> statement associates the model 
with the solver and initializes the calculus environment.  This involves 
pre-emption of all variables appearing in the statement, and, for 
some solvers, the activation of differential arithmetic for partial 
derivative evaluation. Finally, the model is executed to initialize 
the derivative variables.  This initialization requires that <u>all 
variables not computed in the model must be set t</u>.  This includes 
all of the dependent variables (<i>vars</i> in the <i>ode/vars</i> 
list). the independent variable, <i>ind-var</i>, the step variable 
<i>delta</i>, and the integration limit variable<i> limit</i>.</p>

<p><i>Integration</i> - The <b>INTEGRATE</b> statement actually performs 
the function generation process.  The function is generated from the 
current value of the independent variable (its value prior to execution 
of the <b>INITIATE</b> statement) to the <i>limit</i> value, i.e., 
the <b>INTEGRATE</b> statement advances the integration process until 
the independent variable equals the <i>limit</i> variable.  The control 
of integration is assumed by the solver, but the model may abort integration 
at any value of the independent variable within the specified interval 
by simply resetting the limit variable to the desired value.  This 
reset value must be at or beyond the current value of the independent 
variable in the direction of integration stepping.
</p>

<p><i>Output Generation</i> - An important distinction of integration 
processes is that they normally generate no output reports except 
for diagnostics (if problems arise).  However, several approaches 
may be used to generate output during integration, depending on the 
solver being used.</p>

<p>One approach is to integrate piecewise by updating the <i>limit</i> 
variable.  A general structure for applying this approach is as follows:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>INITIATE</b> <i>solver</i> <b>FOR</b> <i>model</i><br /> 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>EQUATIONS</b> <i>ode/vars</i>; <b>OF</b>
 <i>ind-var</i> <b>STEP</b> <i>delta</i>; <b>TO</b><i>limit</i> 

&nbsp;&nbsp;&nbsp;&nbsp;<i>limit</i> = 0

&nbsp;&nbsp;&nbsp;&nbsp;<b>DO WHILE</b> (<i>ind-var</i> <b>&le;</b> <i>final</i>)<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>limit</i> = <i>limit</i> + <i>printinc</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>INTEGRATE</b> <i>model</i> <b>BY</b> <i>solver </i><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>(output statement)</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>END DO</b><br /> 

<p>In this approach, a sequence of output subintervals are specified 
by the quantity <i>printinc</i>.  It is not necessary that these subintervals 
be multiples of the step size <i>delta</i>, since the step size is 
automatically adjusted in order to arrive at the <i>limit</i>  value 
of <i>ind-var</i>.  However, the output subintervals should be considerably 
larger than <i>delta</i> in general.
</p>

<p><i><b>Derivative Propagation Through Integration</b></i> - The evaluation 
of partial derivatives of the output of an integration process (dependent 
variable values) with respect to the input of the integration process 
(initial conditions or parameters of the equations) requires that 
partial derivatives be propagated through the integration process.  This 
capability is very important in the solution of boundary value problems 
and optimization problems whose models contain differential equations 
(See Section 6.3.2).</p>

<p>Integration solvers are classified into two groups according to whether 
they propagate or do not propagate derivatives.  Propagating solvers 
are in effect metacalculus MODELs whose real arithmetic is overloaded for differential 
arithmetic. They may be used in any context, whereas non-propagating 
solvers only employ ordinary arithmetic and may not be used in contexts where 
derivative evaluation is active.
</p>

<p>Whenever derivatives are being propagated through integration, the 
results of the integration are unaffected.  The integration process 
merely carries an added computational task to produce by-products 
of integration, namely derivatives of integration output with respect 
to integration input.  For example, the evaluation of the derivative.
</p>

<div style={s.marginLeft}>
<img src={DiffIntegral} height="42" width="122" />
</div>

<p>requires integration of the differential equation</p>

<div style={s.marginLeft}>
<img src={ydotode} height="22" width="86" />
</div>

<p>with respect to t, while evaluating the derivative &part;y/&part;x 
during each step of the integration process.  In this case, the independent 
variable  x  is a parameter of the integration process, which remains 
fixed throughout integration.
</p>

<p>Another common derivative often required in the solution of boundary 
value problems is the derivative of the solution of a higher order 
differential equation with respect to one of its initial conditions, 
i.e. given the equation</p>

<div style={s.marginLeft}>
<img src={yPrimePrimeODE} height="22" width="102" />
</div>

<p>to solve over the interval <i>0 &ge; x &ge; &xi;</i> it may be 
necessary to compute the derivative <i>&part;y(x)/&part;y&acute;(0)</i> 
in order to solve for an unknown initial condition <i>y&acute;(0)</i> 
required to satisfy a known boundary condition <i>y(&xi;)</i>.  This derivative 
may be propagated through the integration for trial values of the 
unknown.</p>

<a name="OPTPROC" id="OPTPROC"><h3>2.2.2 Optimization Processes</h3></a>

<p>In an optimization process, the unknowns to be determined are the 
independent variables of the model.  Optimization involves an iterative 
search to find the point on the model surface that is optimum in some 
sense.  The search process is terminated when the optimum point is 
found or the limiting number of allowed iterations is reached.
</p>

<p>The operation statement for optimization processes is</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>FIND</b> <i>unknowns</i> <b>IN</b> <i>model</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>BY</b> <i>solver</i>{this.curlyStart}<b>(</b><i>controller</i><b>)</b>{this.curlyEnd}<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.curlyStart}<b>WITH</b> <i>type parameters</i>{this.curlyEnd}<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.curlyStart}<b>REPORTING</b> <i>auxiliaries</i>{this.curlyEnd}<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>criteria</i><br />

<p>The elements of this statement which are in common with those of the 
<b>INITIATE</b> statement are identical in meaning, usage and purpose. 
These include the solver, model, controller, and type parameters. The 
objective variable is a scalar (simple or array element. </p> 

<p>The unknowns are a list of independent variables whose values are 
to be determined by the optimization process.  In general, these also 
become the independent variables for the purpose of derivative evaluation.  The 
criteria define constraining conditions and the objective of the process.  For 
example, the criteria may specify equality or inequality constraints 
on the values of the unknowns, and the objective, e.g. to minimize 
some function.</p>


<p><i><b>Lists</b></i> - Whenever lists of variables appear in a FIND statement, 
i.e., the <i>unknowns</i>, <i>parameters</i>, <i>auxiliaries</i>, 
and lists in <i>criteria</i>, such as <i>equality-constraints</i>, 
<i>inequality constraints</i> (below), the elements in the lists may 
be real scalars, array elements, arrays, or array-parts.  When a list 
element is an array the represented list entries encompass all elements 
of the array.  When the list element is an array-part, designated 
by the form </p>

&nbsp;&nbsp;&nbsp;&nbsp;<i>array-name</i> <b>[<i>size</i>]</b><br />

<p>then the entries encompass all elements of the array up to the number 
represented by the <i>size</i> number.</p>

<p>The solution <i>criteria</i> may have any of the following forms</p>

&nbsp;&nbsp;&nbsp;&nbsp;(1) <b>TO MATCH</b> <i>equality-constraints</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;(2) <b>TO MAXIMIZE</b>|<b>MINIMIZE</b> <i>objective</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;(3) <b>MATCHING</b> <i>equality-constraints</i> <b>TO MAXIMIZE</b>|<b>MINIMIZE</b> <i>objective</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;(4) <b>HOLDING</b> <i>inequality-constraints</i> <b>TO MAXIMIZE</b>|<b>MINIMIZE</b> <i>objective</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;(5) <b>MATCHING</b> <i>equality-constraints</i><br />
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>HOLDING</b> <i>inequality-constraints</i><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>TO MAXIMIZE</b>|<b>MINIMIZE</b> <i>objective</i><br />


<p>The order of criteria presented is also the order of difficulty of 
the optimization processes.  Respectively these criteria specify the 
process of solving the following problems:</p>

&nbsp;&nbsp;&nbsp;&nbsp;(1) general systems of algebraic equations (constraint matching)<br />

&nbsp;&nbsp;&nbsp;&nbsp;(2) unconstrained optimization<br />

&nbsp;&nbsp;&nbsp;&nbsp;(3) optimization with equality constraints<br />

&nbsp;&nbsp;&nbsp;&nbsp;(4) optimization with inequality constraints<br />

&nbsp;&nbsp;&nbsp;&nbsp;(5) optimization with both equality constraints and inequality constraints<br />

<p><b>Examples</b></p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;(1) <b>FIND A,B,C BY AJAX IN ALGEBRA TO MATCH G1,G2,G3</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;(2) <b>FIND TIME, SPEED IN TRIALS</b><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>BY JOVE (SETTING) TO MAXIMIZE RANGE</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;(3) <b>FIND RATES IN SPEED BY ZEUS TO MAXIMIZE PROFIT</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;(4) <b>FIND MIXTURES IN BLEND BY THOR WITH FLAG NOTICE</b><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>REPORTING GROUPA,GROUPB,SPILLAGE</b><br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>HOLDING MAXVALS TO MINIMIZE VARIATION</b><br /><br />

&nbsp;&nbsp;&nbsp;&nbsp;(5) <b>FIND LENGTH,HEIGHT,WIDTH IN BOAT BY HERA</b><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WITH BOUNDS LIM WITH SCALES F1,F2,F3</b><br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>REPORTING WASTAGE TO MAXIMIZE SHIPVOL</b><br />

</p>
<p>As in the case of integration processes, all variables in the FIND 
statement are pre-empted by the solver until the process is terminated.  Also 
similarly, successful initiation requires that any variable used by 
the model must be set to its proper initial value before executing 
the FIND statement.</p>

<p>The structures of representative optimization processes are illustrated 
in Figures 2-16, 2-17, and 2-18, showing the processes of solving 
general algebraic equation systems (correlation), unconstrained optimization problems, 
and constrained optimization problems, respectively.</p>

<div style={s.marginLeft}>
<img src={ConstraintModel5step70} height="406" width="640" />
<br />
<b>Figure 2-16 General Algebraic Equations (Contraint Systems) Process Profile</b>
<br /><br />
</div>

<div style={s.marginLeft}>
<img src={UnconstrainedOpt5step70} height="400" width="643" />
<br />
<b>Figure 2-17 Unconstrained Optimization Process Profile</b>
<br /><br />
</div>

<div style={s.marginLeft}>
<img src={ConsOpt5step70} height="393" width="608" />
<br />
<b>Figure 2-18 Constrained Optimization Process Profile</b>
<br /><br />
</div>


<p><i><b>Aborting Optimization</b></i> - The need occasionally arises to terminate 
an optimization process prematurely.  The most common circumstance 
is that a physically unreasonable condition is detected in the model. 
The optimization processes perform a sequence of approximations to 
satisfy the criteria and determine the unknowns, in the course of 
which variables might exceed valid limits.  With care in the specification 
of the process and the construction of the model, this can almost 
always be precluded.  Sometimes however, particularly when the process 
is being used to gain insight concerning the model, there is too little 
information to establish the proper constraints.</p>

<p>When such a condition arises, execution of the statement</p>

&nbsp;&nbsp;&nbsp;&nbsp; <b> @ABORT</b><br />

<p>will force the process to terminate.  This statement may be executed 
anywhere within the model; however it does not halt model execution. 
Rather is signals the solver that it should terminate after completing 
the current iteration, exactly as if a final solution had been achieved.
</p>


<a name="COMPROC" id="COMPROC"><h3>2.2.3 Combined Processes</h3></a>

<p>There are no unique statements for the specification of compound metacalculus 
processes.  Instead, the metacalculus template statements are used in suitable 
combinations.  There are two ways in which this is done; the processes 
may be </p>

<ul><li><i><b>sequential</b></i> - where each process builds upon the solution 
of its predecessor, or</li> 
<li><i><b>nested</b></i> - where each step of a process employs a complete 
solution of a subsidiary process</li></ul>  

<p>The alternatives are illustrated in Figure 2-19. In general, any 
mixture of processes, in sequences or in nests, is allowed.  Those 
for which restrictions apply are identified in their descriptions 
in the subsequent chapters</p>  

<p>Some applications of combined processes are:</p>

&nbsp;&nbsp;&nbsp;&nbsp; (a) Error Propagation Sensitivity Analysis<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Primary Process - Partial Derivative Evaluation<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>INVOKE  ...</b>)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nested Process - Ordinary Differential Equations<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>INITIATE...INTEGRATE</b>)<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; (b) Implicit Differential Equations<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Primary Process - Ordinary Differential Equations<br /> 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>INITIATE...INTEGRATE</b>)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nested Process - General Algebraic Equations<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>FIND ... TO MATCH ...</b>)<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; (c) Boundary Value Problems<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Primary Process - Optimization (Implicit Algebraic Equations)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>FIND ... TO MATCH ...</b>)<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nested Process - Ordinary Differential Equations<br /> 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>INITIATE ... INTEGRATE</b>)<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; (d) Process Identification<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Primary Process - Optimization<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>FIND ... TO MINIMIZE...</b>)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nested Process - Ordinary Differential Equations<br /> 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>INITIATE ... INTEGRATE</b>)<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; (e) Optimal Design and Control Problems (calculus of variations)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Primary Process - Optimization<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>FIND ... TO MAXIMIZE ...</b>)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nested Process - Implicit Algebraic Equations<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>FIND ...TO MATCH...</b>)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sub-nested Process - Ordinary Differential Equations<br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>INITIATE ... INTEGRATE</b>)<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; (f) Multistage Optimization<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Predecessor Process - Optimization<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>FIND...TO MAXIMIZE </b>)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Successor Process - Optimization<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>FIND ... TO MINIMIZE </b>)<br />

<p>Examples of several of these processes are given as application problems 
in later sections.</p>

<p><i><b>Aborting Nested Processes</b></i> - While an individual optimization 
process can be terminated prematurely with an @ABORT statement, this 
may prove inadequate when several are used in a nested combination. 
Simply terminating an inner process might permit an outer one to continue 
on the basis of a spurious solution.  To deal with this circumstance, 
an extended form of the @ABORT statement may be used:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>@ABORTALL</b><br />

<p>Execution of this statement will abort not only the current process 
but also all those in which it is nested, thereby terminating the 
entire combined process.</p>

<a name="MODEL" id="MODEL"><h3>2.2.4 The Process Model </h3></a>

<p>Each metacalculus process operates upon a model of a mathematical or physical 
system, consisting of equations and associated logic.  The model may 
be constructed from any number of MODEL procedures and FUNMODEL functions, 
some of which may themselves contain metacalculus processes.</p>

<p>The main procedure of a process model, i.e., the one referenced in 
an INITIATE or FIND statement, has the following heading
</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>MODEL | FUNMODEL</b> <i>model</i> {this.curlyStart}<b>(</b><i>parameters</i><b>)</b>{this.curlyEnd}<br />

<p>where <i>model</i> is procedure or function name.</p>

<p><b>Examples</b></p>

&nbsp;&nbsp;&nbsp;&nbsp; (1) <b>MODEL EQUILIB</b><br />

&nbsp;&nbsp;&nbsp;&nbsp; (2) <b>MODEL STOCKS</b><br />

&nbsp;&nbsp;&nbsp;&nbsp; (3) <b>MODEL BRIDGE</b><br />

<p>This "main" MODEL procedure provides the name that is associated with 
the process model, but the process model includes:</p>

<ul><li>the MODEL itself, and</li>

<li>all subsidiary MODELS and FUNMODELS which are executed between 
the first statement of the MODEL and the point at which it executes 
an EXIT or END statement.</li></ul>

<p>With this more precise definition, it should be clear that subsidiary 
MODELS may be shared by different process models; indeed this is often 
the case where utility procedures are involved.</p>

When a model includes a metacalculus process, it also includes the model 
for that process, in which case they are said to be MITAG <b>nested</b> DTAG.

<a name="CONTROL" id="CONTROL"><h3>2.2.5 Control Of Metacalculus Processes</h3></a>

<p>Metacalculus processes may be viewed as computational mechanisms, with their 
controls set for "standard" or "normal" operation.  For a broad range 
of problems, these preset controls are sufficient, but where necessary 
may be adjusted for a particular case.</p> 

<p>The controls for any solver are scalar, real values. The values may 
represent on/off switches, or quantities such as convergence tolerances.</p>

<p><i><b>The Controller Procedure</b></i> - In order to modify controls, 
a special type of procedure called a controller must be executed, 
the heading for which is</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>CONTROLLER</b> <i>name</i> <b>(</b><i>solver</i><b>)</b><br />

<p>where <i>name</i> is the name of the controller and <i>solver</i> 
identifies the solver it controls.</p>  

<p><b>Examples</b></p> 

&nbsp;&nbsp;&nbsp;&nbsp; (1) <b>CONTROLLER SETTINGS(THOR)</b><br />

&nbsp;&nbsp;&nbsp;&nbsp; (2) <b>CONTROLLER SWITCH(HERA)</b><br />

<p>The controller procedure is intended to serve only the purpose of 
controlling metacalculus processes, and thus it is subject to several 
restrictions, it is identical in form and usage to any other type 
of block in FC. The restrictions are:</p>

<ul><li>A controller may not be executed like a procedure.  Instead, 
it is invoked as part of a FIND or INITIATE statement</li>

<li>A controller may not have parameters.</li>

<li>There may not be any metacalculus template-statements within a 
controller.</li></ul>

<p>The controls themselves are identified by predefined names within 
the context of the controller. They may be viewed as control variables; 
and in fact, these variables may be used in computations, they may 
be printed, and their values may be input. They should not be confused, 
however, with ordinary REAL variables, since their usages are restricted 
to prevent faulty control of metacalculus process. Internally, control variables 
are members of a common block generated by the FC translator, having 
the name</p>

&nbsp;&nbsp;&nbsp;&nbsp; <b>C</b><i>solver</i><br /> 

<p>where solver is the name of the solver.</p> 

<p><b>Example</b></p>

<p>The solver JANUS employs two error measures in deciding 
whether the integration step gives an acceptable accuracy.  If the 
largest relative error is less than ERRLO, then a larger step would 
suffice; while if any relative error is greater than ERRHI, the step 
must be reduced.  These control variables may be set by the controller</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>CONTROLLER ERRSET(JANUS)</b><br /> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ERRHI = 0.001</b><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ERRLO = ERRHI/1000</b><br />

&nbsp;&nbsp;&nbsp;&nbsp;<b>END</b><br />

<p>Note that JANUS has other controls which will remain at their preset 
values after ERRSET is executed.</p>

<p>The names of the control variables for each solver, and their preset 
values, are given in the detailed descriptions in later chapters.  It 
should be noted that control variables which serve the same purpose 
for different solvers, such as iterative print switches, are given 
identical names.  This creates no ambiguity because the controller 
heading designates which solver is pertinent.</p>

<p><i><b>Control of Optimization Output</b></i> - In general, each optimization 
process may generate two kinds of output reports.</p>

<ul><li>A <i>summary</i> report produced at the end of the process,summarizing 
all of the iterations of the process</li>

<li>A <i>detailed</i> report produced at the end of an iteration, 
describing the mathematical properties of the problem as interpreted 
by the solver, and describing the current action taken by the solver.</li>
</ul>

<p>The summary report is controlled by the control variables, SUMMARY 
and SUMOUT described as follows:</p>

&nbsp;&nbsp;&nbsp;&nbsp;<b>SUMMARY = 1</b>: produce a summary report (default)<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>= 0</b> suppress the summary report<br /><br />                                                

&nbsp;&nbsp;&nbsp;&nbsp;<b>SUMOUT = 0</b>: summary output to DETAILS stream,<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>&gt; 0</b> summary output to 
SUMMARY stream (default),<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>&lt; 0</b> summary output to 
standard output.<br />

<p>The detailed report is controlled by the control variables DETAIL 
and DETOUT, described as follows:</p>

&nbsp;&nbsp;&nbsp;&nbsp; <b>DETAIL = <i>n</i></b>: produce a detailed report at every <b><i>n</i></b>th iteration 
plus first and last<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> = 0</b>: suppress the detailed 
report (default)<br /><br />

&nbsp;&nbsp;&nbsp;&nbsp; <b>DETOUT  = 0</b>: detailed output to DETAILS stream (default),<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> &gt; 0</b>: detailed output to 
SUMMARY stream,<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> &lt; 0</b>: detailed output to 
standard output.<br />

<p><i><b>Flag Variable</b></i> - All optimization solvers have provision for 
definition of a flag variable  identified in the WITH FLAG phrase.  Upon 
completion of the FIND statement operation, the value of the flag 
variable specifies the condition of solution as follows:</p>

&nbsp;&nbsp;&nbsp;&nbsp; <u>value</u>   <u>meaning</u><br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0 &nbsp;&nbsp; : The optimization process converged;<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp; : The optimization process was aborted;<br />

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + &nbsp; : The maximum number of iterations occurred  without 
convergence.<br /><br />

</div>);

}
}


// cut below

