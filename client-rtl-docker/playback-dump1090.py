#!/usr/bin/env python3

import argparse
import time


parser = argparse.ArgumentParser(description="dump1090 text recording playback")
parser.add_argument("-r", "--rate", type=float, default=0.5, help="Rate to play back entries, per second (default: %(default)s)")
parser.add_argument("-f", "--file", required=True, help="File to play back")
args = parser.parse_args()

with open(args.file, "r") as f:
    cur_lines = []
    for line in f:
        # true if line is empty, delineates packet boundary
        if not line.strip():
            for cl in cur_lines:
                print(cl.rstrip(), end='\n')
            print("", flush=True)
            cur_lines = []
            time.sleep(args.rate)
        cur_lines.append(line)
