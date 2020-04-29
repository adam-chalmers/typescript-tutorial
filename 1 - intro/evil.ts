let val: any = 5; // EVIL
val = "this is a string";

let num = val as number;
num.toFixed(2);

/*

Compiler:

mddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddhddhhdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddmo
Mmoo+oooooooooooooooooooooosooooooooooooooooooooooooooooooooooooooooooo+o+oo+/++++++o++ooo++oss+++oooo+ooooooooooooooooooooooooooooooooooo+oooooooooo++oo++++++++++//++++++/+ms
Mmoooooooooooooooooooooooooooooooooooooooooooooooo+o+oooo+oooo+ooo++ooooooo+++oo+ooo+++oooshdhooo+++o+++++++++oooo++++++o+o++++++++++o+++++++++++++++++++++/++//::/://///++++ms
MNhhhhhdddhhhysoooooooooooooooooooooooooooooooyhyo+ooooo++oooo+o+oooo+ooooo++oooooooo+oshmNhoo+ooo+++o+++++o++oo+++++oo+++++++++++++++++++++++++++o+++o+++yy+++++////++++++++my
Mmooooooooooooooooooooooooooooooooooooooooshddyoo+++oooo++oooo+o++++o++o+o+++ooo++ooydNNmyoo++++oo+++o+++++++++o++ooo+o++o++++++++++++++++++++++++++++++++ohmhso+++++++++++/+my
Mmooooooooo+oooooooooooooooooooooooooooshmmhso+oooo+o+oo++o+++++o+++++++++++++osyhmNNhs++++o++++++/+++++++++++++oydNms++++++++++++++++++++++++++++++++++oshmhydmmhsoo++++++++my
Mmooooooo++ooooooooooooooooooooooosyhmmdhhdddhyssoo++++++++++++++++++o+osyyhdmNNMNho+//+++++++++++//++++//+/oyhmNNmhmNds+++++++++++++++++++/+++/+++++shmNNhso++oyhdNNmhysso+omy
MmooooooooooooooooooooooooooosyhdmmdhsoooooosyhdmmmddhyyysssssyyyhhddmNNNmmdhysoshdhhyoo++++++++++////+osydmNNdhsoo+oymNmhyso+++++++++++///++//+oyhdNNmdso+++++++++oshdmNNNNmNy
MNhhyyysssoooooooooooossyhddmmdhyoooooooo+++++oooosyhdddmmmmmmmmmddhhyssoo+++++++/+oyddmmddhhyhyyyhddmNNNmdyo+++++++++oshdmNNmdhysssssssssyhddmNNNmhyoo+++++++/++++++++ooosyhNy
Mmoosyyhhhddddddddddddddhyysoooo++o++ooo++++++++++++++++++++oo+oooo+++++++++///////++++oosyyyhhhhhhhyssooo++++++++++++++ooosyhddmmmmmmmmmmmddhysooo+++o+++++++++++++++o+++++omy
Md++ooooooooooosssooooooooo+++++++o++++++++++++++//++++++++o+++++++++++++++++/++++++++++/////+++++///+//+++oooo+++o++oooooo+o++oooooooooooo++o+oo++o++oo+++++++o+++++++++++++my
Mm+++oooooooo+ooo++ooooooho++++++++++++++++/+++++++++++++++hds+++//+///++//++/++++++oyy+++/::/+//++//++/+o+++ooooooo+ooooooo+++++++++++++o++oyhmy++o+++++++/+++//+oyyyyysyysyNy
Md+ooo++ooooooooooooooooomho++++++++++++/////++/+++++++++++/sdmdso//:::///////++oyhmmmNds+/::/+++++++++++++ooooooooo++ooo+o++++++++++++++oydmmds+++++++++++/+++++++++osssyyyyNy
Md//++++oo++ooooooooooooosmmso++++++++++++++++++++++++////+shmmyshhdhhyyssyyhhdmdhyo++odmmyo+//+/++oo+oooo+oooosyhsooo+o++///:///////+oydmmdyo++++++++++++++/++/++++++o++++++ms
Md/+++++++++++ooo+o+oo++++odNdyo++++++++++++++//+/////+oydmNds/--:://oosssssoo+/::::::/++sdmmdhsoooooooooossyhdNNNNmdhysoooooooooyhdmmmmNy+:/::/+//++++++o+++sdhso+oo+++++//+ms
Md/+//+//+++++oosso+++/:////shmmdy+/+++/+//++++++osyhdmmdho+:-----------------::-::-:::::/oosydmmmmmmmmmmmmmmmdhyyyhdmmmmmmmmmmmmdhysso+shdhso+/+//+/++++ooshNmdmmdhsoo+://::ds
Md///////+////+hNNmdysoo+++osyhdydmmmdhhdddddmmmmmmdhyo/:------------------------::--:::::::::://+/+oosssoyssooooooooossssssssssooooooyo:-/ohddddhhysosyhdmmmhooosydddddddhyyms
Nd//:://:::+yhmNh+osydddddhys+/:-:/+syyhhhyyysoo+//::--------::-----::--------:-----::--:--::----.------:/ysoooyssyyyyyyyyyyyhhysohoooms:-..--:/++syyyhyyss//+++/::/::://+oosms
Nmdddddddddmmhyo+:::-:::::::--:-:::::::::::::::::::::-::--::::::::--:--:-----------::-------------------::hsoooh+oooooooooooooooosmo+omy/-.....-......----:---:::------------ds
Nh-://++++//::/::/::-::::::::::::::::::::::::::::::::::://////////////+++:------::--:-------------------::hs++od+oooooosooooooooooms++my/................-.---------.--------ds
Nh.--------::::::::::-::::::/+++++++++o+oossyyyhhhhhhhdddddddddddddNNNNNNy----::-------------------------:do++ohoooooossoooosoooosmo++hm:--.................--------..-.-----ds
Nh---:------:::::::::--:::-/mdddddhdhhddddhhyhyyyyyssssoosssoooooosNMMMMMy.-:-::------------------------:/hso+yhooooooyooooyooo++sm+++ym:-.-...-.........-....----.-.-...----ds
Nh----------::::::::::-----+m+++ooooo+oooooooooosooooooooooooooooosNMMMMMy-::::-----:--:--::------------:/hyooyhoooooyooooysooo++sm+++hm:---............--..-..--..----.-----ds
Nh-------:-::::::::::------yd++oo+osooooosoooooooooooooooooooooooosNMMMNNh::::::-------:----------------:/hhooyhoooossoooysooooo+ym+++hm:--.....----...---..----........--.--ds
Nh--:------:-:::::::::::--:ydoooooooossooosooooooooooooooooooooooosNMMMNNh::--::--:---::--::------------:/ydoohdooossooosyoooooo+ddooohm/----.-.--.--.----------...--.-.--..-ds
Nh--:----:::-:-:::::::-::::ymsoooossossooooooooooooooooooooooooooosNMMMNNy----:------:::---:------------:/ymoohdoosooossysoosoooodmooohm:---------.-..------.-----.----.---.-ds
Nh-::::::::-+h/--::::::::::hmsoooooooooooooooooosoooooooooooooo+++oNNNNNNy-::::-----:---:----------------/smooymoosososysoosssyoohmooohm/------------------------.....-.-----ds
Nh-:-:-::::-sdh/-::::::::::hNsooosooooo+oossyyooooooooooooooooyhhhhmNNNNNy-:-::-------:::--------------::+smsoymooooosysooyyohsooymo+ohm:-----------.---------..--..-------.-ds
Nh-:::::::::yo+y-::::::::::hNsooooooo+++oyhsmhoooooooooooooosmho++osydNNNs---------:--------------------:+sNsoymsooooysoosyoysysoymooohm:-----------..--------.:hh/-------.-.ds
Nh-::::::::/h-.ys:::::::::/yNsoooo++//oyso/omoooooooo+++ooosNs////////odN/-:/+/-----:-------------------:/oNsosNsooosyoosyooosyoohmooohh----------..-.-.-----..:NNdd/-------.ds
Nh-::::::::so-./d/:::::::::yNsooo+//+so/://sd++oooo++dy+oo+dN+/////+oyydNdshysdo------------------------/+omsooNsooooooosoooosoo+ymooohd:----------.----------.:mN/odo-------ds
Nh-::::::-sy----ho::::::::/yNsoo++/oo::::::sd+ooooooydd+/++sN+/+shmNNNNNNdo//:sd--.---------------------/+omhooddsssooooooooosooshm+++hd:-----------.------...-+NN/-+mo----.-ds
Nh-::::::ss----.oh:-:::::::oNso+++y+:::::::yy+ooooosd//ho//+mddNNNNNNNNmy////+ddyhyyo:------------------:/+dhooohhdddddddddddhhhhyo+++hd/----------------------oNm/::ym:---.-ds
Nh-:::::so-----.od:-:::::::/Ns+/os/:::+s:::yh+oooood+/:/hosydNNNNNNmdhs////+ydo/++oshmh+----------------:-/hdoo+++++oooooo++++++++++++sm------------.----------yNh::::mh-----ds
Nh:::::sy-------+h/--::::::/Ny/os:::/o/y:::sd/+ooohy/:::/mho+++////////++yddo/////////sdd/----------------/oNhhhhhhhhhhdddhhyhyhdddddddh---.--.-----.-----.-.-:dNs::::sN/.--/ms
Nh:::-+h:-------od/:::::::::mo/o:::o+::y:::/m+/+oyh///:::ydsooo+oosyhhddhs+/////////////sm+----------------:+oyhdddmmmdddmdddhhhyyyyso/----.----.-------------/Nm/::::/No--syms
Nd/:::d+--------+y:-::::::::dss/:/o::::s/:::oh/+yh+//d/::o+syyyhmhyso+//+/////+///++//+sydmo/-------------------:----:-----------------.---------------------:oNd::::--hd:ds-ds
Ndh:-+d---------sy/:::::::::hm//:o:::::++::::ohoh+/:o/+:++s/+//do/////////+/+///+++/shs/--+hNh/---:-----------------------------------oy--------------------::hNo:::-::oNmo--ds
Nyoy:sh--------:ss:--:::::::hy::+/:::::/s:::::oh+:::s:s:+:oso+dh///////+oooo////+//hy.  .ymmNNm/-:-----------------------------------+NN:--------------------+Nh:::s:::yNo---ds
Ny-/yhh--------/yo--::::::--ho://:::-:::+o:::::::::o+:++::/yydNh/////oso////oss///sd.  .dNNNNNNh------------------------------------+mdm:-------------------:hh::-+No-:++::--ds
my---+o---so---oy+--::::::::yy//::------:++:::::::+o::oo//sdNNMh////s:`/hhhy/`:y+/dy`  yNNNNNNNN-`...--------.---------------------+mohm-------------------:hd/:::hyy::::-:::ds
my------:os+---sy/-:::::::--sh+::----:-:::++:::::+o::://odNNNNMd///o/ /mNNNNmo`/h/ym- `dNNNNNNNh..-..--:/++++/-.-.----------------+ds+md-----------.-------sd/:::so/h::::-::oms
my-----:s/s+--:ss-:::::/hs::om/:::--:::::::/s/::/o::::+hNNNNNNMm+//h.-mNNNNNNm-:m++do` /mNNNNNNhyhyyhmmmNNNNmmdy-..-------------:sd+//md--------..---.---:yy::-:so:/m:----:s+ds
my----:y+-s/--+y+---:::/hyh//d::------:::::::+o+s/:::smNNNNNNNNNo//h./NNNNNNNm./d+/+yyo/smhhsoo++++yNMNNNNNNNNmNm:.------------+hs::::dm--.--.--..-....-:yo:---os--:d/---/s/-ds
my---:y+::y:--sy/---:--/h:+hsm--:--:--:-:--::::+/:::yNNNNNNNNNNMy//s/.hNNNNNd/`yo/+//shho++///////+NMMNMNNNNNNNNN+...-.------/sy+:+y::sN:-.............-ys:---+s:-:-y+--/s:--ds
my--:so:-/s---ss:----:::y:-/hd-----::--------:-::::hNNNNNNNNNNMMy//+h-.+yyy+.-so////os++///////////sNMNMMMMNNNNNo.....---.--sh+:-/sso::yh:-...........-so:---/o:----oy-/o:---ds
ms--oy::-o+--:so-------/y---:ss----------.----::::sNNNNNNNNNNNNNo///+so:--:+oo//////+///////////////+shmmmmmdyod:......-..+ho:--/s::/-:-+o..-.........oo--:-/+------:d+s:----ds
mh/-h+::-y:-./s+------.o+-----so.-----......--:::/mNNNNNNNNNNNMd//////+oooo+////////+//+oyo/:://////////////:+h+........-sy/---+s:oyyyyssssyyssooo:..-s:---:+--------+d/-----do
my:+h/--:y--./s/.----.:o--....:y+----........---:+NNNNNNmNNNNMm+/////////////////////osyyddy+//::/:///:::/+shy/........+ho---/s+-+mhyysoooossysyhmo..//-:--/----:-----:------ds
my-:/:--:y--./s/----.-o-.......+y:--.........-:+symNNmNNNNNNNd+//////////////////////+///+sdoyyyyysssyyyhys+-.`-s/...-oy/--:oo:--oNmmmmmmddhyyo//do/+o+/:--/---:-------------ds
my--::---y-..:y-...--+:........-so--.........-dy/-/mNNNNNNNmy+/////:://///////////////////yh-.-:++oo++/:-..```:dNo---sh:--/s/----yh:////::------+d+:::/+o:-----------------..ds
ds--::---y:..-s-..../:...-:.....+s:..........+m/:--/smhhdNy///////:///////////////////////hd:.-.............`-myhy:-om/--+s:----.sy--...---...-.oy/+/-.-/y------...------..`.do
my-:-:---s+...o/.`.::....:o-....:y/..........yd:::///y::oNo://////:y+/////////////////////sN/--.-............ym:om/:ms:-:y:-----.oy--...........so++o+.-:hoosyyssssssssyyyyyymo
Ny-:-----+s.../+``::.....++/....-so.........-dh/:://oy/:sNo:///o+//do//////////////////////my--.............:ms.:my/m/--//---::::os............-yyyys---so:////////////+o+o+/do
ms-:-----/y-..-o-:-.....-+-+-...-so.........-mh/:///ss//hN+////y+/+d//////////////////////:sN/..............oN+.-+mhm:--::+osso+:os............-y//:--:++----:---:-:::::::::.do
my-:-:---:y:...//:.....-+:./+...-oo.........-dh:////hs//dN+////yo/+mo//////////////////:/::+Ns..............sN/.--/yh:/oyyo/:---.+y............:y//++++:------------:::-:::::do
my-----:--s+....+/....-/:--:o...-oo-.........hh:////hy//yMs////oh//dh//////++/+//////////:::mh-.............yN/-/o/--sh+:--------:y-..---------/s.---------------------::::::ds
Ny--------/y-....-....//---:o...-so..........ym/////hy//oNh/////hs/oms/////++/++/////////:::mh..............oN+-+yoo/ms::-:-------o++++++oo+oooo:-----------------------:::::do
Ny---------++........:+----//...-s/..........oNo////yy//+hNo///++hs/smy++++++++++++++/////:+Ny............../Ns:/h::od+soo+/::------------:-:------------------------------::do
Ny----------+/-.....:+-----o:...:s/..........:Ns:///oh//++dm+////+hy++dds+++++++++++++++///hNs::-...........-md::h/--y:--:++ooooo++/:::::::::--------------------------------do
Ny-----------++-...-+-.----+-.../s:..........-mh///++ho+++oNd+/////shyoshdhyo++++++++++/++yNmhyyy:..........-ym:-ss--y+---:::::::////++ooo++oooo+++++////::::::---:--.----.``do
Ny------------/+:-.//.----/+..../o:...........sm++++++yhhdhyhmyo+/+/+shdhydmmhhhhhhdhhsohmmdy+//yh-.........-om/:/y--+y:--:///////:::::/:://:/:////+///++o+++ooooooo++++++//:ds
Ny--------------/o:o:-----+/...-oo-..........:/ydhhhhydds+/+/odmdysoo+syyyssooo++++++omNyo//yh++om/-://:-..--ym::/y:--/osooo+++/++///////////////////:::::::::::::::::////+o+ms
Ny----------------+o------o-...-oo...----:-:///::-::/oNs+++++++osydddmmmmmmmmmdhdy++++yd:///omo++ddhyssyd/.-:mh::/y:-:---:/++osssyssoooo++++++/++////////////::/:////:/::::::ds
Ny-----------------------:o....-oo....--::/++++++///:+Ns+++++++++++++++o+o+o+/+++mh+++yd/+o+oNo+++++++++do.-+No::oo--/-.-------:/hhhhhhhoosssssyyoooo+++oo+//////////:///:-+hNs
Nh-:---------------------+/....-oo.-::://oyooooo+++++oNhyyyyssoooo++++++/++/+++//hm+++ymdhydNN++++++++ohs---yh:::s/-:/--/------:/hyss+/y:-:::::syo---://+oossyyhyyyyyyyyyyys/ds
Ny-:---------:--------:--o/....-so.:++++/yd+++o+oo+o++osysoomhhhhNddmmmmmmhdmmmddmm+++++++++mNmmdhyhyso:...+m+::++::/----------:/h+//::y+::---o+/y--------:--/yyyyyyyyyys/..-ds
Ny-:--------------------:s:....-oo.://+/ysh/:+oosyssssso++:-h++/om-+NNNNNd:dNNNNNNNsoooooyhmNNNNd-..```...-h+::/+::/:.------.--:/h+/::/y+----o+.:y:---------:+yyyyyyyyo:.....ds
Ny-:------------------:-:s:.....oo-:-.-o/-y/.:/oyyssssyso++/mo+/sh::oyhhhhhmNNNNNhyhddNNNNNNNMMmmhyyyhyyyyh/::/+:::---:/+s:----::h+:://h+---s/..-y/-:-----.-:/ysyyys/-......-ds
Ny-----------------------s/...../y/..-o/..ss..:+oosyysssoo+om+++yh/+++/-../dNNNNNh/+++my++oNMMNsm+/://///s:..://:--/++/-:+------:ho/://yo-/s:...-yo-----+---:/syys/......../sds
Nh-----------------::--:-o/.....:y+..o/.../y-.:+oooooooooooomo++yy/++oo/://dNNNNNd/+++mo/+oNMMdod++++++s+:.`-+oo+++//:-:o:::///-:y+/-::yoo+-.....so--:::/----/ss/........-so-ds
Nh-:----------:---::/:::-o+......os-++....-y/://oooooooooo+oNo++hy/+oooo+++mNNNNNd++++mo+ooNMNoyd+++/+o+/:/+ssoo+++//+oo+++++++/:y+:::os/-.......os::::+:::/ss/........./s/--ds
Nh-:-------::::--:::/:::-/s-.....-oos-.....so.-/oooooooooo++mo++hy/+ooooooodNNNNNm/+++mo++sNMm+yd++oo+++oo+ooo+++oo+osso++/+o++::so:os/-.........+y:::o///os/-.........+o:---ds
Nh-::::::--/:::-:-::/:::-:s-......:ys-.-/..+y-./oo++yho++o+omo++hh//osysso+dNNNNNmo++oNo++yNMy+ym++oo++++ooooo++++++++++++++++/:-oyo:-.........../h:-:/+sy+-.........-o+--:--ds
Nh-:::::-::+:::-:::-//:---++......./o..+o:.-s+.-:-+yyh+////+No+ohy++ossyyyshNNNNNNo++oNoooyMNs+ym++ooooooooosooooo+o+++++++++//os+:.....-/:....../h:--+yo-..........:o/------ds
Nh-:-:::--:+/:-:::-::+:::-:s:.........+/:+../y-.`/s:sh--//:+No++hy/oooooo++hNNNNMNo++om+++sMNo+ym+++++oosoooooooooo+++++++++oss/-.....-/+s/......:h/-ss/-.........-/o:-----:-ds
Nh-::::::-:/+::://:::/+::--:s:......./o.-s...+s.:s-.sy-:///+mo++hy/+oooo+++sMMMMmms++yd/++sNNs+ym++++++oossssoooooo++++///oys:-.....-/+:-s/......:yos+-..........:o+:--------ds
Nh::::::/::/+::::+::::o/:---:o+---.-o+-..+:...oos+..+s.-///+ds++hy:+ooo+++//NNMNydy/+yh/+/+NMs/om+++++++++++o+++ooo++/:::oo:.......:+:---:s-.....:yy+..........:++:----------ds
Nh::::::+:::+:::://::::+:----:+s+:/o/---.:/..../s:..:h/-////hdoohy/+oo+o++++osso+yd/:yh///+hNdyym++/++/+++o+o++o++++//:/s/-.......//------+o.....-oo-........:++:------------ds
Nh::::/://::o:::::+:::::+:--:--:+o+:------+:.........oy://+//osssooo+++++o++++++/odsoy+/++++oooss++++++++++++++++++///oo-.......-+:----:---++.....--.......:o+---------------ds
Nh:::://:+::+/:::::+:::::::::--:-::::------+-........./-/+++/++oossyyysyyyyysoo+//::///+++++++++oooooooooo+++++++///+s+-.......:+:----------/o/-........./o+-----------------ds
Nh:::::o://::o::::::/:::::::----::::::----..:.......-..:++o+++ooooooosyyyyyssso+++++++++++++++ooooooosooo++++++++///y+........-+-------------:/oo/-.....os-.-----------------ds
Nh:::::+/:/::+/-::::::::::::::-:::::::----.....-:/+/:-::o+ooooooooooooooooooooooooo+++++++++++oo+++++oooooo++++++++ho........:+-----------------:+ss/:-os--------------------do
Nh::::::/:::::+:--:::::::::::::::::::::-://+ossss+::/++oooooooooooooooooooooo++oo+++++++o+++o+++++++++ooo+o++++++ods........:+:-------------------:/+oss-------:-:::::--:----do
Nh:/::::::::::::::::::::::::::::::::/+syysoosoo+ooosssoooooooooooooooooooooooo++++++ooooooooooooooo+++ooooooo+++/hd:.......-o:::::::::::::::::::::::::::::::::::::::::::::::-do
yyosssssoossssoooossoosssssooossooossyyssoossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssyyoooo+oo+oo+++ooo++ooooooooooooooooooooooooooooooooooooooooy/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-
NmyyyyyyyyyyyhhhhhyyyhhhhhhhhhhhhhhhhhhhyyysyyyydNmyo++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++odNmyyyhhhhhhhhhyyNo
Nd++++++++++++++o++++oooossoooooooooooooo+++++sdho-`                                                                                                        -hNh/:+ooooosss+/mo
Mm++++o++oooooooossyyhhhhyysooooooooooooo+++ymd+`                                                                                                            .yNd++ooossssso+mo
MNyssyyyysyyhhddddhyyssooooooooooooooooooosdmo`                                                                                                               `yNh++oosssooosmo
MmsssyyyysssssoooooooooooooooooooooooooooyNh-                                                                                                                  .mMy+ossssssssmo
Mm+ooo+o+o+++oooooooooooooooooooooooooooyNs`                                                                                                                    sMmooossssyyyNo
Mm+ooo+oo+ooooooooooooooooooooooooooooosNd.                                                                                                                     :MNyooossssssNo
Mm+ooooooooooooooooooooooooosoooooooooodMo           .oo++/:-```   .`       `-::-`            `:`  `...`           `.....`                `..`                  -NMyosssyyyyyNo
Mm+oooooooooooooooooossssssssoooosssooomN:           `:+sNdhh:/y` -m+ .+`  :ddhhho`           :m-`+ddhh+           omhhhhy:`-  .o:  :/  .ohddh:                 .mMyossssssyyNo
Mm+ooooooooooooooossosossssssyyyyysssooNN.              .mo   om:-/Ny -N/ `oNh+-``            /N:`ymy+:.          `dm-```` .m- :Nm/`ym..dm/.:dh`                -NMyossssssssNo
Mmooosoooo+ooooooossssssssssssoooooooooNN-              .mo   sNhhdNy .N+  `-+sdd:            +N: `-+oyds`        `dNys+`  -N- :Nyyohm-hdosso/.                 /MNsossssssssmo
Mmoooshhyoooooooooooooooooooooosoooooo+hNo              .mo   sN- +Ns .N+  `oo++my`          `sN: .+/:+hy`        `dm:.`   +N- :No`omh-mh.````  `:`            `yNmoossssssssmo
Mm+oooooshdhysoooooooooooooooooooooossshNm:             `/-   :y. ./. `d+   `:ss+`            om. `/yy+-           yh`     om. .y.  .` :hmdddy. :d+            -mNsooosssssssmo
Mm+oooooooosyhdmmmmddhhhhhhhhhddmmmNNNNmdNh.                           ``                      `                   ``       `            `.-.                 `sNh+ooosossoosmo
Mm+ooooooooooo++osyyhdddddmMMNNNmhhyssoo+yNd-                                                                                                                `+NmdmmddddddddmNo
Nd++ooooo+oooso+ssyyyyyhyyysso/oooooooo+++smmo`                                                                                                              +Nm+++syyhhhhhhhNo
Mm+oooooo+++++++o+//+////+/+++/++oooooooooooyNmo`                                                                                                          `oNd+/++o++ooooooomo
Nd/+oo+oo+++////////+++/////+++/++sssssyysssoohNms-                                                                                                      `+dNy::://+ooooooo++mo
Nd/++++++++++++++/++++++//////:://+////sssso+++oymNdo:`                                                                                               `/smNh/::/+osyyyyyyyyyyNo
Nd::/+//++//////++//+//////oyhdy+:--:/:/++++++++o+ohdNNhs+:.`                                                                                  ```./ohmNds//+////++++++ossoosmo
Ndyyyysssoooo++ooooossyhmmNNdssdmmhsddddmhys+///++++++oyhdmNmdso/:-.``                                                                    `.-/oydmNmdhs+oo+++/+++///+++++o+++mo
Nh.::/+oshhddddddddddhyys+:--.-smmdyysssyydmNdo+////////////+sydNmmmmmdddddhhyssooooooooooooo+`                      ``````````.-::://+sydmmNmdhyso++++/shdmmhhyyoo++++++++//mo
Nh.--..---.-.--.-.--.........+mmy+/////////+ohmNdyddmmdmmmmmmmmmmmhys//+++osssyyyyyyhhhhhhhhmNo      -ossssssssyyyyhhddddddddddmddhdddhhhysoo++++++++++++++shNMMNNNNNNNmmdhhhNo
Nh..............``..........sNs+//////////////+ymy--:/++++++//:::--.......-...-........-.---dNs      smo+++++oooo++/:::::/ydmho/:--::///+///+/++/+++++osyhmNNNd+////oosyhhhhhNo
Nh.........................oNy////://:/://////:/+hh-..-..----......-......-...............-.dN+     `mm.`..................-:/oyddhhsooooo+ossssshddmmNNmdho+::---/y/--.---..do
Nh........................-mm//////:://///://///::yy.....---...........................-----dN:     .md.....-.........-.--......-/+sshhdddddmmmmmmdhso/:.-..------yNms-....`.do
Nh........................+Nh://////:/:///://////:+ms-/shhhdy/.`............`..........---.-mN.     -Nh...............---..-.........``...-----:::--..`......----/Ns/dh--....do
Nh........................+My:////////:://+oyyhmmmmNNmho///+sdy-`........`.............-...+Nh`     oN+..............----..-...-.-...```....-.---........--....-:dd:-:yd/...-do
Nh....---os-............../Ny:://://+osyhmNNNNNNNNNNd+/::///:/dh...........................sNo     .dd-..............--.-.------.-..........----..........------ym/---:ydo::-do
Nh....-+hNd--.............-dd::/+ohdmNNNNNNNNNNNNNdo/:/::////:sN/`......`..`...............dN:     sm/...............--...-.--..............-..-.......-..-----sm/:----:ody/:do
Nh..-:ohsNs--..............+NsydmNNNNNNNNNNNNNNNdo/::::://///:sNo``...`.....`.............:Nd`    /No................-.......-........-.....--.-.....---------sd+:-----::+hd/do
Nh.-:yy:sN/--......-.`.:oyyhmmmmNNNNNNNNNNNNNmho//:/:/://///::dd-..........`..............oNs    :ms........................................-...........----:yd+::------:--sdmo
Nh.:ys::hm--....`.sh..sdy+/////++oyhddmmmmdhs+/::///:/:////:/hNo:..........`.............`hN:   :my................-....................................---+hy/-----------.`:mo
Ny:hs--:md--....-syy:hh/::://:/:/:::///////////:://////:::/odhoshhy+-...`.``..`...........dd.  /mo.`...........................-y:....................---/ydo:------::::-`  `do
Nhy+:--:md--...-y+h+oNo:::://://////:///:/::////://::://oyddo:::/+ymms/.`..`..`...`..````:No `omo............................``oNh....................:+sdy/--------::ss.`  `do
mm+----:Nh-----h+-m+sm+:::/ooo++////:::///:://:////oshddhs+::///////ohmh/.``...`..`...`.`sm..yd/.............................`-msm+.................-/yds/---------::-sm: ``.do
Nh-----:Nh----ys--m+/dy/::::/+oddyyssssosssssyhhhhddhs+//////////////:+hmy:```.......`../m+:hy-.............................--yh.sd--.............-/yhs/--------------s+y-.-:do
Ny-----:md---oh---h+-/hdyo//::om+/+osyyyhhhyyyo++//////://///////////:::omm/`.`...``.``-dhsd+..............................-:sd:.:mo--..........-ohds:------+:-------++-+y--:do
Nh------ym:-/m/---oh--::oyhhyymy://////////////////////://::////////////+smm+/:..`...``ymy/.`.............................--od/---hh-.........:sdy+::------sm:------/s---oy::do
Nh-:+:--+Ns-yh-----h+---...-oNd/////////////////////:::::::////////+ys+/:-::/+syyo:.`.`:-.``..............................-oh/----ym:-......:shy/:-------:yyy------:s::---ss:do
Nh-+s:---hm/dy-----/h::-.``/md////////////////+++++/::::::///////+yy:`    `--::--ods.```.................................-sh/-----+N:-....:yds:::-------/y/os-----/o:------oymo
Nh:++/---:hmN+:-/o--oo:.-/ymNy:///::///:/+shdddddhdddhhs+:://///+h/`    .odmmmmmdyohh-..................................+s+:------/N/...:yho:--:-------+y:-h+----o+---------/mo
Ny+:/o----:sy::/+o/::+::ymmmNm/////////sdhs/-..````..-/ydhs/://oh:    `/dmmmmmmmmmmdNh................................-oo---------:No..+ds:-----------ss-::d:--/o/----------.do
Nd/-:o-------:/o::o-:+ymmmNNNN+///////yy:`              `:yms:/d-    `ommmmmmmmmmmmmmN+`..........................```:o-.---------:dh-yd/-----------/y+::::h--++----------.``do
Nd---o:------/o::::/yNNmmmNNNMs//////h+`       ./osso+:.`  :dhh/     /NmmmmmmmmmmmmmNNy.............``.....-:::::--.`.`...-:y+----:ymdh:----------/so---:-/s:o:---------.....do
Ny---/o----:++:-::+dNmmmmmNNNMh/////ys`      `+mNmmmmmNmy:  .hm-    `dmmmmmmmmmmmmmmNNh.........`.```.-/oydmNNNNNmmmho..--:++y----:+mh:---------:ss/------os+------------:---do
Ny----o/---+/---:yNNNmmmmNNNNMd///:od`      .hNmmmmmmmmmmms` -my    `mmmmmmmmmmmmmmmmNy`.........``.ohmmmNmmmmmmmmmmmNdo--:--h:---::/:--------:ss/----:---o/-------------/---do
Ny----:o-:+:---/hNNmmmmmmNNNNNN///:ho      `hmmmmmmmmmmmmmmy``dd.   `mmmmmmmmmmmmmmmmN:`...-:/+ossymNNNmmmmmmmmmmmmmmmmNh----+s-:::---------:sy/------------------:-----:/---do
Ny-----:+o:---omNmmmmmmmmmNNMNN+///m:      :NmmmmmmmmmmmmmmN+ hN-    sNmmmmmmmmmmmmmmy.:ohdmhhysyNNNNNNNNmmmmmmmmmmmmmNNNo---:h::---------:sy/--------------------------o:---do
Ny------::--:hNmNmmmmmmmmNNNMNMy:/+N:      +NmmmmmmmmmmmmmmNh`hm.    .hmmmmmmmmmmmmmNdmho//::::yNNNNNNNNNmmmmmmmmmmmmmNmNo----os---------+y/---------------------------++----do
Ny---------/dmNmmmmmmmmmmNNNMNMd///mo      :mmmmmmmmmmmmmmmmd-mNh-    `odNNmmNmdyodmyo:::::::+dNNNNNNNNNNmmmmmmmmmmmmNNNm:-----h/------:ys----.-------------------:---:o-----do
Ny--------/mNNNNNmmmmmmmmNNNMMNm//:ym.      yNmmmmmmmmmmmmmNyyNoymy/-`  `.://--/yNd///:://::/mNNNNMNNNNNmmmmmmmmmmNmmmmN+------:d:----:y+--.`.-------------------/:-..o/-----do
Ny-------/mNNNmmmmmmmmmmmNNNMMMNo/:+my`     .hmmmmmmmmmmmmmmyNy::/shdmdhso++ohmmy+/:///////:yNNNMMMNNNNNmmmmmNNNNNNNNmmo--------:h:--:h+--...-------------------::---:o------do
Ny-------hmmmmmmmmmmmmmmmmNNMMNMo///+mh.     `ymmmmmmmmmmmmdNh///:::/:/osyhhys+////////////:dMNMMMNNNNNNNNNNNNNNNNNNNNo----------/y/-ys---.---------------------:----o:------do
Ny------oNmmmmmmmmmmmmmmmNNMMMMMs/////hms-`    -shmmmmmdyydms///////:/:/:///////////////////yMMMMMNNNNNNNNNNNNNMMNNmdm/-----------:ysd:------------------------/----o+-----:-do
Ny------dmmmmmmmmmmmmmmmmNNMMNMMs//////ohmho/.````.:/osymmy+////////////////////////:///////+mMMNNNNMNNMNNNNNNMNNms:dh----------..--++-----------------------:/----/o--------do
Ny-----:mmmmmmmmmmmmmmmmmNNMMNNMo/////////oyhdddddddddhyo/////////////////////////:/:////////omNNNNNMMMMNNMMMNmho:-+m/----------..------------.......--------/----:o----:----do
my.----+NmmmmmmmmmmmmmmmmNNNMMNm///////////////+++/+///////////////////////////////////////////oydNNNNNNNmdhs+/::-oms--------..--------------.....----------:-----+/---------do
Ny.----+NmmmmmmmmmmmmmmmmNNNNNMh:////////////////////////////+oso//////////////////////////////////++oo++////::::ymo----------------------.....--.--..-----------//----------do
Ny-----:mmmmmmmmmmmmmmmmNNNNNNN+///////////////////////+//oyhmmy+///////////////////////////////////////////::/smm+---------..---------....--..--..--------------:-----------do
Ny------yNmmmmmmmmmmmmmNNNNNNNy///////////////////////+ohdd/.+dmdyo+/////////////////////////////////////:/+shmds:---------------------...-...--....-------------------------do
Ny-----.:mmmmmNNNmmmmNmNNNMMMd//////////////////////+ydhsoh+` `:ohmNmdyso+///////////////////////////++sydmmhy+:------------.-..----...---------.-.--------------------------do
Ny------`/dmNmmNNNNmmNNNNNMNh+///////+++///////////sysyho+oss+:--:yNyshdmmmdyyo+++/+//+++++++oossyddmmddhs+:----------:---::.------------------------------------------------do
Ny.--:/:::omNNNNNNNNNNNNNNNy+///++//++++///////////+//+sdyo++oossdNNo.``-:sNhhdmmmmmmmmmmmmddhhdmyso//:-/:---------------.o--------------------------------------------------do
Nh/ydmNmmmmNmdmmNNNNNNNNmyo//+///////////+/////////////+ohds+++++omNmdysshdN:-sNy/mo:::::--..`-hs------o+----------------/+.-------------------------------------------------do
NNmmdyyoosds/:/+oyhhysdm+////////////////////////////////+sddso+++hNNNNmNmmNmmNN+:d+.......``.yh------o+--.--------------+----------------::::::::://+++ooo++++ooooo+--------do
Nd/++/++sms+/////::/:omy///////////////////////////////////+shdhsoyNNNNmmNNNNNNs//d/.........sh:-----+o--.-------------.:+.-------------ohhhhdhhhhhhyyyyooosooooooosNo.--.---do
Nh:/+++sNy++++/+++//+md///////////////////////+/+//////+/////+oyhhdNNNmNNNNNNdo//+mo/--.....sh:-----/y-----------------.o:---/----------dmysso+/////::::::/::::///:oNy.----..do
Nh:////hNo+++++++///hNs+/+++/+/////+s///////+++++///+/+++/////////+syhdmmmdyo///+ho+hy/-...sm/-----:y/-----------------:+---:/----------hh:ohdmmmmmmmmmmmmmmmmmNNmdymm+ssso:.do
Nh:///+dd/////////+yNh++++++oh+++++od+o//++++++++//++++++/+//+/////////+++//++oydo--:od+../No------oo----.-------------+:---+:----------yd...:/sydmmmNmmmmmmddhyo/:-hN/---/oymo
Nd////+md/////////sNm+++++++yy+++++yms+++++++++++++++/+++++//+/+//+/++++osyhdhmd/----:+d+-hm:-----:h:-----------------/+---:o-----------yd.......-::/+////::---...--yN+---.-/mo
Nd////+md//:/:////mNy/++++++ds+++++hm+++++++++++++++++++++++/+/+/////oyyhysoo/sNo----::omsms------oo-----------------:/----s:-----------hd-.........-...............sNmdy:--.do
Nd////+Nd::::::/:sNm///////+Ns+++++hm++++++++++++++++++++++//+///+/////+//////+dm/---::/omN/-----:h/-----------------/----o/------------ym-.........................sNNNN+...do
Nd////oMh::::::::hMh///////sNo+++++hNo++++++++++++++++++/++++/++/+//+/++//+///+omd:::::::+y:-----+s-----------------/----++---:---------yN/........................-yNmmh:...do
Nd////hMh:::::::/mNo///////yNo////+hNs++++++++++++++++++++++++++/++/+/+++/+/+///yNs-/+/::-------:y:----------------:----++----/---------yNo..................-....--hm/:....-do
Md:///hMh:::::::+NN+///////hMo/////hNs+++++++++++++++++++++++++++++++++/++++++//+Nm/-:o/-------:s/--------------------:+/:---/----------sNs...............----------mm+/+osyhmo
Nd:/::hMh-::::::+NN+///////hMo/////hMs/++++++++++++++++++++++++++++++++++++++/+//dNy--:s/-----:o+--:---------:-------:/:----:----------.oNh--..---..-------.-------:Ndossso+/mo
Nd////dMh:::::::+NN+///////hMs/////sMh///+++++++++++++++++++++++++++++++++++++++/yNd::::s+::::+s::-::------:---------::::--::--------...:mm-.-..------------------.+NhhdddmmdNo
Nd:///dMh:::::::oNN+///////hMh/////+Nm+//+++++++++++++++++++++++++++++++++++++++/sNm/::::/o+::h/::::::::::-:::-:-----::::---.--------/+symm:------------.--------.-hN/://////do
Md::::dMh::::///oNNo///////yMm//////mNs/////++++++++++++++++++++++++++++++++++++/sNm/::::::+sss:::::::-::::::---------:/::-..-/+oyhdmhys+ymmddhyooooooo+/://:///:/omh:///////do
Nd://:hMs::::://+mNs///////+NNo/////sMd//////////+++++++++++/+++++++++++++++++++/yMd:::::::::/::::::-:---::::-------::///+oydmmhys+//:::-:-:++ossyhhhhhdddmmmmmdddhy+////////do
Md::::dMy::://///hNh////////hMh//////dNo//////////////////////++++/++++++++++++//mNy-:::::::::::::::----::::--------:/ydmNdyo+/////////:///:/::::::--:-:::::::::::://////////do
Md::/:hMs:://////+Nm////////+NNo/////oNm+///////////////////////////////+++/////sNm/----:-:::::::::::--::::::------:omNNy+/+/////////////////////////////////////////////////do
Nd://:yNo:////////hNs////////sMm+/////sNd//////////////////////////////////////+mN+`..---::::::::::::::::///:---:-:hNhoNd+++/++//////////////////////:///////////////////////do
NmossoyNy+ooosssoo+mdsssssssssmMdssssssdNhsssssssssssssssssssssssssssssssssssssdNd+++++ooooooooooooooooossoooooooodNmyshNdssssssssssssosssssssssssssoosoossssssssssssssssssssmo
*/

export {};
