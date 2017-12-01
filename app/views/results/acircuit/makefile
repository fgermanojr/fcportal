VPATH = /home/bear/usr/local/MC7Bbin/v4.00a/common
FOPTS = -g -fPIC -ffixed-form -fstatic -fzero -fdollar-ok -ftrace=full -fdollar-ok -fbackslash -fsloppy-char -w
acircuit :: acircuit.fc /home/bear/usr/local/MC7Bbin/v4.00a/fctran /home/bear/usr/local/MC7Bbin/v4.00a/libdfc.so
	@echo acircuit.fc
	/home/bear/usr/local/MC7Bbin/v4.00a/fctran acircuit.fc
	/usr/local/bin/g95a $(FOPTS) -I$(VPATH) -L/home/bear/usr/lib -L/usr/local/lib -L/home/bear/usr/local/MC7Bbin/v4.00a -L/usr/local/dislin -ldfc -ldislin -lc -o $@ acircuit.for
	@mv acircuit.for ./genout/acircuit.for
	@mv acircuit.sym ./genout/acircuit.sym
	@[ -e GLOBALS.for ] && mv GLOBALS.for ./genout/GLOBALS.for
