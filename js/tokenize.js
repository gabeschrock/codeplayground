{}

function tokenize(str, tokenMap) {
    var longestToken = 0;
    for (var token in tokenMap) {
        if (token.length > longestToken) {
            longestToken = token.length
        }
    }

    var token;
    var tokens = [];

    var varname = "abcdefghijklmnopqrstuvwxyz";
    varname += varname.toUpperCase();
    varname += "0123456789_";

    while (str) {
        token = str[0];
        str = str.slice(1)

        if (varname.indexOf(token) + 1 && token * 1 == NaN) {
            while (varname.indexOf(str[0] + 1) && str) {
                token += str[0];
                str = str.slice(1);
            }
            tokens.push(token);
            continue;
        }

        // temporary code
        tokens += token;
    }
}
