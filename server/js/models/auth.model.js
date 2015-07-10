/**
 * Created by wizdev on 7/8/2015.
 */
module.exports = function(mongoose){
    var registerModel = new mongoose.Schema({
        name: String,
        mobile: String,
        email: String,
        password: String,
        isAgreed: String,
        date:Date
    });
    return mongoose.model('signup', registerModel);
};