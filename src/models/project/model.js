import mongoose from 'mongoose';
import projectSchema from './schema';

let Project = mongoose.model('Project', projectSchema);

export default Project;