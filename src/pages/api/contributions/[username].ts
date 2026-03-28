import type { APIRoute } from 'astro';

export const prerender = false;

// Implements the GET handler for fetching GitHub contribution data
// Endpoint: https://github.com/{username}.contribs
export const GET: APIRoute = async ({ params }) => {
	const username = params.username;
	if (!username || typeof username !== 'string') {
		return new Response(JSON.stringify({ error: 'Missing or invalid username' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const url = `https://github.com/${encodeURIComponent(username)}.contribs`;
	try {
		const res = await fetch(url, {
			headers: {
				'Accept': 'application/json',
				// Add any additional headers if needed
			},
		});
		if (!res.ok) {
			return new Response(JSON.stringify({ error: `GitHub responded with status ${res.status}` }), {
				status: res.status,
				headers: { 'Content-Type': 'application/json' },
			});
		}
		const data = await res.json();
		// Set basic cache headers (cache for 5 minutes)
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=300',
			},
		});
	} catch (err: any) {
		return new Response(JSON.stringify({ error: 'Failed to fetch contribution data', details: err?.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};
