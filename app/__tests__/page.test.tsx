import { expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from '@/app/page'

// Mock router
vi.mock("next/navigation", async() => {
  const actual = await vi.importActual("next/navigation")
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn()
    }))
  }
})

// Mock usePublicConfig hook
vi.mock("@/app/hooks/usePublicConfig", () => ({
  usePublicConfig: vi.fn(() => ({
    data: {
      config_items: {
        'Copy Right': 'Copy Right Message',
        'Terms and Conditions': 'Terms and Conditions',
        'Privacy Policy': 'Privacy Policy',
        'Government Warning': 'Government Warning: Cigarette Smoking Is Dangerous To Your Health.'
      }
    },
    isLoading: false,
    error: null
  }))
}))

render(<Page />)

test('Should render Page with Title Log-in', () => {
  expect(screen.getByRole('heading', { level: 1, name: 'Log-in' })).toBeDefined()
})

test('Should render Login form in Page', () => {
  const usernameInput = screen.getByLabelText('username')
  const passwordInput = screen.getByLabelText('password')
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  expect(usernameInput).toBeDefined()
  expect(passwordInput).toBeDefined()
  expect(submitButton).toBeDefined()
})

test('Should handle form submission with correct formData', async () => {
  const usernameInput = screen.getByLabelText('username')
  const passwordInput = screen.getByLabelText('password')
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  fireEvent.change(usernameInput, { target: { value: 'testuser' } })
  fireEvent.change(passwordInput, { target: { value: 'password123' } })

  const mockSubmit = vi.fn((e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    expect(formData.get('username')).toBe('testuser')
    expect(formData.get('password')).toBe('password123')
  })

  const form = screen.getByRole('main').querySelector('form')
  if (!form) throw new Error('Form not found')
  form.onsubmit = mockSubmit

  fireEvent.submit(form)

  expect(submitButton).toBeDefined()
  expect(mockSubmit).toHaveBeenCalled()
})

test('Should render Footer in Page with data', () => {
   const footer = screen.getByRole('contentinfo')
   expect(footer).toBeDefined()

   expect(footer.textContent).toContain('Copy Right Message')
   expect(footer.textContent).toContain('Terms and Conditions')
   expect(footer.textContent).toContain('Privacy Policy')
   expect(footer.textContent).toContain('Government Warning: Cigarette Smoking Is Dangerous To Your Health.')
})
