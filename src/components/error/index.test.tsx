import { render } from '@testing-library/react'
import { Error } from '.'

test('should render as expected', () => {
  const { asFragment } = render(<Error />)

  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    Error while fetching data.
  </div>
</DocumentFragment>
`)
})
