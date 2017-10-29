import PropTypes from 'prop-types';
import React from 'react';

//import * as myStyles from './Styles.js'; //not used

export default class Chap1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {current_menu_item: this.props.current_menu_item};
  }

render() {
  return(<div>
     </div>
  );

}
}

// <h1>1. The Calculus Environment</h1>

// The FC Environment is a special software design for calculus processing, 
// consisting of:
// <ul>
// <LI>A set of environment programs</LI>

// <LI>A special memory organization</LI>

// <LI>A special set of data structures</LI>
// </ul>
// It involves the dynamic recasting of real variables into linked data 
// structures, and the overloading of real variable arithmetic operations 
// to facilitate differential arithmetic.  Thus real variables can exist 
// in two modes:<ul><LI>Ordinary mode - Real*8 variables containing normalized floating 
// point numbers, and</LI>

// <LI>Calculus mode - Real*8 variables containing pointers to 
// calculus operand structures, including partial derivative arrays.</LI>

// </ul>The contexts where real variables are in calculus mode are separate 
// mathematical domains, i.e. coordinate systems.  These contexts are 
// separate (lower) levels in program hierarchies, created by the action 
// of the calculus macro statements, i.e., they are below the macro statements 
// in the hierarchy.  In these calculus contexts, ordinary processing 
// of real variables is outlawed.  All real arithmetic and assignment 
// operations are overloaded.  Consequently all calls to lower level 
// procedures are limited. They must be:<p>(a) Calls to MODELS or FMODELS<Br /> />(b) Performed via INCALL or OUTCALL macro statements, 
// or<Br /> />(c) Not involve real variables.</p>

// <H2>   Environment Programs</H2>

// The environment programs are a large set of library subroutines that 
// make up the  bulk of calculus programs (often more than 90 %).  These 
// programs are organized into a central subsystem called the FC Virtual 
// Machine (FCVM) and a set of <MI>solver<D> subsystems.

// The FCVM contains the differential arithmetic primitives, the array 
// operation subroutines, the common solver interface subroutines, all 
// data and environment management subroutines, and common utilities 
// used by more than one solver.

// The solver subsystems are individual algorithms and polyalgorithms 
// designed to solve generic mathematical problems.  They are the solution 
// elements of calculus processes described in the next chapter.  Solvers 
// are invoked and controlled by the macro statements FIND, INITIATE, 
// and INTEGRATE, and they operate on MODEL and FMODEL procedures.     
// <div>
// <H2>  Memory Organization&nbsp; [REPLACE w simple abstraction]</H2>

// The environment memory is divided into two primary storage regions:
// <ul>
// <LI>The "Bucket":  a large common block (FC3000) which acts 
// as a bulk data memory to the FC virtual machine.  All of its internal 
// structures are dynamically managed by the FCVM;</LI>

// <LI>The Variables Dynamic Table (VDT): a computing buffer employed 
// for temporary storage of calculus mode variable values and for the 
// computation of calculus expressions.</LI> </ul>


// The sizing of these two storage regions is defined by the first two 
// parameters on the PROBLEM statement.

// <B><I>Bucket Structure </I></B>- The bucket is divided into three dynamic 
// regions as shown in Fig. 1-1.  The upper region is used for temporary 
// storage of partial derivative values.  The middle region is used for 
// temporary storage of arbitrary blocks of values such as arrays, and 
// the bottom region is a pair of stacks used for expression processing 
// and process management by the FCVM.     Each cell in the bucket is 
// a 64-bit double word used to store either real*8 values, a pair of 
// 32-bit integer pointers or an 8-character name.
// <Br /> />>

// <B><I>Variable s Dynamic Table (VDT)</I></B>  -  The VDT is a smaller common 
// block (FC3007) having the structure shown in Fig 1-2.

// The upper region of the VDT is allocated to calculus-mode variables 
// in the order that they are stored in a calculus process.  The lower 
// region is temporarily used as an execution stack during processing 
// of an expression, thus it is abandoned when the value of the expression 
// is stored.

// A variable cell in the VDT is two 64-bit cells, the upper containing 
// a real*8 value, and the lower containing up to two integer pointers.

// <B><I>Calculus-Mode Linkage</I></B>  -  When a real variable is converted 
// from ordinary mode to calculus mode, its value is moved from its original 
// address (variable-cell) to a new address in the VDT; and a cross-linkage 
// is established between the variable cell and the VDT entry.  This 
// mode conversion occurs whenever an assigned expression is differentiated 
// and assigned to a variable, or when a constant is assigned to a variable 
// that was previously differentiated.  These two cases are illustrated 
// in Figure 1-3 and Figure 1-4 respectively.

// In the first case, the partial derivatives resulting from differentiating 
// the expression are stored in the upper region of the bucket and a 
// pointer to this "partials node" is stored in the first integer cell 
// of the VDT entry.  Also a pointer to the original variable cell is 
// stored in the partials node.

// In the second case, where a constant is assigned to a variable that 
// previously had partials, the partials node is destroyed (returned 
// to free storage) and a pointer to the original variable cell is stored 
// in the second integer cell of the VDT entry.
// </div>
// <H2>1.3 Macro Statements</H2>

// The FC macro statements are the extensions to FORTRAN 77 syntax that 
// are translated by the FC translator into FORTRAN 77 statements.  The 
// following is the identifying prefix of each macro statement and a 
// short description of its purpose:

// <Br />@MINOR HEADING = Declarations :

// @NOBULTAB = <B>PROBLEM<D>   : Program Heading: used for program sizing 
// and  initialization

// @NOBULTAB = <B>CONTROLLER<D>  :     Solver controller subroutine heading: 
// used to pass control            parameters to solvers

// @NOBULTAB = <B>MODEL<D>       : Model subroutine heading:  Real assignment 
// statements are<R>
//             translated into overloaded  arithmetic form in a MODEL.

