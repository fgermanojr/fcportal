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
      CALL FC0001(5000,"CHEMPARE",1)
      CALL CHEMPARE
      CALL FC0391(-1,"CLOSE LUSCTOC")
      CALL FC0392(-1,"CLOSE LUPRTOC")
      CALL FCLTERM
      CALL DTIME(RTIMES,REND)
      PRINT 999, REND-RSTART
 999  FORMAT(" ELAPSED TIME = ",F7.2," SECONDS")
      IF(NGRAFS.GT.0) CALL EXIT(7)
      END
      SUBROUTINE CHEMPARE                                               
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      EXTERNAL IATHENA,REACTION,FAJAX                                   
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('CHEMPARE',IFCN)                        
      P1=0.01                                                           
      P2=0.05                                                           
            CALL IATHENA(0,0)                                           
      CALL FC0319(8HREACTION)                                           
      CALL FC0320(4,DADT,A,0,0)                                         
      CALL FC0320(4,DBDT,B,0,0)                                         
      CALL FC0320(4,DCDT,C,0,0)                                         
      CALL FC0320(4,DDDT,D,0,0)                                         
      CALL FC0320(5,T,DT,TF,0)                                          
      CALL FC0321(IATHENA,REACTION)                                     
      IFCZZZ=0                                                          
      CALL AJAX(IFCZZZ)                                                 
      CALL SET                                                          
      CALL FC0335('CHEMPARE',12,'CURFIT  ')                             
      CALL FC0340(8,P1,0,'P1      ',0)                                  
      CALL FC0340(8,P2,0,'P2      ',0)                                  
      CALL FC0340(2,CFITS,6,'CFITS   ',0)                               
      CALL FC0340(2,AFITS,6,'AFITS   ',0)                               
      CALL FC0341(FAJAX)                                                
      IFCZZZ=1                                                          
