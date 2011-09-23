#!/bin/bash

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
python add_tags.py *.html
