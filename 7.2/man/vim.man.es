./" vim-doc-es https://www.assembla.com/wiki/show/vim-doc-es 
./"
./" Copyright (C) 2009 
./" This file is distributed under the same license as the Vim 7.2 package.
./"
./" Translators credits:
./"   - Initial translation
./"       Pedro Alejandro López-Valencia <vorbote@users.sourceforge.net>, 2009
./"
./"   - Updates
./"       TRADUCTOR <CORREO>, AÑO 
./"
./" 
./"
./" Las notas siguientes son relevantes al uso de *roff. Esta p\('agina
./" de manual ha sido traducida a mano y a ella se aplican algunas reglas
./" diferentes, pues es procesada por *roff (nroff para la pantalla y troff
./" para impresión en papel o PDF). Es dif\('il aprender como usar *roff
./" adecuadamente debido a que la documentaci\('on es casi inexistente,
./" toda est\('a fuera de impresi\('on o si est\('a disponible en alg\('un
./" medio electr\('onico, ha sido escrita de manera confusa y definitivamente
./" no ha sido traducida al castellano. El traductor aprendi\('o troff
./" mientras otros perd\('ian su tiempo con WordStar... Sin embargo,
./" se puede aprender a usar *roff apropiadamente estudiando la documentacion
./" de GNU groff.
./"
./" Esta p\('agina de manual por razones de portabilidad, 
./" solo usa macros comunes entre
./" A&T Documenter's Workbench y GNU groff, por lo tanto tambi\('en 
./" puede usarse con \*(lqheirloom-doctools\*(rq (que recomiendo, pues
./" procesa texto en UNICODE y usa fuentes de impresi\('on TrueType y
./" CID con extensiones OTF sin mayor problema).
./"
./" El uso de los macros \*(lq y \*(rq en vez de `` y '' respectivamente
./" es precisamente por portabilidad. Versiones de nroff viejitas, como
./" las que vienen en (Open)Solaris, AIX y HP-UX no pueden generar 
./" comillas tipogr\('aficas y deben fingirlas con un macro. 
./" Los troff de esos OSs no tienen ese problema.
./"
./" palv, 2009-10-02
./" 
./"
./" PS. Para producir un PDF se usa la formula m\('agica:
./"
./"     groff -tman -Tps vim.es.man | \
./"           ps2pdf -dPDFSETTINGS=/prepress - vim.es.pdf
./"
./" =====================================================================
./" =====================================================================
./" =====================================================================
./"
./"
./"
./"
./" Debido al formato (txt) y al máximo de 80 columnas que pueden tener 
./" los textos de ayuda en Vim, así como el formato PO, por favor, leete los
./" apuntes concernientes a la edición de los archivos PO relativos a la
./" aplicación que desees usar.
./" También encontrarás información acerca del uso de herramientas gettext
./" en el proyecto de localización (l10n) de Vim.
./" 
./" - http://www.assembla.com/wiki/show/vim-doc-es
./"
./" No somos parte del proyecto de traducción en Debian. Sin embargo, creemos que
./" este enlace puede ser de interés. A pesar de no formar parte, nuestra 
./" intención es homologarnos con su terminología y uso de la lengua 
./" en la medida de lo útil y posible.
./" 
./"  - El proyecto de traducción de Debian al español
./"     http://www.debian.org/intl/spanish/notas
./" 
./" La R.A.E. no es un inmenso referente en cuanto a términos tecnológicos,
./" pero también puede servir de referencia para otros términos no técnicos.
./" No pretendemos hacer es_ES, es_CO, es_AR, etc..., sino que la misma
./" traducción sea comprensible independientemente de la nacionalidad del
./" usuario. Si crees que alguna traducción puede llevar a confusión, consulta
./" la R.A.E., o el diccionario de Maria Moliner, y escribe un correo.
./" 
./"  - www.rae.es 
./"  - http://www.diclib.com/cgi-bin/d1.cgi?base=moliner&page=showpages   
./" 
./" Disponemos también de un archivo «terminology.po» en «/recursos_de..» que
./" se puede consultar con un simple grep, pogrep o cargado en Virtaal.
./" 
./" 
./" =====================================================================
./" =====================================================================
./" =====================================================================
./" 
.TH VIM 1 
.SH NAME
.PP
vim \- Vi IMproved (mejorado), un editor de texto para programadores
.SH SYNOPSIS
.PP
.BI vim " [opciones] " " [archivo ...] "
.PP
.BI vim " [opciones] " " \- "
.PP
.BI vim " [opciones] " " \-t " " marca "
.PP
.BI vim " [opciones] " " \-q " " [archivo de errores] "
.PP
.B ex
.PP
.B view
.PP
.B gvim " | " gview
.PP
.B evim " | " eview
.PP
.B rvim " | " rview " | " rgvim " | " rgview
.SH DESCRIPCI\('ON
.PP
.B Vim
es un editor de texto compatible con Vi.
Puede usarse para editar todo tipo de texto y es
especialmente \('util para editar programas.
.PP
Hay un gran n\('umero de mejoras con respecto a Vi: deshacer cambios
de multiples niveles, ventanas y b\('uferes m\('ultiples, remarcado de
sintaxis, editor de la l\('inea de comandos, completado de nombres
de archivo, ayuda en l\('inea, selecci\('on visual, etc.
Vea \*(lq :help vi_diff.txt\*(rq para un resumen de las diferencias
entre
.B Vim
y Vi.
.PP
Mientras se ejecuta
.B Vim
se puede obtener gran cantidad de ayuda del sistema de ayuda en l\('inea, con
el comando \*(lq:help\*(rq.
Vea la secci\('on AYUDA EN L\('INEA mas abajo.
.PP
Lo mas frecuente es iniciar
.B Vim
para editar un solo archivo:
.RS
.BI vim archivo
.RE
.PP
Generalizando,
.B Vim
se inicia de la siguiente manera:
.RS
.BI vim [opciones] [archivo ...]
.RE
.PP
Si no se suministra una lista de archivos, el editor se iniciar\('a
con un b\('ufer vacio.
Hay cuatro maneras de iniciar la edici\('on de uno o mas archivos:
.TP 12
archivo ...
Una lista de nombres de archivo. El primero ser\('a el archivo activo,
se cargar\('a dentro del b\('ufer y el cursor sera colocado en la primera
l\('inea del b\('ufer. 
Usted puede acceder a los otros archivos con el comando \*(lq:next\*(rq.
Para editar un archivo cuyo nombre comienza con un gui\('on, se
precede la lista de archivos con \*(lq\-\-\*(rq.
.TP
\-
El archivo a editar se lee de stdin.
Los comandos se leen de stderr, el cual deber\('ia ser una tty.
.TP
\-t {marca}
El archivo a editar y la posici\('on inicial del cursor dependen de una
\*(lqmarca\*(rq, una suerte de etiqueta \*(lqgoto\*(rq.
La
.I {marca}
se busca en el archivo de marcas, el archivo asociado se convierte en el
archivo activo y se ejecuta el comando asociado.
Esto se usa principalmente con programas escritos en C, en cuyo caso
.I {marca}
ser\('ia el nombre de una funci\('on.
El efecto es que el archivo que contiene tal funci\('on se convierte en el
archivo activo y el cursor se posiciona al inicio de la funci\('on.
V\('ease \*(lq:help tag-commands\*(rq.
.TP
.BI \-q " [archivo de error]"
Iniciar en modo \*(lqquickFix\*(rq.
El archivo 
.I [archivo de error]
se lee y se muestra el primer error.
Si se omite
.I [archivo de error]
el nombre del archivo se obtiene de la opci\('on `errorfile' cuyo valor
por defecto es \*(lqAztecC.Err\*(rq para AmigaOS, \*(lqerrors.err\*(rq en
otros sistemas operativos.
Se puede saltar a otros errores con el comando \*(lq:cn\*(rq.
V\('ease \*(lq:help quickfix\*(rq.
.PP
.B Vim
se comporta diferentemete dependiendo del nombre en la l\('inea
de comandos
(la im\('agen ejecutable puede ser el mismo archivo f\('isico).
.TP 10
.B vim
La manera \*(lqnormal\*(rq.
Todos los valores de configuraci\('on por defecto (incluyendo las
modificiones locales de configuraci\('on).
.TP
.B ex
Iniciar en modo Ex.
Tambi\('en se puede invocar con el argumento \*(lq\-e\*(rq.
Para activar el modo Normal, use el comando \*(lq:vi\*(rq.
.TP
.B view
Iniciar en modo de solo lectura. El editor no podr\('a escribir archivos.
Tambi\('en puede invocarse con el argumento \*(lq\-R\*(rq.
.TP
.BR gvim " | " gview
La versi\('on gr\('afica.
The GUI version.
Inicia una nueva ventana.
Tambi\('en puede invocarse con el argumento \*(lq\-g\*(rq.
.TP
.BR evim " | " eview
La versi\('on gr\('afica en modo f\('acil.
Inicia una nueva ventana.
Tambi\('en puede invocarse con el argumento \*(lq\-y\*(rq.
.TP
.BR rvim " | " rview " | " rgvim " | " rgview
Como arriba pero con restricciones.
No es posible iniciar comandos de \*(lqshell\*(rq o suspender
.B Vim .
Tambi\('en puede invocarse con el argumento \*(lq\-Z\*(rq.
.SH OPCIONES
.PP
Las opciones pueden darse en cualquier orden, antes o despu\('es
de los nombres de los archivos. Las opciones sin argumento pueden
agruparse despu\('es de un solo gui\('on.
.TP 12
.B +[num]
El cursor ser\('a posicionado en la l\('inea \*(lqnum\*(rq del
primer archivo abierto.
Si no se especifica \*(lqnum\*(rq el cursor quedar\('a en la
\('ultima linea.
.TP
.B +/{pat}
El cursor ser\('a posicionado en la primera ocurrencia de \*(lq{pat}\*(rq.
V\('ease \*(lq:help search\-pattern\*(rq para una descripci\('on de
patrones de b\('usqueda posibles.
.TP
.B +{comando}
.TP
.BI \-c " {comando}"
Despues de leer el primer archivo, se ejecutar\('a {comando}.
{comando} se interpreta como un comando Ex.
Si el {comando] contiene espacios debe delimitarse con comillas dobles
dependiendo del procesador de comandos (shell) que se use.
{command} will be executed after the
Ejemplo: \*(rqVim "+set si" main.c\*(lq
.PP
Nota: Hay un l\('imite m\('aximo de 10 comandos \*(lq+\*(rq o \*(lq\-c\*(rq.
.TP
\-S {file}
{file} will be sourced after the first file has been read.
This is equivalent to \-c "source {file}".
{file} cannot start with '\-'.
If {file} is omitted "Session.vim" is used (only works when \-S is the last
argument).
.TP
\-\-cmd {command}
Like using "\-c", but the command is executed just before
processing any vimrc file.
You can use up to 10 of these commands, independently from "\-c" commands.
.TP
\-A
If
.B Vim
has been compiled with ARABIC support for editing right-to-left
oriented files and Arabic keyboard mapping, this option starts
.B Vim
in Arabic mode, i.e. 'arabic' is set.  Otherwise an error
message is given and
.B Vim
aborts.
.TP
\-b
Binary mode.
A few options will be set that makes it possible to edit a binary or
executable file.
.TP
\-C
Compatible.  Set the 'compatible' option.
This will make
.B Vim
behave mostly like Vi, even though a .vimrc file exists.
.TP
\-d
Start in diff mode.
There should be two, three or four file name arguments.
.B Vim
will open all the files and show differences between them.
Works like vimdiff(1).
.TP
\-d {device}
Open {device} for use as a terminal.
Only on the Amiga.
Example:
"\-d con:20/30/600/150".
.TP
\-D
Debugging.  Go to debugging mode when executing the first command from a
script.
.TP
\-e
Start
.B Vim
in Ex mode, just like the executable was called "ex".
.TP
\-E
Start
.B Vim
in improved Ex mode, just like the executable was called "exim".
.TP
\-f
Foreground.  For the GUI version,
.B Vim
will not fork and detach from the shell it was started in.
On the Amiga,
.B Vim
is not restarted to open a new window.
This option should be used when
.B Vim
is executed by a program that will wait for the edit
session to finish (e.g. mail).
On the Amiga the ":sh" and ":!" commands will not work.
.TP
\-\-nofork
Foreground.  For the GUI version,
.B Vim
will not fork and detach from the shell it was started in.
.TP
\-F
If
.B Vim
has been compiled with FKMAP support for editing right-to-left
oriented files and Farsi keyboard mapping, this option starts
.B Vim
in Farsi mode, i.e. 'fkmap' and 'rightleft' are set.
Otherwise an error message is given and
.B Vim
aborts.
.TP
\-g
If
.B Vim
has been compiled with GUI support, this option enables the GUI.
If no GUI support was compiled in, an error message is given and
.B Vim
aborts.
.TP
\-h
Give a bit of help about the command line arguments and options.
After this
.B Vim
exits.
.TP
\-H
If
.B Vim
has been compiled with RIGHTLEFT support for editing right-to-left
oriented files and Hebrew keyboard mapping, this option starts
.B Vim
in Hebrew mode, i.e. 'hkmap' and 'rightleft' are set.
Otherwise an error message is given and
.B Vim
aborts.
.TP
\-i {viminfo}
When using the viminfo file is enabled, this option sets the filename to use,
instead of the default "~/.viminfo".
This can also be used to skip the use of the .viminfo file, by giving the name
"NONE".
.TP
\-L
Same as \-r.
.TP
\-l
Lisp mode.
Sets the 'lisp' and 'showmatch' options on.
.TP
\-m
Modifying files is disabled.
Resets the 'write' option.
You can still modify the buffer, but writing a file is not possible.
.TP
\-M
Modifications not allowed.  The 'modifiable' and 'write' options will be unset,
so that changes are not allowed and files can not be written.  Note that these
options can be set to enable making modifications.
.TP
\-N
No-compatible mode.  Reset the 'compatible' option.
This will make
.B Vim
behave a bit better, but less Vi compatible, even though a .vimrc file does
not exist.
.TP
\-n
No swap file will be used.
Recovery after a crash will be impossible.
Handy if you want to edit a file on a very slow medium (e.g. floppy).
Can also be done with ":set uc=0".
Can be undone with ":set uc=200".
.TP
\-nb
Become an editor server for NetBeans.  See the docs for details.
.TP
\-o[N]
Open N windows stacked.
When N is omitted, open one window for each file.
.TP
\-O[N]
Open N windows side by side.
When N is omitted, open one window for each file.
.TP
\-p[N]
Open N tab pages.
When N is omitted, open one tab page for each file.
.TP
\-R
Read-only mode.
The 'readonly' option will be set.
You can still edit the buffer, but will be prevented from accidently
overwriting a file.
If you do want to overwrite a file, add an exclamation mark to the Ex command,
as in ":w!".
The \-R option also implies the \-n option (see below).
The 'readonly' option can be reset with ":set noro".
See ":help 'readonly'".
.TP
\-r
List swap files, with information about using them for recovery.
.TP
\-r {file}
Recovery mode.
The swap file is used to recover a crashed editing session.
The swap file is a file with the same filename as the text file with ".swp"
appended.
See ":help recovery".
.TP
\-s
Silent mode.  Only when started as "Ex" or when the "\-e" option was given
before the "\-s" option.
.TP
\-s {scriptin}
The script file {scriptin} is read.
The characters in the file are interpreted as if you had typed them.
The same can be done with the command ":source! {scriptin}".
If the end of the file is reached before the editor exits, further characters
are read from the keyboard.
.TP
\-T {terminal}
Tells
.B Vim
the name of the terminal you are using.
Only required when the automatic way doesn't work.
Should be a terminal known
to
.B Vim
(builtin) or defined in the termcap or terminfo file.
.TP
\-u {vimrc}
Use the commands in the file {vimrc} for initializations.
All the other initializations are skipped.
Use this to edit a special kind of files.
It can also be used to skip all initializations by giving the name "NONE".
See ":help initialization" within vim for more details.
.TP
\-U {gvimrc}
Use the commands in the file {gvimrc} for GUI initializations.
All the other GUI initializations are skipped.
It can also be used to skip all GUI initializations by giving the name "NONE".
See ":help gui\-init" within vim for more details.
.TP
\-V[N]
Verbose.  Give messages about which files are sourced and for reading and
writing a viminfo file.  The optional number N is the value for 'verbose'.
Default is 10.
.TP
\-v
Start
.B Vim
in Vi mode, just like the executable was called "vi".  This only has effect
when the executable is called "ex".
.TP
\-w {scriptout}
All the characters that you type are recorded in the file
{scriptout}, until you exit
.B Vim.
This is useful if you want to create a script file to be used with "vim \-s" or
":source!".
If the {scriptout} file exists, characters are appended.
.TP
\-W {scriptout}
Like \-w, but an existing file is overwritten.
.TP
\-x
Use encryption when writing files.  Will prompt for a crypt key.
.TP
\-X
Don't connect to the X server.  Shortens startup time in a terminal, but the
window title and clipboard will not be used.
.TP
\-y
Start
.B Vim
in easy mode, just like the executable was called "evim" or "eview".
Makes
.B Vim
behave like a click-and-type editor.
.TP
\-Z
Restricted mode.  Works like the executable starts with "r".
.TP
\-\-
Denotes the end of the options.
Arguments after this will be handled as a file name.
This can be used to edit a filename that starts with a '\-'.
.TP
\-\-echo\-wid
GTK GUI only: Echo the Window ID on stdout.
.TP
\-\-help
Give a help message and exit, just like "\-h".
.TP
\-\-literal
Take file name arguments literally, do not expand wildcards.  This has no
effect on Unix where the shell expands wildcards.
.TP
\-\-noplugin
Skip loading plugins.  Implied by \-u NONE.
.TP
\-\-remote
Connect to a Vim server and make it edit the files given in the rest of the
arguments.  If no server is found a warning is given and the files are edited
in the current Vim.
.TP
\-\-remote\-expr {expr}
Connect to a Vim server, evaluate {expr} in it and print the result on stdout.
.TP
\-\-remote\-send {keys}
Connect to a Vim server and send {keys} to it.
.TP
\-\-remote\-silent
As \-\-remote, but without the warning when no server is found.
.TP
\-\-remote\-wait
As \-\-remote, but Vim does not exit until the files have been edited.
.TP
\-\-remote\-wait\-silent
As \-\-remote\-wait, but without the warning when no server is found.
.TP
\-\-serverlist
List the names of all Vim servers that can be found.
.TP
\-\-servername {name}
Use {name} as the server name.  Used for the current Vim, unless used with a
\-\-remote argument, then it's the name of the server to connect to.
.TP
\-\-socketid {id}
GTK GUI only: Use the GtkPlug mechanism to run gvim in another window.
.TP
\-\-version
Print version information and exit.
.SH ON-LINE HELP
Type ":help" in
.B Vim
to get started.
Type ":help subject" to get help on a specific subject.
For example: ":help ZZ" to get help for the "ZZ" command.
Use <Tab> and CTRL-D to complete subjects (":help cmdline\-completion").
Tags are present to jump from one place to another (sort of hypertext links,
see ":help").
All documentation files can be viewed in this way, for example
":help syntax.txt".
.SH FILES
.TP 15
/usr/share/vim/vim72/doc/*.txt
The
.B Vim
documentation files.
Use ":help doc\-file\-list" to get the complete list.
.TP
/usr/share/vim/vim72/doc/tags
The tags file used for finding information in the documentation files.
.TP
/usr/share/vim/vim72/syntax/syntax.vim
System wide syntax initializations.
.TP
/usr/share/vim/vim72/syntax/*.vim
Syntax files for various languages.
.TP
/usr/share/vim/vimrc
System wide
.B Vim
initializations.
.TP
~/.vimrc
Your personal
.B Vim
initializations.
.TP
/usr/share/vim/gvimrc
System wide gvim initializations.
.TP
~/.gvimrc
Your personal gvim initializations.
.TP
/usr/share/vim/vim72/optwin.vim
Script used for the ":options" command, a nice way to view and set options.
.TP
/usr/share/vim/vim72/menu.vim
System wide menu initializations for gvim.
.TP
/usr/share/vim/vim72/bugreport.vim
Script to generate a bug report.  See ":help bugs".
.TP
/usr/share/vim/vim72/filetype.vim
Script to detect the type of a file by its name.  See ":help 'filetype'".
.TP
/usr/share/vim/vim72/scripts.vim
Script to detect the type of a file by its contents.  See ":help 'filetype'".
.TP
/usr/share/vim/vim72/print/*.ps
Files used for PostScript printing.
.PP
For recent info read the VIM home page:
.br
<URL:http://www.vim.org/>
.SH VER TAMBI\('EN
vimtutor(1)
.SH AUTOR
La mayor parte de
.B Vim
fu\('e escrita por Bram Moolenaar con la ayuda de muchos otros.
V\('ease \*(lq:help credits\(*rq en Vim.
Esta p\('agina de manual fu\('e traducida al castellano por
Pedro Alejandro L\('opez-Valencia como parte del proyecto
de localizaci\('on y traducci\('on de la documentaci\('on de
vim al castellano.
.B Vim.
.br
.B Vim
se basa en Stevie, el cual fue creado por Tim Thompson and modificado
posteriormente por Tony Andrews, G.R. (Fred) Walter, Dave Tutelman y
David Kirschbaum, aunque ya no permanezca casi nada del c\('odigo 
original (si queda algo).
.SH DEFECTOS
.PP
Probablemente.
V\('ease \*(lq:help todo\*(rq para leer una lista de problemas conocidos.
.PP
N\('otese que un n\('umero de cosas que pueden ser consideradas como
defectos por algunos son de hecho causadas por una reproducci\('on
excesivamente fidedigna del comportamiento de Vi.
Y si Ud. piensa que otras cosas son defectos \*(lqporque Vi lo hace
diferente\*(rq, Ud deber\('ia leer cuidadosamente el archivo
.I vi_diff.txt
(escriba \*(lq:help vi_diff.txt\*(rq en la l\('inea de comandos de Vim.
Tambi\('en lea acerca de las opciones `compatible' y `cpoptions'.
.\"
.\" vim:ft=groff:fenc=latin1
.\"
