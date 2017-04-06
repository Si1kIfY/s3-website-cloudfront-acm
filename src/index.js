import program from 'commander'

program
  .version('0.0.1')
  .option('-t, --test [type]', 'Testing commander', 'none')
  .parse(process.argv)

console.log('you tested with:')
console.log('  - %s test', program.test)