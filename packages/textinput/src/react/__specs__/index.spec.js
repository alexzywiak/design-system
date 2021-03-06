import { render } from '@testing-library/react'
import React from 'react'

import TextInput from '../index.js'

describe('TextInput', () => {
  it('renders', () => {
    const { getByTestId } = render(<TextInput data-testid="undertest" />)
    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  describe('with a single ref', () => {
    it('forwards a single ref to the input element', () => {
      const ref = React.createRef()

      const { container } = render(<TextInput ref={ref} />)
      const inputEl = container.querySelector('input')

      expect(ref.current).not.toBeNull()
      expect(inputEl).toEqual(ref.current)
    })
  })

  describe('with multiple refs', () => {
    it('forwards the input ref to the input element', () => {
      const inputRef = React.createRef()

      const { container } = render(<TextInput ref={{ input: inputRef }} />)

      const inputEl = container.querySelector('input')
      expect(inputEl).toEqual(inputRef.current)
    })

    it('forwards the field ref to the field element', () => {
      const fieldRef = React.createRef()

      const { container } = render(<TextInput ref={{ field: fieldRef }} />)

      const fieldEl = container.querySelector('input').parentNode
      expect(fieldEl).toEqual(fieldRef.current)
    })
  })
})
