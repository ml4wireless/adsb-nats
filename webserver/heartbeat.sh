result=`curl --insecure 'https://ec2-35-80-21-70.us-west-2.compute.amazonaws.com/getJsonStream?start_date=2021-11-07%2011:11:11&end_date=2021-11-06%2011:11:11'`
if [ $? -neq 0 ]; then
    docker restart backend_server
    docker restart webserver
    exit 1
fi
echo $result | grep 'error' 
if [ $? -eq 0 ]; then
    docker restart backend_server
    docker restart webserver
else
    echo no error!
fi