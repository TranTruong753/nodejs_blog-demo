export default {
    mutipleMongooseToObject: function (mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject(mongooses){
        return mongooses ? mongoose.toObject() : mongooses;
    },
}