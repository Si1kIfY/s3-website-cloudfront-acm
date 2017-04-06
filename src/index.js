#!/usr/bin/env node

import program from 'commander'
import s3 from './library/s3'

program
  .command('*')
  .action((domain) => {
    console.log('creating bucket: "%s"', domain)
    console.log(process.env)
    s3.createBucket({

    }, (err, bucket) => {

    })
  })

program.parse(process.argv)