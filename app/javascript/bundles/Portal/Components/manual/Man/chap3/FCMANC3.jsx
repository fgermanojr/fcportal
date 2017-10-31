import PropTypes from 'prop-types';
import React from 'react';

import * as myStyles from '../../../Styles.js';

import GradQ_GradR from '../images/GradQ_GradR.png'
import Hessian_RHO from '../images/Hessian_RHO.png'
// import Partial from '../images/partial.png' // not found, using specific below ??
import modq_vw from '../images/modq_vw.png'
// import PARTIAL_General from '../images/PARTIAL_General.png' MISSING
import PARTIAL2_SPECIFIC from '../images/PARTIAL2_SPECIFIC.png'
import IntegralHessians from '../images/IntegralHessians.png'
import efit154 from '../images/efit154.png'
import efit254 from '../images/efit254.png'
import hfit154 from '../images/hfit154.png'
import hfit254 from '../images/hfit254.png'
import damp54 from '../images/damp54.png'

export default class Chap3 extends React.Component {
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

<h1>3. Elementary Operations & Utilities</h1>

This chapter discusses the basic calculus operations of differentiation 
and integration; operations for dealing with tabular data functions 
including least-squares and Chebychev fitting; array operations of 
linear algebra; and miscellaneous mathematical and internal control 
utilities.

<b><br /><br />Differentiation Operations</b> - Section 3.1 discusses the explicit 
operations for the evaluation and use of derivatives.  In FC this 
evaluation may be directly performed for functions of any form, size, 
and complexity.  The functions, in fact, may involve any numerical 
relationships expressible in FC and may even employ entire programs 
for their representation. 

The values of derivatives, or more generally partial derivatives, 
are computed analytically rather than by a numerical approximation. 
Thus, they are as accurate as any ordinary algebraic calculations, 
subject of course to reasonable constraints of continuity. 

If, for example, the calculation of derivatives with respect to a 
vector T is requested, using FC statements described in this section, 
then the sequence of statements

<br />

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; X = SIN(ALPHA*T)</b>

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; Y = COS(ALPHA*T)</b> 

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; Z = X**2 = Y**2</b> <br /><br />will have two related, but distinct, effects.  Not only will X, Y 
and Z be assigned new values according to the indicated expressions, 
but also their derivatives with respect to T will be simultaneously 
evaluated and saved.  No further specification or statements are needed 
to induce these calculations; and, as the example shows, the relationships 
between X,Y,Z and T may be either direct or indirect. Indeed, there 
is no requirement whatsoever to rephrase any equations to make them 
suitable for the computation of derivatives.

The results of these calculations, both the algebraic values and the 
derivative values, may be printed or used directly in subsequent computations.  In 
fact, many of the calculus processes described in later chapters automatically 
invoke the calculation of derivatives to be employed in their solution 
techniques.

<b><br /><br />Integration Operations </b>- Section 3.2 discusses operations for 
evaluating definite integrals. Definite integrals are evaluated in 
FC by means of built-in functions, having special calling syntax, 
which perform numerical integration of arbitrary integrands.  Integrals 
expressed in this manner may be used in the same way as any function 
in FC. Thus, not only may the values of integrals be computed, but 
also integrals may appear in any algebraic or differential equations.

<b><br /><br />Tabular Data Operations</b> - Section 3.3 discusses various methods 
of dealing with tabular data. The approximation of functions from 
discrete tabular data is a broad topic for which there are many approaches.  Appendix 
A provides guidelines for the various approaches available in FC.  In 
Section 3.3, the focus is on utilities for representing tabular data 
as predictive procedures of computing continuous functions.

<b><br /><br />Linear Algebra Operations</b> - Section 3.4 discusses the syntax 
and use of array operations. Array operations are a convenient shorthand 
for simplifying mathematical system formulations.  FC provides a comprehensive 
set of array operations in a special non-ambiguous syntax.  Array 
operations employ dynamic arrays that may be created and destroyed 
at run-time<br /><br />
<b>Miscellaneous Utilities</b> - Section 3.5 discusses FC utilities 
for special mathematical functions, such as Bessel, Beta, Gamma functions, 
which may be used in either calculus or non-calculus contexts, and 
other utilities providing internal control.

<h2>3.1. Invoking Derivative Evaluation </h2>

<p>The evaluation of partial derivatives is activated by the INVOKE statement</p>

<b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp; INVOKE  GRADIENTS</b>|<b>HESSIANS</b>|<b>ORDER(<i>intvar)</i></b>

<br />

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; ON</b> <i>independents-list</i><b>; IN</b> <i>model</i> 
{this.curlyStart}<b>(<i>parameters</i>){this.curlyEnd}</b>

<br /><br />
Upon executing this statement, control switches to the first statement 
of the designated MODELs or FMODELs and continues from there.  Within 
the MODEL there may be calls upon subsidiary MODELs or FMODELs and 
computations of any complexity.  In this usage, however, the values 
of partial derivatives are calculated during all such execution.  The 
process of derivative evaluation ends if and only if the designated 
MODEL executes RETURN or END statement, thereby resuming normal execution 
immediately following the INVOKE statement. Any MODEL may be executed 
in this manner.

The <i>independents-list</i> specifies the independent variables, 
i.e., the variables with respect to which derivatives are computed.  Any 
scalar variable may be any list of variables including a mix of real 
scalars, real arrays and real array-parts.

In the case of arrays, all included elements of the arrays become 
independent variables and their number depends upon the current size 
of the array.

There is no limit on the number of independent variables.

<b><br /><br />Examples<br /><br /></b>

        (1) <b>INVOKE GRADIENTS ON T,U; IN CALC <br /> <br /></b>(2) <b>INVOKE HESSIANS ON X,Y; IN CEP(THETA,RHO)<br /><br /></b>
        (3) <b>INVOKE GRADIENTS ON V; IN MODULE(1+X,V(1))<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; </b>&nbsp;In this case, if V is a vector with (say) four elements, 
then the independent variables are V(1),V(2),V(3) and V(4).The options GRADIENTS and HESSIANS are used to specify the order of 
derivatives to be computed.  GRADIENTS invoke first partial derivatives 
only, while HESSIANS invoke both first and second partial derivatives.  For 
instance, referring to the first example above, if MODEL CALC contained 
the statements

<b>

        <br /><br />Q = 1 + SQRT(T)**U

     <br />R = A*Q + B*Q**2<br /><br /></b>then the gradient vectors of Q and R with respect to T and U would 
be evaluated for the current values of A, B, Q, R, T and U and stored 
for subsequent use, e.g.,

<div style={s.marginLeft}>
<img src={GradQ_GradR} height="156" width="126" />
</div>

Note that R is a function of T and U only through its dependence upon 
Q.  This illustrates the fact that partial derivative evaluation is 
correctly propagated even when the relationships of dependent to independent 
variables are indirect.

It is important to recognize that it is the current value of the gradient 
vector which is saved, not an algebraic expression for it. When Q 
is re-computed, for example, a new gradient vector is generated, and 
so forth.  The order of values in the vector is defined by the order 
of independent variables in the independents-list.  Referring now 
to the second example, where second partial derivatives are also being 
calculated, if model CEP contains the statement



        <br /><br />&nbsp; &nbsp; RHO = SIN(THETA*X) = COS(THETA*Y)



<br /><br />then both the gradient vector and the Hessian matrix of RHO with respect 
to X and Y are evaluated for the current values of RHO, THETA, X and 
Y and stored for subsequent use.  The Hessian matrix is: 
<div style={s.marginLeft}>
<img src={Hessian_RHO} height="83" width="213" /></div>
<p>As with the gradient vector the order of the values within the Hessian 
matrix is defined by the order of independent variables in the independents-list.</p>
<p>The consequences of activating derivative evaluation are best illustrated 
by the simple example in Figure 3-1, which shows a portion of a FC 
program.  In particular, note that derivative evaluation continues 
where the subsidiary FMODEL BESS is called in statement 6.  Indeed, 
advantage is taken of this in statement 16, where the built-in function 
PARTIAL (see Section 3.1.1) is used in a recurrence relation to generate 
J1(Z).  The example also illustrates a set of equations (in FMODEL 
BESS) which are expressed very concisely in FC and for which derivatives 
can be automatically evaluated without appreciable additional effort.  Yet 
constructing an analytic formulation for these derivatives in a purely 
algebraic language would be a formidable undertaking.</p>

<pre>
<b>
{`
XXXhis may need work with correctness and formating.
PROBLEM ANY:
! Begin computation of problem ANY
! in ordinary mode, i.e. without
X=2
! evaluting derivatives<br />
Y=3

INVOKE GRADIENTS ON X,Y;

~ IN ABLOCK(X,Y)
! Enter Ablock in calculus mode
! Ordinary mode again<br /> : <br />END

MODEL ABLOCK(X,Y)<br />
   Q=Y*BESS(X,Y)
! Compute Q and gradient of Q<br />
   R=(1+Q)**2
! Compute R and gradient of R<br />
END
! Return to ANY in ordinary mode<br /><br />

FMODEL BESS(Z,U)
! Compute a Bessel function
 IF(U.GT.50) THEN         ! Use asymptotic expansion
     BESS=1/SQRT(6.2831252*U)*(E*Z/2*U)*U
 ELSEIF(U.GT.1) THEN         ! Use recursion formula
     BESS=2*(U-1)/Z*BESS(Z,U-1)-BESS(Z,U-2)
 ELSEIF(U.EQ.1) THEN         ! Compute J1 from derivative of J0
     BESS=-PARTIAL(BESS(Z,0),Z)
 ELSEIF(U.EQ.0) THEN         ! Use series expansion for J0
     T=0.25*Z*Z
     BESS=1-T+T*2/4-T**3/36
 ENDIF
END
`}
</b>
</pre>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FIG. 3-1 Example of Derivative Evaluation
<br /><br /><b>Rules Pertaining to Derivative Evaluation</b> - The following rules 
pertain to the direct evaluation of derivatives under control of the 
INVOKE statement:
<br />

<br />(a)  While derivatives are currently being evaluated, 
an INVOKE  statement must not be executed.  This "nesting" provides 
conflicting conditions for derivative evaluation and is detected as 
an execution error.

<br />

<br />(b) The variables specified as independent variables are 
subject to some usage restrictions so that derivative evaluation can 
proceed meaningfully.
<ul>
<li>If they are dynamic array elements, the storage assignment 
for their arrays may not be altered (via ALLOT or PURGE) while they 
remain as independent variables.</li>

<li>Any change in the value of an independent variable after 
it has been declared is accepted but is diagnosed as a possible error.  This 
is because such changes impose discontinuities which may invalidate 
any derivatives which have already been evaluated and stored.</li>
</ul>
<br />(c)  When an INVOKE statement has an argument list, variables 
which are being declared as independent variables may be used as arguments 
and in argument expressions, e.g.,<br /><br />
<b>&nbsp;&nbsp;&nbsp;&nbsp;