90001 CALL AJAX(IFCZZZ)                                                 
      IF(IFCZZZ.LT.0) CALL CURFIT                                       
      IF(IFCZZZ.LT.1000) GOTO 90001                                     
      END                                                               
      SUBROUTINE SET                                                    
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/CAJAX/BREAKIN,CONVERGE,DAMP,DELTA,DETAIL,DETOUT,           
     *PREDAMP,REMAX,SUMMARY,SUMOUT,TAU,VLIMIT,ZERO                      
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('SET     ',IFCN)                        
      DETAIL=1                                                          
      DETOUT=0                                                          
      SUMOUT=1                                                          
      DAMP=0                                                            
      END                                                               
      SUBROUTINE CURFIT                                                 
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*2 FCSINT                                                
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      EXTERNAL REACTION,ATHENA                                          
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('CURFIT  ',IFCN)                        
      NI=FCSINT(IT)                                                     
      CALL AXES('ITER'//NI,'ITERATION '//NI)                            
      CALL FCST(A,A0,IFCN,26)                                           
      CALL FCST(B,B0,IFCN,27)                                           
      CALL FCST(C,C0,IFCN,28)                                           
      CALL FCST(D,D0,IFCN,29)                                           
      CALL FCST(T,0D0,IFCN,30)                                          
      CALL FCST(TF,0D0,IFCN,31)                                         
      CALL FCST(ERROR,0D0,IFCN,32)                                      
      I=1                                                               
90001 CONTINUE                                                          
      IF(I.LE.NM)THEN                                                   
      CALL FCST(TF,FCA(TF,DT),IFCN,35)                                  
      CALL FC1057(8HREACTION,REACTION,ATHENA)                           
      CALL CURVES('ITER'//NI)                                           
          IF(FCV(TF).EQ.FCV(TM(I)))THEN                                 
      CALL FCST(AFITS(I),FCS(AM(I),A),IFCN,39)                          
      CALL FCST(CFITS(I),FCS(CM(I),C),IFCN,40)                          
      CALL MEASURED('ITER'//NI,FCV(AM(I)),FCV(CM(I)),FCV(TM(I)))        
      I=I+1                                                             
      ENDIF                                                             
      GOTO 90001                                                        
      ENDIF                                                             
      CALL FCSHOW('ITER'//NI,'Chemical profile of iteration'//NI,'CURFIT
     *[45]')                                                            
      IT=IT+1                                                           
      END                                                               
      SUBROUTINE REACTION                                               
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('REACTION',IFCN)                        
      CALL FCST(DCDT,FCM(P1,FCM(A,B)),IFCN,49)                          
      CALL FCST(DADT,FCN(FCA(DCDT,FCM(FCA(.01D0,P2),A))),IFCN,50)       
      CALL FCST(DBDT,FCN(FCA(DCDT,FCM(.05D0,FCM(B,D)))),IFCN,51)        
      CALL FCST(DDDT,FCS(DBDT,DADT),IFCN,52)                            
      END                                                               
      SUBROUTINE AXES(GNAME,TITLE)                                      
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*(*) GNAME                                               
      CHARACTER*(*) TITLE                                               
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('AXES    ',IFCN)                        
      CALL FCGRAFIL(GNAME,'SUM','IMAGE',0,0)                            
      CALL FCFONT(GNAME,'COMPLEX','STANDARD',0,10)                      
      CALL FCAXNAME(GNAME,'X','TIME (MINUTES)','CENT',30,36,10)         
      CALL FCAXNAME(GNAME,'Y','CONCENTRATION','CENT',30,36,10)          
      CALL FCXYPLOT(GNAME,'RECT',0.0D0,60.0D0,0.0D0,10.0D0,0D0,1.0D0,0.0
     *D0,0.1D0,1.0D0,0,0,0,0)                                           
      CALL FCSETUP(GNAME,'AM',LN_NONE,CL_RED,SY_BOX,0)                  
      CALL FCSETUP(GNAME,'CM',LN_NONE,CL_MAGENTA,SY_DELTA,0)            
      CALL FCSETUP(GNAME,'A ',LN_SOL,CL_RED,SY_NONE,1)                  
      CALL FCSETUP(GNAME,'C ',LN_DASH,CL_MAGENTA,SY_NONE,1)             
      CALL FCSETUP(GNAME,'B ',LN_CHNDSH,CL_GREEN,SY_NONE,1)             
      CALL FCSETUP(GNAME,'D ',LN_CHNDOT,CL_ORANGE,SY_NONE,1)            
      CALL FCHEAD(GNAME,'CHEMICAL PARAMETERS ESTIMATION',50,50,10)      
      CALL FCHEAD(GNAME,TITLE,50,100,10)                                
      CALL FCMESS(GNAME,'P1= ',20.0D0,.9D0,CL_BLUE)                     
      CALL FCNUMBER(GNAME,P1,4,999.D0,999.D0,10,0,CL_RED)               
      CALL FCMESS(GNAME,'P2= ',20.0D0,.85D0,CL_BLUE)                    
      CALL FCNUMBER(GNAME,P2,4,999.D0,999.D0,10,0,CL_RED)               
      END                                                               
      SUBROUTINE CURVES(GNAME)                                          
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*(*) GNAME                                               
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('CURVES  ',IFCN)                        
      CALL FCCURVE(GNAME,'A ',FCV(T),FCV(A))                            
      CALL FCCURVE(GNAME,'C ',FCV(T),FCV(C))                            
      CALL FCCURVE(GNAME,'B ',FCV(T),FCV(B))                            
      CALL FCCURVE(GNAME,'D ',FCV(T),FCV(D))                            
      END                                                               
      SUBROUTINE MEASURED(GNAME,AP,CP,TP)                               
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      CHARACTER*(*) GNAME                                               
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('MEASURED',IFCN)                        
      CALL FCPOINT(GNAME,'AM',FCV(TP),FCV(AP))                          
      CALL FCPOINT(GNAME,'CM',FCV(TP),FCV(CP))                          
      END                                                               
      BLOCK DATA GLOBDAT
      IMPLICIT REAL*8 (A-H,O-Z)
      INCLUDE 'GLOBALS.for'
      DATA TM/10,20,30,40,50,60/                                        
      DATA CM/0.419,0.563,0.629,0.666,0.689,0.708/                      
      DATA AM/0.483,0.281,0.191,0.134,0.097,0.065/                      
      DATA NM,A0,B0,C0,D0,DT/6,1.0,1.03,0.0,0.0,2.0/                    
      DATA B1,B2/0.015,0.015/                                           
      DATA IT/0/                                                        
      END
