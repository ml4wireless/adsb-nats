from datetime import datetime, timedelta, timezone

timezone_offset = -8.0  
tzinfo = timezone(timedelta(hours=timezone_offset))
now = datetime.now(tzinfo)
retention_time =  (now -  timedelta(days=20)).strftime("%Y-%m-%d %H:%M:%S.000000")
print(f"data in retention before {retention_time}")