const { default: validator } = require('validator')
const { default: chalk } = require('chalk')

const v = require('validator')

const miutils = require('./utils.js')

const log = console.log;




console.log(miutils.add(3, 2))

console.log(v.isEmail('jamon@pu.com'))


console.log(chalk.blue('hola'))

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));


log(chalk `{bold 5280 feet}`)

log(chalk.bold('5280 feet'))

log(chalk `
    There are {bold 5280 feet} in a mile.( ${miutils.name}  ) [ ${3*1000} ]
    In {bold ${miutils.name} miles}, there are {green.bold ${miutils.add(1000,10000)} feet}.
`);

console.log(chalk.green('Hello %s !!!!!'), miutils.name);