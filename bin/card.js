#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const output = `${chalk.white.bold('Christoph Stock /')} ${chalk.cyan('@stockulus')}

    ${chalk.white.bold('Work:')} ${chalk.white('Full Stock Developer at Mobilabsolutions GmbH')}
 ${chalk.white.bold('Twitter:')} ${chalk.cyan('https://twitter.com/stockulus')}
  ${chalk.white.bold('GitHub:')} ${chalk.cyan('https://github.com/stockulus')}
${chalk.white.bold('LinkedIn:')} ${chalk.cyan('https://www.linkedin.com/in/christoph-stock-72b9b26/')}

    ${chalk.white.bold('Card:')} ${chalk.white('npx stockulus')}`

console.log(chalk.green(boxen(output, options)))
