if [ $# -eq 0 ]; then
    echo "No arguments provided."
else
    # Loop over the first 3 arguments and print them
    for i in {1..3}; do
        arg=${!i}
        if [ -n "$arg" ]; then
            echo $arg
        fi
    done
fi
