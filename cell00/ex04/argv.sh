if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for i in {1..3}; do
        arg=${!i}
        if [ -n "$arg" ]; then
            echo $arg
        fi
    done
fi
