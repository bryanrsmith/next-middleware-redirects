import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<p>
					All links on this page should take the user to https://nextjs.org,
					<b> with no query string</b>.
				</p>
				<div>
					<p>
						<a href="https://nextjs.org">Direct link to nextjs.org</a>
					</p>
				</div>

				<section style={{ marginTop: '4em' }}>
					<p>
						Here's a link to <code>/api/redirect?auth-token=TOPSECRET</code>.
						The auth-token param is intended for the API route--it should not be
						sent along to the external redirect target.
					</p>
					<p>
						<a href="/api/redirect?auth-token=TOPSECRET">
							Link to an API route that redirects to nextjs.org
						</a>
					</p>
				</section>

				<section style={{ marginTop: '4em' }}>
					<p>
						Here's a link to{' '}
						<code>/middleware/redirect?auth-token=TOPSECRET</code>. The
						auth-token param is intended for the middleware function--it should
						not be sent along to the external redirect target.. This works when
						running locally, but when deployed to Vercel the auth-token param is
						incorrectly appended to the redirect target.
					</p>
					<p>
						<a href="/middleware/redirect?auth-token=TOPSECRET">
							Link to a middleware/edge function that redirects to nextjs.org
						</a>
					</p>
				</section>
			</main>
		</div>
	);
}
