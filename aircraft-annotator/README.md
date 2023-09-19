Plane data from https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download

- Download to `./annotator-data/`
- Unzip downloaded files
- Run `cleanup-data.sh`
- Export `TOKEN` and `NATS_HOST` environment variables

Run annotator with
```
python annotator.py .
```

Verify annotations are correct with
```
nats -s nats://$TOKEN@$NATS_HOST sub "plane.>"
```

