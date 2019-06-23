import { Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  label: String,
  description: String,
  summary: String,
  website: String,
  skills: [{
    name: String,
    level: String,
    keywords: [ String ]
  }],
  experiences: [{
    company: String,
    position: String,
    highlights: [ String ],
    startDate: String,
    website: String
  }],
  projects:[{ type: Schema.Types.ObjectId, ref: 'Project' }],
  profiles: [{
    network: String,
    username: String,
    url: String
  }]
});

export default schema;