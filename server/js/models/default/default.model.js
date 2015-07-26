/**
 * Created by wizdev on 7/26/2015.
 */
module.exports = function(mongoose){
    var fundModel = new mongoose.Schema({
        name: String,
        mobile: String,
        email: String,
        password: String,
        isAgreed: String,
        date:Date
    });
    return mongoose.model('funds', fundModel);
};