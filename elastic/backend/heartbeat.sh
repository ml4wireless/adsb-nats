curl -i --insecure --connect-timeout 10 "https://ec2-44-234-36-159.us-west-2.compute.amazonaws.com/getJsonStream?start_date=2023-03-09T19:40:00&end_date=2023-03-09T19:45:00" | head -n 1 | grep "200 OK"
if [[ $? -ne 0 ]]
then
    printf "Bad\n"
    docker restart backend_server
else
    printf "Normal\n"
fi