      PROGRAM FC000000
      IMPLICIT REAL*8 (A-H,O-Z)
      COMMON /FC3000/MPAD,MAXB,IBUC(2,20000)
      REAL*8 DBUC(20000)
      CHARACTER*4 CBUC(2,20000)
      EQUIVALENCE (IBUC(1,1),DBUC(1))
      EQUIVALENCE (CBUC(1,1),IBUC(1,1))
      REAL RTIMES(2),RSTART,REND       
      COMMON /FC3007/ JPAD,MVDT,NVDT,KVDT,VDT(2,5000)
      COMMON/FC3001/NUN(23),NGRAFS,KDEBUG,INITA,INITB,INITC,INITD
      CALL DTIME(RTIMES,RSTART)
      MAXB=20000
      MVDT=5000
      CALL FC0001(5000,"EJECT",1)
      CALL EJECT
      CALL FC0391(-1,"CLOSE LUSCTOC")
      CALL FC0392(-1,"CLOSE LUPRTOC")
      CALL FCLTERM
      CALL DTIME(RTIMES,REND)
      PRINT 999, REND-RSTART
 999  FORMAT(" ELAPSED TIME = ",F7.2," SECONDS")
      IF(NGRAFS.GT.0) CALL EXIT(7)
      END
      SUBROUTINE EJECT                                                  
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*2 FCSINT                                                
      CHARACTER*50 TOCLABEL                                             
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      EXTERNAL FAJAX                                                    
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('EJECT   ',IFCN)                        
      SMASS=7                                                           
      G=32.2                                                            
      CD=1                                                              
      VE=40                                                             
      THETAD=15                                                         
      TIME=1.0                                                          
      S=10                                                              
      Y1=4                                                              
      VA=100                                                            
        DO 90001 I=1,6                                                  
      H=ALT(I)                                                          
      IT=0                                                              
      PLANE='PLANE'//FCSINT(I)                                          
      CALL AXES(PLANE,'PILOT EJECTION')                                 
          IF(H.LE.35332)THEN                                            
      RHO=0.002378*(1-.689D-5*H)**4.256                                 
      ELSE                                                              
      RHO=0.00315/EXP(1.452+(H-35332)/20950)                            
      ENDIF                                                             
      IFCZZZ=0                                                          
      CALL AJAX(IFCZZZ)                                                 
      CALL ACON                                                         
      CALL FC0335('EJECT   ',26,'SEAT    ')                             
      CALL FC0340(8,VA,0,'VA      ',0)                                  
      CALL FC0340(8,TIME,0,'TIME    ',0)                                
      CALL FC0340(2,GX,0,'GX      ',0)                                  
      CALL FC0340(2,GY,0,'GY      ',0)                                  
      CALL FC0341(FAJAX)                                                
      IFCZZZ=1                                                          
90002 CALL AJAX(IFCZZZ)                                                 
      IF(IFCZZZ.LT.0) CALL SEAT(PLANE)                                  
      IF(IFCZZZ.LT.1000) GOTO 90002                                     
      TOCENTRY=TOCLABEL('TRAJECTORY ITERATIONS AT ALTITUDE=')           
      CALL DISPLAY(PLANE,TOCENTRY)                                      
      VEL(I)=VA                                                         
   10 CONTINUE                                                          