          INVOKE HESSIANS ON X,Y; IN DOIT(X,SQRT(Y))

</b>

<br />



<br />Argument expressions, however, are evaluated before the 
variables are declared to be independent and thus do not have any 
associated partial derivatives,

<br />(d)  Derivatives which are evaluated and stored are retained 
only while derivative evaluation is active. Referring to the example 
in Figure 3-1, for instance, when MODEL  ABLOCK  exits to PROBLEM 
ANY in statement 8, derivative evaluation is terminated and all currently 
stored derivatives are purged from memory. An attempt to print or 
calculate with derivatives in ANY would be fruitless and would in 
fact be an error, though not a fatal one.  (by using the built-in 
functions described in Section 3.1.1, derivative values may be assigned 
to ordinary numeric variables, so that this restriction can be eased.)

<br />(e)  A few numeric built-in functions in FC do not propagate 
derivatives, i.e., they are treated as constants when used in expressions.  The 
relevant functions are:

<br />

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; INT   EIGEN  #PARTIAL  #PARTIAL2  SIGN GRAD   HESS   IFCPARS </b>

<h3>3.1.1. Assignment of Derivatives to Variables</h3>

In any procedure in which derivative evaluation is currently active, 
the stored derivative values may be accessed and assigned to variables 
by using the built-in functions PARTIAL, GRADIENT and HESSIAN.  These 
values are ordinary numbers and the variables to which they are assigned 
may be freely used in any manner permitted for numeric variables in 
FC.  (Use of these functions should not be misinterpreted as declaring 
the variables to be the derivatives of other variables.)

As noted previously, when derivative evaluation is not active, there 
are no stored derivative values whatsoever.  Even while it is active, 
however, some variables may have none, either because they have not 
been assigned new values yet or because a constant has been stored 
in them.  In any of these circumstances, if #PARTIAL, GRAD @GRADIENT, 
HESS or @HESSIAN are used to access nonexistent derivatives, they 
return a value (or values) of zero and a diagnostic is issued.

<b>Single Derivative Values  (#PARTIAL, #PARTIAL2)</b>   -  The functions 
#PARTIAL and #PARTIAL2 access and return a single derivative values.  Thus, 
they are scalar real functions.  When a first derivative is required, 
#PARTIAL is used

<div style={s.marginLeft}>
XXX img src=" Partial " height="81" width="291"
</div>

where exp is any numeric expression, including simply a reference 
to a variable, and ind is the name of any current independent variable.



<br />



<br /><b>Example</b>

Consider a program containing the following statement:

<b>
<pre> 
{`
         X = 45
         INVOKE HESSIANS ON X; IN MODQ

         MODEL MODQ
          Q = TAND(X)
          V = #PARTIAL(Q,X)
          W = #PARTIAL((1+Q)**2,X)
         END
`}
</pre>
</b>

After the execution of MODQ is completed, Q would have the value tan 
45<sup>o</sup> = 1, but would no longer have derivatives.  However, V 
and W would contain the derivative values:

<div style={s.marginLeft}>
<img src={modq_vw} height="98" width="158" />
</div>



When a second derivative is required, the function #PARTIAL2

<div style={s.marginLeft}>
XXXXX img src= RARTIAL_General   [XXXXX recreate this eqn set]
</div>

where <i>exp</i> has the same meaning as before, and <i>ind tagMIVtag l</i> 
and <i>ind tagMIVtag 2</i> are the names of any current independent variables.



<br /><b>Example</b>

If the independent variables are X and Y, and Q is dependent upon 
them, then

<div style={s.marginLeft}>
<img src={PARTIAL2_SPECIFIC} height="113" width="205" />
</div>

<b>Gradient and Hessian Array Access</b>  -  The array function GRAD 
accesses and returns the gradient vector of its argument while HESS 
accesses and returns the Hessian matrix of its argument.  Thus, both 
are array functions returning values to dynamic arrays whose general 
usage conforms to the rules for built-in array assignment operations 
given in Section 3.4.  GRAD returns a vector of length equal to the 
number of independent variables; HESS returns a square matrix both 
of whose dimensions are the number of independent variables.

Array assignment statements using these functions take the following 
forms:<br />
<br /><i>&nbsp;&nbsp;&nbsp;&nbsp; &lt;array></i>=<b>GRAD</b>(<i>arg</i>)
<br /><i>&nbsp;&nbsp;&nbsp;&nbsp; &lt;array&gt;</i>=<b>HESS</b>(<i>arg</i>)
<br /><br />where <i>arg</i> is either a scalar variable for which derivatives 
have been previously evaluated or a numeric expression, and <i>array</i> 
has been declared DYNAMIC.  If <i>array</i> has been ALLOTed it must 
be of the exact size as the vector returned by GRAD or the matrix 
returned by HESS, respectively.  If a has not been ALLOTed, however, 
FC will dynamically convert it into an array of the proper size.



<br />



<br /><b>Examples<br /><br /></b>(Assuming that X and Y are independent variables) 
<br /><br />(1)<b> Q=2*X</b>
<br />&nbsp;&nbsp;&nbsp;&nbsp;<b>&lt;GRADQ&gt; = GRAD(Q)</b>
<br /><br />(2)&nbsp;<b>R = X+Y</b>

<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>[HESSR] = HESS(R)</b> 
<br /><br />
(3)<b> &lt;G&gt; = GRAD(2*X)</b>
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> [H] = HESS(X+Y)</b>

<br /> <br /> In this example, G and H would contain the same derivative 
values as GRADQ <br /> 
and HESSR, respectively, fromt he previous  examples. 
<br /><br />(4) <b>C = SQRT(2)</b>
<br />&nbsp;&nbsp;&nbsp;&nbsp;<b>
&lt;E&gt; = GRAD(C)</b> <br /><br />In this example, E would contain two zero values, since 
C is not a function of X or Y, and a warning diagnostic would be issued.

Alternatively, gradients and hessians may be assigned to static arrays 
using the GRADIENT and HESSIAN command calls:

<b>   <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @GRADIENT</b>(<i>array,</i> <i>variable</i>) <br />

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; @HESSIAN</b>(<i>array,</i> <i>variable)</i> <br /><br />where <i>array</i> is the static array in which the gradient vector 
or Hessian matrix will be stored into, and <i>variable </i>is the 
dependent variable whose partials are desired.<br />

<h3>3.1.2. Printing Derivatives</h3>

Whenever derivative evaluation is active, the stored Gradients and 
Hessisans may be printed  via the statements  GRADPRINT, HESSPRINT, 
and PARDPRINT, as follows:

<br />

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; GRADPRINT</b><i>list</i>              

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; HESSPRINT</b><i>list </i>               

<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; PARDPRINT </b> <i>list <br /><br /></i>

where <i>list  </i>is a real variable or expressions<i>.  </i>See 
Section 1.3.4.<br /><br />An example of the computation and printing of derivatives is shown 
in Figures 3-2. and 3-3.  Since the Hessian  is symmetric, only the 
lower triangular partition is shown.  This  program also shows the 
use of the built-in functions PARTIAL, GRAD, and HESS.
<br />
<pre><b>GLOBAL ALL
<br />PROBLEM DERIVS
<br />DYNAMIC G,H<br />X=1 : Y=2 : Z=3
<br />INVOKE HESSIANS ON X,Y,Z; IN PRINTEM
<br />   @VECPRINT(G) : @MATPRINT(H)
<br />END<br />
<br />MODEL PRINTEM
<br />   A=X*Y*Z :&lt;N&gt;B=SQRT(A) : C=EXP(B) :&lt;N&gt;D=10
<br />   E=PARTIAL(A,X) : F=PARTIAL2(C,X,Z)
<br />   &lt;G&gt;=GRAD(A) : [H]=HESS(B)
<br />   PARDPRINT A,B,C,D <br />      GRADPRINT C,B**2
<br />END</b></pre>
<pre><b>
PARTIAL DERIVATIVES FOR .... A = 6.000000E+00
<br />GRADIENT VECTOR ....
     1            2            3
     <br />6.000000E+00 3.000000E+00 2.000000E+00<br />HESSIAN MATRIX .....
     <br />1 0.
     <br />2 3.000000E+00 0.<br />3 2.000000E+00 
1.000000E+00 0.
<br />        1            2            3
<br /><br />PARTIAL DERIVATIVES FOR .... B = 2.449490E+00
<br />GRADIENT VECTOR ....<br />        1            2            3
<br />1.224745E+00 6.123724E-01 4.082483E-01<br />HESSIAN MATRIX .....<br />1 -6.123724E-01
<br />2 3.061862E-01 -1.530931E-01<br />3 2.041241E-01 1.020621E-01 -6.804138E-02<br />          1            2            3
<br /><br />PARTIAL DERIVATIVES FOR .... C = 1.158244E+01<br />HESSIAN MATRIX .....
<br />1 1.028089E+01
<br />2 1.223321E+01 2.570222E+00
<br />3 8.155472E+00 4.077736E+00 1.142321E+00<br />
<br />         1            2            3
<br /><br />PARTIAL DERIVATIVES FOR .... D = 1.000000E+01
<br />NO DERIVATIVES HAVE BEEN COMPUTED FOR THIS VARIABLE<br /><br />PARTIAL DERIVATIVES FOR ... C = 1.158244E+01
<br />GRADIENT VECTOR ....
<br />          1            2            3
<br />1.418553E+01 7.092764E+00 4.728509E+00
<br /><br />PARTIAL DERIVATIVES FOR .... EXPRESSION = 6.000000E+00
<br />GRADIENT VECTOR ....
<br />        1            2            3
<br />6.000000E+00 3.000000E+00 2.000000E+00
<br /><br />VECTOR G
<br />( 1) 6.000000E+00 3.000000E+00 2.000000E+00
<br /><br />MATRIX H<br />          ( 1)         ( 2)          ( 3)
<br />( 1) -6.123724E-01 3.061862E-01 2.041241E-01
<br />( 2) 3.061862E-01 -1.530931E-01 1.020621E-01<br />( 3) 2.041241E-01 1.020621E-01 -6.804138E-02
<br />
</b>
</pre>
<br /><b>Testing for Derivative Evaluation</b> - When the status of derivative 
evaluation is unknown during execution, i.e., where a block is executed 
both with and without derivative evaluation at different times, or 
where the order of derivatives is changed, the current condition may 
be tested by using the integer function

<br />

<br /><b>IFCPARS( )</b> <br /><br />This function has no arguments and returns the values

<br />0    when derivatives are not being evaluated

<br />1    when gradients are being evaluated

<br />2     when gradients and  Hessians are being evaluated

If the functions GRAD or HESS are referenced while derivative evaluation 
is not active, a terminal error ensues.   IFCPARS may be used to prevent 
the terminal error as exemplified by the following code:



<b>         IF(IFCPARS().NE.0) &LT;GRADV&GT;=GRAD(V)</b>

<h2>3.2. Evaluating Definite Integrals</h2>

The definite integral of an arbitrary function may be evaluated numerically 
using built-in functions.  There are presently six functions in FC 
for the calculation of definite integrals.  Each has a specific domain 
of application and the following brief overview is intended to highlight 
their distinctions and to show how they may be exploited effectively.<br /><br />
<table>
<tbody>
<tr><td style={s.width151}><strong>FUNCTION</strong></td><td style={s.width341}>
  <strong>QUADRATURE TYPE</strong></td>
  <td style={s.width151}><strong>ADAPTIVE</strong></td><td><strong>AUTOMATIC 
  </strong> </td></tr>
<tr><td style={s.width151}>$INTEGGL</td><td style={s.width341}>Gauss-Legendre (orders 2,4,6,8,10)</td>
  <td style={s.width151}>no</td><td>no</td></tr>
<tr><td style={s.width151}>$INTEGRO</td><td style={s.width341}>Modified Romberg</td>
  <td style={s.width151}>no</td><td>yes </td></tr>
<tr><td style={s.width151}>$INTEGSI</td><td style={s.width341}>Simpsons's rule</td>
  <td style={s.width151}>yes</td><td>yes</td></tr> 
<tr><td style={s.width151}>$INTEGNC</td><td style={s.width341}>Newton Cotes (order 10)</td>
  <td style={s.width151}>yes</td><td>yes</td></tr> 
<tr><td style={s.width151}>$INTEG2S</td><td style={s.width341}>2-Dimensional Simpson's rule</td>
  <td style={s.width151}>no</td><td>yes</td></tr> 
<tr><td style={s.width151}>$INTEGMU</td><td style={s.width341}>2-5 Dimensional Midpoint rule</td>
  <td style={s.width151}>no</td><td>yes</td></tr>
<tr><td></td></tr>
</tbody>
</table>
<i><br />Adaptive integrators</i> choose the points at which to sample the 
integrand according to its functional characteristic.  In general, 
this is better than a predetermined sampling, but it can be slower 
for well-behaved integrands.

<i><br /><br />Automatic integrators</i> employ an iterative scheme to give a 
result to a prescribed accuracy, usually involving successive segmentation 
of the integration interval.  They are almost invariably superior 
for general applications.  The main advantage of a non-automatic integrator 
is that the number of sample points is fixed so that it may be used 
in cases where efficiency is crucial.  An example is multiple integration 
where the limits are variable.  Some confirmation of the accuracy 
of the results is recommended when using $INTEGGL.

<br /><br />None of these functions may be self nested, i.e. they cannot be used 
recursively to calculate multi-dimensional integrals.  As noted later, 
however, they may be used in combination for this purpose.

All functions propagate the evaluation of partial derivatives, if 
required, and may therefore be used in calculus models, e.g. during 
optimization, etc.

<b><br /><br />General Usage</b> - The general approach for calculating definite 
integrals is as follows.  The program must contain an FMODEL (function) 
subprogram which returns a value of the integrand given a value of 
the integration variable as its argument.  For example, if the integrand 
is SQRT(X) where X is the integration variable, the FMODEL subprogram 
would be written as follows:

<b>
<br /><br /> FMODEL INGRND(XVALUE)   
<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; INGRND=SQRT(XVALUE)   
<br /> END </b>
<br /><br />Note that the argument is not a variable and may not be altered by 
the function.  It simply represents a value of X for which the integrand 
must be evaluated.  The quadrature function will call this integrand 
function repeatedly, supplying different argument values.  For INTEGGL, 
the number of calls equals the order selected.  For the other integrators, 
the number of calls is unpredictable.

<br /><br />This integrand is supplied to the integrator as its first argument.  For 
example,

<b>

         <br /><br />RESULT=$INTEGGL(INGRND,A,B,ORDER) </b>.



<br /><br />The additional arguments differ according to the particular integrator, 
but they always include the values of the lower and upper integration 
limits.

In the case of a multiple integral, the integrand function must have 
as many arguments as there are integrals, each being associated with 
the integrals in left-to-right order.  Thus, a double integral over 
X and Y of X*Y would have the integrand function:<br /><br /><b>

         FMODEL TWO(XX,YY) 

<br />           TWO=XX*YY 
<br /> END
</b>
<br />
<br />
<b>Calling the Quadrature Functions</b>- The four general purpose 
single quadrature functions are called as follows:
<br /><br /><i>val</i>=<b>$INTEGGL</b>(<i>fun,a, b,  order)</i> 
<br /><br /><i>val</i>=<b>$INTEGRO</b>(<i>fun,a,b,eps)</i> 
<br /><br /><i>val</i>=<b>$INTEGSI</b>(<i>fun,a,b,eps)</i> 
<br /><br /><i>val</i>=<b>$INTEGNC</b>(<i>fun,a,b,eps,qlim,flag)</i> 
<br /><br />where <i>fun</i>  is the integrand function; <i>a</i> is  the lower 
limit of integration; <i>b </i>is the upperlimit of integration; <i>order</i> 
is the Gauss-Legendre order (2,4,6,8,10); <i>eps</i> is the accuracy 
desired;<i> qlim</i> is the minimum quadrature subinterval, as a fraction 
of ABS(<i>a-b</i>) and <i>flag</i> is a signal variable denoting success 
(=0) or failure (=1) , to meat the eps accuracy.<br /><br />Upon failure, the result 
is zero .Failure usually 
means that the quadrature subinterval required to meet the <i>eps</i> 
accuracy was smaller than <i>qlim</i>.  In this case, reducing <i>qlim</i> 
sufficiently will often result in success.> (=1) to meet the <i>eps</i> 
accuracy.<br /><br />The two multiple quadrature functions may only be used when the limits 
of integration are constants.  Double integration is performed by 
INTEG2S as follows:

 <i><br /><br />val</i>=<b>$INTEG2S</b>(<i>fun,ax,bx,ay,by,ratio,eps</i>)
 
 <br /><br />where: <i>fun</i> is as previously (but the function has two arguments); 
<i>ax, bx</i>  are the integration limits for the <i>x</i> variable 
(outer integral); <i>ay, by</i>  are the  integration limits for the 
<i>y</i> variable (inner integral); <i>ratio</i> is the ratio of the 
<i>x</i>-step to the <i>y</i>-step to accommodate different function 
properties along each coordinate; <i>eps</i> is as previously.

Multiple integration of up to order 5 may be performed by

 <i><br /><br />val</i>=$<b>INTEGMU</b>(<i>fun,qnum,a,b,eps,exlim,err,flag)</i>
 <br /><br />where <i>fun</i> is as previously (but the function must have <i>qnum</i> 
arguments) <i>qnum</i> is the number of integrals (2,3,4,5); <i>a</i>  is 
a vector of lower limits (<i>a</i>(1) is the lower limit of the                  first 
or outermost integral, etc.);<i> b  </i>is a vector of corresponding 
upper limits;  <i>eps</i>  is as previously; <i>exlim</i> is the extrapolation 
limit used to control excessive computation;                  the 
maximum number of integrand evaluations will be the sum over <i>qnum</i> 
of <i>exlim</i><sup>**</sup><i>qnum</i>;  <i>exlim</i> must be positive and 
should not  be larger than 10;<i> err</i> is the computed error estimate 
(conservative);<i>flag</i>  is the output signal variable, =0 on 
success, =1 on failure to satisfy <i>eps</i>, =-1 on invalid input 
arguments.

<b><br /><br />Choosing a Method</b>

<br /><br />(1) <i>Single Integrals</i> 

<br />            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Simple integrands:      <b>&nbsp;&nbsp;&nbsp; $INTEGGL</b> or <b>$INTEGR</b>

<br />            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Discontinuities:        <b>&nbsp;&nbsp;&nbsp; $INTEGSI</b> 

<br />            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            General integrands:     <b>&nbsp;&nbsp;&nbsp; $INTEGNC</b>

<br /><br />(2) <i>Multiple integrands</i> 

<br />            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Constant limits, order 2:       <b>&nbsp;&nbsp;&nbsp; $INTEG2S</b> 


<br />            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Constant limits, order 3-5:     <b>&nbsp;&nbsp;&nbsp; $INTEGMU</b> 


<br />            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Variable limits, order 2:       <b>&nbsp;&nbsp;&nbsp; $INTEGGL</b> 
nested within <b>$INTEGSI</b>

<br /><br />Examples
<br />
<pre>
(1) A simple integral of X**1.5 over limits (0,1), 
       accuracy required is 1.0E-06:
<b>
         PROBLEM SIMPLE
           VAL=$INTEGNC(INTEG1,0.0,1.0,1.0E-6,0.1,FLAG)
           PRINT *,' CALCULATED VALUE =',VAL,
          ^        ' WITH ERROR ',ABS(VAL-0.4)
         END

         FMODEL INTEG1(X)
           INTEG1=X**1.5 
         END
</b>
Results:

         CALCULATED VALUE =  4.0000003E-01 WITH ERROR 2.8542E-08

(2) An improper integral, interval is (0,1), function is 1/SQRT(X), 
value is 2.0,  accuracy required is 1.0E-3.

         <strong>PROBLEM IMPROP
           VAL=$INTEGSI(FUN,0.0,1.0,1.0E-3)
           PRINT *,' CALCULATED VALUE =',VAL,
          ^        ' WITH ERROR ',ABS(VAL-2)
         END

         FMODEL FUN(X)
           IF(X.EQ.0.0) RETURN   ! EXCLUDE SINGULARITY
           FUN=1/SQRT(X)
         END
</strong>
Results:

         CALCULATED VALUE =  2.0000102E+00 WITH ERROR 1.0168E-05

(3) A triple integral with constant limits, intervals are (-1,1),(-1,1),(-1,1), 
function is 1/(4+X+Y+Z), value is 2.1521428, accuracy required is 
1.0E-4

        <strong>PROBLEM THREE
          DIMENSION A(3),B(3)
          DATA A,B/-1,-1,-1,1,1,1/
          VAL=$INTEGMU(FUN,3,A,B,1.OE-4,6,ERR,FLAG)
          PRINT *,' CALCULATED VALUE ',VAL,
         ^        ' WITH ERROR ',ABS(VAL-2.1521428)
          PRINT *,'ESTIMATED ERROR ',ERR,' SIGNAL ',FLAG
        END

        FMODEL FUN(X,Y,Z)
          FUN=1/(4+X+Y+Z)
        END
</strong>
Results:

         CALCULATED VALUE 2.1521360E+00 WITH ERROR 6.7929E-06

         ESTIMATED ERROR 3.1617E-05 SIGNAL 0.0

(4) A double integral with variable limits, intervals are (1,2),(0,1/X), 
function is EXP(X*Y), value is 1.1910222 , accuracy required is 1.0E-3

       <strong> PROBLEM DOUBLE
           VAL=$INTEGSI(FX,1,2,0.001)

        PRINT *,'CALCULATED VALUE ',VAL,
       ^   'WITH ERROR ',ABS(VAL-1.19010222)
        END

        FMODEL FX(XX)
          COMMON /X/X
          X=FX
          FX=$INTEGGL(FY,0,1/X,4)
        END

        FMODEL FY(YY)
          COMMON /X/X
          FY=EXP(X*YY)
        END</strong>

Results:

         CALCULATED VALUE 1.1910232E+00 WITH ERROR 6.3171E-07

</pre>


<b>Integrals of Derivative Functions</b> - The integrand function 
may include derivatives if the necessary steps are taken to activate 
their evaluation.  There are two alternative procedures as desribed 
below.

In the first procedure, illustrated by the following example, derivative 
evaluation, which is presumed not to be in progress, is activated 
within the integrand function.

In this example, the interval is (T1,T2) , the function is T+1/4-1/(T+1)+1/(T+1)**2.         Compute 
Y= integral from T1 to T2 of 1/T (dF/dT) dT
<pre>
<b>
          PROBLEM DERINT
            Y=INTEGGL(FUN,T1,T2,ORDER)
            PRINT *,'RESULT ',Y
          END

          FMODEL FUN(PARAM)
            T=PARAM
            INVOKE GRADIENTS ON T; IN CALC(V,T)
            FUN=V
          END

          MODEL CALC(V,T)
            F=T+0.25-1/(T+1)*(1-1/(T+1))
            V=PARTIAL(F,T)/T
          END
</b>
</pre>

Note that the integration parameter itself (PARAM in the above example) 
<b>may not be specified as the independent variable</b> since it is 
actually only a dummy parameter representing a set of values at which 
the integrand must be evaluated.

In the second procedure, derivative evaluation is presumed to already 
be active.

Given the function f(x,y,z,t) = xyz  wherex = sinh(Ct), y = Ae<sup>-Bt</sup>,
  z = D/t<sup>2</sup>,        compute the integral:<br />

<div style={s.marginLeft}>
<img src={IntegralHessians} height="69" width="199" />
</div>
<pre>


             :
          INVOKE HESSIANS ON X,Y,Z; IN CONTXT(X,Y,Z)
             :
             :
          MODEL CONTXT(X,Y,Z)
            Q=INTEGGL(FUN,O,W,ORDER)
          END

          FMODEL FUN(T)
            COMMON/CONSTS/C,A,B,D
            X=SINH(C*T)
            Y=A*EXP(-B*T)
            Z=D/T**2
            F=X*Y*Z
            FUN=PARTIAL2(F,X,X)+PARTIAL2(F,Y,Y)+PARTIAL2(F,Z,Z)
          END

</pre>

This example illustrates a case in which, quite correctly, independent variables 
are set to new values while derivative evaluation is active. This is valid here 
because no previously evaluated derivatives (which would be compromised) are 
used in the calculations. As was noted earlier, FC will nevertheless issue a 
warning diagnostic. Since it is known in advance that this will occur and that 
the warning is irrelevant, it should be suppressed in advance by a call to 
NODIAG (See Section 3.5). 

<h2>3.3. Dealing With Tabular Functions</h2>

There are two kinds of functional relationships encountered in analysis, 
continuous functions and discrete tabular fuctions.  The preceding 
discussions concerning derivatives and integrals assumed that all 
variables can be represented in equations by continuous functions.

<br /><br />In order to apply calculus operations to tabular functions, therefore, 
they must be transformed into a continuous form.  The basic approach 
is to fit a polynomial to the data and then to use the polynomial 
as an approximation of the function.  FC offers several techniques 
for accomplishing this.  Each is described in the following, together 
with some guidelines concerning which method should be chosen in a 
particular case.  Before considering either, however, a note of caution 
is in order.  Using a polynomial approximation is entirely appropriate 
for definite integration, which is a "smoothing" process.  In fact, 
no matter how the integrand is represented, almost all techniques 
for numerical integration ultimately resort to some form of polynomial 
approximation.  For derivatives, however, quite the contrary is true.  Typically 
derivatives obtained by any numerical approximation should be used 
cautiously since, depending upon the method employed, they often exhibit 
either discontinuities or excursions at some portions of the fit.  For 
some applications, fortunately, inaccurate derivatives do not severely 
compromise the results.  When this approach is taken in a calculus 
models, the only negative impact is slower convergence.

<h3>3.3.1. Polynomial Regression (POLYREG)</h3>

The first technique, and the one which is preferable if the data are 
suitable, is to fit a single polynomial to the entire table.  When 
this is possible, the function can be guaranteed to have continuous 
derivatives.<br /><br />A polynomial of any degree may be fitted to a data table by a call 
upon the FC utility POLYREG.  This utility is invoked by the following 
command-call:

   <b><br /><br />@POLYREG</b>(<i>n,x,y,l,h,f,a,b,s</i>)
   <br /><br />where <i>n</i>  is the number of x,y pairs to be fitted (&ge;2);<i> 
x</i>  is the vector of fixed known values; <i>y </i>is the vector 
of observed values corresponding to each <i>x</i> ; <i>l</i> 
is the lowest order of acceptable fit;  <i>h</i> is the highest 
order of acceptable fit; <i> f</i> is the actual order of fit;        <i>a</i> 
is the constant term in the polynomial;  <i>b</i>  is  the vector 
of polynomial coefficients;        <i>s</i> is the standard deviation 
of the regression.

If <i>h </i>&le;<i> l</i>, a polynomial of order <i>l </i>is 
fitted.   If <i>h </i>&gt;<i> l</i>, then POLYREG determines an optimal 
fit in the range<i> l</i> &le; f &le; h, i.e., the 
fit which minimizes <i>s</i>.  Note that a higher order fit may not 
be superior to a lower order because of reduction in the degrees of 
freedom and numerical errors in the computations.  The order of fit 
must be less than <i>n</i>, and for best results should be significantly 
less.

The result of a call to POLYREG is a set of coefficients (a b) such 
that

<br />

<br /><i> y* = a + b<sub>1</sub> x +b<sub>2</sub> x<sup>2</sup> + 
... + b<sub>f</sub> x<sup>f</sup><br /><br /></i>with <i>y*</i> giving a minimum variance estimate for <i>y</i>.

<br /><br />In using POLYREG, <i>x</i> and <i>y</i> must be dimensioned (or allotted) 
for at least <i>n</i> values and <i>b</i> must be dimensioned (or 
allotted) space for at least <i>f </i>values.  One major advantage 
of POLYREG is that, upon option, it will calculate an optimal fit, 
i.e., it will determine the degree of the polynomial which best fits 
the data in a minimum variance sense.

Once POLYREG has been called to calculate the polynomial, a tabular 
function may be refernced as a continuous one.



<br />



<br /><b>Example</b> <br />Assume that a polynomial has been fitted to a table of (x,y) pairs 
and that POLYREG has determined the coefficients (a,b) and the polynomial 
degree n such that

<br />

<br /><i> y = a + b<sub>1</sub>x + b<sub>2</sub>x<sup>2</sup> + b<sub>n</sub>x<sup>n</sup></i> <br />
<br />approximates the tabular relationships between <i>x</i> and <i>y</i>. 
Then a FMODEL may be defined to compute a value of this polynomial 
by
<br /><br />
<pre>

         FMODEL POLY(A,B,N,X)
             SUM=A 
           DO 10 I=1,N 
              SUM=SUM+B(I)*X**I 
      10    CONTINUE 
         END
         
</pre>


and the approximate relationship may be simply expressed by



           <br /><br />Y=POLY(A,B,N,X)



<br /><br />In selecting POLYREG to convert a discrete function into a continuous 
function, the following considerations are relevant:<br /><br />

<li>The data must truly represent a relationsip which can be 
approximated  by some polynomial, and preferably one of relatively 
low degree.  High order polynomial fits are subject to severe roundoff 
error.</li>

<li>There must be adequate data to support a fit.  Tables with 
as few values as the one given in the beginning of this subsection 
are conducive only for quadratic or cubic fits at best, and this may 
be an inadequate approximation.</li>
<li>A poor fit may result from clustered data, since POLYREG 
assumes a uniform weighting in computing the variance.  Where this 
might occur, one solution is to input some data values more than once 
in order to increase the weights assigned to them.</li>

<h3>3.3.2. Table Interpolation (TABLES and LOOKUP) </h3>

The second technique of dealing with discrete functions is a variation 
of the first.  Rather than trying to find a single polynomial which 
matches the entire table, a separate polynomial is generated in the 
vicinity of the value of interest.  Thus, each time a value of Y is 
required for some value of X, a local polynomial fit is generated 
and immediately used.  Over the whole table, this amounts to performing 
a sliding polynomial fit.

Tables are prepared for interpolation by a command-call to the utility 
TABLE, if only one table is involved, or to TABLES if multiple tables 
are involved:

<br />

<br />   <b>@TABLE</b>(<i>n,x,y,d,p</i>)

<br />   <b>@TABLES</b>(<i>n,x,y,d,p,old,which</i>) 
<br /><br />where  <i>n</i> is the number of x,y data pairs; <i>x</i>  is the 
vector of unique data values (monotonically increasing);<i>  y</i> is the vector 
of observed values corresponding to each x. [If x and y are dynamic arrays, 
after a call to TABLE or TABLES they may be purged or reused without affecting 
the table. This is particularly desirable when there are several large data 
tables]; <i><br /><br />d</i> is the desired degree of 
interpolation polynomial (0&lt;<i>d</i>&lt;<i>p</i>)]; [The best 
results are usually obtained with quadratic or cubic interpolation 
using four to six points.  However, irregular tables with both dispersed 
and clustered data may require linear interpolation.]<br /><br /><b>p</b> is the number of table points to be used in constructing 
the interpolation polynomial (1 &lt; <i>p</i>
<b>n</b>)<i>; <br />old</i> is the old table location if the call is a table update [This argument 
should be zero, except when the contents of an existing table are 
to be changed or the interpolation controls modified, then simply 
reissue the call to TABLES as @TABLES(n,x,y,d,p,loc,loc) to identify 
that it is an old table being changed rather than a new one being 
added.] ;<br /><i><br />which</i> is the  table location, a table reference 
location returned as a table identifier; 
Following the initialization call, a value is extracted from the table 
by a call to the  function LOOKUP for a single table, or the function 
LOOKUPS for multiple tables:


<br /><br /><i>yval</i> = <b>#LOOKUP</b>(<i>xval</i>)
<br /><br /><i>yval</i> = <b>#LOOKUPS</b>(<i>xval</i>, 
which)<br /><br />where <i>xval</i> is a numeric expression with a value within the 
range of the <i>x</i> values in the table. The functional relationship 
represented by the table is fixed when TABLE or TABLES is called.  Any 
change in the table or in the values of <i>d</i> or <i>p</i> will 
not affect LOOKUP or LOOKUPS unless a new call to TABLE or TABLES  is  issued.]

