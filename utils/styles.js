const textStyles = {
    reset: 0,
    bold: 1,
    dim: 2,
    italic: 3,
    underline: 4,
    overline: 53,
    blink: 5,
    inverse: 7,
    strikethrough: 9,
    hidden: 8,
    visible: 28,
    noStrikethrough: 29,
    noUnderline: 24,
    noOverline: 55,
    noBlink: 25,
    noInverse: 27,
};

const shorthandToStyle = {
    '&i': 'inverse',
    '&j': 'dim',
    '&k': 'blink',
    '&l': 'bold',
    '&m': 'strikethrough',
    '&n': 'underline',
    '&o': 'italic',
    '&p': 'overline',
    '&r': 'reset',
    '&h': 'hidden',
    '&v': 'visible',
    '&x': 'noStrikethrough',
    '&u': 'noUnderline',
    '&q': 'noOverline',
    '&w': 'noBlink',
    '&z': 'noInverse',
};

module.exports = (shorthandCode) => textStyles[shorthandToStyle[shorthandCode]];
