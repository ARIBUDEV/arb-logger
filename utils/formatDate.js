const placeholders = {
    YYYY: (d) => d.toLocaleString('pt-BR', { year: 'numeric' }),
    MM: (d) => d.toLocaleString('pt-BR', { month: '2-digit' }),
    DD: (d) => ('0' + d.getDate()).slice(-2),
    HH: (d) => ('0' + d.getHours()).slice(-2),
    mm: (d) => ('0' + d.getMinutes()).slice(-2),
    ss: (d) => ('0' + d.getSeconds()).slice(-2),
}

module.exports = (template) => template.replace(/YYYY|MM|DD|HH|mm|ss/g, (key) => placeholders[key](new Date()));