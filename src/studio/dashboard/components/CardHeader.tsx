import {ReactNode} from 'react'

interface CardHeaderProps {
  title: string
  action?: ReactNode
}

export default function CardHeader({title, action}: CardHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        {title}
      </h2>

      {action}
    </div>
  )
}