// @NOBULTAB = <B>FMODEL<D>    : Function Model Heading:  Real assignment 
// statements are <R>
//             translated into overloaded arithmetic form in an FMODEL.

// @NOBULTAB = <B>PROCEDURE<D> : IMPLICIT REAL*8 subroutines

// @NOBULTAB = <B>OPERATOR <D> : IMPLICIT REAL*8 function subprograms

// @NOBULTAB = <B>DYNAMIC<D>     : Dynamic variable declaration: Defines 
// real arrays to be <R>
//             allocated and deallocated dynamically

// @NOBULTAB = <B>GLOBAL<D>      : Generic  scope declaration: Defines 
// variable classes included<R>
//             in automatic generation of common statements

// @NOBULTAB = <B>GRAPHICS<D>    : Graphics output mode selection

// @MINOR HEADING = Executable Statements:  

// @NOBULTAB = <B>FIND<D>        : Constraints solving and optimization

// @NOBULTAB = <B>INITIATE<D>      : Initial value problem definition

// @NOBULTAB = <B>INTEGRATE<D>   : Initial value problem function generation

// @NOBULTAB = <B>INVOKE<D>      : Differential arithmetic control

// @NOBULTAB = <B>ALLOT<D>       : Dynamic array creation and sizing

// @NOBULTAB = <B>PURGE<D>         : Dynamic array deletion

// @NOBULTAB = <B>INCALL<D>        : Model input subroutine call

// @NOBULTAB = <B>OUTCALL<D>       : Model output subroutine call     

// @NOBULTAB = <B><I>array</I></B> =<D>        : Array arithmetic assignment 
// statements

// @NOBULTAB = <B>[<BI>matrix<B>]  =     : <D>Matrix operations statements<B>

// @NOBULTAB = <B><N>@<BI>verb<B>(<MI>arguments<B>)<D>   : command call 
// (general form)

// @NOBULTAB = <B><N>@STREAM<N>      : <D>output stream selection<B>        

// @NOBULTAB = <B> @PRINTER      : <D>PRINTER  stream unit specification<B>       

// @NOBULTAB = <B><N>@SCROLL       : <D>SCROLL stream unit specification<B>         

// @NOBULTAB =  <B>@SECTION <D><N>   : SCROLL  section partitioning<B>                

// @NOBULTAB = <B>ROWPRINT<D>      : Array report generation by row

// @NOBULTAB = <B>COLPRINT<D>      : Array report generation by column

// @NOBULTAB = <B>VECPRINT<D>      : Vector report generation

// @NOBULTAB = <B>MATPRINT<D>      : Matrix report generation

// @NOBULTAB = <B>TABULATE<D>      : Tabular report generation

// @NOBULTAB = <B>GRADPRINT<D>     : Gradient report generation

// @NOBULTAB = <B>HESSPRINT<D>       : Hessian report generation

// @NOBULTAB = <B>PARDPRINT<D>     : Partial Derivatives report generation

// @NOBULTAB = <B>USE<D>           : Report format control

// @NOBULTAB = <B>RESET FORMAT<D>  : Reset default format controls

// The following sections describe the syntax of these statements and 
// further describe their usage.  Braces are used to denote optional 
// syntax.

// @PAGE BREAK = 

// <H3>  Context Declaration Syntax</H3>

// The following describes the syntax of the macro statements which initiate 
// and qualify procedure contexts.  Further descriptions of these statements 
// are given elsewhere as noted in each case

// @ITEM HEAD =    PROBLEM Declaration

// @MINOR HEADING =  Syntax:

// @STATFORMAT =  <B>PROBLEM<D> <BI> <MI>name<D> {<B>(<MI>bucketsize<D> 
// {<B>,<MI>vdtsize<D>{<B>,<MI>stacksize<D>}}<B> )<D> }

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>name<D>   : identifying name (1-8 characters) 

// @NOBULTAB = <MI>bucketsize<D>   : integer literal        =  size of bucket 
// storage (default =5000) 

// @NOBULTAB = <MI>vdtsize<D>      : integer literal   = size of VDT  (default 
// = 1000) 

// @NOBULTAB = <MI>stacksize<D>    : integer literal   = size of stack 
// region of bucket (default = 1000)

// This declaration generates a main program (FC000000) containing sized 
// common blocks for the bucket and VDT storage, and initialization data 
// statements.  The program unit identified by name becomes a subroutine 
// which is called by the main program.

// @ITEM HEAD =    CONTROLLER Declaration

// @MINOR HEADING =  Syntax:

// @STATFORMAT =  <B>CONTROLLER<D> <MI>name<B> (<MI>solver<B>)  <D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>name<D>     : identifying name (1-8 characters) 

// @NOBULTAB = <MI>solver      <D>: solver name

// This declaration generates a subroutine heading and a common block 
// declaration for the common block /C<MI>solver<D>/ used to communicate 
// control parameters to the solver.

// @ITEM HEAD =    MODEL Declaration

// @MINOR HEADING =  Syntax:

// @STATFORMAT =  <B>MODEL<D>  <MI>name <D>{<B>(<MI>parameters<B>) <D>}

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>name    <D> : identifying name (1-8 characters)  

// @NOBULTAB = <MI>parameters<D> : list of dummy parameters

// This declaration generates a subroutine heading and initiates translation 
// of the real variable assignment statements into overloaded differential 
// arithmetic assignments.

// @ITEM HEAD =    FMODEL Declaration

// @MINOR HEADING =  Syntax:

// @STATFORMAT = <B> FMODEL <D><N><MI>name <D> <B>(<D>{ <MI>parameters<D>}<B>)<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>name      <D>: identifying name (1-8 characters) 

// @NOBULTAB = <MI>parameters<D> : list of dummy parameters

