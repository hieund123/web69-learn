import mongoose from "mongoose";
import { Collections } from "../database/index.js";

const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    description: Array,
    isDrop: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const TodoModel = mongoose.model(Collections.TODO, todoSchema);
export default TodoModel;