If<i> xval</i> is outside of the range of the table, a warning 
diagnostic is issued and the <i>yval</i> returned is the value of 
the closest end point and, if derivative evaluation is active, the 
resulting derivatives are set to zero.

Once TABLE or TABLES has been called to define the interpolation procedure, 
the built-in functions LOOKUP and LOOKUPS may be used in the same 
way as the user function POLY in the preceding example.

While this technique is somewhat simpler than the first, it suffers 
from the limitation that derivatives of y with respect to x may not 
be continuous.  On the other hand, the fit may be adjusted to the 
characteristics of different portions of the data.  
<b>It also cannot 
be applied to extrapolations beyond the table</b>, as is possible with 
the polynomial regression.  This distinction is less significant than 
it might appear, since extrapolation should be attempted very cautiously 
in any case.



<br />

<br /><b>Example<br /><br /></b>If a function of one variable is represented by the following table<br /><br />
<table>
<tbody>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px', textDecoration: 'underline'}}><strong>x</strong></td>
    <td style={{width: '80px', textDecoration: 'underline'}}><strong>f(x) </strong> </td>
  </tr>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px'}}>10</td>
    <td style={{width: '80px'}}>138.42 </td>
  </tr>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px'}}>20</td>
    <td style={{width: '80px'}}>34.605 </td>
  </tr>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px'}}>30</td>
    <td style={{width: '80px'}}>15.38 </td>
  </tr>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px'}}>40</td>
    <td style={{width: '80px'}}>8.651 </td>
  </tr>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px'}}>60</td>
    <td style={{width: '80px'}}>3.847 </td>
  </tr>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px'}}>90</td>
    <td style={{width: '80px'}}>1.721</td>
  </tr>
  <tr>
    <td style={{width: '135px'}}></td>
    <td style={{width: '71px'}}>130</td>
    <td style={{width: '80px'}}>0.873</td>
  </tr>
  </tbody>
