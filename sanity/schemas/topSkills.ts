
import {defineField, defineType} from 'sanity'

export default defineType({
  name: "topSkills",
  title: "TopSkills",
  type: "document",
  fields: [{
    name: 'skills',
    title: 'Skills',
    type: 'array',
    of: [{ type: "reference", to: { type: "skill" } }]
  }]
})