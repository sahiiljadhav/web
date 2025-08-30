// Deprecated: Switched to Formsubmit.co. Keep a stub to avoid 404s if referenced.
export async function action() {
  return new Response(JSON.stringify({ ok: false, message: 'Use Formsubmit.co client-side form action.' }), {
    status: 410,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function loader() {
  return new Response('Gone', { status: 410 });
}


