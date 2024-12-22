const getColor = require('./utils/colors');
const getStyle = require('./utils/styles');
const formatDate = require('./utils/formatDate');

/**
 * Creates log functions based on a template configuration.
 * @param {Object} logsTemplate - Object containing log templates.
 * @returns {Object} - Object with log functions for each template.
 */
module.exports = (logsTemplate) => {
    const logFunctions = {};

    for (const logType in logsTemplate) {
        const logTemplate = logsTemplate[logType];

        logFunctions[logType] = (message) => {
            // Convert the message to string if necessary
            let text;
            if (message instanceof Error) {
                text = message.stack;
            } else if (typeof message === 'object') {
                text = JSON.stringify(message, null, 2);
            } else {
                text = String(message);
            }

            // Format the log message
            const formattedMessage = logTemplate
                .replace(/&!?[0-9a-f]/gi, (code) => `\x1b[${getColor(code)}m`)
                .replace(/&[i-pr]/gi, (code) => `\x1b[${getStyle(code)}m`)
                .replace('{timestamp}', formatDate('YYYY-MM-DD HH:mm:ss'))
                .replace('{text}', text);

            // Output the formatted message with reset code at the end
            console.log(`${formattedMessage}\x1b[0m`);
        };
    }

    return logFunctions;
};