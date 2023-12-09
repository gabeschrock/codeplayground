var tokenMap = {
    "\n": "NEWLINE",
    ",": "COMMA",
    "(": "L_PAREN",
    ")": "R_PAREN",
    "[": "L_BRACKET",
    "]": "R_BRACKET",
    "{": "L_BRACE",
    "}": "R_BRACE",
    "+": "PLUS",
    "-": "MINUS",
    "*": "MULT",
    "/": "DIV",
    "~": "BIT_NOT",
    "&": "BIT_AND",
    "|": "BIT_OR",
    "^": "BIT_XOR",
    "=": "VAR_SET",
    "+=": "VAR_ADD",
    "-=": "VAR_SUB",
    "*=": "VAR_MULT",
    "/=": "VAR_DIV",
    "&=": "VAR_AND",
    "|=": "VAR_OR",
    "^=": "VAR_XOR",
    "==": "EQ",
    "!=": "NOT_EQ"
};

class TokenizeError extends Error {
    constructor(message) {
        super(message);
        this.name = "TokenizeError";
    }
}

function tokenize(str, tokenMap) {
    var longestToken = 0;
    for (var token in tokenMap) {
        if (token.length > longestToken) {
            longestToken = token.length
        }
    }

    function isNum(str) {
        var prefix = str.slice(0, 1)
        switch (prefix) {
            case "0b":
                return /^0b([01]+\.[01]*|\.?[01]+$)/.test(str);

            case "0x":
                return /^0x([\da-f]+\.[\da-f]*|\.?[\da-f]+)$/i.test(str);
        }
        return /^(\d+\.\d*|\.?\d+)$/.test(str);
    }

    function isVar(str) {
        return /^\w+$/.test(str);
    }

    var token;
    var tokens = [];

    

    var index;
    var quote;

    while (str) {
        token = str[0];
        str = str.slice(1)
        if (token == " ") continue;
        if (token + str[0] == "//") {
            str = str.replace(/\/.*/, "");
            continue;
        }

        if (isVar(token) && !isNum(token)) {
            while (isVar(str[0]) && str) {
                token += str[0];
                str = str.slice(1);
            }
            tokens.push("VAR " + token);
            continue;
        }

        if (isNum(token)) {
            while (isNum(token + str[0])) {
                token += str[0];
                str = str.slice(1);
            }
            tokens.push(token);
            continue;
        }

        token += str.slice(0, longestToken - 1);
        str = str.slice(longestToken - 1);

        while (!tokenMap[token] && token.length) {
            str = token.slice(-1) + str;
            token = token.slice(0, -1)
        }

        if (token == "")  throw new TokenizeError("unexpected character: " + str[0]);
        
        tokens.push(tokenMap[token]);
    }
    return tokens;
}

var code = `
power = func(base, exp)
    // raise one number to the power of another
    local ret = base
    for i in 0 to exp-1 // repeat exp-1 times
        ret *= base
    end
end
power(3, 10)`

var tokens = tokenize(code, tokenMap)
console.log(tokens)
for (var index in tokens) {
    console.log(tokens[index])
}
