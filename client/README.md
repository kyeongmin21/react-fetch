# 프론트에서 서버에 데이터 요청하는 방법

### Client
- useEffect의 필요성 (처음 mounted 될 때 처리가 없다면, 데이터가 무한반복으로 호출됨)
- fetch 와 axios 차이
- GET / POST 처리
- 데이터 추가시 바로 출력 및 리팩토링 (fetchData: 첫 mount 될떄, 추가 버튼 누른 후 데이터 fetch)



### Server
- node.js와 express
- express 설치 [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
- postman 에서 POST > localhost:4000/api/todo
- postman 에서 GET  > localhost:4000/api/todo


- CORS 이슈 서버에서 처리 : `npm install cors`
- `var cors = require('cors')`
- `app.use(cors())`

