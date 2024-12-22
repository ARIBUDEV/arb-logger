const styles = {
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
    shown: 28,
    nostrikethrough: 29,
    nounderline: 24,
    nooverline: 55,
    noblink: 25,
    noinverse: 27
};

const sStyles = {
    '&i': 'inverse',
    '&j': 'dim',
    '&k': 'blink',
    '&l': 'bold',
    '&m': 'strikethrough',
    '&n': 'underline',
    '&o': 'italic',
    '&p': 'overline',
    '&r': 'reset',
}

module.exports = (code) => styles[sStyles[code]];