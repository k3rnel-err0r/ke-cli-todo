const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
    unhandled();
    welcome({
        title: 'cli-todo',
        tagLine: 'by Antonio Quintero-Felizzola',
        description: pkg.description,
        version: pkg.version,
        bgColor: '#6cc24a',
        color: '#000000',
        bold: true,
        clear
    });
};
