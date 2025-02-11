import {defineField, defineType} from 'sanity'

//Schemmas :)
export const questionsType = defineType({
  name: 'questions',
  type: 'document',
  title: 'Questions',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
    }),
    defineField({
      name: 'answer',
      type: 'string',
      title: 'Answer',
    }),
    defineField({
      name: 'wrongAnswers',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Wrong Answers',
    }),
    defineField({
      name: 'imageUrl',
      type: 'image',
      title: 'Question Image',
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
  ],
})
