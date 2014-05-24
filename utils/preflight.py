#!/usr/bin/env python
#
# Preflight script
#
# ancestral
#
# last updated 22 May 2014

"""
python
import os, sys, json, subprocess, argparse
subprocess.call(["/Users/martinproud/Documents/wesnoth/Bestiary/utils/preflight.py", "-i", "~/Desktop/out.json"])

"""


import errno, json, os, re, sys

CURRENT_DIR = os.path.dirname(os.path.realpath(sys.argv[0])) + '/'

if __name__ == "__main__":    
    sys.stdout = __import__("codecs").getwriter('utf-8')(sys.stdout)
    #parser = argparse.ArgumentParser(description='Splits output from wmlparser2.py into separate JSON files.')
    #parser.add_argument("-i", "--input", help="JSON file to parse")
    #args = parser.parse_args()
    
    if len(sys.argv) <= 1:
        sys.stderr.write("No input given. Use -h for help.\n")
        sys.exit(1)

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
        print path
        try:
            os.makedirs(path)
        except OSError as e:
            if e.errno == errno.EEXIST and os.path.isdir(path):
                pass
            else:
                raise

mkdirs([CURRENT_DIR + '../data/races', CURRENT_DIR + '../data/movetypes', CURRENT_DIR + '../data/units'])

parseJSON(sys.argv[1])