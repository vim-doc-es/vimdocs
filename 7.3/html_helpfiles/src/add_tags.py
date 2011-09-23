import sys
import codecs
from cgi import escape as html_escape
from os.path import splitext
import os
import shutil
import re
import tempfile

class Tag(object):
    def __init__(self, name=None, dest_file=None):
        assert(name is not None)
        assert(dest_file is not None)
        self.name = name
        self.html_id = self.tag2html_id(name)
        self.html_name = html_escape(name)
        self.dest_file = dest_file
        self.html_dest_file = "%s.html" % splitext(dest_file)[0]
        self.link_text =  self.link_for_tag(self.html_name, self.html_id, self.html_dest_file) # 
        self.local_link_text  =  self.link_for_local_tag(self.html_name, self.html_id, self.html_dest_file) # 
        self.ref_text = self.ref_for_tag(self.html_id)

    def safe_uchar(self, c):
        nc = ord(c)
        if (nc < 97 or nc > 122) and (nc < 65 or nc > 90) and (nc < 48 or nc > 57) \
           and nc != 45 and nc != 95 and nc != 58 and nc != 46:
            return u"_%d_" % nc
        return c
    
    def tag2html_id(self, tag):
        """
        convert a tag name into something usable as an HTML name attribute
        """
        return u'V' + u''.join(map(self.safe_uchar, tag))

    def link_for_tag(self, name, _id, dest_file):
        return u'<a href="%(dest_file)s#%(_id)s">%(name)s</a>' % locals()

    def link_for_local_tag(self, name, _id, dest_file):
        return u'<a href="#%(_id)s">%(name)s</a>' % locals()

    def ref_for_tag(self, _id):
        return u'<a name="%(_id)s"></a>' % locals()


def build_tag_map(tagfn):
    """
    assumes tagfn to exist, be readable
    """
    f = codecs.open(tagfn, encoding='UTF-8')
    # read all lines that are not comments (leading !)
    tag_list = [line.strip() for line in f if not line.startswith('!')]
    tag_map = dict()
    for tag_text in tag_list:
        tag_name, tag_file, _ = tag_text.split('\t', 2)
        t = Tag(tag_name, tag_file)
        tag_map[t.html_name] = t
    return tag_map

def fix_tags(fn, tag_map):
    """"""
    tag_re = re.compile(r'(<span class="Ignore">\*</span><span class="Constant">)([^<]*)(</span><span class="Ignore">\*</span>)')
    def tag_replace(m):
        k = m.group(2)
        if k not in tag_map:
            print "Can't create reference to %s. Not found" % k
            return u'%s%s%s' % (m.group(1), k, m.group(3))
        tag = tag_map[k]
        return u'%s%s%s%s' % (m.group(1), tag.ref_text, k, m.group(3))

    link_re = re.compile(r'(<span class="Ignore">\|</span><span class="Identifier">)([^<]*)(</span><span class="Ignore">\|</span>)')
    def link_replace(m):
        k = m.group(2)
        if k not in tag_map:
            print "Can't link to %s. Not found" % k
            return u'%s%s%s' % (m.group(1), k, m.group(3))
        tag = tag_map[k]
        if tag.html_dest_file == fn:
            return u'%s%s%s' % (m.group(1), tag.local_link_text, m.group(3))
        return u'%s%s%s' % (m.group(1), tag.link_text, m.group(3))

    f = codecs.open(fn, encoding='UTF-8')
    ofd, ofn = tempfile.mkstemp()
    of = os.fdopen(ofd, 'w')
    for line in f:
        line = tag_re.sub(tag_replace, line)
        line = link_re.sub(link_replace, line)
        of.write(line.encode('UTF-8'))
    f.close()
    of.close()
    shutil.move(ofn, fn)

def main():
    tagfn = "tags-es"
    helpfile_list = sys.argv[1:]
    tag_map = build_tag_map(tagfn)
    for fn in helpfile_list:
        fix_tags(fn, tag_map)

if __name__ == '__main__':
    main()