</table>


<br />Then the integral from 25 to 110 of  f(x)dx may be computed by the 
following statements:<br />
<pre><b>
{`
          DIMENSION XTAB(7),YTAB(7)

          DATA XTAB/10,20,30,40,60,90,130/
          DATA YTAB/138.42,34.605,15.38,8.651,3.847,1.721,0.873/
          @TABLE(7,XTAB,YTAB,3,5)
          Y=INTEGGL(FUN,25,110,2)

 </b>where the integrand is given by<b>

          FMODEL FUN(X)
             FUN=#LOOKUP(X)
          END
`}
</b>
</pre>


<h3>3.3.2. General Least Squares Data Fitting (FITxxx)</h3>

The built-in procedure FIT with its various entry points (FIT, FITB, 
FITT, FITBT, FITW, FITBW, FITTW, and FITBTW) provides for a variety 
of least squares data fitting applications, which may be generally 
expressed as follows.  

Given a function f(x) defined by a set of discrete values on the interval 
(a,b) of (f(x)-g(x))**2 is a minimum.  The most common application 
is to fit a curve to a set of measurements.  However, another use 
is to construct an alternate functional representation, such as a 
Fourier expansion of a cyclic function. A related procedure, SFIT, 
extends these capabilities to multivariable approximation, e.g. surface 
fitting.

The approximation function is restricted to the following form:

<br />

<br /> G(X) = SUM OVER I OF C(I)*BASE(I,X)  [I=1,2,...,n]

<br /><br />where the basis functions, BASE(I,X), are any arbitrary functions 
of X and the C(I) are coefficients to be determined.  With this definition 
in mind, the FITxxx entries can solve either of two generalizations 
of the least-squares problem: <br />

<br />(1) Find the N coefficients C(I) such that the integral 
over [a,b] of

<br />
<br />
<table style={{width: '76%'}}>
<tbody>
  <tr>
    <td style={{width: '222px'}}></td>
    <td colSpan="2">W(X)*(F(X)-T(X)*G(X))**2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is a minimum, where </td>
  </tr>
  <tr>
    <td style={{width: '222px'}}></td>
    <td style={{width: '332px'}}>F(X) = </td>
    <td style={{width: '384px'}}>The function to be approximated, defined by at 
    lease N discrete values on the interval [a,b]</td>
  </tr>
  <tr>
    <td style={{width: '222px'}}></td>
    <td style={{width: '332px'}}>G(X) = </td>
    <td style={{width: '384px'}}>The approximation function specified above </td>
  </tr>
  <tr>
    <td style={{width: '222px'}}></td>
    <td style={{width: '332px'}}>W(X) =</td>
    <td style={{width: '384px'}}>An error weighting function </td>
  </tr>
  <tr>
    <td style={{width: '222px'}}></td>
    <td style={{width: '332px'}}>T(X) =</td>
    <td style={{width: '384px'}}>A trend function</td>
  </tr>
  </tbody>
</table>

<br />(2) Find the least number of coeficients C(I) such that 
the above error
    integral has a specified upper bound.

<br />
<br /><b>The Basis Functions</b> <br />TheThere is no limit, other than the usual memory and speed constraints, 
on the number and complexity of the basis functions. They may be polynomials, 
sines, exponentials, etc.  If no specific basis is supplied, the powers 
of x are used, i.e.,

<br /><br />&nbsp;&nbsp;&nbsp; BASE(I,X) = X**(I-1)  .

<br /><br />Thus the default approximation function is simply a polynomial in 
X.  

The restriction of the approximation function to a linear combination 
of the basis functions may sometimes be relaxed by a logarithmic transformation.  For 
example, to approximate F(X) by G(X)=A*EXP(B*X), solve the transformed 
problem of fitting LOG(F(X)) with H(X)=C+D*X.  Then the desired coefficients 
are given by A=EXP(C) and B=D.

<br /><br />Although a constant basis function is allowed, no basis function may 
be uniformly zero for all values of the independent variable. Failure 
to satisfy this constraint will produce indeterminate results.<br /><br /><b>The Weight Function</b><br />The need for weighted least squares approximation occurs more often 
than may be supposed.  For example, the data being approximated may 
not have uniform measurement effors, in which case each measurement 
should be weighted inversely by its estimated systematic error.  The 
usual measure is the standard deviation.  A special case arises when 
the error is proportional to the measurement itself, i.e., when there 
is a uniform percentage error.  The appropriate weighting function 
is then the inverse square of the measurement.

Another circumstance which is less frequently recognized arises when 
the data are poorly distributed over the approximation interval.  The 
least-squares norm is a global criterion, i.e., it says nothing about 
the approximation at any specific point but rather determines one 
which gives a "best" overall fit.  When there are many measurements 
in one portion of the interval in comparison to another, the dense 
segment will be assigned a far greater significance, and the approximation 
might be very poor in the sparse region.  Yet the distribution of 
data may represent nothing more than an idiosyncrasy of the data acquisition 
method. To counterbalance this bias, the sparse data may be assigned 
relatively heavy weights.

In the normal (default) case, the entries (FIT, FITB, FITT, FITBT) 
use uniform weighting, i.e. W(X)=1.0.  Another standard option is 
inverse square weighting, to deal with the case of uniform percentage 
error.  For all other cases (entries FITW, FITBW, FITTW, and FITBTW) 
the calling program must supply a function which calculates W(X) given 
a value of X.<br /><br /><strong>The Trend Function</strong> <br />The use of a trend function allows a known functional dependency to 
be taken out of the approximation.  A typical application involves 
data representing high frequency variations of a known low frequency 
base component.  It would be very difficult to characterize such data 
if the amplitude of the base component is large in comparison to the 
variations, since it would "swamp out" their influence on the approximation.  However, 
if the base component is defined as a trend function, a Fourier basis 
would comfortably approximate the residual high frequency components. 
(Note that the constant term in the Fourier basis will give the amplitude 
of the base component.)

Another example arises when approximating a damped oscillation of 
known frequency.  In this case, the basic oscillation can be specified 
as the trend function and the damping can be approximated by an exponential 
series.  On the other hand, an attempt to characterize both the oscillation 
and damping with a common approximation function is unlikely to succeed, 
particularly if the interval covers several cycles.  

The default case employs no trend function (entries FIT, FITB, FITW, 
and FITBW), i.e. T(X)=1.0.  When one is required (entries FITT, FITBT, 
FITTW, and FITBTW), the calling program must supply a function (OPERATOR) 
which calculates T(X) given a value of X as its argument.



<br /><br /><strong>The Approximation Rule<br /></strong>In the first of the two modes of use, the calling program prescribes 
the specific number and type of basis functions to be used.  For example, 
it might specify that G(X) is a fourth degree polynomial, using the 
five basis functions <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp; 1  X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X**2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X**3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X**4.
<br /><br />Then FITxxx will determine the five coefficients which minimize the 
error (in a least-squares sense) among all representations involving 
fourth degree polynomials.  

While this may be the best approximation using this basis, it may 
be quite unsatisfactory if the basis was poorly chosen or it the number 
of basis functions is too small (or even too large).  To accommodate 
such circumstances, the calling program may specify not only the coefficients 
of the basis but also the minimum number of terms necessary to satisfy 
the prescribed approximation tolerance.  The procedure employed is 
to expand the basis progressively until either a suitable approximating 
function is formed or the algorithm determines that further expansion 
would be fruitless.  In this process, the first attempt chooses a 
single basis function and then adds others one at a time in a prescribed 
sequence.  When the default polynomial basis is chosen, the sequence 
in which the basis is expanded is the natural one of increasing powers 
of X, i.e. a progression of increasing order polynomials is tried.  Conversely, 
when the calling program defines the basis, the functions may be arbitrarily 
ordered on the index I so that they enter the approximation in any 
desired manner.

When choosing which of the two rules to apply, it should be noted 
that the second rule may be no more time-consuming that the first, 
even though it involves a sequence of approximations. This is due 
to the algorithm (briefly described below).  Thus it might appear 
that the second rule is invariably preferable.  In fact, it may be 
essential to determine a specific number of coefficients because of 
their physical significance, thereby requiring the use of the first 
rule.<br /><br /><strong>The FIT Algorithm</strong> <br />The technique employed by FIT is to form the approximation from an 
orthogonal transformation of the basis.  This is one of the best-conditioned 
methods and is relatively insensitive to numerical error.  Moreover, 
it enforces stability by detecting and removing any redundant (linearly 
dependent) functions from the basis by setting their coefficients 
to zero.  Of the alternate methods, only the optimization solver HERA 
has a capability to recognize linear dependencies automatically and 
its resolution, which is to select a minimum norm combination, is 
less suitable for data approximation problems.

Many approximation functions are selected on theoretical grounds rather 
than for their desirable numerical properties, and linear dependencies 
occur frequently in practice, particularly when approximating over 
a fairly small interval.  Actually, this valuable capability might 
be viewed as a drawback if it is essential to compute a full set of 
coefficients when applying the first approximation rule.  Indeed this 
view is reinforced when it is known that the basis functions are theoretically 
independent. On the contrary, however, this view is fallacious.  Functions 
which are linearly independent over the full range of X may exhibit 
significant dependence over a limited interval, and moreover the data 
may be inadequate to characterize the desired approximation function.

The error integral is computed by a trapezoidal rule approximation.  This 
is much more precise than the usual rectangular rule, at a modest 
cost for additional computation. Note that the minimization of the 
sum of the squares of the errors, as in a standard statistical regression, 
is nothing more than the rectangular rule to approximate the integral.  This 
choice derives more from the historical limitations of hand calculation 
than from any currently valid reason and has very little to recommend 
it.

Additional useful features of FIT include an automatic orthogonality 
recheck as the basis is built up and a final iterative refinement 
in which the error function is recomputed.

<br /><br />Using  FIT 


The general command-call to FIT is as follows:

<br />