90001 CONTINUE                                                          
      CALL SAFE('PROFILE')                                              
      END                                                               
      SUBROUTINE ACON                                                   
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/CAJAX/BREAKIN,CONVERGE,DAMP,DELTA,DETAIL,DETOUT,           
     *PREDAMP,REMAX,SUMMARY,SUMOUT,TAU,VLIMIT,ZERO                      
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('ACON    ',IFCN)                        
      DAMP=0                                                            
      SUMOUT=1                                                          
      DETAIL=1                                                          
      DETOUT=0                                                          
      END                                                               
      SUBROUTINE SEAT(JET)                                              
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*7 JET                                                   
      CHARACTER*2 FCSINT                                                
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      EXTERNAL IISIS,MOTION,ISIS                                        
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('SEAT    ',IFCN)                        
      CALL FCST(VX,FCS(FCSQ(FCPI(VA,2)),FCM(VE,FCSND(THETAD))),IFCN,42) 
      CALL FCST(VY,FCM(VE,FCCD(THETAD)),IFCN,43)                        
      CALL FCST(V,FCSQ(FCA(FCM(VX,VX),FCM(VY,VY))),IFCN,44)             
      CALL FCST(THETA,FCAT(FCD(VY,VX)),IFCN,45)                         
      CALL FCST(X,0D0,IFCN,46)                                          
      CALL FCST(Y,Y1,IFCN,47)                                           
      CALL FCST(T,0D0,IFCN,48)                                          
      CALL FCST(DT,FCD(FCAB(TIME),20D0),IFCN,49)                        
      CALL FCST(DP,FCM(4D0,DT),IFCN,50)                                 
      CALL FCST(TP,FCA(T,DP),IFCN,51)                                   
      IT=IT+1                                                           
      NI=FCSINT(IT)                                                     
        IF(IT.GT.9)THEN                                                 
      CALL FCPOINT(JET,'I'//NI,FCV(X),FCV(Y))                           
      ELSE                                                              
      CALL FCCURVE(JET,'I'//NI,FCV(X),FCV(Y))                           
      ENDIF                                                             
            CALL IISIS(0,0)                                             
      CALL FC0319(8HMOTION  )                                           
      CALL FC0320(4,THEDOT,THETA,0,0)                                   
      CALL FC0320(4,VDOT,V,0,0)                                         
      CALL FC0320(4,XDOT,X,0,0)                                         
      CALL FC0320(4,YDOT,Y,0,0)                                         
      CALL FC0320(5,T,DT,TP,0)                                          
      CALL FC0321(IISIS,MOTION)                                         
90001 CONTINUE                                                          
      IF(FCV(T).LT.FCV(TIME))THEN                                       
      CALL FC1057(8HMOTION  ,MOTION,ISIS)                               
      CALL FCCURVE(JET,'I'//NI,FCV(X),FCV(Y))                           
      CALL FCST(TP,FCA(TP,DP),IFCN,63)                                  
      GOTO 90001                                                        
      ENDIF                                                             
      CALL FCST(GX,FCS(FCN(X),30D0),IFCN,65)                            
      CALL FCST(GY,FCS(Y,20D0),IFCN,66)                                 
      CALL FC1058(8HMOTION  )                                           
      END                                                               
      SUBROUTINE MOTION                                                 
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('MOTION  ',IFCN)                        
      CALL FCST(D,FCM(0.5D0,FCM(RHO,FCM(CD,FCM(S,FCM(V,V))))),IFCN,70)  
      CALL FCST(THEDOT,FCM(FCN(G),FCD(FCC(THETA),V)),IFCN,71)           
      CALL FCST(VDOT,FCS(FCD(FCN(D),SMASS),FCM(G,FCSN(THETA))),IFCN,72) 
      CALL FCST(XDOT,FCS(FCM(V,FCC(THETA)),FCAB(VA)),IFCN,73)           
      CALL FCST(YDOT,FCM(V,FCSN(THETA)),IFCN,74)                        
      END                                                               
      SUBROUTINE AXES(NAME,TITLE)                                       
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*(*) NAME                                                
      CHARACTER*(*) TITLE                                               
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('AXES    ',IFCN)                        
      CALL FCGRAFIL(NAME,'SUM','IMAGE',0,0)                             
      CALL FCFONT(NAME,'COMPLEX','STANDARD',30,1)                       
      CALL FCAXNAME(NAME,'X','X','CENT',16,20,CL_FORE)                  
      CALL FCAXLABS(NAME,'X','FLOAT','HORI','TICKS','OUTW',1,16,CL_FORE)
      CALL FCAXNAME(NAME,'Y','Y','CENT',16,20,CL_FORE)                  
      CALL FCAXLABS(NAME,'Y','FLOAT','HORI','TICKS','OUTW',-1,16,CL_FORE
     *)                                                                 
      CALL FCXYPLOT(NAME,'CROSS',-35D0,10D0,-30D0,10D0,0D0,30D0,0D0,10D0
     *,1D0,0,0,0,0)                                                     
      CALL FCSETUP(NAME,'I1',LN_DASH,CL_BLUE,SY_NONE,1)                 
      CALL FCSETUP(NAME,'I2',LN_DASH,CL_GREEN,SY_NONE,1)                
      CALL FCSETUP(NAME,'I3',LN_DASH,CL_CYAN,SY_NONE,1)                 
      CALL FCSETUP(NAME,'I4',LN_DASH,CL_RED,SY_NONE,1)                  
      CALL FCSETUP(NAME,'I5',LN_DASH,CL_MAGENTA,SY_NONE,1)              
      CALL FCSETUP(NAME,'I6',LN_DASH,CL_ORANGE,SY_NONE,1)               
      CALL FCSETUP(NAME,'I7',LN_DASH,CL_YELLOW,SY_NONE,1)               
      CALL FCSETUP(NAME,'I8',LN_CHNDSH,CL_GREEN,SY_NONE,1)              
      CALL FCSETUP(NAME,'I9',LN_CHNDSH,CL_CYAN,SY_NONE,1)               
      CALL FCSETUP(NAME,'P1',LN_SOL,4,SY_NONE,1)                        
      CALL FCSETUP(NAME,'P2',LN_SOL,4,SY_NONE,1)                        
      CALL FCSETUP(NAME,'TG',LN_DASH,CL_RED,SY_NONE,1)                  
      CALL FCHEAD(NAME,TITLE,50,50,CL_FORE)                             
        DO 90001 J=1,6                                                  
      P11J=P1(1,J)                                                      
      P12J=P1(2,J)                                                      
      CALL FCCURVE(NAME,'P1',P11J,P12J)                                 
   10 CONTINUE                                                          
90001 CONTINUE                                                          
        DO 90002 J=1,11                                                 
      P21J=P2(1,J)                                                      
      P22J=P2(2,J)                                                      
      CALL FCCURVE(NAME,'P2',P21J,P22J)                                 
   20 CONTINUE                                                          
90002 CONTINUE                                                          
        DO 90003 J=1,9                                                  
      TG1J=TG(1,J)                                                      
      TG2J=TG(2,J)                                                      
      CALL FCCURVE(NAME,'TG',TG1J,TG2J)                                 
   30 CONTINUE                                                          
90003 CONTINUE                                                          
      RETURN                                                            
      ENTRY DISPLAY(NAME,TITLE)                                         
      WRITE(J$OUT$,*)'DISPLAY',TITLE                                    
      CALL FCMESS(NAME,'ALTITUDE',-20.0D0,30.0D0,CL_BLUE)               
      CALL FCNUMBER(NAME,H,1,999.D0,999.D0,10,0,CL_BLUE)                
      CALL FCMESS(NAME,'SPEED',-20.0D0,28.0D0,CL_RED)                   
      CALL FCNUMBER(NAME,VA,1,999.D0,999.D0,10,0,CL_RED)                
      CALL FCDRAW(NAME,TITLE,'AXES[124]')                               
      END                                                               
      SUBROUTINE SAFE(GNAME)                                            
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*(*) GNAME                                               
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('SAFE    ',IFCN)                        
      CALL FCGRAFIL(GNAME,'SUM','IMAGE',0,0)                            
      CALL FCFONT(GNAME,'COMPLEX','STANDARD',30,CL_BLACK)               
      CALL FCAXNAME(GNAME,'X','SPEED','CENT',16,20,CL_FORE)             
      CALL FCAXLABS(GNAME,'X','FLOAT','HORI','TICKS','OUTW',1,16,CL_FORE
     *)                                                                 
      CALL FCAXNAME(GNAME,'Y','ALTITUDE','CENT',16,20,CL_FORE)          
      CALL FCAXLABS(GNAME,'Y','FLOAT','HORI','TICKS','OUTW',-1,16,CL_FOR
     *E)                                                                
      CALL FCXYPLOT(GNAME,'RECT',200D0,800D0,200D0,200D0,0D0,50000D0,0D0
     *,10000D0,1D0,0,0,0,0)                                             
      CALL FCSETUP(GNAME,'PP',LN_NONE,CL_RED,SY_DELTA,1)                
      CALL FCSETUP(GNAME,'CR',LN_DASH,CL_CYAN,SY_NONE,1)                
      CALL FCHEAD(GNAME,'SAFE EJECTION PROFILE',50,50,CL_FORE)          
        DO 90001 J=1,6                                                  
      CALL FCPOINT(GNAME,'PP',VEL(J),ALT(J))                            
      CALL FCCURVE(GNAME,'CR',VEL(J),ALT(J))                            
   10 CONTINUE                                                          
90001 CONTINUE                                                          
      CALL FCDRAW(GNAME,'ALTITUDE-VELOCITY PROFILE GRAPH','SAFE[142]')  
      END                                                               
      CHARACTER*(*) FUNCTION TOCLABEL(STRING)                           
      CHARACTER*(*) STRING                                              
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('TOCLABEL',IFCN)                        
      WRITE(TOCLABEL,10)STRING,H                                        
   10 FORMAT(A,F6.0)                                                    
      END                                                               
      BLOCK DATA GLOBDAT
      IMPLICIT REAL*8 (A-H,O-Z)
      INCLUDE 'GLOBALS.for'
      DATA ALT/0,10000,20000,30000,40000,50000/                         
      DATA P1/8.7,0,8.9,.5,7.75,1.5,5,2.2,2.2,3.8,1.8,2.8/              
      DATA P2/5,2.2,1.8,2.8,.25,3.1,-0.1,4.0,-21,3.75,-25,3.9,          
     *        -26.3,4.75,-29.2,11,-30,12,-32.2,12,-30.3,0/              
      DATA TG/-30.6,19.4,-30,19.15,-29.4,19.4,-30.6,20.6,-30,20.85,     
     *        -29.4,20.6,-30.6,19.4,-30.85,20,-30.6,20.6/               
      END
