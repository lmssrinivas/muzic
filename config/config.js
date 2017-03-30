var user = process.env.mongoUser || 'username';
var pwd = process.env.mongoPwd || 'passcode';

module.exports = {

    "dbURL":'mongodb://localhost:27017',
    "mlabDB":`mongodb://${user}:${pwd}@ds139370.mlab.com:39370/smart-db`,
    "secret":"MSfasdjfaksdjfaksdjk"
};