<br /><b>&nbsp;&nbsp;&nbsp;&nbsp; @FIT[ [B][T][W] ] </b>(<i>npts, x, y, eps, w, ndeg, kout, mr, nc, c ,err,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [,base] [,trend] [,weight]</i>
<br />where:
<table>
<tbody>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>npts</i></td>
  <td style={{width: '646px'}}>the number of discrete data (minimum 2);</td></tr> 
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>x</i></td>
  <td style={{width: '646px'}}>the independent variable vector containing at least npts monotonically increasing values;</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>y</i></td>
  <td style={{width: '646px'}}>the function vector containing function values corresponding to each x value;</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>eps</i></td>
  <td style={{width: '646px'}}>maximum error tolerance - the approximation will attempt to limit theleast-squares error to eps**2;</td></tr> 
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>w</i></td>
  <td style={{width: '646px'}}>relative error weighting trigger (nonzero value);</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>ndeg</i></td>
  <td style={{width: '646px'}}>maximum polynomial degree or maximum number of basis functions to be used (ndeg=0 chooses default value of 10);</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>kout</i></td>
  <td style={{width: '646px'}}>output report control.  Set zero to suppress all output.  Set 1-4 to obtain increasingly detailed reports as described below;</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>mr</i></td>
  <td style={{width: '646px'}}>memory/run-time flag.  Set nonzero to activate 
a special mode which sacrifices running speed for memory economization.  This saves 
an array of NDEG*NPTS values but costs from 2 to 10 times longer 
execution times;</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>nc</i></td>
  <td style={{width: '646px'}}>number of active coefficients in array c (output);</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>c</i></td>
  <td style={{width: '646px'}}>output coefficient array, must be dimensioned 
in calling program sufficient to contain all coefficients computed in FITxxx;</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>err  </i></td>
  <td style={{width: '646px'}}>an output variable which returns the calculated 
least-squares error on success, and returns negative flag values on failure: -1.0 for 
invalid input argument value(s)-2.0 for x not monotonically increasing -3.0 for too few non-redundant data;</td><td>
  &nbsp;</td></tr>
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>base</i></td>
  <td style={{width: '646px'}}>external name of a basis OPERATOR function 
(valid for entries FITB,FITBT, FITBW, and FITBTW only);</td></tr> 
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>trend</i></td>
  <td style={{width: '646px'}}>external name of a trend OPERATOR function 
(valid for entries FITT,FITBT, FITTW, and FITBTW only);</td></tr> 
<tr><td style={{width: '82px'}}>&nbsp;</td><td style={{width: '82px'}}><i>weight  </i></td>
  <td style={{width: '646px'}}>external name of a weight OPERATOR function 
(valid for entries FITW, FITBW, FITTW, and FITBTW only).</td></tr>
</tbody>
</table>
<br /><br />The <i>x</i> vector, as noted must be monotonically increasing, but 
redundant values are permitted.  The algorithm does not perform scaling 
and best results are obtained if the values of both <i>x</i> and <i>y</i> 
are scaled to order unity.  The error integral limits are taken as 
<i>x<sub>1</sub></i>and <i>x<sub>npts</sub></i>, i.e. the approximation is 
not extrapolated beyond the range of actual data values.  Such extrapolation 
will be valid only if the data are sufficient for a global fit.  

The calculated error, <i>err</i>, may not be bounded by the specified 
<i>eps</i> if the chosen basis is inadequate. Since <i>err</i> incorporates 
the optional error weighting, this might also occur under heavy weighting 
conditions.  Whether the resulting approximation is satisfactory or 
not is a matter for analysis. 

<b>Specifying Basis Functions</b> - To specify an arbitrary basis, 
define an OPERATOR function in the program which returns a value of 
BASE(I,X) given values of I and X as its arguments.  The sequencing 
of basis functions, as indexed by I, may be freely chosen.  For example, 
suppose that the basis consists of the following four functions:

<br />1    EXP(X)    EXP(2*X)   EXP(3*X)

then the required OPERATOR function could be programmed as follows:

<pre><b>
         OPERATOR EXBASIS(INDEX,XVAL)
           EXBASIS=EXP(XVAL*(INDEX-1))
         END
</b></pre>


To use this basis, any program unit referencing it in a call upon 
FITB, FITBT, FITBW, or FITBTW must contain EXBASIS in an EXTERNAL 
declaration.

<b><br /><br />Specifying a Trend Function</b> - A trend function is defined in a 
similar manner, i.e. to use a trend function of EXP(-X), the following code will 
suffice:

<pre><b>
         OPERATOR TREND(XX)
           TREND=EXP(-XX)
         END
</b></pre>


Likewise, to use this trend function, any program unit referencing 
it in a call upon FITT, FITBT, FITTW, or FITBTW must contain TREND 
in an EXTERNAL declaration.  

<b><br /><br />Specifying Weighting</b> - Weight function selection has two alternatives.  For 
arbitrary weighting, the weight function is defined in the same way 
as the trend function.  For example, to weight positive data twice 
as heavy as negative data, the following function could be used:

<pre><b>
         OPERATOR PICKW(XV)
           IF (Y(XV).LT.0) THEN
               PICKW=1
           ELSE
               PICKW=2
           ENDIF
         END
</b></pre>
 

To use this weight function, any program unit referencing it in a 
call upon FITW, FITBW, FITTW, or FITBTW must contain PICKW in an external 
declaration.  Also, since the array Y is referenced in this OPERATOR, 
a GLOBAL ALL declaration is presumed to have preceeded the PROBLEM 
declaration.

The alternate form of weighting, relative weighting, is chosen by 
setting the <i>w</i> parameter nonzero.  In this case the FIT procedure 
will internally construct the weight function 

<br /><br />WT<i>(x<sub>i</sub></i>) = 1/<i>y</i>(x<sub>i</sub>)<sup>2</sup> <br />
<br />subject to the constraint that the maximum weight will be 

 1/SQRT(ABS(<i>w</i>)).

<br /><br />This limit is necessary to avoid inordinate weighting as <i>y(x<sub>i</sub>)</i> 
takes on very small values.  One way of looking at the value of WT 
is that it specifies an estimate of the absolute measurement precision, 
since all data smaller in absolute value than <i>w</i> will be weighted 
identically.

<b><br /><br />Choosing the Approximation Rule (eps and ndeg) </b>- The approximation 
rule is chosen according to the values of eps and ndeg

<br />
<br />
<table>
<tbody>
  <tr>
    <td>XXX Check these table entries against original; verify underline XXX</td>
    <td style={{width: '163px', textDecoration: 'underline'}}><strong>eps</strong></td>
    <td style={{width: '76px', textDecoration: 'underline'}}><strong>ndeg</strong></td>
    <td style ={{textDecoration: 'underline'}}><strong>Meaning</strong></td>
    </tr>
  <tr>
    <td style={{width: '163px', height: '48px'}}></td>
    <td style={{width: '76px', height: '48px'}}>0</td>
    <td style={{height: '48px'}}>0</td>
    <td style={{width: '421px', height: '48px'}}>Rule 1, using 10 basis functions or a 10th degree 
    polynominial (11 basis functions)</td>
    </tr>
  <tr>
    <td style={{width: '163px'}}></td>
    <td style={{width: '76px'}}>0</td>
    <td>+</td>
    <td style={{width: '421px'}}>Rule 1, using ndeg basis functions or and ndeg-th 
    degree polynomial (ndeg+1 basis functions)</td>
    </tr>
  <tr>
    <td style={{width: '163px'}}></td>
    <td style={{width: '76px'}}>+</td>
    <td>0</td>
    <td style={{width: '421px'}}>Rule 2, satisfying eps, using a maximum of 10 
    basis functions or a 10-degree polynomial</td>
  </tr>
  <tr>
    <td style={{width: '163px'}}></td>
    <td style={{width: '76px'}}>+</td>
    <td>+</td>
    <td style={{width: '421px'}}>Rule 2, satisfying eps, using a maximum of 10 
    basis functions or an ndeg-th degree polynomial</td>
  </tr>
</tbody>
</table>
<br />Regardless of the choice of ndeg, a limit of npts-1 is imposed upon 
its value.

<b><br /><br />Output Reporting</b> - The output report is progressively enhanced 
as larger values of <i>kout</i> are selected.  The minimum report 
(<i>kout</i>=1) merely gives the computed error, a notation of success 
or failure, and (possibly) some messages indicating computational 
problems encountered, such as linear dependencies in the basis.  Because 
these messages are useful in assessing the significance of the results, 
it is generally undesirable to suppress all output (<i>kout</i>=0).  

The information provided by <i>kout</i>=1,2,3 is shown and explained 
in one of the later examples.  The maximum report (<i>kout</i>=4) 
adds graphic output to the report by internally accessing the graphics 
subsystem.  The mode of graphics output is selected by the GRAPHICS 
metacommand.  This graph displays the data being approximated, the 
approximating curve, the approximation error curve and the error weighting.  If 
the weighting is uniform, a plot of the trend function is substituted, 
unless it is also uniform, whence only two curves are plotted.  The 
error curve is shown as a percentage and is highly useful in highlighting 
any weaknesses in the approximation.  This curve will always have 
the oscillatory shape characteristic of approximations formed from 
othogonal functions. 

<b><br /><br />POLYDEG - Simple FIT Entry for Approximation Rule 1</b> - The entry 
POLYREG is a short form of FIT which uses approximation rule one.  Its 
usage is as follows:<br /><br /><b>@POLYDEG</b> (<i>npts,x,y,ndeg,kout,nc,c,err</i>)
<br /><br />This entry is a short form of 
<br /><br /><b>@FIT</b>(<i>npts,x,y,0,0,ndeg,kout 0,nc,c,err</i>)
<br /><br />POLYEPS - Simple FIT Entry for Approximation Rule 2 - The 
entry POLYEPS is a short form of FIT which uses approximation rule 
two.  Its usage is as follows:

<br /><br /><b>@POLYEPS</b>(<i>npts,x,y,eps,kout,nc,c,err</i>) 
<br /><br />This entry is a short form of<br /><br /><b>@FIT</b> (<i>npts,x,y,eps, 
0,0,kout,0,nc,c,err</i>) <br /><br /><b>Examples</b> <br /><br />The first example illustrates the use of FIT to represent simple data 
using the two different approximation rules.  The first fit, using 
rule 1 applies a quadratic to the data, resulting in an error of just 
over 1 percent.  The second fit, using rule two specifies a maximum 
error of 0.01 percent and achieves condsiderably better than this 
via a cubic fit.
<pre>
      GRAPHICS FILE
      PROBLEM EASYFIT
        DYNAMIC X,Y,C1,C2,Y1,Y2
        ALLOT X(20),Y(20),C1(20),C2(20)
        DO 10 I=1,20
          XI=I
          XI=(XI-10)/10
          X(I)=XI
          Y(I)=1.1+2.2*XI-3.3*XI**2+0.1*XI**3
 10     CONTINUE
        TABULATE X,Y
C  Try a quadratic fit via POLYDEG
C       @POLYDEG(20,X,Y,2,NC1,C1,ERR1)
        @CHRSIZE(0.05)
        @FRAME(0,.5,5,4)
        @FIT(20,X,Y,0,0,2,4,0,NC1,C1,ERR1)
C  Now try to fit within 0.0001 via POLYEPS
C       @POLYEPS(20,X,Y,1D-4,NC2,C2,ERR2)
        @CHRSIZE(0.05)
        @FRAME(0,.5,5,4)
        @FIT(20,X,Y,1D-4,0,0,4,0,NC2,C2,ERR2)
C  Compare results using the coefficients to calculate functions
        ALLOT Y1(20),Y2(20)
        @POLYFIT(NC1,C1,20,X,Y1)
        @POLYFIT(NC2,C2,20,X,Y2)
        ROWPRINT ERR1
        TABULATE Y,Y1,Y2
      END
      PROCEDURE POLYFIT(NC,C,NX,X,Y)
        DIMENSION C(*),X(*),Y(*)
        DO 10,J=1,NX
          R=C(1)
          XJ=X(J)
          DO 5 K=1,NC-1
            R=R+C(K+1)*XJ**K
   5      CONTINUE
          Y(J)=R
  10    CONTINUE
      END    
</pre>
<pre><br />N        X              Y<br />1. -0.900000E+00 -0.362590E+01<br />2. -0.800000E+00 -0.282320E+01<br />3. -0.700000E+00 -0.209130E+01<br />4. -0.600000E+00 -0.142960E+01<br />5. -0.500000E+00 -0.837500E+00<br />6. -0.400000E+00 -0.314400E+00<br />7. -0.300000E+00 0.140300E+00<br />8. -0.200000E+00 0.527200E+00<br />9. -0.100000E+00 0.846900E+00<br />10. 0.000000E+00 0.110000E+01
11. 0.100000E+00 0.128710E+01<br />12. 0.200000E+00 0.140880E+01<br />13. 0.300000E+00 0.146570E+01<br />14. 0.400000E+00 0.145840E+01<br />15. 0.500000E+00 0.138750E+01<br />16. 0.600000E+00 0.125360E+01<br />17. 0.700000E+00 0.105730E+01<br />18. 0.800000E+00 0.799200E+00<br />19. 0.900000E+00 0.479900E+00<br />20. 0.100000E+01 0.100000E+00<br />
--- LEAST SQUARES APPROXIMATION REPORT
-------------------------------------<br />[1] 20 DATA APPROXIMATED BY 
POLYNOMIALS OF DEGREE 2<br />WITH NO ERROR WEIGHTING<br />[2] BEST APPROX 
COEFS (ORTHOG ONES) PROGRESSIVE <br />L.S. ERROR<br />PC( 1) = 0.2867772E+00 0.1387E+01<br />PC( 2) = 0.1459837E+01 0.8961E+00<br />PC( 3) = -0.1235090E+01 0.1345E-01<br /><br />BEST APPROX COEFS OF POWERS OF X<br />CF( 1) = 0.1097270E+01<br />CF( 2) = 0.2254095E+01<br />CF( 3) = -0.3285000E+01
<br />[3] LEAST SQUARES ERROR 0.1345E-01<br />MAXIMUM ERROR 0.3363E-01 (POINT 
20) WITH AVERAGE <br />ERROR 0.1244E-01<br /><br />--- LEAST SQUARES 
APPROXIMATION REPORT<br />-------------------------------------<br />[1] 20 DATA APPROXIMATED BY POLYNOMIALS OF DEGREE 3<br />WITH NO ERROR WEIGHTING<br />[2] BEST APPROX COEFS (ORTHOG ONES) PROGRESSIVE L.S. ERROR<br /><br />PC( 1) = 0.2867772E+00 0.1387E+01<br />PC( 2) = 0.1459837E+01 0.8961E+00<br />PC( 3) = -0.1235090E+01 0.1345E-01<br />PC( 4) = 0.1853393E-01 0.4945E-15<br />
BEST APPROX COEFS OF POWERS OF X<br />CF( 1) = 0.1100000E+01<br />CF( 2) = 0.2200000E+01<br />CF( 3) = -0.3300000E+01<br />CF( 4) = 0.1000000E+00
<br />[3] ERROR CRITERION 0.1000E-03<br />SATISFIED WITH LEAST SQUARES ERROR 0.4945E-15<br /><br />MAXIMUM ERROR 0.1479E-14 (POINT 20) WITH AVERAGE <br />ERROR 0.3963E-15<br /><br />VARIABLE VALUES .....<br /><br />ERR1 0.134459E-0

          Y            Y1           Y2<br />1. -0.362590E+01 -0.359227E+01 -0.362590E+0
          1<br />2. -0.282320E+01 -0.280841E+01 -0.282320E+01<br />3. -0.209130E+01 -0.209025E+01 -0.209130E+01<br />4. -0.142960E+01 -0.143779E+01 -0.142960E+01<br />5. -0.837500E+00 -0.851027E+00 -0.837500E+00<br />6. -0.314400E+00 -0.329968E+00 -0.314400E+00<br />7. 0.140300E+00 0.125392E+00 0.140300E+00<br />8. 0.527200E+00 0.515051E+00 0.527200E+00<br />9. 0.846900E+00 0.839011E+00 0.846900E+00<br />10. 0.110000E+01 0.109727E+01 0.110000E+01<br />11. 0.128710E+01 0.128983E+01 0.128710E+01<br />12. 0.140880E+01 0.141669E+01 0.140880E+01<br />13. 0.146570E+01 0.147785E+01 0.146570E+01<br />14. 0.145840E+01 0.147331E+01 0.145840E+01<br />15. 0.138750E+01 0.140307E+01 0.138750E+01<br />16. 0.125360E+01 0.126713E+01 0.125360E+01<br />17. 0.105730E+01 0.106549E+01 0.105730E+01<br />18. 0.799200E+00 0.798146E+00 0.799200E+00<br />19. 0.479900E+00 0.465106E+00 0.479900E+00<br />20. 0.100000E+00 0.663654E-01 0.100000E+00<br /><br />ELAPSED TIME = 17.86 SECONDS         
</pre>
FIG 3-4. Printed Output from EASYFIT.
<br /><br />
<pre>
<img src={efit154} height="603" width="853" /><br /><br />
<img src={efit254} />
</pre>
[ck&nbsp;&nbsp; missing the red curve above, like above, lower blip.<br /><br />The second example uses a set of exponential basis functions and relative 
weighting to fit a difficult function.  The entry FITB to procedure 
FIT is applied twice, invoking approximation rule 2 for a 1 percent 
error and a 0.1 percent error.  The first case is satisfied with a 
6-degree polynomial.  The second case appied a 14-degree polynomial, 
but could not quite satisfy the error criterion.  The results, however, 
show a considerably better fit than the first. <pre>
--- LEAST SQUARES APPROXIMATION REPORT
-------------------------------------

 [1]  50 DATA APPROXIMATED BY  7 SUPPLIED BASIS FUNCTIONS
        WITH RELATIVE ERROR WEIGHTING

 [2] BEST APPROX COEFS (ORTHOG ONES)     PROGRESSIVE L.S. ERROR
        PC( 1) =  0.1370756E+01               0.2033E+00
        PC( 2) =  0.9483773E-01               0.1917E+00
        PC( 3) = -0.2647217E+00               0.3159E-01
        PC( 4) = -0.2540309E-01               0.2585E-01
        PC( 5) = -0.2895539E-01               0.1551E-01
        PC( 6) =  0.3642110E-02               0.1530E-01
        PC( 7) = -0.1695599E-01               0.9341E-02
     BEST APPROX COEFS OF BASIS FUNCTIONS
        CF( 1) =  0.2771405E+02
        CF( 2) = -0.6424996E+01
        CF( 3) = -0.5052247E+02
        CF( 4) =  0.8220598E+00
        CF( 5) =  0.4802202E+02
        CF( 6) = -0.4424675E-01
        CF( 7) = -0.1851455E+02

 [3] ERROR CRITERION 0.1000E-01
     SATISFIED WITH LEAST SQUARES ERROR 0.9341E-02
     MAXIMUM ERROR 0.5187E-01 (POINT   1) WITH AVERAGE ERROR 0.5850E-02

                  X                    Y                    YF
  1.          0.000000E+00         0.100000E+01         0.105187E+01
  2.          0.400000E-01         0.128555E+01         0.123501E+01

  
 49.          0.192000E+01         0.166971E+01         0.166139E+01
 50.          0.196000E+01         0.148173E+01         0.148573E+01

--- LEAST SQUARES APPROXIMATION REPORT
 -------------------------------------

    /NOTICE/ - BASE FUNCTION NO. 14 IS LINEARLY DEPENDENT ON THE OTHERS
    /NOTICE/ - BASE FUNCTION NO. 15 IS LINEARLY DEPENDENT ON THE OTHERS

 [1]  50 DATA APPROXIMATED BY 15 SUPPLIED BASIS FUNCTIONS
        WITH RELATIVE ERROR WEIGHTING
 [2] BEST APPROX COEFS (ORTHOG ONES)     PROGRESSIVE L.S. ERROR
        PC( 1) =  0.1370756E+01               0.2033E+00
        PC( 2) =  0.9483773E-01               0.1917E+00
        PC( 3) = -0.2647217E+00               0.3159E-01
        PC( 4) = -0.2540309E-01               0.2585E-01
        PC( 5) = -0.2895539E-01               0.1551E-01
        PC( 6) =  0.3642110E-02               0.1530E-01
        PC( 7) = -0.1695599E-01               0.9341E-02
        PC( 8) =  0.3849200E-02               0.8927E-02
        PC( 9) = -0.9688780E-02               0.5639E-02
        PC(10) =  0.3105145E-02               0.5185E-02
        PC(11) = -0.5711304E-02               0.3200E-02
        PC(12) =  0.2068583E-02               0.2839E-02
        PC(13) = -0.3299867E-02               0.1692E-02
        PC(14) =  0.0000000E+00               0.0000E+00
        PC(15) =  0.0000000E+00               0.0000E+00
     BEST APPROX COEFS OF BASIS FUNCTIONS
        CF( 1) = -0.1662087E+05
        CF( 2) =  0.5060125E+04
        CF( 3) =  0.3853357E+05
        CF( 4) = -0.1079146E+04
        CF( 5) = -0.6255262E+05
        CF( 6) =  0.1574062E+03
        CF( 7) =  0.6937912E+05
        CF( 8) = -0.1492850E+02
        CF( 9) = -0.4995825E+05
        CF(10) =  0.8280468E+00
        CF(11) =  0.2099899E+05
        CF(12) = -0.2035842E-01
        CF(13) = -0.3903203E+04
        CF(14) =  0.0000000E+00
        CF(15) =  0.0000000E+00
 [3] FAILED TO SATISFY ERROR CRITERION 0.1000E-02
     WITH LEAST SQUARES ERROR 0.1692E-02
     MAXIMUM ERROR 0.5187E-01 (POINT   1) WITH AVERAGE ERROR 0.5850E-02

                  X                    Y                    YF
  1.          0.000000E+00         0.100000E+01         0.100218E+01
  2.          0.400000E-01         0.128555E+01         0.127825E+01

 49.          0.192000E+01         0.166971E+01         0.167178E+01
 50.          0.196000E+01         0.148173E+01         0.148052E+01

 ELAPSED TIME =   32.40 SECONDS

 FIG 3-6. Printed Output from HARDFIT</pre>
<pre><img src={hfit154} height="603" width="853" /></pre>
<pre><img src={hfit254} height="603" width="853" />
</pre>
&nbsp;<pre>PROBLEM HARDFIT
  EXTERNAL BASE
  DYNAMIC X,Y,YF,C1
  ALLOT X(50),Y(50),YF(50),C1(20)
  DO 10 I=1,50
    XI=0.04*(I-1)
    X(I)=XI
  Y(I)=1+SQRT(ABS(XI*(XI+1)*(XI-2)))
10 CONTINUE
C     Try fit within 1 percent
  @CHRSIZE(.05)
  @FRAME(0,1,5,4)
  @FITB(50,X,Y,.01,1E-6,15,4,0,NC1,C1,ERR1,BASE)
  @FUNX(X,YF,50,NC1,C1)
  TABULATE X,Y,YF
C Try fit withing .1 percent
  @CHRSIZE(.05)
  @FRAME(0,1,5,4)
  @FITB(50,X,Y,.001,1E-6,15,4,0,NC1,C1,ERR2,BASE)
  @FUNX(X,YF,50,NC1,C1)
  TABULATE X,Y,YF
END

PROCEDURE FUNX(X,YF,N,NC,C)
  DIMENSION X(*),YF(*),C(*)
  DO 10 I=1,N
    YF(I)=0
    DO 10 J=1,NC
      YF(I)=YF(I)+C(J)*BASE(J,X(I))
10  CONTINUE
END

OPERATOR BASE(I,XX)
  F=I/2
  BASE=EXP(F*XX*(-1)**I)
END

</pre>

The output reports of these examples were generated using <i>kout</i>=4. 
If <i>kout</i> had been set to 1, only item [3] would have been printed. 
This shows the error criterion (<i>eps</i>) and the actual least-squares 
error (<i>err</i>).  It also flags the datum with the largest absolute 
maximum error and gives the average absolution error over all the 
data.  If any computational problems had arisen, this output option 
would cause suitable diagnostics to be issued.

Choice of <i>kout</i>=2 adds item [1] to the above described output. 
Basically, this information simply describes the problem being solved.  It 
denotes the number of data and the number of basis functions employed 
in the approximation.  It also flags the use of a trend and/or weight 
function as appropriate.<br /><br />&nbsp;<br />Selecting <i>kout </i>greater than 2 adds the detailed breakdown given 
in item [2].  The first segment shows the coefficient of the orthogonalized 
basis used to form the approximation.  These coefficients cannot, 
of course, be used, but they provide some information.  If any have 
conspicuously different orders of magnitude from the others, say by 
1.0e+6 or so, then the basis may have near or actual linear dependencies.  The 
parallel column on the right gives very useful information.  Each 
value shows the actual least-squares error as the basis is built up 
function-by-function, i.e. in the first application of FITB in the 
second (HARDFIT) example, the error was .02585 after the first four 
basis functions had been used.  Often and examination of this progression 
can suggest a reduced or re-ordered basis which would give a satisfactory 
approximation with less computation.  Also, when the disired error 
is not satisfied, this progression can indicate how many more basis 
functions are needed to achieve it.

<br /><br />The third example illustrates the use of basis and trend functions 
to fit a periodic function through application of FITBT.
<pre>
{`
        PROBLEM DAMPER
        EXTERNAL BASIS,TREND
        DYNAMIC X,Y,C1,SAMPLE,VALUE,FITVAL
        ALLOT X(20),Y(20),C1(20)
        @STREAM('SUMMARY')                   [ck]
        DO 10 I=1,20
          XI=I
          X(I)=XI/5
          Y(I)=4*SIN(6.283185*X(I))*EXP(-1.5*X(I))
 10     CONTINUE
        @PAGESUM('Raw Data')                       [ck]
        TABULATE X,Y
        @FITBT(20,X,Y,.0001,0,15,4,0,NC1,C1,ERR1,BASIS,TREND)
        <VALUE>=DATA(Y(1),Y(3),Y(5),Y(8),Y(15))
        @PAGESUM('Sample')               [ck]
        TABULATE SAMPLE,VALUE
        ALLOT FITVAL(5)
        DO 20 I=1,5
           POINT=SAMPLE(I)
           S=0
           DO 20 J=1,NC1
             S=S+C1(J)*BASIS(J,POINT)
             FITVAL(I)=S*TREND(POINT)
 20     CONTINUE
        @PAGESUM('Sample Fit')              [CK]
        TABULATE SAMPLE,VALUE,FITVAL
      END

      OPERATOR BASIS(I,XX)
        BASIS=EXP((1-I)*XX)
      END

      OPERATOR TREND(XX)
        TREND=SIN(6.283185*XX)
      END
`}
</pre>
<pre> 
{`                 X                    Y
   1.          0.200000E+00         0.281824E+01
   2.          0.400000E+00         0.129033E+01

  19.          0.380000E+01        -0.127288E-01
  20.          0.400000E+01        -0.119770E-07

 --- LEAST SQUARES APPROXIMATION REPORT -------------------------------------
  [1]  20 DATA APPROXIMATED BY  8 SUPPLIED BASIS FUNCTIONS
         MULTIPLIED BY A SPECIFIED TREND FUNCTION
         WITH NO ERROR WEIGHTING
  [2] BEST APPROX COEFS (ORTHOG ONES)     PROGRESSIVE L.S. ERROR
         PC( 1) =  0.7520244E+00               0.5456E+00
         PC( 2) =  0.1047825E+01               0.9331E-01
         PC( 3) =  0.1807159E+00               0.1058E-01
         PC( 4) = -0.1998658E-01               0.2628E-02
         PC( 5) =  0.4788487E-02               0.9342E-03
         PC( 6) = -0.1690955E-02               0.3469E-03
         PC( 7) =  0.6118271E-03               0.1476E-03
         PC( 8) = -0.2580464E-03               0.6538E-04

      BEST APPROX COEFS OF BASIS FUNCTIONS
         CF( 1) = -0.3487101E-02
         CF( 2) =  0.5497682E+00
         CF( 3) =  0.9395605E+01
         CF( 4) = -0.2387632E+02
         CF( 5) =  0.5531353E+02
         CF( 6) = -0.8017998E+02
         CF( 7) =  0.6323243E+02
         CF( 8) = -0.2060228E+02
  [3] ERROR CRITERION 0.1000E-03
     SATISFIED WITH LEAST SQUARES ERROR 0.6538E-04
     MAXIMUM ERROR 0.1349E-03 (POINT  16) WITH AVERAGE ERROR 0.4782E-0


                   SAMPLE               VALUE                FITVAL
   1.          0.200000E+00         0.281824E+01         0.281824E+01
   2.          0.600000E+00        -0.955902E+00        -0.955863E+00
   3.          0.100000E+01        -0.269534E-06        -0.269495E-06
   4.          0.160000E+01        -0.213291E+00        -0.213371E+00
   5.          0.300000E+01        -0.402579E-07        -0.403551E-07

ELAPSED TIME =   11.75 SECONDS
`}
</pre>


<br />
<img alt="Fig 3-8"  src={damp54} height="603" width="853" /><br />
FIG 3-8. Printed and Graphic Output from DAMPER
<br />
<h3>3.3.4. Surface Fitting (SFIT)</h3>

The FIT entry SFIT has the same argument sequence as FITB, but which 
approximates the error integral by the rectangular rule rather than 
the trapezoidal rule.  A minor application of SFIT is to provide a 
standard comparison with results obtained by alternate approximation 
methods, most of which would use the rectangular rule.  The principle 
use, however is to perform surface fitting, i.e. the approximation 
of functions of two or more variables.  This feature cannot be employed 
by the other entries of FIT because of the way in which the integral 
is calculated.

When performing a surface fit, there are several differences in the 
problem specification:  

<br /><br />(1) A basis must be supplied, i.e. the default polynomial 
basis is inadequate.  

<br />(2) The independent variable vector, X, does not contain 
the values of the 
  independent variables.  Instead, it is simply an index vector, which 
will be 
  used to select the full set of data coordinates.  Thus it always 
takes the form:

<br />X(I)=I  FOR I=1,2, ...,NPTS

<br />(3) The function vector, Y, contains the data values associated 
with the 
  coordinates selected by X.

<br /><br />The following example makes this clear.<br /><br />
<pre> GLOBAL ALL
PROBLEM SURFACE
  DIMENSION COORD(100,2),FUNXY(100),DEX(100),COEF(20)
  EXTERNAL QUAD
  K=0
  DO 10 I=1,10
    DO 10 J=1,10
      K=K+1:&lt;N&gt;DEX(K)=K
      COORD(K,1)=I ! X-COORDINATE
      COORD(K,2)=FLOAT(J)/10 ! Y-COORDINATE
      FUNXY(K)=1+FLOAT(I*J)/5+3*I*I-J*J
C       THIS FUNCTION IS 1-100*Y**2+2*X*Y+3*X**2
10 CONTINUE
  @SFIT(100,DEX,FUNXY,0,0,9,3,0,NC,COEF,ERR1,QUAD)
END

OPERATOR QUAD(II,PICK)
  JPOW=INT(FLOAT(II-1)/3)
  KPOW=MOD(II-1,3):&lt;N&gt;IP=PICK
  IF(JPOW.EQ.0) THEN
    A=1.0
  ELSE
    A=COORD(IP,1)**JPOW
  ENDIF
  IF(KPOW.EQ.0) THEN
    B=1.0
  ELSE
    B=COORD(IP,2)**KPOW
  ENDIF
  QUAD=A*B
END 
</pre>
<h3>Minimax Polynomial Data Fitting (CHEBFIT)</h3>
3.3.5. 
The built-in procedure CHEBFIT computes a minimax approximation polynomial 
to a set of discrete data.  The fit applies the Chebychev minimax 
criterion, i.e. it minimizes the maximum deviation of the polynomial 
from the data points.  The more common least-squares approximation 
applies a global measure of fit and guarantees nothing at any individual 
point.  The Chebychev fit, however, delivers the best possible fit 
for a given polynomial degree as measured at every data point.

CHEBFIT requires rather more computation than least-squares approximators 
(like POLYREG and FIT) and there are restrictions on the kinds of 
data to which it may be applied.  However, there are three circumstances 
in which it should give significantly better results than least-squares 
methods:

<br /><br />(1) For problems where there are relatively few data to 
be approximated;

<br />(2) For problems where the data are unevenly distributed 
over the approxi-
  mation interval, particularly when there are conspicuously dense 
and 
  sparse regions; and

<br />(3) For problems in which the quality of the data is uniformly 
high, i.e. where
  there is a common, small standard deviation.

One case where CHEBFIT is a poor choice is when the data contains 
wild points or other highly deviant measurements.  It should be noted, 
however, that least-squares methods are also rather poor for such 
data, although not as bad as a Chebychev fit.  Ideally, such data 
should be filtered before approximation is attempted, but where this 
is unsuitable, a least-absolute-error approximation should be proformed 
by means of an optimization solver (Refer to Appendix A for general 
guidelines on the numerical approximation of data.)

<b><br /><br />CHEBFIT Usage</b> - The general command-call to CHEBFIT takes the 
form:

<br /><br /><b>@CHEBFIT</b>(<i>npts,x,y,ndeg, 
dev,a,b,kou</i>t)
<br /><br />where the arguments are:
<table>
<tbody>
<tr><td><i>npts</i></td><td>the number of (x,y) data pairs (minimum 3),</td></tr>
<tr><td><i>x</i></td><td>a vector of independent variable values,</td></tr>
<tr><td><i>y</i></td><td>a vector of measurements associated with each x value, </td></tr>
<tr><td><i>ndeg</i></td><td>fitting polynomial degree (maximum npts-2),</td></tr>
<tr><td><i>dev</i></td><td>computed absolute maximum deviation of the fit,</td></tr>
<tr><td><i>a</i></td><td>constant term in the fitting polynomial,</td></tr>
<tr><td><i>b</i></td><td>a vector of the calculated coefficients of the powers of x,</td></tr>
<tr><td><i>kout</i></td><td>graphics output flag (nonzero produces graphics output)</td></tr>
<tr><td></td><td>br /><br />The results specify the approximation polynomial such that 
<br /><br />Y = A+ B(1)*X +B(2)*X**2 + ... + B(NDEG)*X**NDEG .<br /></td></tr>
</tbody>
</table>

<br />One restriction is perhaps obvious from the nature of the Chebychev 
criterion.  There must be not redundant data, i.e. multiple values 
in the x-vector.  To accommodate this possibility, CHEBFIT automatically 
removes redundancies, replacing their measurement by an arithmetic 
mean.  A warning message is issued when this occurs, but note that 
this might lead to a fatal error it the residual data are too few 
to permit a Chebychev fit.  (The process of reduction does not alter 
the input x or y vectors).

CHEBFIT automatically scales the data to unit norm to reduce numerical 
problems, also without modifying the input vectors. Nevertheless, 
there are circumstances in which the approximation might fail: <br /><br />(1) Poorly conditioned data,

<br />(2) Data which cannot be well approximated by a polynomial.

<br /><br />The first problem is intrinsic with the data and can be resolved, 
if at all, by selecting a lower order fit.  In theory, the second 
problem should never arise, but round-off and discretization errors 
can nevertheless cause it to happen.  The best resolution is to use 
one of the other approximation methods which does not require a polynomial 
basis, such as FITxxx or an optimization solver.

Whenever CHEBFIT fails, the deviation dev is returned as a negative 
flag value.  This should always be tested after the call if the polynomial 
is to be used in subsequent computation.

<h2>3.4. Linear Algebra Operations</h2>

The linear algebra operations of FC are a departure from FORTRAN array 
conventions.  In FORTRAN, an array is merely a linear address space 
which has no intrinsic dimensions and may be dimensioned differently 
in different subroutines.  In FC, the dynamic arrays have intrinsic 
dimensions that are stored in the data-structure of the array, thus 
they may be regarded as mathematical structures rather than merely 
as address spaces.  This provides a means of conforming array operations, 
enabling FC to have built-in linear algebra operations.  The linear 
algebra syntax utilizes bracketed names to denote arrays.  The form 
<i>name</i> is used to indicate an array of arbitrary rank 
(from 1 to 7).  The form [<i>name</i>] will indicate a rank 
2 matrix, and the form {<i>name</i>} will indicate a transposed 
matrix.

Whenever an array is declared dynamic by appearing in a DYNAMIC declaration, 
this name is translated into an integer scalar variable in FORTRAN, 
and the integer variable is used as the pointer to the array record 
in the managed region of the bucket common block.  The variable is 
initialized to zero, indicating that the array has not yet been allocated.  Allocation 
is performed by the ALLOT statement:

<b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp; ALLOT</b> <i>name (d<sub>1</sub>,
 {this.curlyStart}d<sub>2</sub>  ,...d<sub>7</sub></i>{this.curlyEnd}), ... 
<br /><br />Deallocation is performed by the PURGE statement:
<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; PURGE <i>name</i> , ...

<br /><br />which returns the deallocated bucket storage to free use, and resets 
the integer pointer value to zero.

<h3>3.4.1. Array Assignment </h3>

Dynamic arrays of arbitrary rank may be used in array assignment operations. 
In array assignment, all elements of the array appearing on the left 
of the equal sign will receive values derived from the right-hand-side 
expression. The simplest array assignments are the following:

<b><br /><br />&nbsp;&nbsp;&nbsp;&nbsp; &lt;a&gt; = <i>b</i> <br /><i>&nbsp;&nbsp;&nbsp;&nbsp; &lt;a&gt;</i> =- <i>b</i> <br /><i>&nbsp;&nbsp;&nbsp;&nbsp; &lt;a&gt;</i> = &lt;c&gt; 
<br /><i>&nbsp;&nbsp;&nbsp;&nbsp; &lt;a&gt;</i>= - &lt;c&gt;<br /><i>&nbsp;&nbsp;&nbsp;&nbsp; &lt;a&gt;</i> = (<i>e)</i> <br /><i>&nbsp;&nbsp;&nbsp;&nbsp; &lt;a&gt;</i> =-(<i>e)</i>
<br /><br /></b>where <i>a</i>is a dynamic array, <i>b</i>is a scalar variable, 
<i>c</i> is a dynamic array or a static [NOTE 6 This is the only form in 
which a static array may appear in an array assignment operation.] 
array; and<i> e</i> is a scalar expression.

<br /><br />The general rules for array assignment are:
<ul>
  <li>If the right hand side is a scalar or a static array then 
the left hand side must already be allocated;</li>
  <li>If the right hand side is a dynamic array, the left hand
side must either be an unallocated dynamic (in which case it will 
be allocated in the assignment to the size and shape of the first 
right hand side array) or an allocated dynamic with same volume (product 
of all dimensions) as the right hand side;</li>
  <li>Elements are assigned in column major order (as though both
left hand  side and right hand side were vectors) without regard to 
array shape; </li>
  <li>If the right-hand-side is a scalar, then the scalar value is replicated 
  without regard to array shape;</li>
  <li>The array to which the values are assigned may be the same as one or 
  even both of the right hand side array arguments, if they are dynamic.</li>
</ul>
<br />In describing the right-hand-side operations, the following symbols 
will b used:

<br /><br /><strong>A</strong> represents any dynamic array, 
  <strong>v</strong>  represents any scalar variable or array element, 
  <strong>e</strong> represents any scalar 
expression.

<br /><br />Where several such symbols are required to describe an 
operation, they are distinguished by appending a subscripted number, 
i.e. 
  <strong>A</strong><sub>1</sub>, 
  <strong>A</strong><sub>2</sub>,
  <strong>v</strong><sub>1</sub>, 
  <strong>v</strong><sub>2</sub>, 
  <strong>e</strong><sub>1</sub>,<strong> 
  e</strong><sub>2</sub>, etc.

<br /><br />The following is a list of the array arithmetic operations:
<br /><br />
<table>
<tbody>
  <tr>
    <td style={{textDecoration: 'underline'}}><strong>Operation Category</strong></td>
    <td style={{width: '303px', textDecoration: 'underline'}}><strong>Array Assignment Operation</strong></td>
    <td style={{width: '292px', textDecoration: 'underline'}}><strong>Statement Syntax</strong></td>
  </tr>
  <tr>
    <td colSpan="2"><i>Array Addition</i></td>
    <td style={{width: '292px'}}></td>
    <td></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Expression-Array Addition</td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=(<i>e</i>)+&lt;A<sub>2</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '31px'}}></td>
    <td style={{height: '31px', width: '303px'}}>Array-Expression Addition</td>
    <td style={{height: '31px', width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>+(<i>e</i>)</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Variable-Array Addition </td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=v + &lt;A<sub>2</sub>&gt;></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array-Variable Addition</td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;+<i>v</i></b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '23px'}}></td>
    <td style={{width: '303px', height: '23px'}}>Array-Array Addition</td>
    <td style={{height: '23px', width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;+&lt;A<sub>3</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}><i>Array Subtraction</i></td>
    <td style={{width: '303px'}}></td>
    <td style={{width: '292px'}}></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '33px'}}></td>
    <td style={{height: '33px', width: '303px'}} >Expression-Array Subtraction</td>
    <td style={{width: '292px', height: '33px'}}><b>&lt;A<sub>1</sub>&gt;=(<i>e</i>)-A<sub>2</sub></b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '28px'}}></td>
    <td style={{height: '28px', width: '303px'}}>Array-Expression Subtraction</td>
    <td style={{height: '28px', width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;-(<i>e</i>)</b></td>
  </tr>
  <tr>
      <td style={{width: '261px'}}></td>
      <td style={{width: '303px'}} >Variable-Array Subtraction</td>
      <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=<i>v</i> - A<sub>2</sub></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array-Variable Subtraction</td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;-<i> v</i></b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '42px'}}></td>
    <td style={{width: '303px', height: '42px'}}>Array-Array Subtraction</td>
    <td style={{width: '292px', height: '42px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;-&lt;A<sub>3</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '27px'}}>Array Multiplication</td>
    <td style={{height: '27px', width: '303px'}}></td>
    <td style={{width: '292px', height: '27px'}}></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Expression-Array Multiplication</td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=(<i>e)*&lt;A<sub>2</sub>&gt;</i></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array-Expression Multiplication</td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=A<sub>2</sub>* (e</b>)</td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '24px'}}></td>
    <td style={{width: '303px', height: '24px'}} >Variable-Array Multiplication</td>
    <td style={{width: '292px', height: '24px'}} ><b>&lt;A<sub>1</sub>=<i>v</i> * &lt;A<sub>2</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '23px'}}></td>
    <td style={{width: '303px', height: '23px'}}>Array-Variable Multiplication</td>
    <td style={{width: '292px', height: '23px'}} ><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;*v</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px', height: '42px'}}>Array-Array Multiplication</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>*A<sub>3</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}>Array Division </td>
    <td style={{width: '303px'}}></td>
    <td style={{width: '292px'}}></td>
    </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Expression-Array Division</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=(<i>e</i>)/&lt;A<sub>2</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px', height: '46px'}}>Array-Expression Division</td>
    <td style={{height: '46px', width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>/ (e)&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '17px'}}></td>
    <td style={{width: '303px', height: '17px'}}>Variable-Array Division</td>
    <td style={{width: '292px', height: '17px'}} ><b>&lt;A<sub>1</sub>&gt;=<i>v</i> / &lt;A2&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px', fontWeight: 'normal'}}>Array<b>-<span>Variable</span></b> Division</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;/<i>v</i></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array-Array Division</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;/&lt;A<sub>3</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array Power</td>
    <td></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '32px'}}></td>
    <td style={{width: '303px', height: '32px'}}>Expression-Array Power</td>
    <td style={{width: '292px', height: '32px'}} ><b>&lt;A<sub>1</sub>&gt;=(<i>e</i>)**A<sub>2</sub></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array-Expression Power</td>
    <td style={{width: '292px'}} > <b>&lt;A<sub>1</sub>&gt;=A<sub>2</sub>**(<i>e</i>)</b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '32px'}}></td>
    <td style={{width: '303px', height: '32px'}}>Variable-Array Power</td>
    <td style={{width: '292px', height: '32px'}} ><b>&lt;A<sub>1</sub>&gt;=<i>v</i> </b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array-Variable Power</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>=A<sub>2</sub>**v</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Array-Array Power</td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=&lt;A<sub>2</sub>&gt;**&lt;A<sub>3</sub>&gt;</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
      <td style={{width: '303px'}}>Array Absolute Value</td>
    <td></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Absolute value of expression</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=|(<i>e</i></b>)|</td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Absolute value of variable</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=|<i>v</i>|</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Absolute value of array</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=|A<sub>2</sub>|</b></td>
  </tr>
  <tr>
    <b>Array Assignment Operation</b>
    <td style={{width: '261px', height: '26px'}}></td>
    <td style={{width: '303px', height: '26px'}}>Statement Syntax</td>
    <td style={{width: '292px', height: '26px'}}></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Sort an array</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=SORTA<sub>2</sub></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Reverse an array</td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=REVERSEA<sub>2</sub></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Produce a ranking index array</td>
    <td style={{width: '292px'}}><b>&lt;A<sub>1</sub>&gt;=RANKA<sub>2</sub></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Access gradient vector</td>
    <td></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Gradient of a scalar variable </td>
    <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=GRAD(<i>v)</i></b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Gradient of a scalar expression 
      [NOTE 7: An  array element must be treated as an expression (surrounded by parentheses)].</td>
    <td style={{width: '292px'}}><strong>&lt;A<sub>1</sub>&gt;=GRAD((e))</strong></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}><b>A<sub>1</sub>=GRAD(( e ))</b></td>
    <td></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}>Access Hessian matrix</td>
      Access Hessian matrix
    <td style={{width: '303px'}}></td>
    <td></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td>Hessian of a scalar variablee</td>
    <td style={{width: '303px'}}><b>&lt;A<sub>1</sub>&gt;=HESS(<i>v</i>)</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td>Hessian of a scalar expression Hessian</td>
    <td style={{width: '303px'}}><b>&lt;A<sub>1</sub>&gt;=HESS((<i>e</i>))</b></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '23px'}}></td>
    <td style={{width: '303px', height: '23px'}}>Assign values to an array</td>
    <td style={{width: '292px', height: '23px'}} ><b>&lt;A&gt; =DATA(e<sub>1</sub>, ... , e<sub>n</sub>)</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}></td>
    <td style={{width: '292px'}}></td>
  </tr>
  <tr>
    <td style={{width: '261px', height: '48px'}}>Eigenvalues and Eigenvectors [NOTE 9: 
    The vector A<sub>1</sub> is a column vector of the eigenvalues of the 
    matrix A<sub>2</sub> which must be both square and symmetric. THe matrix 
    A<sub>3</sub>, if present will contian all the eigenvectors as its 
    columns, in correspondence to the order of the eignevalus in A<sub>1</sub>. 
    The matrix A<sub>2</sub> is not modified by this operation.]</td>
    <td style={{width: '303px', height: '48px'}}>Eigenvalues and eigenvectors [note 9]</td>
    <td>
      [A<sub>1</sub> is a column vector of the eigenvalues of the matrix 
      [A<sub>2</sub>which must be both square and symmetric.  The matrix 
      [A<sub>3</sub>, if present will contain the eigenvectors as 
         it columns, in correspondence to the order of the eigenvalues in 
      [A<sub>1</sub>.  The matrix 
      [A<sub>2</sub>   is not modified by this operation.
    </td>
  </tr>
  <tr>
      <td style={{width: '261px'}}></td>
      <td style={{width: '303px'}}>Eigenvalues of a matrix </td>
      <td style={{width: '292px'}} ><b>&lt;A<sub>1</sub>&gt;=EIGEN[A<sub>2</sub>]</b></td>
  </tr>
  <tr>
    <td style={{width: '261px'}}></td>
    <td style={{width: '303px'}}>Eigenvectors of a matrix</td>
    <td style={{width: '292px'}}><b><em>&lt;A</em><sub>1&gt;</sub>=EIGEN[A<sub>2</sub>] VECTORS[A<sub>3</sub>](ck)</b></td>
  </tr>
  </tbody>
</table>

<h3>3.4.2. Matrix Algebra Assignment </h3>


The matrix algebra operations encompass the normal matrix operations, 
including transpose, matrix product, and inversion.  These operations 
may only involve arrays of rank 2.  The following rules apply.
<br />
<br />

<ul>
  <li>The left hand side must be an unallocated dynamic or a dynamic 
matrix of exactly the right size and shape to hold the results of 
the right-hand-side operation;</li>
  <li>Where there are two matrices on the right hand side, both
may be the same, but the left-hand-side matrix must not be the 
same as either of the right-hand-side matrices </li>;
</ul>
<br />Matrix Transpose
<br />
<br />&nbsp;&nbsp;&nbsp;&nbsp; <sub>A[1</sub>] = {this.curlyStart}A<sub>2</sub>{this.End}
<br /><br />In this operation, 

A<sub>2</sub>is dimensioned <i>m</i> by 
<i>n</i> and A1 os m bu m.<br /><br />Matrix Product<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] = [A<sub>2</sub>] * [A<sub>3</sub>]
<br /><br />
In this operation, A<sub>2</sub>  is dimensioned<i> i</i>by <i>k</i>, 
  A3 is k by j, and A<sub>1</sub> is<i> i </i>by<i> j</i>.

<br /><br />Matrix Product Transpose  <br /><br />&nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] = {this.curlyStart}A] * {this.Start} [A<sub>3</sub>{this.curlyEnd}{this.curlyEnd}
<br /><br />In this operation, A2 is dimensioned i by k, and
  A<sub>1</sub> is <i>i  </i>by <i>k</i>.

<br /><br />Matrix Transpose Product<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] = {this.curlyStart}A<sub>2 
  </sub>{this.curlyEnd} * [A<sub>3</sub>] <br /><br />In this operation, 
  A2
    is dimensioned 
<i>j</i>  by <i>i</i>, 
  A<sub>3 </sub>is <i>j </i>by <i>k</i>, 
and 
  A<sub>1</sub> is <i>i </i>by <i>k</i>.

<br /><br />Matrix Inverse<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] = INVERSE [A<sub>2</sub>]
<br /><br />In this operation, 
  A<sub>2</sub>and A1 must be<i>i</i>  by <i>i</i>  (square) matrices.  If 
  A<sub>2</sub>is singular, but not identically zero, then 
  A<sub>1</sub>will be the  pseudoinverse.  
  A<sub>2</sub> is not modified in this operation.

<br /><br />Diagonal Matrix Generation
<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; [A] = \<i>v</i>&nbsp;&nbsp;&nbsp;   scalar variable right hand side
<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; [A] = \(<i>e</i>)&nbsp;&nbsp;&nbsp; scalar expression right hand side
<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] =\&lt;<b>A</b><sub>2</sub>&gt;&nbsp;&nbsp;&nbsp; array right hand side

