function telephoneCheck(str) {
    const verifica = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|\-)?\d{3}(\s|\-)?\d{4}$/
// /^  Nessa linha do código, eu começo a expressão
// (1\s?)?  Nessa linha do código eu digo pode existir o numero 1 e um espaço ("?" expressa opcional)
// (\(\d{3}\)|\d{3}) Aqui eu digo q pode ter parenteses envolvendo os 3 digitos ou nao ("|" expressa "ou")
// (\s|\-)? Aqui eu falo q pode haver um espaço ou um "-" (note q a presença dos dois é opcional)
// \d{3}  Aqui eu digo q deve existir especificamente 3 digitos 
// (\s|\-)?  
// \d{4} Aqui eu determino q deve existir especificamente 4 digitos
// $/ Aqui eu mostro para o cófigo q minha expressão terminou
    return verifica.test(str);
    }

telephoneCheck("555-555-5555");


             