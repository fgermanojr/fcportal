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
      CALL FC0001(5000,"ACMOTOR",1)
      CALL ACMOTOR
      CALL FC0391(-1,"CLOSE LUSCTOC")
      CALL FC0392(-1,"CLOSE LUPRTOC")
      CALL FCLTERM
      CALL DTIME(RTIMES,REND)
      PRINT 999, REND-RSTART
 999  FORMAT(" ELAPSED TIME = ",F7.2," SECONDS")
      IF(NGRAFS.GT.0) CALL EXIT(7)
      END
      SUBROUTINE ACMOTOR                                                
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3000.for'                                              
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      EXTERNAL FTHOR                                                    
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('ACMOTOR ',IFCN)                        
        CALL INPUT                                                      
      ITER=0                                                            
        CALL DESIGN                                                     
      WRITE(J$OUT$,*)'--------------- INITIAL DESIGN ---------------'   
        CALL OUTPUT                                                     
      IFCZZZ=0                                                          
      CALL THOR(IFCZZZ)                                                 
      CALL TCON                                                         
      CALL FC0335('ACMOTOR ',10,'DESIGN  ')                             
      CALL FC0340(8,COILTRNS,0,'COILTRNS',0)                            
      CALL FC0340(8,SEPDIAM,0,'SEPDIAM ',0)                             
      CALL FC0340(8,STASLOTW,0,'STASLOTW',0)                            
      CALL FC0340(8,ROTSLOTW,0,'ROTSLOTW',0)                            
      CALL FC0340(8,AIRGAP,0,'AIRGAP  ',0)                              
      CALL FC0340(8,STAT00TW,0,'STAT00TW',0)                            
      CALL FC0340(8,STABAKIR,0,'STABAKIR',0)                            
      CALL FC0340(8,ROTTOOTW,0,'ROTTOOTW',0)                            
      CALL FC0340(8,ROTBAKIR,0,'ROTBAKIR',0)                            
      CALL FC0340(8,STASLOTO,0,'STASLOTO',0)                            
      CALL FC0340(8,ROTSLOTO,0,'ROTSLOTO',0)                            
      CALL FC0340(8,SLIP,0,'SLIP    ',0)                                
      CALL FC0340(9,DBUC(IFC0(BND)),IFCS(BND),'BND     ',0)             
      CALL FC0340(11,DBUC(IFC0(BOTM)),IFCS(BOTM),'BOTM    ',0)          
      CALL FC0340(4,CNS,7,'CNS     ',0)                                 
      CALL FC0340(7,FONE,0,'FONE    ',0)                                
      CALL FC0340(7,QONE,0,'QONE    ',0)                                
      CALL FC0340(7,QTWO,0,'QTWO    ',0)                                
      CALL FC0340(7,QTHREE,0,'QTHREE  ',0)                              
      CALL FC0340(7,CONE,0,'CONE    ',0)                                
      CALL FC0340(7,CTWO,0,'CTWO    ',0)                                
      CALL FC0340(7,CRNOL,0,'CRNOL   ',0)                               
      CALL FC0340(7,QFOUR,0,'QFOUR   ',0)                               
      CALL FC0340(7,QFIVE,0,'QFIVE   ',0)                               
      CALL FC0340(7,ATHREE,0,'ATHREE  ',0)                              
      CALL FC0340(7,ZONE,0,'ZONE    ',0)                                
      CALL FC0340(7,QSIX,0,'QSIX    ',0)                                
      CALL FC0340(7,ZTHREE,0,'ZTHREE  ',0)                              
      CALL FC0340(7,ZFOUR,0,'ZFOUR   ',0)                               
      CALL FC0340(7,QSEVEN,0,'QSEVEN  ',0)                              
      CALL FC0340(7,QEIGHT,0,'QEIGHT  ',0)                              
      CALL FC0340(7,ZFIVE,0,'ZFIVE   ',0)                               
      CALL FC0340(7,RDC,0,'RDC     ',0)                                 
      CALL FC0340(7,VONE,0,'VONE    ',0)                                
      CALL FC0340(7,VTWO,0,'VTWO    ',0)                                
      CALL FC0340(7,AFOUR,0,'AFOUR   ',0)                               
      CALL FC0340(7,RTWO,0,'RTWO    ',0)                                
      CALL FC0340(7,RROT,0,'RROT    ',0)                                
      CALL FC0340(7,RFOUR,0,'RFOUR   ',0)                               
      CALL FC0340(7,GTHREE,0,'GTHREE  ',0)                              
      CALL FC0340(7,GFOUR,0,'GFOUR   ',0)                               
      CALL FC0340(7,GFIVE,0,'GFIVE   ',0)                               
      CALL FC0340(7,GSIX,0,'GSIX    ',0)                                
      CALL FC0340(7,XLEAK,0,'XLEAK   ',0)                               
      CALL FC0340(7,CRSTAL,0,'CRSTAL  ',0)                              
      CALL FC0340(7,CRFL,0,'CRFL    ',0)                                
      CALL FC0340(7,STORQ,0,'STORQ   ',0)                               
      CALL FC0340(7,RTORQ,0,'RTORQ   ',0)                               
      CALL FC0340(7,PEIGHT,0,'PEIGHT  ',0)                              
      CALL FC0340(7,PSIX,0,'PSIX    ',0)                                
      CALL FC0340(7,PSEVEN,0,'PSEVEN  ',0)                              
      CALL FC0340(7,FLUX,0,'FLUX    ',0)                                
      CALL FC0340(7,BSEVEN,0,'BSEVEN  ',0)                              
      CALL FC0340(7,BTWO,0,'BTWO    ',0)                                
      CALL FC0340(7,BTHREE,0,'BTHREE  ',0)                              
      CALL FC0340(7,FELOSS,0,'FELOSS  ',0)                              
      CALL FC0340(7,CULSTA,0,'CULSTA  ',0)                              
      CALL FC0340(7,RAC,0,'RAC     ',0)                                 
      CALL FC0340(7,XMAG,0,'XMAG    ',0)                                
      CALL FC0340(7,CULROT,0,'CULROT  ',0)                              
      CALL FC0340(21,EFF,0,'EFF     ',0)                                
      CALL FC0341(FTHOR)                                                
      IFCZZZ=1                                                          
