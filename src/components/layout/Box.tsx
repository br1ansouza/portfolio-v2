import React from 'react'

interface BoxProps {
  children: React.ReactNode
  sx?: React.CSSProperties
  component?: keyof JSX.IntrinsicElements
}

const Box: React.FC<BoxProps> = ({ 
  children, 
  sx = {}, 
  component: Component = 'div' 
}) => {
  return (
    <Component style={sx}>
      {children}
    </Component>
  )
}

export default Box
