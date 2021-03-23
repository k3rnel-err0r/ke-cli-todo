const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear: {
        type: 'boolean',
        default: true,
        alias: 'c',
        desc: 'Clears the console'
    },
    debug: {
        type: 'boolean',
        default: false,
        alias: 'd',
        desc: 'Prints debug info'
    },
    version: {
        type: 'boolean',
        alias: 'v',
        desc: 'Prints CLI version'
    }
};

const commands = {
    add: {
        desc: 'Add a new todo'
    },
    del: {
        desc: 'Delete selected todos'
    },
    help: {
        desc: 'Prints help info'
    },
    ls: {
        desc: 'View or list all todos'
    },
    view: {
        desc: 'View or list all todos'
    }
};

const helpText = meowHelp({
    name: 'cli-todo',
    flags,
    commands
});

const options = {
    inferType: true,
    description: false,
    hardRejection: false,
    flags
};

module.exports = meow(helpText, options);
