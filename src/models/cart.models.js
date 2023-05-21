import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    title: String,
    description: String,
    difficulty: Number,
    proffessor: String    
})

/* studentSchema.pre('findOne', function(){
    this.populate('courses.course')
}) */

const cartModel = mongoose.model('cart', cartSchema)

export default cartModel