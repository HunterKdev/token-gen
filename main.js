(function(){
    var oldLog = console.log;
    console.log = function (message) {
        document.getElementById('a').value += message
        oldLog.apply(arguments);
    };
})();

var textarea = document.getElementById('a')
if (navigator.userAgent.indexOf('Mobile') !== -1) { document.getElementById('save').style.display = "none"; textarea.style.height = "100px";
}
var getToken
getToken = function () {
    let code = '';
    let code1 = 'ODI';
    let code2 = 'YGW';
    let code3 = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
    for(var i = 0; i < 22; i++){
        code1 = code1 + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    for(var i = 0; i < 4; i++){
        code2 = code2 + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    for(var i = 0; i < 27; i++){
        code3 = code3 + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    code = code1 + '.' + code2 + '.' + code3;
    console.log(code + ' \n')
    code += ' \n'
    document.getElementById('b').value += code;

}
