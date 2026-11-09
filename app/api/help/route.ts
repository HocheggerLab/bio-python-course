import { getHelpStore, MAX_NAME_CHARS, MAX_QUESTION_CHARS } from '@/lib/help/store'

export const dynamic = 'force-dynamic'

const MAX_BODY_BYTES = 2 * 1024

/** The student's browser token: a random UUID, never an identity. */
function validToken(token: unknown): token is string {
  return typeof token === 'string' && token.length >= 8 && token.length <= 64
}

/** Collapse whitespace and cut to length, so the helper's list stays tidy. */
function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : ''
}

async function readJson(request: Request): Promise<Record<string, unknown> | null> {
  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) return null
  try {
    const body = JSON.parse(raw)
    return body && typeof body === 'object' ? body : null
  } catch {
    return null
  }
}

/** A student's own place in the queue — nothing about anyone else. */
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token')
  if (!validToken(token)) {
    return Response.json({ error: 'bad token' }, { status: 400 })
  }
  try {
    return Response.json(await getHelpStore().view(token), {
      headers: { 'Cache-Control': 'no-store' },
    })
  } catch {
    return Response.json({ error: 'queue unavailable' }, { status: 500 })
  }
}

/** Join the queue, or edit your entry if you are already in it. */
export async function POST(request: Request) {
  const body = await readJson(request)
  if (!body || !validToken(body.token)) {
    return Response.json({ error: 'invalid request' }, { status: 400 })
  }
  const name = clean(body.name, MAX_NAME_CHARS)
  if (!name) {
    return Response.json({ error: 'please add your name' }, { status: 400 })
  }
  try {
    const result = await getHelpStore().join(body.token, name, clean(body.question, MAX_QUESTION_CHARS))
    if (result === 'full') {
      return Response.json({ error: 'the queue is full — put your hand up' }, { status: 429 })
    }
    return Response.json({ result })
  } catch {
    return Response.json({ error: 'could not join — please try again' }, { status: 500 })
  }
}

/** Leave the queue ("I sorted it myself"). */
export async function DELETE(request: Request) {
  const body = await readJson(request)
  if (!body || !validToken(body.token)) {
    return Response.json({ error: 'invalid request' }, { status: 400 })
  }
  try {
    await getHelpStore().leave(body.token)
    return Response.json({ result: 'left' })
  } catch {
    return Response.json({ error: 'could not leave — please try again' }, { status: 500 })
  }
}
