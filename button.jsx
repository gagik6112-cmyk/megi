import React from 'react'
export function Button({ className = '', children, ...props }) {
  return <button className={`px-4 py-2 rounded ${className}`} {...props}>{children}</button>
}
