#!/bin/sh

DIR=annotator-data
if test -d "$DIR"; then
    echo "$DIR exists."
else
    # download data files from s3 bucket
    echo "annotator-data not found, downloading data."
    aws s3 cp s3://aircraft-annotator-data/ReleasableAircraft ./annotator-data --recursive;
fi