import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model("User", UserSchema)
export default mongoose.model('User');