#!/usr/bin/env python
#
# Preflight script
#
# ancestral
#
# last updated 22 May 2014

import errno, inspect, json, os, re, shutil, subprocess, sys

# These two variables will change over time, and from system to system:
WESNOTH_VERSION = '1.11'
MAIN_DIR = '/Applications/Wesnoth.app/Contents/Resources/'

# Other settings, for the most part automatically generated based on MAIN_DIR:
CURRENT_DIR = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe()))) + '/'
SYS_PLATFORM = sys.platform
DATA_DIR = MAIN_DIR + 'data/'
WESNOTH_EXE_PATH = MAIN_DIR + 'wesnoth.exe'
CONFIG_DIR = ''
INPUT = DATA_DIR + 'core/units.cfg'
TMP_DIR = '/tmp/'
BESTIARY_DATA_DIR = CURRENT_DIR + '../data/'

if SYS_PLATFORM == 'darwin':
    WESNOTH_EXE_PATH = os.path.abspath(os.path.join(MAIN_DIR, os.pardir)) + '/MacOS/Wesnoth'
    CONFIG_DIR = '~/Library/Application\\ Support/Wesnoth_' + WESNOTH_VERSION + '/'
elif SYS_PLATFORM == ('win32' or 'cygwin'):
    CONFIG_DIR = '/Documents/My\\ Games/Wesnoth' + WESNOTH_VERSION + '/'
    TMP_DIR = '%USERPROFILE%/AppData/Local/Temp/'
else:
    CONFIG_DIR = '~/.local/share/wesnoth/' + WESNOTH_VERSION + '/'    


def parseJSON(jsonFile):
    with open(jsonFile) as json_file:
        data = json.load(json_file)
        splitFiles('units', data['+units'][0]['unit_type'], 'id')
        splitFiles('movetypes', data['+units'][0]['movetype'], 'name')
        splitFiles('races', data['+units'][0]['race'], 'id')    

def friendlify(word):
    return re.sub(r' ','_', word).lower()

def splitFiles(kind, fileType, key):
    for item in fileType:
        itemKey = friendlify(item[key])
        with open(CURRENT_DIR + '../data/' + kind + '/' + itemKey + '.json', 'w') as outfile:
          json.dump(item, outfile)

def mkdirs(paths):
    for path in paths:
        try:
            os.makedirs(path)
        except OSError as e:
            if e.errno == errno.EEXIST and os.path.isdir(path):
                pass
            else:
                raise

class font:
   PURPLE = '\033[95m'
   CYAN = '\033[96m'
   DARKCYAN = '\033[36m'
   BLUE = '\033[94m'
   GREEN = '\033[92m'
   YELLOW = '\033[93m'
   RED = '\033[91m'
   BOLD = '\033[1m'
   UNDERLINE = '\033[4m'
   END = '\033[0m'


if __name__ == "__main__":    
    sys.stdout = __import__("codecs").getwriter('utf-8')(sys.stdout)
    out = open(TMP_DIR + 'data.json', 'w')
    
    subprocess.call(['python', DATA_DIR + 'tools/wesnoth/wmlparser2.py', '-j', '-a', MAIN_DIR, '-c', CONFIG_DIR, '-i', INPUT, '-w', WESNOTH_EXE_PATH], stdout=out)
    
    mkdirs([ BESTIARY_DATA_DIR + 'races', BESTIARY_DATA_DIR + 'movetypes', BESTIARY_DATA_DIR + 'units' ])
    
    GPL_WARNING = ('\n' + ''.join('*' * 80) + '\n* ' + font.YELLOW + 'Note:' + font.END + ' Data from ' + font.BOLD + 'The Battle for Wesnoth' + font.END + ' is subject to the GPLv2. You may read *\n' + '* the license online at http://www.gnu.org/licenses/gpl-2.0.html.' + ''.join(' ' * 14) + '*\n' + ''.join('*' * 80) + '\n\n')
    
    if os.path.isfile(DATA_DIR + 'COPYING.txt'):
        try:
            shutil.copyfile(DATA_DIR + 'COPYING.txt', BESTIARY_DATA_DIR + 'COPYING.txt')
        except:
            sys.stderr.write(GPL_WARNING)
    else:
        sys.stderr.write(GPL_WARNING)
    
    parseJSON(TMP_DIR + 'data.json')