90001 CALL THOR(IFCZZZ)                                                 
      IF(IFCZZZ.LT.0) CALL DESIGN                                       
      IF(IFCZZZ.LT.1000) GOTO 90001                                     
      WRITE(J$OUT$,*)'---------------- OPTIMIZED DESIGN ----------------
     *-'                                                                
        CALL OUTPUT                                                     
      END                                                               
      SUBROUTINE DESIGN                                                 
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('DESIGN  ',IFCN)                        
      CALL FCST(FONE,FCD(231258.0438D0,COILTRNS),IFCN,15)               
      CALL FCST(QONE,FCM(SEPDIAM,FCD(PI,56D0)),IFCN,16)                 
      CALL FCST(QTWO,FCM(SEPDIAM,FCD(PI,69D0)),IFCN,17)                 
      CALL FCST(QTHREE,FCM(SEPDIAM,FCD(PI,28D0)),IFCN,18)               
      CALL FCST(CONE,FCD(QONE,FCA(FCS(QONE,STASLOTW),FCM(STASLOTW,FCS(.7
     *D0,FCM(.036D0,FCD(STASLOTW,AIRGAP)))))),IFCN,19)                  
      CALL FCST(CTWO,FCD(QTWO,FCA(FCS(QTWO,ROTSLOTW),FCM(ROTSLOTW,FCS(.7
     *D0,FCM(.036D0,FCD(ROTSLOTW,AIRGAP)))))),IFCN,20)                  
      CALL FCST(CRNOL,FCM(FONE,FCM(AIRGAP,FCM(CONE,FCD(CTWO,FCM(6.96D0,F
     *CM(COILTRNS,QTHREE)))))),IFCN,21)                                 
      CALL FCST(QFOUR,FCS(FCD(FCS(FCS(FCS(FCS(STATOROD,STABAKIR),STABAKI
     *R),SEPDIAM),.1D0),2D0),.01D0),IFCN,22)                            
      CALL FCST(QFIVE,FCS(FCS(FCM(FCA(SEPDIAM,FCA(QFOUR,.1D0)),FCD(PI,56
     *D0)),STAT00TW),.016D0),IFCN,23)                                   
      CALL FCST(ATHREE,FCM(QFOUR,QFIVE),IFCN,24)                        
      CALL FCST(ZONE,FCM(7000D0,ATHREE),IFCN,25)                        
      CALL FCST(QSIX,FCM(COILTRNS,FCD(2D0,ZONE)),IFCN,26)               
      CALL FCST(ZTHREE,FCN(2D0),IFCN,27)                                
      CALL FCST(ZFOUR,FCA(32D0,ZTHREE),IFCN,28)                         
      CALL FCST(QSEVEN,FCM(FCP(1.26D0,ZTHREE),162D0),IFCN,29)           
      CALL FCST(QEIGHT,FCD(64D0,FCP(1.26D0,ZTHREE)),IFCN,30)            
      CALL FCST(ZFIVE,FCA(STACKLEN,FCA(STACKLEN,FCM(PI,FCD(STATOROD,14D0
     *)))),IFCN,31)                                                     
      CALL FCST(RDC,FCM(ZFIVE,FCM(COILTRNS,FCM(28D0,FCD(QSEVEN,12000D0))
     *)),IFCN,32)                                                       
      CALL FCST(VONE,FCD(FCS(FCS(FCS(FCS(SEPDIAM,.06D0),ROTORID),ROTBAKI
     *R),ROTBAKIR),2D0),IFCN,33)                                        
      CALL FCST(VTWO,FCS(FCM(FCS(FCS(SEPDIAM,.06D0),VONE),FCD(PI,69D0)),
     *ROTTOOTW),IFCN,34)                                                
      CALL FCST(AFOUR,FCM(VONE,VTWO),IFCN,35)                           
      CALL FCST(RTWO,FCM(FCD(.0133D0,AFOUR),FCM(FCD(STACKLEN,12000D0),UO
     *NE)),IFCN,36)                                                     
      CALL FCST(RROT,FCM(FCPI(FCM(56D0,COILTRNS),2),FCD(RTWO,138D0)),IFC
     *N,37)                                                             
      CALL FCST(RFOUR,RROT,IFCN,38)                                     
      CALL FCST(GTHREE,FCM(3.2D0,FCA(FCD(QFOUR,FCM(3D0,QFIVE)),FCA(FCD(.
     *03D0,FCA(STASLOTW,QFIVE)),FCD(STASLOTO,STASLOTW)))),IFCN,39)      
      CALL FCST(GFOUR,FCM(3.2D0,FCA(FCD(VONE,FCM(3D0,VTWO)),FCA(FCD(.03D
     *0,FCA(ROTSLOTW,VTWO)),FCD(ROTSLOTO,ROTSLOTW)))),IFCN,40)          
      CALL FCST(GFIVE,FCM(FCPI(FCA(FCD(1D0,CONE),FCS(FCD(1D0,CTWO),1D0))
     *,2),FCD(.26D0,AIRGAP)),IFCN,41)                                   
      CALL FCST(GSIX,FCA(FCD(FCA(GTHREE,FCM(GFIVE,QONE)),56D0),FCD(FCA(G
     *FOUR,FCM(GFIVE,QTWO)),69D0)),IFCN,42)                             
      CALL FCST(XLEAK,FCM(XC,FCM(PI,FCM(FCPI(COILTRNS,2),FCA(.05D0,FCM(G
     *SIX,STACKLEN))))),IFCN,43)                                        
      CALL FCST(CRSTAL,FCD(115D0,FCSQ(FCA(FCPI(FCA(RDC,RFOUR),2),FCPI(XL
     *EAK,2)))),IFCN,44)                                                
      CALL FCST(CRFL,FCD(115D0,FCSQ(FCA(FCPI(FCA(RDC,FCD(RFOUR,SLIP)),2)
     *,FCPI(XLEAK,2)))),IFCN,45)                                        
      CALL FCST(STORQ,FCM(1.5792D0,FCM(FCPI(CRSTAL,2),RFOUR)),IFCN,46)  
      CALL FCST(RTORQ,FCM(1.5792D0,FCM(FCPI(CRFL,2),FCD(RFOUR,SLIP))),IF
     *CN,47)                                                            
      CALL FCST(PEIGHT,FCM(RTORQ,FCM(FCS(1D0,SLIP),1.264944649D0)),IFCN,
     *48)                                                               
      CALL FCST(PSIX,FCM(FCPI(CRSTAL,2),FCA(RDC,RFOUR)),IFCN,49)        
      CALL FCST(PSEVEN,FCM(FCPI(CRFL,2),FCD(RFOUR,SLIP)),IFCN,50)       
      CALL FCST(FLUX,FCD(FCM(1.4D0,FCD(FONE,FCM(STAT00TW,STACKLEN))),645
     *0D0),IFCN,51)                                                     
      CALL FCST(BSEVEN,FCD(FCM(FCSQ(FCA(FCPI(CRFL,2),FCPI(CRNOL,2))),FCD
     *(FLUX,CRNOL)),1.4D0),IFCN,52)                                     
      CALL FCST(BTWO,FCM(.13D0,FCP(BSEVEN,1.9D0)),IFCN,53)              
      CALL FCST(BTHREE,FCM(FCS(FCM(FCS(FCPI(STATOROD,2),FCPI(SEPDIAM,2))
     *,FCD(PI,4D0)),FCM(56D0,ATHREE)),FCM(0.28D0,STACKLEN)),IFCN,54)    
      CALL FCST(FELOSS,FCM(BTHREE,BTWO),IFCN,55)                        
      CALL FCST(CULSTA,FCM(FCPI(FCD(FCM(BSEVEN,CRNOL),FLUX),2),RDC),IFCN
     *,56)                                                              
      CALL FCST(EFF,FCM(.5D0,FCD(PEIGHT,FCA(PSEVEN,FCA(FCD(FELOSS,2D0),C
     *ULSTA)))),IFCN,57)                                                
      CALL FCST(RAC,FCD(13225D0,FELOSS),IFCN,58)                        
      CALL FCST(XMAG,FCD(115D0,CRNOL),IFCN,59)                          
      CALL FCST(CULROT,FCM(CRFL,FCM(CRFL,FCD(RROT,STASLOTW))),IFCN,60)  
      CALL FCST(CNS(1),FCS(FCS(STATOROD,.1D0),SEPDIAM),IFCN,61)         
      CALL FCST(CNS(2),FCA(FCS(SEPDIAM,ROTORID),.1D0),IFCN,62)          
      CALL FCST(CNS(3),FCS(FCS(FCM(SEPDIAM,FCD(PI,69D0)),.035D0),ROTTOOT
     *W),IFCN,63)                                                       
      CALL FCST(CNS(4),FCS(FCS(FCM(.5D0,FCS(SEPDIAM,ROTORID)),.025D0),RO
     *TBAKIR),IFCN,64)                                                  
      CALL FCST(CNS(5),FCS(STORQ,60D0),IFCN,65)                         
      CALL FCST(CNS(6),FCS(19D0,FLUX),IFCN,66)                          
      CALL FCST(CNS(7),FCS(.05D0,SLIP),IFCN,67)                         
        CALL IMEDOUT                                                    
      ITER=ITER+1                                                       
      END                                                               
      SUBROUTINE INPUT                                                  
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('INPUT   ',IFCN)                        
      COILTRNS=29                                                       
      SEPDIAM=4                                                         
      STASLOTW=.06                                                      
      ROTSLOTW=.035                                                     
      AIRGAP=.008                                                       
      STAT00TW=.135                                                     
      STABAKIR=.15                                                      
      ROTTOOTW=.11                                                      
      ROTBAKIR=.47                                                      
      STASLOTO=.035                                                     
      ROTSLOTO=.015                                                     
      SLIP=.03                                                          
      ROTORID=2.875                                                     
      STATOROD=5.11                                                     
      YONE=2                                                            
      XC=0.050176                                                       
      STACKLEN=2                                                        
      UONE=2.6                                                          
      PI=3.1415926536                                                   
      CALL FC0059(BOTM,12,IFCN,91)                                      
      CALL FC0060(5D0)                                                  
      CALL FC0060(0D0)                                                  
      CALL FC0060(.035D0)                                               
      CALL FC0060(.035D0)                                               
      CALL FC0060(.008D0)                                               
      CALL FC0060(.04D0)                                                
      CALL FC0060(.06D0)                                                
      CALL FC0060(0D0)                                                  
      CALL FC0060(0D0)                                                  
      CALL FC0060(.025D0)                                               
      CALL FC0060(0D0)                                                  
      CALL FC0060(0D0)                                                  
      CALL FC0059(BND,12,IFCN,92)                                       
      CALL FC0060(.01D0*COILTRNS)                                       
      CALL FC0060(.05D0*SEPDIAM)                                        
      CALL FC0060(.01D0*STASLOTW)                                       
      CALL FC0060(.01D0*ROTSLOTW)                                       
      CALL FC0060(.05D0*AIRGAP)                                         
      CALL FC0060(.01D0*STAT00TW)                                       
      CALL FC0060(.05D0*STABAKIR)                                       
      CALL FC0060(.01D0*ROTTOOTW)                                       
      CALL FC0060(.05D0*ROTBAKIR)                                       
      CALL FC0060(.05D0*STASLOTO)                                       
      CALL FC0060(.05D0*ROTSLOTO)                                       
      CALL FC0060(.05D0*SLIP)                                           
       END                                                              
      SUBROUTINE OUTPUT                                                 
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('OUTPUT  ',IFCN)                        
      WRITE(J$OUT$,*)' EFFICIENCY =',EFF                                
      WRITE(J$OUT$,*)' STALL TORQUE =',STORQ                            
      WRITE(J$OUT$,*)' RUNNING TORQUE =',RTORQ                          
      WRITE(J$OUT$,*)' FLUX DENSITY =',FLUX                             
      WRITE(J$OUT$,*)' IRON LOSSES =',FELOSS                            
      WRITE(J$OUT$,*)' D.C. RESISTANCE =',RDC                           
      WRITE(J$OUT$,*)' A.C. RESISTANCE =',RAC                           
      WRITE(J$OUT$,*)' ROTOR RESISTANCE =',RROT                         
      WRITE(J$OUT$,*)' LEAKAGE REACTANCE =',XLEAK                       
      WRITE(J$OUT$,*)' MAGNETIZING REACTANCE =',XMAG                    
      WRITE(J$OUT$,*)' STATOR COPPER LOSSES =',CULSTA                   
      WRITE(J$OUT$,*)' ROTOR COPPER LOSSES =',CULROT                    
      WRITE(J$OUT$,*)' NO LOAD CURRENT =',CRNOL                         
      WRITE(J$OUT$,*)' FULL LOAD CURRENT =',CRFL                        
      WRITE(J$OUT$,*)' STALL CURRENT =',CRSTAL                          
      END                                                               
      SUBROUTINE IMEDOUT                                                
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('IMEDOUT ',IFCN)                        
      WRITE(J$OUT$,*)'============== ITERATION',ITER,'=============='   
      CALL FC0309(8,IFCN,113)                                           
      CALL FC0310(FONE,0,'FONE    ',0,-1)                               
      CALL FC0310(QONE,0,'QONE    ',0,-1)                               
      CALL FC0310(QTWO,0,'QTWO    ',0,-1)                               
      CALL FC0310(QTHREE,0,'QTHREE  ',0,-1)                             
      CALL FC0310(CONE,0,'CONE    ',0,-1)                               
      CALL FC0310(CTWO,0,'CTWO    ',0,-1)                               
      CALL FC0310(CRNOL,0,'CRNOL   ',0,-1)                              
      CALL FC0310(QFOUR,0,'QFOUR   ',0,-1)                              
      CALL FC0316                                                       
      CALL FC0309(8,IFCN,114)                                           
      CALL FC0310(QFIVE,0,'QFIVE   ',0,-1)                              
      CALL FC0310(ATHREE,0,'ATHREE  ',0,-1)                             
      CALL FC0310(ZONE,0,'ZONE    ',0,-1)                               
      CALL FC0310(QSIX,0,'QSIX    ',0,-1)                               
      CALL FC0310(ZTHREE,0,'ZTHREE  ',0,-1)                             
      CALL FC0310(ZFOUR,0,'ZFOUR   ',0,-1)                              
      CALL FC0310(QSEVEN,0,'QSEVEN  ',0,-1)                             
      CALL FC0310(QEIGHT,0,'QEIGHT  ',0,-1)                             
      CALL FC0316                                                       
      CALL FC0309(8,IFCN,115)                                           
      CALL FC0310(ZFIVE,0,'ZFIVE   ',0,-1)                              
      CALL FC0310(RDC,0,'RDC     ',0,-1)                                
      CALL FC0310(VONE,0,'VONE    ',0,-1)                               
      CALL FC0310(VTWO,0,'VTWO    ',0,-1)                               
      CALL FC0310(AFOUR,0,'AFOUR   ',0,-1)                              
      CALL FC0310(RTWO,0,'RTWO    ',0,-1)                               
      CALL FC0310(RROT,0,'RROT    ',0,-1)                               
      CALL FC0310(RFOUR,0,'RFOUR   ',0,-1)                              
      CALL FC0316                                                       
      CALL FC0309(8,IFCN,116)                                           
      CALL FC0310(GTHREE,0,'GTHREE  ',0,-1)                             
      CALL FC0310(GFOUR,0,'GFOUR   ',0,-1)                              
      CALL FC0310(GFIVE,0,'GFIVE   ',0,-1)                              
      CALL FC0310(GSIX,0,'GSIX    ',0,-1)                               
      CALL FC0310(XLEAK,0,'XLEAK   ',0,-1)                              
      CALL FC0310(CRSTAL,0,'CRSTAL  ',0,-1)                             
      CALL FC0310(CRFL,0,'CRFL    ',0,-1)                               
      CALL FC0310(STORQ,0,'STORQ   ',0,-1)                              
      CALL FC0316                                                       
      CALL FC0309(8,IFCN,117)                                           
      CALL FC0310(RTORQ,0,'RTORQ   ',0,-1)                              
      CALL FC0310(PEIGHT,0,'PEIGHT  ',0,-1)                             
      CALL FC0310(PSIX,0,'PSIX    ',0,-1)                               
      CALL FC0310(PSEVEN,0,'PSEVEN  ',0,-1)                             
      CALL FC0310(FLUX,0,'FLUX    ',0,-1)                               
      CALL FC0310(BSEVEN,0,'BSEVEN  ',0,-1)                             
      CALL FC0310(BTWO,0,'BTWO    ',0,-1)                               
      CALL FC0310(BTHREE,0,'BTHREE  ',0,-1)                             
      CALL FC0316                                                       
      CALL FC0309(6,IFCN,118)                                           
      CALL FC0310(FELOSS,0,'FELOSS  ',0,-1)                             
      CALL FC0310(CULSTA,0,'CULSTA  ',0,-1)                             
      CALL FC0310(EFF,0,'EFF     ',0,-1)                                
      CALL FC0310(RAC,0,'RAC     ',0,-1)                                
      CALL FC0310(XMAG,0,'XMAG    ',0,-1)                               
      CALL FC0310(CULROT,0,'CULROT  ',0,-1)                             
      CALL FC0316                                                       
      END                                                               
      SUBROUTINE TCON                                                   
      IMPLICIT REAL*8 (A-H,O-Z)                                         
      COMMON/CTHOR/ADAPT,BREAKIN,CONVERGE,DETAIL,DETOUT,ERRMAX,         
     *FRACT,PROGRESS,PROGTEST,REMAX,RESET,                              
     *STEPLIM,SUMMARY,SUMOUT,UNKNOWN                                    
      INCLUDE 'fc3099a.for'                                             
      INCLUDE 'fcgrapar.for'                                            
      INCLUDE 'GLOBALS.for'                                             
      DATA IFCN/0/                                                      
      IF(IFCN.EQ.0) CALL FCNAME('TCON    ',IFCN)                        
      SUMOUT=1                                                          
      DETAIL=1                                                          
      DETOUT=0                                                          
      END                                                               
