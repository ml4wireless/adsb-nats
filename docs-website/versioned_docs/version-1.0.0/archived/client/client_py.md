---
sidebar_position: 32
---

# Client

### File check list
```
- requirements.txt
- client.py
# if you are using real data
    - /usr/local/bin/dump1090
# if you are using fake data
    - playback-dump1090.py
    - RECORDING_FILE
```

## First time
1. Run `pip install -r requirments.txt`

## Real Data

1. Make sure you complete all the steps in [Dump1090](./dump1090).
2. Set environment variable: **NATS_HOST** and **TOKEN** (contact us if you don't have one).
3. run `python client.py`.

## Fake Data

1. Make sure you have `playback-dump1090.py` and a recording file named `NAME OF YOUR RECORDING FILE`.
2. Set environment variable: **NATS_HOST** and **TOKEN** (contact us if you don't have one).
3. run `python client.py -f {NAME OF YOUR RECORDING FILE}`.