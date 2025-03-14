import {defineField, defineType} from 'sanity'

//Schemas :)
export const usersType = defineType({
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      title: 'email',
    }),
    defineField({
      name: 'password',
      type: 'string',
      title: 'password',
    }),
  ],
})
