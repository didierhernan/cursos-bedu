console.log(this)

function foo(){
    console.log(this)
};

//foo();

function logThis(){
    console.log("Is this === window?" + (this === window))
}

var fooOb = {
    logThis: logThis
}

logThis();
fooOb.logThis();
