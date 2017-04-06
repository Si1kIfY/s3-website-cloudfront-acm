import AWS from 'aws-sdk'

// const mock = new AWS.S3({
//   s3ForcePathStyle: true,
//   endpoint: new AWS.Endpoint('http://localhost:4568'),
//   region: 'ap-southeast-2',
// })

const s3 = new AWS.S3({
  region: 'ap-southeast-2',
})

// export default mock
export default s3