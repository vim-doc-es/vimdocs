# -*- coding: utf-8 -*-
"""
Fixes the title of the given html helpfile, using the info of the esx file

Adds a search form to the page

"""

import sys
from lxml.html import parse
from lxml.etree import Element
import codecs

def get_doc_title(esx_fn):
    if esx_fn.endswith("help.esx"):
        return u"VIM - archivo principal de ayuda"

    f = codecs.open(esx_fn, encoding="UTF-8")
    for i in range(4):
        f.readline()
    title = " ".join([w.capitalize() for w in f.readline().strip().split() \
                      if not w.startswith("*")])
    return title

def replace_title(tree, title):
    t = tree.find("head").find("title")
    t.text = title

def add_search_form(tree):
    form = Element("form", dict(method="GET", action="/cgi-bin/omega/omega",
                                target="_top"))
    form.append(Element("input", dict(type="search", name="P", value="",
                                      size="15")))
    form.append(Element("input", dict(type="hidden", name="DEFAULTOP",
                                      value="and")))
    form.append(Element("input", dict(type="hidden", name="DB",
                                      value="vim-doc-es")))
    form.append(Element("input", dict(type="hidden", name="FMT",
                                      value="query_es")))
    form.append(Element("input", dict(type="hidden", name="xFILTERS",
                                      value="--O")))
    form.append(Element("input", dict(type="hidden", name="FMT",
                                      value="query_es")))
    form.append(Element("input", dict(type="SUBMIT", value="Buscar")))
    div = Element("div", dict(style="margin-left: 33em"))
    div.append(form)
    tree.getroot().find("body").insert(0, div)

def main():
    esx_fn = sys.argv[1]
    html_fn = sys.argv[2]

    tree = parse(html_fn)

    title = get_doc_title(esx_fn)
    replace_title(tree, title)
    add_search_form(tree)

    tree.write(open(html_fn, "w"), encoding="UTF-8", method="html")

if __name__ == '__main__':
    main()
