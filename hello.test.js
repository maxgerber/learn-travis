const test = require('tape');
const server = require('./hello.js');
const shot = require('shot');

test('Tape is running', t => {
  t.equals(1, 1, 'Tape is running as expected');
  t.end();
})
// 
// test('server request', t => {
//   shot.inject(server, {
//     method: 'get,
//     url: '/'
//   }, res => {
//   t.equals(res.statusCode, 200, 'should respond with a status code of 200');
//   t.end();
//   })
// })