<br /><br />In this operation, if the right hand side is a scalar, 
then the left hand side must be allocated.  If the right hand side 
is an array, then the left hand side may be unallocated, in which 
case it will be allocated as a square matrix with the number of rows 
and columns equal to the volume of the right-hand-side array.  Otherwise, 
the number of rows and columns of the left hand side must equal the 
volume of the right hand side.

 <i><br /><br />
 Matrix Row Meld</i> <br /><br />
 &nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] = [A<sub>2]</sub> /[A<sub>3</sub>]
<br /><br />
This operation builds matrix A1 by stacking martrix A2 on top of A<sub>3</sub>
 which may be identical) must have the same number of columns, and 
  [A<sub>1</sub>must initially be unallocated or by a matrix  of exactly the right shape.

<br /><br />
<i>Matrix Column Meld</i>
<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;<strong> [A</strong><sub><strong>1</strong></sub><strong>] = [A</strong><sub><strong>2</strong></sub><strong>,
A</strong><sub><strong>3</strong></sub>]
<br /><br />This operation builds matrix 
  A<sub>1</sub> by concatenating 
  A and 
  A<sub>3 </sub>together. 
  A<sub>2 </sub>and 
  A<sub>3</sub> (which may be identical) may have the same number 
of rows, and 
  A<sub>1</sub> must initially be unallocated, or be a matrix of exactly the right shape.

<br /><br /><i>Matrix Extraction</i><br /><br />
Extract a column :
<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp; <b>[A<sub>1</sub>] =&lt; [A&le;&gt;<sub>2</sub>], &lt;R&gt; , v &gt;</b>
<br />
&nbsp;&nbsp;&nbsp;&nbsp; 
<strong>[A</strong><sub>1</sub>] =&lt;[A><sub><strong>2</strong></sub>
<strong>], &lt;R, (e) </strong>
<br />
<br />Extract a   row:<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] =[<b>A<sub>2</sub>]</b> 
,<b> v</b> ,&lt;C&gt;
<br />
&nbsp;&nbsp;&nbsp;&nbsp; [A<sub>1</sub>] =[<b>A<sub>2</sub>],
 (<i>e ),&lt;C&gt; &gt;</i></b><br />
