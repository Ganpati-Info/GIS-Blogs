"use client";
import {Box} from '@sanity/ui'
import type {ObjectInputProps} from 'sanity'

import PostActions from './PostActions'

export default function PostEditor(props: ObjectInputProps) {
  return (
    <Box>
      <PostActions />

      {props.renderDefault(props)}
    </Box>
  )
}
