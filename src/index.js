#!/usr/bin/env node

import program from 'commander'
import s3 from './library/s3'

program
  .command('*')
  .action((domain) => {
    console.log('creating bucket: "%s"', domain)
    // TODO: Parse domain input to make sure it's a URL
    s3.createBucket({
      Bucket: domain,
    }, (err, bucket) => {
      if (err && err.code !== 'BucketAlreadyOwnedByYou') {
        throw new Error(err)
      }
      console.log(bucket)
    })
  })

program
  .command('set-policy')
  .action((domain) => {
    console.log('setting policy')
    s3.putBucketPolicy({
      Bucket: domain,
      Policy: JSON.stringify({
        Statement: {
          Sid: 'AddPublicReadPermissions',
          Effect: 'Allow',
          Principal: '*',
          Action: 's3:GetObject',
          Resource: `arn:aws:s3:::${domain}/*`,
        },
      }),
    }, (err, data) => {
      if (err) {
        throw new Error(err)
      }
      console.log(data)
    })
  })

program
  .command('get-policy')
  .action((domain) => {
    console.log('getting policy')
    s3.getBucketPolicy({
      Bucket: domain,
    }, (err, data) => {
      if (err && err.code !== 'NoSuchBucketPolicy') {
        throw new Error(err)
      }
      console.log(data)
    })
  })

program.parse(process.argv)