/**
 * Created by wizdev on 7/11/2015.
 */
module.exports = function(mongoose){
    var childItems = new mongoose.Schema({
        key: {type:String, unique: true},
        text: {type:String},
        iconClass: {type:String},
        template: {type:String},
        childItems : ['childItems']
    });
    mongoose.model('childItems', childItems);
    var menu = new mongoose.Schema({
        viewType: {type:String},
        host:{type:String},
        menu:[childItems],
        createdDate:{ type: Date, default: Date.now }
    });

    return mongoose.model('init', menu);
};