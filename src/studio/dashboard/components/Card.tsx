import {CSSProperties, ReactNode} from 'react'

interface CardProps {
  children: ReactNode
  style?: CSSProperties
}

export default function Card({children, style}: CardProps) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E5E7EB',
        borderRadius: 18,
        padding: 24,
        boxShadow: '0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.03)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