// This declaration generates a real function heading and initiates translation 
// of the real variable assignment statements into overloaded differential 
// arithmetic assignments.

// @ITEM HEAD =    PROCEDURE Declaration

// @MINOR HEADING = Syntax:

// <LI><B>PROCEDURE<D> <MI>name <D>{ <B>(<MI>parameters<B>)<D> }</LI>


// This declaration is an alias for a FORTRAN subroutine containing

// <LI>IMPLICIT REAL*8 (A-H,O-Z)

// as the first statement.  The use of this form is encouraged in order 
// to insure type compatibility with other FORTRAN CALCULUS subprograms.</LI>

// @ITEM HEAD =    OPERATOR Declaration

// @MINOR HEADING = Syntax:

// <LI><B>OPERATOR<D> <MI>name<D> { <B>(<MI>parameters<B>)<D> }</LI>

// This declaration is an alias for a FORTRAN REAL*8 FUNCTION containing

// <LI>IMPLICIT REAL*8 (A-H,O-Z)

// as the first statement.  The use of this form is encouraged in order 
// to insure type compatibility with other FORTRAN CALCULUS subprograms.</LI>

// @ITEM HEAD =    DYNAMIC Declaration

// @MINOR HEADING =  Syntax:

// @STATFORMAT = <B> DYNAMIC <BI> <MI>v<MIV>1<MI>,...,v<MIV>n<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB =  <MI>v<MIV>1<D>,...,<MI>v<MIV>n<MV>     <D>: variable names

// This declaration specifies variables which may be allocated as real 
// dynamic arrays using array assignment statements or the ALLOT statements, 
// and thereafter deleted using the PURGE statement.  The FORTRAN equivalent 
// of the declared variables are integer scalars used as pointers to 
// arrays created as blocks of storage in the bucket. Subscripted references 
// to these variables are translated into indexed positions in the bucket 
// vector.  Subscripted (i.e. dimensioned) reference to these variables 
// may not appear in common statements and when appearing unsubscripted 
// in common must also appear in DYNAMIC statements in all program units 
// having the same common, or be declared integer (implicitly or explicitly).  Dummy 
// arguments of subroutines, MODELs or FMODELs may not be dynamic variables. 


