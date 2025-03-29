import React from 'react'

export default function Card({question,answer}) {
  return (
    <div>
      <p><strong>{question}</strong></p>
      <p>{answer}</p>
    </div>
  )
}