<br />Extract a partition:<br /><br />
&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&lt;[A<sub>1</sub>]=[A<sub>2</sub>],&lt;R,&lt;C

<br /><br />
In this operation, the elements of 
  A<sub>2</sub>are extracted according to the row indexes specified by the second 
argument and the column indexes specified by the third argument, where 
either may be scalars or arrays but must be reals, not integers).  The 
row and column dimensions of 
  A<sub>1</sub>  correspond to the number 
of elements of the second and third arguments respectively.  Initially 
  A<sub>1</sub> must be unallocated, or be an array  of exactly 
the right size and shape.  In the cases where asterisks are used, 
the index vector is internally generated.<br />

<h2>3.5. Utilities</h2>

There are two categories of built-in utilities, functions and procedures. 
The names used to call these utilities are aliases to the actual names.  The 
actual names always begin with FC or IFC, thus no conflict will arise 
if the user avoids these prefixes.  

<h3>3.5.1. Utility Functions</h3>

The following functions return scalar REAL*8 values:
<br /><br />
<table style={{width: '87%'}}>
<tbody>
  <tr>
    <td><b><i>#BETA (x,y)</i></b>&nbsp;</td>
    <td style={{width: '15px'}}>-&nbsp;</td>
    <td><i>Beta function of greater than 60, or a negative integer)</i></td>
  </tr>
  <tr>
    <td style={{height: '27px'}}><strong>#GAMMA(x)</strong></td>
    <td style={{height: '27px', width: '15px'}}>-&nbsp;</td>
    <td style={{height: '27px'}}><i>Gamma function of x ( which must not be zero, greater than 60, or a negative integer)</i></td>
  </tr>
  <tr>
    <td><b><i>#PROBINT (x)</i></b></td>
    <td style={{width: '15px'}}>-&nbsp;</td>
    <td><i>Probability integral of x (for x real and positive)</i></td>
  </tr>
