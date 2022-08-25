var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    address: {
        city: { type: String },
        state: { type: String, unique: true },
        country: { type: String },
        pin: { type: Number }
    }
});

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ state: 1, country: 1 });

module.exports = mongoose.model('User', userSchema);