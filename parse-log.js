// Construtor Parser
var Parser = function () {

};

// Analisa o texto especificado
Parser.prototype.parse = function ( text ) {

    var results = {};

    // Quebra o arquivo em linhas
    var lines = text.split('\n');

    return lines;
};

// Exportando o construtor Parser neste módulo
module.exports = Parser;