// @ITEM HEAD =    GLOBAL Declaration

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>GLOBAL<D> <MI>classes<D> {<B>;<D> <B>IN<D> <MI>procedures<D> 
// }

// @MINOR HEADING = Symbols:

// @NOBULTAB = <MI>classes   <D>:<N><MI>a list of : <B>REALS<D>|<B>CHARACTERS<D>|<B>INTEGERS<D>|<B>PRINCIPALS<D>|<B>ALL<D>

// <LI>where REALS denotes all real variables, CHARACTERS denotes 
// all character variables, INTEGERS denotes all integer variables, PRINCIPALS 
// denotes all variables appearing in FIND, INITIATE, or INVOKE statements, 
// and ALL denotes all program variables.</LI>

// @NOBULTAB = <MI>procedures  <D>:  a list of procedure names

// This statement applies to an entire program and if used must precede 
// the PROBLEM declaration.  It is used to define the scope of all of 
// the variables in a given class as global within the named procedures.  It 
// causes the translator to collect all variables in the specified classes 
// and to include them in a common block /GLOBAL/.  Arrays declared in 
// DIMENSION statements are included in dimensioned form.  Thus the DIMENSION 
// statements only need appear once in the program. 

// @ITEM HEAD =    GRAPHICS Declaration

// @MINOR HEADING = Syntax:

// <LI><B>GRAPHICS  SCREEN<D>|<B>FILE<D>|<B>BOTH<D></LI>

// This statement applies to the entire program, and if used must precede 
// the PROBLEM declaration.  It is used to select the mode of graphics 
// output.  Thus if effects the selection of graphics utilities to be 
// merged with the program by the linker.  A different set of utilities 
// are associated with each option.  In the absense of this declaration, 
// the default graphics mode is SCREEN.

// @PAGE BREAK = 

// <H3> Computing and Data Management Syntax</H3>

// The following describes the syntax of the executable macro statements 
// which perform computing and data management operations.  Further descriptions 
// of these statements are given elsewhere as noted in each case.

// @ITEM HEAD =    FIND Statement

// @MINOR HEADING =  Syntax (general form):

// @STATFORMAT = <B>FIND<D> <BI>i<MI>ndependents<B>;<D> <B>IN<D> <MI>modelcall<B>;<D> 
// <B>BY<D> <MI>solver <D>{(<MI>controller<D>)}<B>;<D>

// @STATFORMAT =   {{<B>WITH<D>}<B>LOWER<D>{<B>S<D>} <MI>bottoms<BI>;<D>} 
// {{<B>WITH<D>|<B>AND<D>}<B> UPPER<D>{<B>S<D>} <MI>tops<D>;}

// @STATFORMAT =   {{<B>WITH<D>|<B>AND<D>} <B>BOUND<D>{<B>S<D>}<MI>bounds<B>;<D>} 
// {{<B>WITH<D> |<B>AND<D>} <B>SCALE<D>{<B>S<D>}<MI>scales<D> <B>;<D>} 


// @STATFORMAT =   {{<B>WITH<D>|<B>AND<D>} <B>REPORTING<D> <MI>names<D>;} 
// {{<B>WITH<D>|<B>AND<D>} <B>FLAG <MI>flag<D>;}

// @STATFORMAT =   {{<B>WITH<D>|<B>AND<D>} <B>HOLDING<D> <MI>inequalities<D>;}

// @STATFORMAT =  {{<B>WITH<D>|<B>AND<D>} <B>MATCHING<D> <MI>equalities<D>;} 


// @STATFORMAT = <B>TO<D> <MI>criterion<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>independents<D> : <MI>varlist<D>  of independent variables

// @NOBULTAB = <MI>modelcall<D>    :       name {(parameters)} 

// @NOBULTAB = <MI>solver<D>     :       solver name 

// @NOBULTAB = <MI>controller<D>   :       controller name 

// @NOBULTAB = <MI>bottoms   <D>:<MI> varlist<D>   of lower limits on independents 


// @NOBULTAB = <MI>tops<D>     : <MI>varlist<D>  of upper limits on independents 


// @NOBULTAB = <MI>bounds      <D>: <MI>varlist<D>   of bounds on independents 
// step changes 

// @NOBULTAB = <MI>scales      <D>: <MI>varlist<D>   of scale factors on 
// independents 

// @NOBULTAB = <MI>names<D>      : <MI>namelist<D>   of auxiliary model variables 


// @NOBULTAB = <MI>flag<D>     :       flag variables (real) 

// @NOBULTAB = <MI>inequalities<D> : <MI>varlist<D>  of inequality constraint 
// variables

// @NOBULTAB = <MI>criterion<D>    : one of the following:

// @NOBULTAB-1 =         <B>MAXIMIZE<D>  <MI>objective<D>

// @NOBULTAB-1 =         <B>MINIMIZE<D>  <MI>objective<D> 

// @NOBULTAB-1 =         <B>EXTREMIZE<D> <MI>objective <D>

// @NOBULTAB-1 =         <B>MATCH<D> <MI>constraints<D>

// @NOBULTAB = <MI>objective<D>    :         scalar variable or array element 


// @NOBULTAB = <MI>constraints   <D>: <MI>varlist<D>     of equality constraints

// @NOBULTAB = <MI>varlist<D>      :         <MI>element<D> {,<MI>varlist<D>} 


// @NOBULTAB = <MI>element<D>    :         scalar|array|<MI>array-element<D>|<MI>array-part 
// <D>

// @NOBULTAB = <MI>array-element<D>  :       array-name<B> (<D>subscript 
// expression<B>)<D> 

// @NOBULTAB = <MI>array-part<D>   :         array-name<B> [<D>size<B>]<D>

// @NOBULTAB = <MI>namelist<D>   :       name {,<MI>namelist<D>}

// This statement is used for constraint matching (simultaneous equation 
// solving) and all forms of mathematical optimization (unconstrained-nonlinear, 
// constrained nonlinear, linear, linear and mixed integer, zero-one, 
// etc.).  Allowed phrases in FIND statements depend upon individual 
// solvers, as specified in chapters 4, 6 and 7. The FIND statement performs 
// two roles with respect to the calculus environment: (a) it defines 
// the problem to be solved and its process of solution, and (b) it controls 
// the solution process.

// @ITEM HEAD =    INITIATE Statement

// @MINOR HEADING =  Syntax (general form):

// @STATFORMAT = <B>INITIATE<D> <MI>solver<D> {<B>(<MI>controller<B>)<D>}<B>;<D> 
// {{<B>WITH<D>} <B>FLAG<D> <MI>flag<D>;} 

// @STATFORMAT =  {{<B>WITH<D>|<B>AND<D>} <B>UPPER<D>{<B>S<D>} <MI>tops<B>;<D>}

// @STATFORMAT =  {{<B>WITH<D>|<B>AND<D>} <B>LOWER<D>{<B>S<D>} <MI>bottoms<B>;<D>}

// @STATFORMAT = <B>FOR<D> <MI>model<B>;<D> <B>EQUATIONS<D> <MI>rates<B>/<MI>states<B>;<D> 


// @STATFORMAT = <B>OF<D> <MI>independent<B>; STEP<MI> increment<B>; 
// TO<D> <MI>limit<D>

// @STATFORMAT = 

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>solver      <D>:        solver name 

// @NOBULTAB = <MI>controller<D>   :         controller name

// @NOBULTAB = <MI>flag<D>     :         flag variable (real)

// @NOBULTAB = <MI>tops      <D>: <MI>varlist<D>     of<N>upper limits on 
// states 

// @NOBULTAB = <MI>bottoms<D>    : <MI>varlist<D>    of<N>lower limits on 
// states 

// @NOBULTAB = <MI>model<D>      :         model name 

// @NOBULTAB = <MI>rates<D>      : <MI>varlist<D>    of ordinary derivative 
// variables 

// @NOBULTAB = <MI>states      <D>: <MI>varlist<D>     of dependent variables 
// (output) 

// @NOBULTAB = <MI>independent <D>:        independent variable 

// @NOBULTAB = <MI>increment   <D>:        nominal integration step size 


// @NOBULTAB = <MI>limit<D>      :         integration limit 

// @NOBULTAB = <MI>varlist<D>      :         <MI>element<D> {,<MI>varlist<D>}

// @NOBULTAB = <MI>element<D>    :       scalar|array|<MI>array-element<D>|<MI>array-part<D> 


// @NOBULTAB = <MI>array-element<D>  :       array-name (subscript expression) 


// @NOBULTAB = <MI>array-part<D>   :         array-name <B>[<D>size<B>]<D>

// This statement is used to define initial value problems of ordinary 
// differential equations.  It specifies the integration solver; the 
// model containing the differential equations; the ordinary derivative, 
// dependent and independent variables of the equations; the nominal 
// integration step size (usually varied by the solver); and the upper 
// limit of integration.  The control of the solution process is subsequently 
// performed by the INTEGRATE statement.

// @ITEM HEAD =    INTEGRATE  statement

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>INTEGRATE<D>  <MI>model<B>;<D> <B>BY<D> <MI>solver<D>

// @MINOR HEADING = Symbols:

// @NOBULTAB = <MI>model<D>    :     model name

// @NOBULTAB = <MI>solver<D>   :     solver name.

// This statement is used to generate the integral functions of the differential 
// equations of the model from the current value of the independent variable 
// to the <MI>limit<D> value.

// @ITEM HEAD =    TERMINATE  statement

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>TERMINATE<D>  <MI>model<D>

// This statement is used to release the model from association with 
// a solver, including any temporary storage allocated for integration. 


// @ITEM HEAD =    INVOKE statement

// @MINOR HEADING =  Syntax:

// @STATFORMAT = <B>INVOKE   GRADIENTS<D>|<B>HESSIANS<D>|<B>ORDER<D>(<MI>intvar<B>) 
// <D><N><B><N> ON<MI> independents<B>;<D> 

// @STATFORMAT = <B>IN<D> <MI>modelcall<D>

// @MINOR HEADING =   Symbols:

// @NOBULTAB = <MI>intvar      <D>:        integer variable 

// @NOBULTAB = <MI>independents<D> : <MI>varlist<D>    of independent 
// variables 

// @NOBULTAB = <MI>modelcall<D>    :         model-name {<B>(<D>parameters<B>)<D>}

// @NOBULTAB = <MI>varlist<D>      :         <MI>element<D> {,<MI>varlist<D>}

// This statement is used to execute a model using differential arithmetic, 
// producing partial derivatives of all dependent variables computed 
// in the model with respect to the independents.

// @ITEM HEAD =    ALLOT statement

// @MINOR HEADING =  Syntax:

// @STATFORMAT =  <B>ALLOT<D> <MI>arraylist<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>arraylist   <D>:        <MI>array<D> {,<MI>arraylist<D>}

// @NOBULTAB = <MI>array<D>      :       <MI>array-name<D> (<MI>d<MIV>1<D>{,<MI>d<MIV>2<D>,...<MI>d<MIV>7<D>})

// @NOBULTAB = <MI>array-name<D> :       variable previously in a DYNAMIC 
// declaration

// @NOBULTAB = <MI>d<MIV>1<D>...<MI>d<MIV>7<D>     :         integer dimension 
// expressions

// This statement allocates dynamic arrays in the managed region of the 
// bucket array.  If the array is already allocated, it changes the allocation, 
// preserving unaffected values.



// @ITEM HEAD =    PURGE statement

// @MINOR HEADING =  Syntax:

// @STATFORMAT =  <B>PURGE<BI> <MI>v<MIV>1<MI>,...v<MIV>n<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB =  <MI>v<MIV>1<D>,...,<MI>v<MIV>n<D>        dynamic variables

// This statement deletes the dynamic arrays from the managed region 
// of the bucket, returning the space to free storage, and sets the pointer 
// values to zero.

// @ITEM HEAD =    Array Assignments

// @MINOR HEADING =  Syntax (general form):

// @STATFORMAT =  <B><<<MI>darr<B>>><D> = <MI>rhs<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB = <MI>darr    <N><D>:       dynamic array 

// @NOBULTAB = <MI>rhs<D>      <N>:      dynamic array expression  :  one 
// of the following:

// @NOBULTAB-1 = {<B>-<D>}<MI>array<D>           : static array assignment 


// @NOBULTAB-1 = {<B>-<D>}<B><<<MI>darr<B>>><D>            : dynamic array assignment 


// @NOBULTAB-1 = {<B>-<D>}<MI> element<D>            : scalar to array assignment

// @NOBULTAB-1 = {<B>-<D>}<B>(<MI>expression<B>)<D>            : scalar to 
// array assignment 

// @NOBULTAB-1 = <B>| <MI>darr<B>| <D>             : absolute value array assignment 


// @NOBULTAB-1 = <B>| <MI>element<B>|<D>             : absolute value scalar 
// to array assignment 

// @NOBULTAB-1 = <B>| (<MI>expression<B>) |            :  <D>absolute value 
// scalar to array assignment<B> 

// @NOBULTAB-1 = <B><<<MI>darr<B>>><D> <B>+<D>|<B>-<D> |<B>*<D>| <B>/<D> 
// |<B> **<D> <B><<<MI>darr<B>>><D>    : array - array arithmetic

// @NOBULTAB-1 = <B><<<MI>darr<B>>>+<D>|<B>-<D> |<B>*<D>|<B> / <D>|<B> 
// **<BI> <MI>element<B>     <D>: array - scalar arithmetic<B>

// @NOBULTAB-1 =  <MI>element<D> <B>+<D>|<B>-<D> |<B>*<D>|<B> / <D>| 
// <B>**<D> <B><<<MI>darr<B>>><D>      : scalar - array arithmetic 

// @NOBULTAB-1 = <B><<<D>darr<B>>><D> <B>+<D>|<B>-<D> |<B>*<D>|<B> / <D>| 
// <B>**  (<MI>expression<B>)<D>   : array - scalar arithmetic

// @NOBULTAB-1 =  <B>(<MI>expression<B>)<D> <B>+<D>|<B>-<D>|<B>*<D>|<B>/<D>|<B>**<D> 
// <B><<<MI>darr<B>>><D>     : scalar - array arithmetic 

// @NOBULTAB-1 = <B> EIGEN [<MI>darr<B>]<D> {<B>VECTORS [<MI>darr<B>]<D>} 
//   : eigenvalues of matrix 

// @NOBULTAB-1 = <B> SORT [<MI>darr<B>]            :  <D>array sort<B>

// @NOBULTAB-1 = <B>REVERSE  <<<MI>darr<B>>><D>          : array reverse 

// @NOBULTAB-1 = <B>RANK <<<MI>darr<B>>><D>            : array rank 

// @NOBULTAB-1 = <B>GRAD(<MI>element<B>)<D>

// @NOBULLET-1 = <B>GRAD((<MI>expression<B>))<D> 

// @NOBULLET-1 = <B>HESS(<MI>variable<B>)<D>

// @NOBULTAB-1 = <B>HESS((<MI>expression<B>))<D>

// @NOBULTAB-1 = <B>DATA(<MI>value<MIV>1<MI>, ..., value<MIV>n<B>)<D> 


// @NOBULTAB-1 = <B><<<MI>darr<B> ,<MI>row<B> , <MI>col<B> >><D>         : 
// element selection 

// @NOBULTAB-1 = <B><<<MI>darr<B> ,<MI> dvect<MIV>r<B> , <MI>col<B> >><D>        : 
// column selection 

// @NOBULTAB-1 = <B><<<MI>darr<B> , <MI>dvect<MIV>r<B> ,<D> <MI>dvect<MIV>c<D> 
// <B>>><D>      : partition selection 

// @NOBULTAB-1 = <B><<<MI>darr<D> <B>, <MI>row<BI> <B>, <MI>dvect<MIV>c 
// <B>>><D>        : column selection

// @NOBULTAB = <MI>array<D>          : static array

// @NOBULTAB = <MI>element<D>        : scalar or array element (static or 
// dynamic)

// @NOBULTAB = <MI>expression<D>         :  real scalar expression with at 
// least one operator

// @NOBULTAB = <MI>row<D>, <MI>col<D>        : scalar or array elements 


// @NOBULTAB = <MI>dvect<D>          : dynamic vector

// @NOBULTAB = <MI>value<D>          : scalar literal or element

// Further description of these operations is given in chapter 3

// @ITEM HEAD =    Matrix Assignments

// @MINOR HEADING =  Syntax (general form):

// @STATFORMAT =  <B>[<D> <MI>dmat <B>] <D>= <MI>rhs<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB =  <MI>dmat<D>    : dynamic matrix (2 dimensional array)

// @NOBULTAB =  <MI>rhs<D>     : dynamic matrix expression : one of the 
// following:

// @NOBULTAB-1 = <B>{<D> <MI>dmat<D> <B>}      :  <D>matrix transpose<B>

// @NOBULTAB-1 = <B>[<D> <MI>dmat<MIV>1<B> ]*[ <MI>dmat<MIV>2<D> <B>] 
// <D>   :  matrix product

// @NOBULTAB-1 = <B>[<D> <MI>dmat<MIV>1<B> ]*{ <MI>dmat<MIV>2<D> <B>}<D> 
//     :  matrix product transpose

// @NOBULTAB-1 = <B>{<D> <MI>dmat<MIV>1<B> }*[<D> <MI>dmat<MIV>2<D> <B>]<D> 
//     :  matrix transpose product

// @NOBULTAB-1 = <B>INVERSE [<D> dmat <B>]<D>      :  matrix inverse 

// @NOBULTAB-1 = <B>[<D> dmat<MV>1<D> <B>/<D> dmat<MV>2<D> <B>]<D>       :  row 
// meld 

// @NOBULTAB-1 = <B>[<D> <MI>dmat<MIV>1<D> <B>,<D> <MI>dmat<MIV>2<D> 
// <B>] <D>      :  column meld

// Further description of these operations is given in chapter 3.

// @ITEM HEAD =    INCALL statement

// @MINOR HEADING =  Syntax:

// @STATFORMAT =  <B>INCALL<D>  <MI>name <B>(<MI>arg<MIV>1<D>{<B>,<MI>arg<MIV>2<MI>,...arg<MIV>n<D>}<B>)<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB =  <MI>name<D>      : subroutine name 

// @NOBULTAB = <MI>arg<MIV>1<D>, <MI>arg<MIV>2<D>    : argument variable

// This statement is used to call an ordinary FORTRAN subroutine from 
// a MODEL procedure for the purpose of receiving input from the subroutine.  If 
// any of the argument variables are real, including dynamic reals, they 
// will nominally be in calculus mode in the model. Thus an ordinary 
// call (i.e. from MODEL to MODEL) will transmit the real arguments in 
// calculus mode.  INCALL converts the incoming arguments from ordinary 
// mode to calculus mode.

// @ITEM HEAD =    OUTCALL statement

// @MINOR HEADING =  Syntax:

// @STATFORMAT =  <B>OUTCALL<D>  <MI>name <B>(<MI>exp1<D>{<B>,<MI>exp2,...expn<D>}<B>)<D>

// @MINOR HEADING =  Symbols:

// @NOBULTAB =  <MI>name <D>     :  subroutine name

// @NOBULTAB = <MI>exp<MIV>1<D>, <MI>exp<MIV>2 <D>     :  argument expressions 


// This statement is used to call an ordinary FORTRAN subroutine from 
// a MODEL procedure for the purpose of transmitting output to the subroutine.  Real 
// variables appearing in the argument expressions will nominally be 
// in calculus mode in the model.  OUTCALL converts the outgoing variable 
// values from calculus mode to ordinary mode before the call is made.

// <H3> Command Calls</H3>

// The command call is a class of macro statements which usually translates 
// into a call to a special purpose library subroutine known to the FC 
// translator.  It takes the form

// <LI><B> @<BI>name <B>(<MI>arguments<B>)<D>>

// where <BI>name<D> is the command identifier, which designates the 
// subroutine to be called. Both the <BI>name<D> and the <MI>arguments<D> 
// may be translated.</LI

// This form may also be used for user-defined subroutine calls.  When 
// employed in calculus context (in a MODEL  or FMODEL) a command call 
// is translated as an OUTCALL.   This is particularly convenient for 
// the modularization of graphical output subroutines for use as "commands".

// @PAGE BREAK = 

// <H3>   Output Streams and Report Generation</H3>

// <BI>Output Streams<D> - In addition to ordinary FORTRAN I/O, FC supports 
// three output streams for preformatted output reports:

// <LI>CONSOLE - 80 column sequential standard output</LI>

// <LI>SCROLL -<N>80 column contiguous set of "section" files</LI>

// <LI>PRINTER - l32 column sequential file</LI>

// @ITEM HEAD =  @STREAM - Routing output reports

// At any time during program execution, one of these is designated as 
// the "current" output stream.  The current stream is selected by the 
// @STREAM command call,  as follows:

// <LI><B>  @STREAM(<MI>n<B>)<MI></LI>

// where <MI>n<D> is an integer expression whose value selects the output 
// stream as follows:

// @NOBULTAB = negative    :  CONSOLE    

// @NOBULTAB = zero      :  PRINTER  

// @NOBULTAB = positive    :  SCROLL

// The user may generate output to the individual streams via FORTRAN 
// WRITE statements by referencing the logical unit numbers assigned 
// to the streams.

// The CONSOLE stream is always associated with standard output, so its 
// logical unit number is the traditional FORTRAN unit 6.

// The PRINTER stream file name is "PRINTER.PRN", and its default unit 
// number is 7.

// @ITEM HEAD =  @OUTDIAGS - Routing diagnostic output

// Ordinarily, diagnostic messages are printed to the CONSOLE (standard 
// output) if no @STREAM command has been executed.  When a @STREAM command 
// is executed, diagnostic output is also routed along with reports.  
// In order to route diagnostic output separately the @OUTDIAGS command 
// is used:

// <LI> <B>@OUTDIAGS(<MI>n<B>)<D></LI>

// where <MI>n<D> has the same usage as for @STREAM.

// @PAGE BREAK = 

// @ITEM HEAD =  @OUTMERGE - Merging report and diagnostic streams

// The @OUTMERGE command causes the diagnostic stream and the report 
// stream to be merged, so that routing of both streams is subsequently 
// controlled by @STREAM. This command may also be used to switch streams:

// <LI> <B> @OUTMERGE(<MI>n<B>)<D></LI>

// where n has the same usage as for @STREAM.

// @ITEM HEAD =  @PRINTER - Assigning the PRINTER stream unit number

// The unit number for the PRINTER stream may be changed using the command 
// call

// <LI> <B>  @PRINTER(<MI>unit<B>)<D></LI>

// where <MI>unit<D> is an integer.

// @ITEM HEAD =  @SCROLL - Assigning the SCROLL stream unit number

// The unit number for the SCROLL stream may be changed using the command 
// call

// <LI><B>  @SCROLL(<MI>unit<B>)<D></LI>

// where <MI>unit<D> is an integer.

// @ITEM HEAD =  @SECTION - Separating SCROLL output into sections

// The SCROLL stream is a succession of "section" files having the names 
// SCROLL00.000 to SCROLL99.999, and its default unit number is 8.  Also 
// associated with the SCROLL stream is a table-of-contents file named 
// SCROLL.TOC.

// The size and significance of SCROLL sections are under user control. 
// SCROLL output may be segmented into sections of arbitrary length by 
// the command call

// <LI> <B> @SECTION(<MI>title<B>)<D></LI>

// where <MI>title<D> is a character expression.  This statement closes 
// the previous section file, opens its successor, and enters the title 
// string in the SCROLL table-of-contents file.

// Whenever the SCROLL stream is used for output reports (iteration reports 
// and summary reports), each report is written on a separate SCROLL 
// section, and a report title line is written to the SCROLL table- of-contents.

// The output of the SCROLL stream may be perused using a special SCROLLER 
// program, or may be copied to a single file for printing.



// <BI>Preformatted Reports<D> - Preformatted output reports may be generated 
// by the statements ROWPRINT, COLPRINT, VECPRINT, MATPRINT, TABULATE, 
// GRADPRINT, HESSPRINT, AND PARDPRINT.  These statements produce reports 
// on any of the preselected output streams according to their relation 
// to the prior execution of a @STREAM statement.

// Report formats for ROWPRINT, COLPRINT,  and TABULATE have controllable 
// specifications, as follows:

// @TABLE HEAD = Specification   Usage               Preset

// @TABLE ITEM = LABELS  Controls printing of variable names     "on"

// @TABLE ITEM = SKIPS     Number of lines to be skipped before     1<R>
//     each report 

// @TABLE ITEM = MARGIN  Number of blank characters in left       1<R>
//     print margin

// @TABLE ITEM = FIELDS    Number of data fields         5<$FPRINTER stream> 
// or 3<$FSCROLL or CONSOLE  stream>

// @TABLE ITEM = WIDTH   Width of data fields            21

// @TABLE ITEM = DIGITS    Number of significant digiits          7



// @ITEM HEAD =    USE Statement

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>USE<D> {<B>NO<D>} <B>LABELS<D>

// @STATFORMAT = <B>USE<D> <MI>number<D> <B>SKIPS<D>

// @STATFORMAT = <B>USE<D> <MI>number<D> <B>MARGIN<D>

// @STATFORMAT = <B>USE<D> <MI>number<D> <B>FIELDS<D> <MI>width<D> <B>WIDE<D>

// @STATFORMAT = <B>USE<D> <MI>number<D> <B>DIGITS<D>

// @MINOR HEADING = Symbols:

// @NOBULTAB = <MI>number<D> : integer literal

// @NOBULTAB = <MI>width<D>    : integer literal

// This statement is used to specify the various aspects of the report 
// format for the statements ROWPRINT, COLPRINT, and TABULATE.

// @ITEM HEAD =    RESET Statement

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>RESET FORMAT<D>

// This statement is used to restore the preset default values of the 
// format specifications.

// @ITEM HEAD =    ROWPRINT  and COLPRINT

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>ROWPRINT<D>|<B>COLPRINT<D> {<B>[<MI>title<B>]<D>} 
// <MI>list<D>

// @MINOR HEADING = Symbols:

// @NOBULTAB = <MI>title   <D>:  character string

// @NOBULTAB = <MI>list<D>     :  <MI>element<D> {,<MI> list<D>}

// @NOBULTAB = <MI>element<D>  : scalar|array|array-element|array-part|expression

// These statements cause sequential printing of both the names and values 
// of the designated elements in a report paragraph having the heading:

// @STATFORMAT = {title} VARIABLE VALUES .....

// ROWPRINT causes names and values to be printed in equivalent positions 
// of pairs of lines making name/value rows.  COLPRINT causes names and 
// values to be printed in two columns (name column followed by row column).

// @ITEM HEAD =    VECPRINT  and MATPRINT

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>VECPRINT<D>|<B>MATPRINT<D>  <MI>list<D>

// @MINOR HEADING = Symbols:

// @NOBULTAB = <MI>list      <D>:  <MI>element<D> {, <MI>list<D>}

// @NOBULTAB = <MI>element <D>:  scalar|array|array-element|array-part

// These statements generate individual reports for each<MI> list<D> 
// element, in which numeric values are printed to seven figure precision.  There 
// is a line eject preceding each report and the sequence of reports 
// is specified by the order of the<MI> list<D>.

// @PAGE BREAK = 

// These statements are primarily intended for printing dynamic arrays 
// (which contain their own dimensions).  Static arrays may be printed, 
// but only as vectors, the lenghts of which are computed as the volume 
// (product of all dimensions).  Where dimensions are passed as arguments, 
// using the asterisk as the last dimension, the asterisk is assumed 
// to represent unity.

// Although these statements are not specifically intended for printing 
// scalar variables, if any members of the lists are scalars or array 
// elements, their values will be printed as follows:

// <LI>SCALAR VARIABLE <MI>name<D> = <MI>value<D>  .</LI>

// @ITEM HEAD =    TABULATE

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>TABULATE<D>{<B>[<MI>title<B>]<D>} <MI>list<D> {<B>;<D> 
// <B>LENGTH<D> <MI>exp<D>}

// @MINOR HEADING = Symbols:

// @NOBULTAB = <MI>title   <D>:<MI>  <D>character string<MI>

// @NOBULTAB = <MI>list<D>     :  <MI>element<D> {, <MI>list<D>}

// @NOBULTAB = <MI>element <D>:  scalar|array|array-element|array-part

// @NOBULTAB = <MI>exp     <D>:  integer expression

// This statement will print a table of values having the arrays as its 
// columns, from left to right as they appear in the <MI>list<D>.  Each 
// static array or dynamic vector produces a single column, while each 
// dynamic matrix produces a table column for each matrix column.  The 
// entire <MI>list<D> may not generate more columns than will fit the 
// page width of the output stream.

// If the arrays have different numbers of rows, the shorter table columns 
// are filled with blanks.  The LENGTH option provides a means of limiting 
// the length of the table to <MI>exp<D> rows.

// The format of the TABULATE statement may be controlled by preceding 
// USE statements.

// @PAGE BREAK = 

// @ITEM HEAD =    GRADPRINT, HESSPRINT, and PARDPRINT

// @MINOR HEADING = Syntax:

// @STATFORMAT = <B>GRADPRINT<D>|<B>HESSPRINT<D>|<B>PARDPRINT<D>  <MI>list<D>

// @MINOR HEADING = Symbols:

// @NOBULTAB = <MI>list      <D>:  <MI>element<D> {,<MI>list<D>}

// @NOBULTAB = <MI>element <D>:  scalar|array element

// These statements generate reports consisting of the element value 
// and the selected partial derivative values for each element in the 
// <MI>list<D>.

// <LI>GRADPRINT selects the printing of gradient (first partial </LI>
// derivative) vectors,

// <LI>HESSPRINT selects the printing of Hessian (second partial </LI>
// derivative) matrices, and 

// <LI>PARDPRINT selects printing of both gradient vectors and </LI>
// Hessian matrices.

// If used when derivative evaluation is not active, these statements 
// will result in messages stating that derivatives are not available.  Also, 
// when variables in the <MI>list<D> are constants, or not functions 
// of the independent variables, a similar message is displayed.

// @PAGE BREAK = 



// <H2><N>Special Syntax Rules</H2>

// Since FC programs are translated into FORTRAN, certain enhancements 
// to FORTRAN are provided, and certain peculiarities due to FORTRAN 
// must be adhered to.

// <B>Semi-colon:  Phrase Separator<D>

// Because FORTRAN does not distinguish blanks as token separators, a 
// delimiter is required to separate alphanumeric tokens.  Since each 
// phrase of the calculus macro statements begins with a keyword, a semi-colon 
// is required to prevent this keyword from being concatenated to the 
// trailing identifier of the preceding phrase. Thus the somewhat awkward 
// appearance of semi-colons in macro statements is necessary.

// <B>Colon:  Statement Separator<D>

// The colon is used as a statement terminator, allowing multiple statements 
// on a line.  This will not conflict with FORTRAN usage of the colon 
// in character expressions, since colons only appear parenthesized.  The 
// other use of colons (also parenthesized) in DIMENSION statements is 
// disallowed as indicated below.

// <H2>  Special Restrictions</H2>

// Since the FC translator must translate all of FORTRAN syntax, certain 
// FORTRAN 77 embellishments have been deferred as a matter of lower 
// priority.  A case in point is lower and upper bounds in DIMENSION 
// statements.  The use of them will cause a syntax error.  The inclusion 
// of them in later versions is a matter of demand priority.  

// <B>Type Restrictions<D>

// The most serious restriction is the lack of a COMPLEX type.  This 
// will be rectified in the next major release.

// In the FC implementations on 32-bit machines, there is no REAL*4 type.  This 
// will cause a syntax error.  Since calculus reals require 64-bits, 
// the allowance of 32-bit reals can potentially corrupt common storage 
// when proper type declarations are inadvertently left out of a subroutine 
// somewhere.  The errors that result from common corruptions are notoriously 
// difficult to locate.  It is best therefore to eliminate the use of 
// REAL*4.