      PROGRAM FC000000
      IMPLICIT REAL*8 (A-H,O-Z)
      COMMON /FC3000/MAXB,IBUC(2,10000)
      REAL*8 DBUC(10000)
      CHARACTER*4 CBUC(2,10000)
      EQUIVALENCE (IBUC(1,1),DBUC(1))
      EQUIVALENCE (CBUC(1,1),IBUC(1,1))
      REAL RTIMES(2),RSTART,REND       
      COMMON /FC3007/ MVDT,NVDT,KVDT,VDT(2,2000)
      COMMON/FC3001/NUN(22),NGRAFS,KDEBUG,INITA,INITB, INITC,INIT
      CALL DTIME(RTIMES,RSTART)
      MAXB=10000
      MVDT=2000
      CALL FC0001(2000,"HB1TG",1)
      CALL HB1TG
      CALL DTIME(RTIMES,REND)
      PRINT 999, REND-RSTART
 999  FORMAT(" ELAPSED TIME = ",F7.2," SECONDS")
      IF(NGRAFS.GT.0) CALL EXIT(7)
      END
      SUBROUTINE HB1TG                                                  
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/PRIN/X,Y,G(5),F                                            
      EXTERNAL FTHOR                                                    
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('HB1TG   ',IFCN)                        
      CALL CONGRAF                                                      
      X=90                                                              
      Y=20                                                              
      BX=5                                                              
      BY=10                                                             
      CALL THOR(0)                                                      
      CALL SET                                                          
      CALL FC0335('HB1TG   ',8,'HB      ')                              
      CALL FC0340(8,X,0,'X       ',0)                                   
      CALL FC0340(8,Y,0,'Y       ',0)                                   
      CALL FC0340(9,BX,0,'BX      ',0)                                  
      CALL FC0340(9,BY,0,'BY      ',0)                                  
      CALL FC0340(4,G,5,'G       ',0)                                   
      CALL FC0340(21,F,0,'F       ',0)                                  
      CALL FC0341(FTHOR)                                                
      IFCZZZ=1                                                          
90001 CALL THOR(IFCZZZ)                                                 
      IF(IFCZZZ.LT.0) CALL HB                                           
      IF(IFCZZZ.LT.1000) GOTO 90001                                     
      CALL FCSHOW('HBF',0,'HB1TG[9]')                                   
      END                                                               
      SUBROUTINE SET                                                    
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/CTHOR/ADAPT,BREAKIN,CONVERGE,DETAIL,DETOUT,ERRMAX,         
     *FRACT,PROGRESS,PROGTEST,REMAX,RESET,                              
     *STEPLIM,SUMMARY,SUMOUT,UNKNOWN                                    
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('SET     ',IFCN)                        
      CONVERGE=2                                                        
      DETAIL=1                                                          
      END                                                               
      SUBROUTINE HB                                                     
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/PRIN/X,Y,G(5),F                                            
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('HB      ',IFCN)                        
      CALL FCST(G(1),FCS(FCM(X,Y),700D0),IFCN,17)                       
      CALL FCST(G(2),FCS(75D0,X),IFCN,18)                               
      CALL FCST(G(3),FCS(65D0,Y),IFCN,19)                               
      CALL FCST(G(4),FCS(Y,FCM(X,FCD(X,125D0))),IFCN,20)                
      CALL FCST(G(5),FCA(FCS(FCPI(FCS(Y,50D0),2),FCM(5D0,X)),275D0),IFCN
     *,21)                                                              
      CALL FCST(F1,FCA(FCS(75.1963666677D0,FCM(3.8112755343D0,X)),FCS(FC
     *M(0.1269366345D0,FCM(X,X)),FCM(0.0020567665D0,FCPI(X,3)))),IFCN,22
     *)                                                                 
      CALL FCST(F2,FCA(FCS(FCM(1.0345D-5,FCPI(X,4)),FCM(6.8306567613D0,Y
     *)),FCS(FCM(0.0302344793D0,FCM(X,Y)),FCM(0.0012813448D0,FCM(X,FCM(X
     *,Y))))),IFCN,23)                                                  
      CALL FCST(F3,FCA(FCS(FCM(3.52559D-5,FCM(FCPI(X,3),Y)),FCM(2.266D-7
     *,FCM(FCPI(X,4),Y))),FCS(FCM(0.2564581253D0,FCM(Y,Y)),FCM(3.460403D
     *-3,FCPI(Y,3)))),IFCN,24)                                          
      CALL FCST(F4,FCS(FCS(FCM(1.35139D-5,FCPI(Y,4)),FCD(28.1064434908D0
     *,FCA(Y,1D0))),FCM(5.2375D-6,FCM(X,FCM(X,FCM(Y,Y))))),IFCN,25)     
      CALL FCST(F5,FCA(FCM(FCN(6.3D-9),FCM(FCPI(X,3),FCM(Y,Y))),FCA(FCM(
     *7D-10,FCM(FCPI(X,3),FCPI(Y,3))),FCM(3.405462D-4,FCM(X,FCM(Y,Y)))))
     *,IFCN,26)                                                         
      CALL FCST(F6,FCS(FCM(FCN(1.6638D-6),FCM(X,FCPI(Y,3))),FCM(2.867311
     *2392D0,FCEX(FCM(5D-4,FCM(X,Y))))),IFCN,27)                        
      CALL FCST(F,FCA(F1,FCA(F2,FCA(F3,FCA(F4,FCA(F5,F6))))),IFCN,28)   
      CALL FCCURVE('HBF','SR',FCV(X),FCV(Y))                            
      END                                                               
      SUBROUTINE CONGRAF                                                
        IMPLICIT REAL*8 (A-H,O-Z)                                       
        DIMENSION CONS(9),LABL(9),LTYP(9),KLR(9)                        
      DATA X1,X2,Y1,Y2/-10,110,-10,110/                                 
      DATA XA,XB,YA,YB/0,100,0,100/                                     
      DATA CONS/-80,-40,0,10,20,30,40,50,55/                            
      DATA LABL/1,0,1,0,1,0,1,0,1/                                      
      DATA LTYP/0,2,0,2,0,2,0,2,0/                                      
      DATA KLR /3,3,3,3,3,3,3,3,3/                                      
        EXTERNAL HBCON                                                  
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('CONGRAF ',IFCN)                        
      N=101                                                             
      XO=X1                                                             
      YO=Y1                                                             
      CALL FCGRAFIL('HBF','PNG','IMAGE',0,0)                            
      CALL FCFONT('HBF','COMPLEX','STANDARD',0,10)                      
      CALL FCAXSET('HBF','NONE','NONE','NONE','NONE')                   
      CALL FCXYPLOT('HBF','RECT',X1,X2,X1,X2-X1,Y1,Y2,Y1,Y2-Y1,1.0D0,0,0
     *,0,0)                                                             
      CALL FCMESH('HBF','CS',XA,XB,YA,YB,N,N,HBCON)                     
      CALL FCCNTOUR('HBF','CS',CONS,LABL,KLR,LTYP,9)                    
      CALL FCHEAD('HBF','HILLSIDE CORRAL',50,40,10)                     
      CALL FCHEAD('HBF','SOLVER THOR',50,100,10)                        
      CALL FCSETUP('HBF','G1',2,7,0,1)                                  
        DO 90001 I=10,50                                                
      X=I                                                               
      Y=700/X                                                           
      CALL FCCURVE('HBF','G1',X,Y)                                      
 10   CONTINUE                                                          
