'use client'

import { useState } from 'react'

/**
 * Sign in to teacher mode once per machine.
 *
 * Deliberately not part of the slide deck: the token is pasted at the start of
 * term, not in front of a room.
 */
export default function TeachToggle({ active }: { active: boolean }) {
  const [token, setToken] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function signIn() {
    setBusy(true)
    setError(null)
    const res = await fetch('/api/teach', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ token }),
    })
    setBusy(false)
    if (res.ok) location.reload()
    else setError(res.status === 401 ? 'That token was not accepted.' : 'Could not sign in.')
  }

  async function signOut() {
    setBusy(true)
    await fetch('/api/teach', { method: 'DELETE' })
    location.reload()
  }

  if (active) {
    return (
      <div className="text-center">
        <p className="text-bio-green text-lg md:text-xl">
          Teacher mode is on for this browser.
        </p>
        <p className="mt-2 text-gray-400 text-sm md:text-base">
          Every lecture now shows its answer and poll-results slides.
        </p>
        <button
          onClick={signOut}
          disabled={busy}
          className="mt-6 px-4 py-2 rounded-lg bg-red-600/20 text-red-400 font-semibold hover:bg-red-600/30 disabled:opacity-50"
        >
          Turn off
        </button>
      </div>
    )
  }

  return (
    <div>
      <input
        type="password"
        value={token}
        placeholder="POLL_ADMIN_TOKEN"
        onChange={(e) => setToken(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && signIn()}
        className="w-full rounded-lg bg-bio-dark border border-bio-blue/30 px-4 py-3 text-gray-100 font-mono"
      />
      <button
        onClick={signIn}
        disabled={busy || !token}
        className="mt-4 w-full px-4 py-3 rounded-lg bg-bio-green/20 text-bio-green font-semibold hover:bg-bio-green/30 disabled:opacity-50"
      >
        {busy ? 'Checking…' : 'Turn on teacher mode'}
      </button>
      {error && <p className="mt-3 text-center text-yellow-300">{error}</p>}
    </div>
  )
}
