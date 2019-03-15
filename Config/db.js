const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:sheikh123@cluster0-zush2.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
// mongoose.connect('mongodb://firstdb:talha123@ds211096.mlab.com:11096/firstdb', {useNewUrlParser: true});
// mongoose.connect('mongodb+srv://dbUser:sheikh123@cluster0-zush2.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

module.exports = mongoose