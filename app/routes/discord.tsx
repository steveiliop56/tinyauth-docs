export default function Discord() {
  const discordUrl = "https://discord.gg/eHzVaCzRRd";
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${discordUrl}`} />
        <title>Redirecting...</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="p-4">
          <p className="mb-1">Redirecting to the Discord server...</p>
          <a
            className="text-fd-info underline hover:opacity-80"
            href={discordUrl}
          >
            Redirect now
          </a>
        </div>
      </body>
    </html>
  );
}
