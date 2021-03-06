const fs = require('fs');
const path = require('path');

const signUpRoute = (req, res) => {
  if(req.method === 'POST') {
      let body = '';

      req.on('data', function(data) {
          body += data;

          console.log('Incoming data');
      });

      req.on('end', function() {
          const post = JSON.parse(body);

          const { username } = post;

          fs.writeFile(path.join(__dirname, '../../db/users', `${username}.json`), body, err => {
              if (err) throw err;

              console.log("User saved");
          });
          
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(JSON.stringify({
        status: 'success',
        user: post, 
        }));
      res.end();
      });
  }
  
  // Взять username с данных, сохранить в переменную

  // Сохраняем данные в <username>.json

  // Сохранить <username>.json в папку users

  // Отправляем файл в ответе с данными юзера
  // использовать response
};

module.exports = signUpRoute;