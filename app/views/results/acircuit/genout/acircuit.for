      PROGRAM FC000000
      IMPLICIT REAL*8 (A-H,O-Z)
      COMMON /FC3000/MPAD,MAXB,IBUC(2,5000)
      REAL*8 DBUC(5000)
      CHARACTER*4 CBUC(2,5000)
      EQUIVALENCE (IBUC(1,1),DBUC(1))
      EQUIVALENCE (CBUC(1,1),IBUC(1,1))
      REAL RTIMES(2),RSTART,REND       
      COMMON /FC3007/ JPAD,MVDT,NVDT,KVDT,VDT(2,1000)
      COMMON/FC3001/NUN(23),NGRAFS,KDEBUG,INITA,INITB,INITC,INITD
      CALL DTIME(RTIMES,RSTART)
      MAXB=5000
      MVDT=1000
      CALL FC0001(1000,"CIRCUIT",1)
      CALL CIRCUIT
      CALL FC0391(-1,"CLOSE LUSCTOC")
      CALL FC0392(-1,"CLOSE LUPRTOC")
      CALL FCLTERM
      CALL DTIME(RTIMES,REND)
      PRINT 999, REND-RSTART
 999  FORMAT(" ELAPSED TIME = ",F7.2," SECONDS")
      IF(NGRAFS.GT.0) CALL EXIT(7)
      END
      SUBROUTINE CIRCUIT                                                
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/PARAMS/EL,ELS,CS                                           
        DIMENSION F(21),Y(21),R(21),W(21),YC(21)                        
      DATA Y/1.273,1.278,1.392,1.604,1.708,1.950,2.148,2.297,           
     *       2.503,2.893,3.305,4.005,5.077,8.069,14.84,39.47,           
     *       -15.06,-9.705,-7.368,-5.286,-3.907/                        
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      EXTERNAL FAJAX,FMARS                                              
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('CIRCUIT ',IFCN)                        
      EL=1.1D-10                                                        
      ELS=-1.1D-10                                                      
      CS=1.1D-12                                                        
        DO 90001 I=1,21                                                 
      F(I)=2850+50*I                                                    
      W(I)=6.28318D6*F(I)                                               
  10  CONTINUE                                                          
90001 CONTINUE                                                          
      CALL AXES('AJAXFIT',F,Y,YC,W)                                     
      IFCZZZ=0                                                          
      CALL AJAX(IFCZZZ)                                                 
      CALL SET1                                                         
      CALL FC0335('CIRCUIT ',13,'FIT     ')                             
      CALL FC0340(8,EL,0,'EL      ',0)                                  
      CALL FC0340(8,ELS,0,'ELS     ',0)                                 
      CALL FC0340(8,CS,0,'CS      ',0)                                  
      CALL FC0340(2,R,21,'R       ',0)                                  
      CALL FC0341(FAJAX)                                                
      IFCZZZ=1                                                          
