function get_n(){
  var n = document.forms['fibonacci'].elements['data'].value;
  var rez = fib(n);
  document.forms['fibonacci'].elements['result'].value=rez;
}

function fib(n) {
    var a = 0, b = 1, f = 1;
    for (var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}