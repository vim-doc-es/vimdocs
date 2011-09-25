#!/bin/bash

BIN_DIR=$PWD
ESX_DIR=$PWD/../../helpfiles/traducido/esx/
HTML_DIR=$PWD/../data/www-vim-doc-es/

mkdir -p $HTML_DIR

cd $ESX_DIR
# generate tags file
vim -c 'helptags ./' -c 'q'

# generate HTML
for file in *.esx; do
    gvim -f -c 'colorscheme default' -c 'set ft=help' \
        -c 'let g:html_ignore_conceal=1' -c 'let g:html_ignore_folding=1' \
        -c 'set ts=8' -c 'TOhtml' -c 'wqa!' $file
    rename.ul .esx.html .html ${file}.html
done

# add links and references in HTML files
python $BIN_DIR/add_tags.py *.html

# add search form, and fix title, in each html document
for file in *.esx; do
    hfile=$(basename $file .esx).html
    python $BIN_DIR/html_posproc.py $file $hfile
done

rm $HTML_DIR/*.html
mv *.html $HTML_DIR
