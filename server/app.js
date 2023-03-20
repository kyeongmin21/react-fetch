const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// https://expressjs.com/en/4x/api.html  body-parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


let id = 2;
const todoList = [{
  id: 1,
  text: '할일 1',
  done: false
}]

app.get('/api/todo', (req, res) => {
  res.json(todoList)
})

app.post('/api/todo', (req, res) => {
  const {text, done} = req.body;
  todoList.push({
    id: id++,
    text,
    done
  })

  return res.send('success');
})


// 터미널에 node app.js 명령어 치면 콘솔 나온다.
app.listen(4000, () => {
  console.log('server start !!')
})