</tbody>
</table>

&nbsp;<h3>3.5.1. Utility Command Calls</h3>
These utilities are procedures, called via the command call syntax 
shown.
<br /><br /><b>BESSEL</b><br /><br />Syntax:<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; @BESSEL(<i>x,n,bjn,byn,bin,bkn)</i>
<br /><br />Symbols:<br />
<table style={{width: '618px'}}>
<tbody>
  <tr>
    <td style={{width: '57px'}}><i>x</i></td>
    <td style={{width: '91px'}}>real*8</td>
    <td>independent varlaible (must not be zero or negative)</td>
  </tr>
  <tr>
    <td style={{width: '57px'}}><i>bjn</i></td>
    <td style={{width: '91px'}}>real*8 </td>
    <td>Bessel function of first kind of order n</td>
  </tr>
  <tr>
    <td style={{width: '57px'}}><i>byn</i></td>
    <td style={{width: '91px'}}>real*8</td>
    <td>Bessel function of second kind of order n</td>
  </tr>
  <tr>
    <td style={{width: '57px'}}><i>bin</i></td>
    <td style={{width: '91px'}}>real*8</td>
    <td>mdified Bessel function of first kind of order n</td>
  </tr>
  <tr>
    <td style={{width: '57px'}}><i>bkn</i></td>
    <td style={{width: '91px'}}>real*8 </td>
    <td>modified Bessel function of second kind of order n</td>
  </tr>
</tbody>
</table>

<br />ARANK <br /><br />Syntax
<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; @ARANK(<i>array,</i><i>irank)</i>
<br /><br />Symbols<br /><br />
<table>
<tbody>
  <tr>
    <td style={{width: '97px'}}><i>array</i></td>
    <td style={{width: '110px'}}>&nbsp;</td>
    <td>name of dynamic array</td>
  </tr>
  <tr>
    <td style={{width: '97px'}}><i>irank</i></td>
    <td style={{width: '110px'}}>integer&nbsp; &nbsp;</td>
    <td>returned rank of array name</td>
  </tr>
</tbody>
</table>

<br />ADIM <b>Syntax:</b> <br /><br />&nbsp;&nbsp;&nbsp;&nbsp; @ADIM(<i>array,</i>
<i>index,</i><i>idim</i> <br /><br />Symbols:<br /><br />
<table style={{width: '54%'}}>
<tbody>
  <tr>
    <td>array&nbsp;</td>
    <td>&nbsp;</td>
    <td>name of dynamic array&nbsp;</td>
  </tr>
  <tr>
    <td>index&nbsp;</td>
    <td>integer&nbsp;</td>
    <td>dimension index&nbsp;</td>
  </tr>
  <tr>
    <td>idim&nbsp;</td>
    <td>integer&nbsp;</td>
    <td>retuned dimension value&nbsp;</td>
  </tr>
  </tbody>
</table>
<br />

NODIAG <br /><br />Syntax:<br /><br />&nbsp;&nbsp;&nbsp;&nbsp; @NODIAG(<i>number)</i>
<br /><br />Symbol:<br /><br />
<table style={{width: '49%'}}>
<tbody>
  <tr>
    <td>number</td>
    <td>integer&nbsp;</td>
    <td>number of diagnostic message&nbsp;</td>
  </tr>
  </tbody>
</table>

<br />This utility suppresses diagnostic message printing of the particular 
numbered diagnostic, which must be one of the following: <br /><br />
<table style={{width: '100%'}}>
<tbody>
  <tr>
    <td style={{width: '83px'}}>Number&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>Diagnostic Message&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1001&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>DIVISION BY ZERO -- DIVISOR REPLACED WITH nnnnnn.n&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1006&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>(WARNING) CHANGE IN AN INDEPENDENT VARIABLE VALUE MAY INVALIDATE 
    EXISTING PARTIAL DERIVATIVES&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1009&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>A PRINT FORMAT SKIP COUNT OF nnnn IS INVALID -- COUNT SET TO 1&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1010&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>PRINT MARGIN (nnn) OUTSIDE VALID RANGE ( TO nnn) IS SET TO 1&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1011&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>PRINT PRECISION (nn)&nbsp;OUTSIDE VALID RANGE (1 TO 14) IS SET TO 7</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1012&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>PRINT FIELD WIDTH (nnn) OUTSIDE VALID RANGE (1 TO nnn) IS SET TO 21&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1013&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>PRINT COLUMN COUNT (nnn) OUTSIDE VALID RANGE (1 TO nn)&nbsp;IS SET TO nn</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1014&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>QUADRATURE ORDER LESS THAN 2 -- ORDER SET TO 2&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1015&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>QUADRATURE ORDER GREATER THAN 10 -- OEDER SET TO 10&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1017&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>INCOMPATIBLE PRINT FORMAT CONTROLS PREVENT USE, I.E. .....<br />LEFT 
    MARGIN nn RIGHT MARGIN nnn, COLUMN COUNT nn<br />FIELD WIDTH nn PRECISION 
    nn LABELS cccccccc -- PRINT<br />USES THE DEFAULT FORMAT&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1022&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>SINCE NO DERIVATIVES ARE BEING COMPUTED, $PARTIAL RETURNS A VALUE OF 
    ZERO&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1023&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>SINCE ONLY FIRST DERIVATIVES ARE BEIND COMPUTED, $PARTIAL2 RETURNS A 
    VALUE OF ZERO&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1026&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>INFINITE FIRST DERIVATIVE OF ASIN/ACOS -- REPLACED BY nnnnnn.n&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1030&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>EXCESS FLAGS PROVIDED TO A SOLVER ARE IGNORED&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1034&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>OUT-OF-RANGE NUMERIC EXPONENT IS REPLACED BY MAXIMUM VALUE (250)&nbsp;&nbsp; 
    [CK]&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1035&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>SQRT(0) HAS INFINITE DERIVATIVES -- SQRT(nnnnn.n) IS SUBSTITUTED&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1036&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>A**B HAS INFINITE DERIVATIVES -- THEIR VALUES ARE REPLACED BY 
    nnnnn.N&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1039&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>LOOKUP ARGUMNET IS OUTSIDE TABLE BOUNDS -- THE CLOSEST END POINT IS 
    RETURNED AND DERIVATIVES (IF ANY) ARE SET TO ZERO&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1042&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>TABLE COLUMNS BEYOND THE CURRENTLY SPECIFIED LIMIT (nn) ARE IGNORED&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1043&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>OUT-OF-RANGE ARGUMENT TO name (I.E. nnnnnn.nn) IS REPLACED BY THE 
    LIMIT (nnnnnn.nn)&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1044&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>OUT-OF-RANGE VALUE OF A**B (EQUIVALENT TO EXP (nnnnnn.nn) IS 
    RPLEACED BY THE LIMIT EXP (nnnnnn.nn)&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1045&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>INFINITE VALUE CALCULATED FOR SOLVER CONTROL RHO -- A VLAUE OF ONE 
    IS ASSUMED&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1047&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>WARNING ... STANDARD DEVIATION SET ARBITRARILY TO ZERO SINCE THE 
    POLYNOMIAL FIT HAS NO DEGREES OF FREEDOM&nbsp;</td>
  </tr>
  <tr>
    <td style={{width: '83px'}}>1048&nbsp;</td>
    <td style={{width: '29px'}}>&nbsp;</td>
    <td>WARNING ... REDUNDANT DATA REPLACED BY THEIR MEAN&nbsp;</td>
  </tr>
  </tbody>
</table>
</div>);

}
}
