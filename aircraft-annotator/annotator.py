# Annotate ADS-B detections in NATS stream with additional information from FAA database

import nats
from nats.errors import TimeoutError
import os
import pandas as pd
import sys


nats_host = os.getenv("NATS_HOST", "localhost:30303")


def load_dbs(db_dir="./"):
    master_df = pd.read_csv(os.path.join(db_dir, "MASTER.txt"))
    master_df = master_df.set_index("MODE S CODE HEX")
    master_df.index = master_df.index.str.strip()
    aircraft_df = pd.read_csv(os.path.join(db_dir, "ACFTREF.txt"))
    aircraft_df = aircraft_df.set_index("CODE")
    return master_df, aircraft_df


def lookup_icao(icao, master_df, aircraft_df):
    row = master_df.loc[icao]
    acft_info = aircraft_df.loc[row["MFR MDL CODE"]]
    return {
        "icao": icao,
        "manufacturer": acft_info["MFR"],
        "aircraft": acft_info["MODEL"],
        "n-number": "N" + row["N-NUMBER"],
        "registered": row["NAME"]
    }


async def main(master, aircraft):
    token = os.getenv("TOKEN")
    if not token:
        print("You need to define TOKEN")
        sys.exit(1)
    nc = await nats.connect(f"nats://{token}@{nats_host}")

    # Create JetStream context incase it's not defined
    js = nc.jetstream()
    await js.add_stream(name="planes", subjects=["plane.*"])

    for topic in ["ident", "loc"]:
        pass

if __name__ == "__main__":
    master, aircraft = load_dbs()
