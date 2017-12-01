VPATH = /home/bear/usr/local/MC7Bbin/v4.00a/common
FOPTS = -g -fPIC -ffixed-form -fstatic -fzero -fdollar-ok -ftrace=full -fdollar-ok -fbackslash -fsloppy-char -w
eject :: eject.fc /home/bear/usr/local/MC7Bbin/v4.00a/fctran /home/bear/usr/local/MC7Bbin/v4.00a/libdfc.so
	@echo eject.fc
	/home/bear/usr/local/MC7Bbin/v4.00a/fctran eject.fc
	/usr/local/bin/g95a $(FOPTS) -I$(VPATH) -L/home/bear/usr/lib -L/usr/local/lib -L/home/bear/usr/local/MC7Bbin/v4.00a -L/usr/local/dislin -ldfc -ldislin -lc -o $@ eject.for
	@mv eject.for ./genout/eject.for
	@mv eject.sym ./genout/eject.sym
	@[ -e GLOBALS.for ] && mv GLOBALS.for ./genout/GLOBALS.for
