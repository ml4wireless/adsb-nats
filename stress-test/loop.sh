for i in {2..10}
do
    size=$((2 ** i))
    output_file="output_${size}.txt"
    echo test_simple.py -s $size -n 40000 > "$output_file"
    sleep 300
    # python "$script_name" > "$output_file"
done

# cat output*.txt > combined_output.txt