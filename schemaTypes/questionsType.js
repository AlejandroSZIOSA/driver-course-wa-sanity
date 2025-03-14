import {defineField, defineType} from 'sanity'

//Schemas :)
export const questionsType = defineType({
  name: 'questions',
  type: 'document',
  title: 'Questions',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'question',
    }),
    defineField({
      name: 'answer',
      type: 'string',
      title: 'answer',
    }),
    defineField({
      name: 'wrongAnswers',
      type: 'array',
      of: [{type: 'string'}],
      title: 'wrongAnswers',
    }),
    defineField({
      name: 'imageUrl',
      type: 'image',
      title: 'questionImg',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'description',
    }),
  ],
})
