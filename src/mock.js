// // 配置 Mock 路径
// require.config({
//   paths: {
//       mock: 'http://mockjs.com/dist/mock'
//   }
// })
// // 加载 Mock
// require(['mock'], function(Mock){
//   // 使用 Mock
//   var data = Mock.mock({
//       'list|1-10': [{
//           'id|+1': 1
//       }]
//   })
//   // 输出结果
//   document.body.innerHTML +=
//       '<pre>' +
//       JSON.stringify(data, null, 4) +
//       '</pre>'
// })

//引入mockjs
const Mock = require('mockjs')
var data = Mock.mock({
  name:Mock.Random.cname()
});
//使用mockjs模拟数据
Mock.mock('/api/data', data)

