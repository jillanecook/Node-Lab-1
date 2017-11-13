const taskList = require ('./task_list')
const http = require('http');
const _ = require ('lodash');


function getRandom() {
    const pickRandom = _.shuffle(taskList);
    return pickRandom[0];  
}

http.createServer(function(request, response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(getRandom());
    response.end();
}).listen(8888);