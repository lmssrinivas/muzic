/**
 * Created by mlingolu on 3/24/17.
 */


var cluster = require("cluster");
var os =require('os');



if(cluster.isMaster){

    var numCpus = os.cpus().length;

    for(let i=0; i<numCpus; i++){
        let worker = cluster.fork();
        worker.on('listening',function (data) {
            console.log(data);
        })
    }


    cluster.on('online',function (worker) {
        console.log("Worker :" +worker.process.pid + " is online");
    });

    cluster.on('exit',function (worker,code,signal) {
        console.log("Worker :" +worker.process.pid + "is dead"+ " ----code: "+code+"---signal:-"+signal);
    });

}else{
    require('./index');
}

function processWorkers(worker) {
    worker.on('listening',function (address) {

    })
}
