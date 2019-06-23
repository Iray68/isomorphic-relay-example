import { Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  summary: String,
  attachments: [{ label: String, uri: String }],
  members:[{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export default schema;