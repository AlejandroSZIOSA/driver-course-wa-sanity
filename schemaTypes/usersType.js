import {defineField, defineType} from 'sanity'

//Schemas :)
export const usersType = defineType({
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      title: 'email',
      validation: (Rule) => Rule.email(),
      unique: true,
    }),
    defineField({
      name: 'password',
      type: 'string',
      title: 'hashed password',
      hidden: true,
    }),
  ],
})
