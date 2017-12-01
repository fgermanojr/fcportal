VPATH = /home/bear/usr/local/MC7Bbin/v4.00a/common
FOPTS = -g -fPIC -ffixed-form -fstatic -fzero -fdollar-ok -ftrace=full -fdollar-ok -fbackslash -fsloppy-char -w
acmotor1 :: acmotor1.fc /home/bear/usr/local/MC7Bbin/v4.00a/fctran /home/bear/usr/local/MC7Bbin/v4.00a/libdfc.so
	@echo acmotor1.fc
	/home/bear/usr/local/MC7Bbin/v4.00a/fctran acmotor1.fc
	/usr/local/bin/g95a $(FOPTS) -I$(VPATH) -L/home/bear/usr/lib -L/usr/local/lib -L/home/bear/usr/local/MC7Bbin/v4.00a -L/usr/local/dislin -ldfc -ldislin -lc -o $@ acmotor1.for
	@mv acmotor1.for ./genout/acmotor1.for
	@mv acmotor1.sym ./genout/acmotor1.sym
	@[ -e GLOBALS.for ] && mv GLOBALS.for ./genout/GLOBALS.for
