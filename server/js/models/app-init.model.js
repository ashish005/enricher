/**
 * Created by wizdev on 7/10/2015.
 */
module.exports = function(mongoose){
    var appsModel = new mongoose.Schema({
        hash: String,
        host: {type:String, unique: true},
        hostname: String,
        origin: String,
        ownerName: String,
        ownerMailId: String,
        ownerMobileNo: String,
        date:{ type: Date, default: Date.now }
    });
    return mongoose.model('apps', appsModel);
};