import {createElement} from 'react'

import {defineConfig, type ObjectInputProps} from 'sanity'

import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {markdownSchema} from 'sanity-plugin-markdown'
import {codeInput} from '@sanity/code-input'
import {bulkPopularTool} from './src/studio/bulkPopular'

import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import PostEditor from './src/studio/posteditor/PostEditor'

export default defineConfig({
  name: "default",
  title: "GIS Blogs",
  basePath: "/admin",

  projectId: "m8fvgkve",
  dataset: "production",

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    colorInput(),
    markdownSchema(),
    codeInput(),
    bulkPopularTool,
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    components: {
      input: (props) => {
        if (props.schemaType.name === "post" && props.path.length === 0) {
          return createElement(PostEditor, props as ObjectInputProps);
        }

        return props.renderDefault(props);
      },
    },
  },
});