90002 CALL AJAX(IFCZZZ)                                                 
      IF(IFCZZZ.LT.0) CALL FIT(F,Y,R,W,YC)                              
      IF(IFCZZZ.LT.1000) GOTO 90002                                     
      CALL FINISH('AJAXFIT',F,YC,W)                                     
      CALL FCSHOW('AJAXFIT','Admittance Circuit Curve Fit with Solver Aj
     *ax','CIRCUIT[15]')                                                
      CALL AXES('MARSFIT',F,Y,YC,W)                                     
      IFCZZZ=0                                                          
      CALL MARS(IFCZZZ)                                                 
      CALL SET2                                                         
      CALL FC0335('CIRCUIT ',17,'FIT     ')                             
      CALL FC0340(8,EL,0,'EL      ',0)                                  
      CALL FC0340(8,ELS,0,'ELS     ',0)                                 
      CALL FC0340(8,CS,0,'CS      ',0)                                  
      CALL FC0340(2,R,21,'R       ',0)                                  
      CALL FC0341(FMARS)                                                
      IFCZZZ=1                                                          
90003 CALL MARS(IFCZZZ)                                                 
      IF(IFCZZZ.LT.0) CALL FIT(F,Y,R,W,YC)                              
      IF(IFCZZZ.LT.1000) GOTO 90003                                     
      CALL FINISH('MARSFIT',F,YC,W)                                     
      CALL FCSHOW('MARSFIT','Admittance Circuit Curve Fit with Solver Ma
     *rs','CIRCUIT[19]')                                                
      END                                                               
      SUBROUTINE SET1                                                   
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/CAJAX/BREAKIN,CONVERGE,DAMP,DELTA,DETAIL,DETOUT,           
     *PREDAMP,REMAX,SUMMARY,SUMOUT,TAU,VLIMIT,ZERO                      
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('SET1    ',IFCN)                        
      SUMOUT=1                                                          
      DETAIL=1                                                          
      DETOUT=0                                                          
      END                                                               
      SUBROUTINE SET2                                                   
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/CMARS/BREAKIN,CONVERGE,DAMP,DELTA,DETAIL,DETOUT,           
     *PREDAMP,REMAX,SUMMARY,SUMOUT,TAU,VLIMIT,ZERO                      
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('SET2    ',IFCN)                        
      SUMOUT=1                                                          
      DETAIL=1                                                          
      DETOUT=0                                                          
      REMAX=40                                                          
      ZERO=.0001                                                        
      END                                                               
      SUBROUTINE FIT(F,Y,R,W,YC)                                        
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/PARAMS/EL,ELS,CS                                           
        DIMENSION F(*),Y(*),R(*),W(*),YC(*)                             
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('FIT     ',IFCN)                        
        DO 90001 I=1,21                                                 
      CALL FCST(YC(I),FCD(FCN(1D0),FCS(FCM(W(I),EL),FCD(1D0,FCS(FCM(W(I)
     *,CS),FCD(1D0,FCM(W(I),ELS)))))),IFCN,37)                          
      CALL FCST(R(I),FCS(FCD(1D0,YC(I)),FCD(1D0,Y(I))),IFCN,38)         
   10 CONTINUE                                                          
90001 CONTINUE                                                          
      END                                                               
      SUBROUTINE AXES(GNAME,F,Y,YC,W)                                   
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/PARAMS/EL,ELS,CS                                           
        DIMENSION F(*),Y(*),YC(*),W(*)                                  
      CHARACTER*(*) GNAME                                               
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('AXES    ',IFCN)                        
      XMIN=2900                                                         
      XMAX=3900                                                         
      XORG=2900                                                         
      XSTEP=200                                                         
      YMIN=-30                                                          
      YMAX=50                                                           
      YORG=-30                                                          
      YSTEP=10                                                          
      CALL FCGRAFIL(GNAME,'SUM','IMAGE',0,0)                            
      CALL FCAXSET(GNAME,'NONE','NONE','NONE','NONE')                   
      CALL FCXYPLOT(GNAME,'RECT',XMIN,XMAX,XORG,XSTEP,YMIN,YMAX,YORG,YST
     *EP,1.0D0,0,0,0,0)                                                 
      CALL FCXAXIS(GNAME,XMIN,XMAX,XORG,XSTEP,0,'FREQUENCY (CPS)',0,0,0)
      CALL FCYAXIS(GNAME,YMIN,YMAX,YORG,YSTEP,0,'ADMITTANCE',1,0,0)     
      CALL FCSETUP(GNAME,'Y ',LN_NONE,CL_RED,SY_DELTA,0)                
      CALL FCSETUP(GNAME,'Y0',LN_SOL,CL_RED,SY_NONE,0)                  
      CALL FCSETUP(GNAME,'YC',ln_SOL,CL_GREEN,SY_NONE,0)                
        DO 90001 I=1,21                                                 
      YC(I)=-1/(W(I)*EL-1/(W(I)*CS-1/(W(I)*ELS)))                       
      CALL FCPOINT(GNAME,'Y ',F(I),Y(I))                                
      CALL FCCURVE(GNAME,'Y0',F(I),YC(I))                               
   10 CONTINUE                                                          
90001 CONTINUE                                                          
      CALL FCMESS(GNAME,'INITIAL GUESS',3050D0,-12D0,2)                 
      CALL FCMESS(GNAME,'FINAL FIT',3050D0,6D0,3)                       
      END                                                               
      SUBROUTINE FINISH(GNAME,F,YC,W)                                   
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/PARAMS/EL,ELS,CS                                           
        DIMENSION F(*),YC(*),W(*)                                       
      CHARACTER*(*) GNAME                                               
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('FINISH  ',IFCN)                        
        DO 90001 I=1,21                                                 
      YC(I)=-1/(W(I)*EL-1/(W(I)*CS-1/(W(I)*ELS)))                       
      CALL FCCURVE(GNAME,'YC',F(I),YC(I))                               
   10 CONTINUE                                                          
90001 CONTINUE                                                          
      END                                                               
