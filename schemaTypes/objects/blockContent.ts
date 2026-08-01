import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',

  of: [
    defineArrayMember({
      type: 'block',

      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],

      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],

      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {title: 'Code', value: 'code'},
        ],

        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'Link',
            type: 'object',

            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              }),

              defineField({
                name: 'openInNewTab',
                title: 'Open in new tab',
                type: 'boolean',
                initialValue: true,
              }),
            ],
          }),
        ],
      },
    }),

    defineArrayMember({
      type: 'image',

      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),

    defineArrayMember({
      type: 'code',
      title: 'Code Block',
      options: {
        language: 'typescript',
        languageAlternatives: [
          {title: 'Bash', value: 'bash'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'Python', value: 'python'},
          {title: 'Java', value: 'java'},
          {title: 'C++', value: 'cpp'},
          {title: 'C#', value: 'csharp'},
          {title: 'Go', value: 'go'},
          {title: 'Ruby', value: 'ruby'},
          {title: 'PHP', value: 'php'},
          {title: 'Swift', value: 'swift'},
          {title: 'Kotlin', value: 'kotlin'},
          {title: 'Rust', value: 'rust'},
          {title: 'Scala', value: 'scala'},
          {title: 'Perl', value: 'perl'},
          {title: 'Lua', value: 'lua'},
          {title: 'Haskell', value: 'haskell'},
          {title: 'R', value: 'r'},
          {title: 'Dart', value: 'dart'},
          {title: 'Elixir', value: 'elixir'},
          {title: 'Clojure', value: 'clojure'},
          {title: 'F#', value: 'fsharp'},
          {title: 'Objective-C', value: 'objectivec'},
          {title: 'Shell', value: 'shell'},
          {title: 'PowerShell', value: 'powershell'},
          {title: 'TSX', value: 'tsx'},
          {title: 'JSX', value: 'jsx'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JSON', value: 'json'},
          {title: 'Bash', value: 'bash'},
          {title: 'Markdown', value: 'markdown'},
          {title: 'SQL', value: 'sql'},
        ],
      },
    }),
  ],
})
