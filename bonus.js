//Assignment #1

//bonus

var createCounter = function(init) 
{
    let temp = init;

    function increment()
    {
        return ++temp;
    }

    function decrement()
    {
        return --temp;
    }

    function reset()
    {
        return temp = init;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};