90001 CONTINUE                                                          
      CALL FCSETUP('HBF','G2',2,7,0,1)                                  
      CALL FCCURVE('HBF','G2',75D0,70D0)                                
      CALL FCCURVE('HBF','G2',75D0,55D0)                                
      CALL FCSETUP('HBF','G3',2,7,0,1)                                  
      CALL FCCURVE('HBF','G3',5D0,65D0)                                 
      CALL FCCURVE('HBF','G3',80D0,65D0)                                
      CALL FCSETUP('HBF','G4',2,7,0,1)                                  
        DO 90002 I=40,75                                                
      X=I                                                               
      Y=X*X/125                                                         
      CALL FCCURVE('HBF','G4',X,Y)                                      
 20   CONTINUE                                                          
90002 CONTINUE                                                          
      CALL FCSETUP('HBF','G5',2,7,0,1)                                  
        DO 90003 I=80,55,-1                                             
      X=I                                                               
      Y=SQRT(5*X-275)+50                                                
      CALL FCCURVE('HBF','G5',X,Y)                                      
 30   CONTINUE                                                          
90003 CONTINUE                                                          
        DO 90004 I=55,80                                                
      X=I                                                               
      Y=-SQRT(5*X-275)+50                                               
      CALL FCCURVE('HBF','G5',X,Y)                                      
 40   CONTINUE                                                          
90004 CONTINUE                                                          
      CALL FCSETUP('HBF','SR',1,4,-5,1)                                 
      END                                                               
      FUNCTION HBCON(X,Y)                                               
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('HBCON   ',IFCN)                        
      F1=75.1963666677-3.8112755343*X+0.1269366345*X*X-0.0020567665*X**3
      F2=1.0345D-5*X**4-6.8306567613*Y+0.0302344793*X*Y-0.0012813448*X*X
     **Y                                                                
      F3=3.52559D-5*X**3*Y-2.266D-7*X**4*Y+0.2564581253*Y*Y-3.460403D-3*
     *Y**3                                                              
      F4=1.35139D-5*Y**4-28.1064434908/(Y+1)-5.2375D-6*X*X*Y*Y          
      F5=-6.3D-9*X**3*Y*Y+7D-10*X**3*Y**3+3.405462D-4*X*Y*Y             
      F6=-1.6638D-6*X*Y**3-2.8673112392*EXP(5D-4*X*Y)                   
      HBCON=F1+F2+F3+F4+F5+F6                                           
      END                                                               
