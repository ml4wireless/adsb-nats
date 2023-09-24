curl -i --insecure --connect-timeout 10 "http://localhost/getJsonStream?start_date=2023-03-09T19:40:00&end_date=2033-03-09T19:45:00" | head -n 1 | grep "200 OK"
if [[ $? -ne 0 ]]
then
    printf "Bad\n"
    docker restart backend_server
else
    printf "Normal\n"
fi