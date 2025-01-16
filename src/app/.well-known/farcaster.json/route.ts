export async function GET() {
  const appUrl = "https://test-six-kappa-95.vercel.app";
  // process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjk0OTQyOSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJlMWNGOTA2NjYzZjRjYTVBZTlDYzdlQjlFNjFCNTgxMjRkZkQ4MjEifQ",
      payload: "eyJkb21haW4iOiJ0ZXN0LXNpeC1rYXBwYS05NS52ZXJjZWwuYXBwIn0",
      signature:
        "MHgxM2YxOTY3ZDE3MzY4ZGI1ZTVkOTVlZWE1ZDhlM2FiZGY0MGNmNTA3M2YzN2NkMjUwOGNlMmQzMjdjZDIyYTQ0N2Y4YjRiZDQxZjA5ZGUzZTJiMDk5Y2E3YTVlNDI0NzJhZGQyZWM5MWU3YzdmYWMxYzk2Mjg0Y2MxYWU0ZGU2ZTFj",
    },
    frame: {
      version: "1",
      name: "Example Frame",
      iconUrl: "https://test-six-kappa-95.vercel.app/icon.png",
      homeUrl: "https://test-six-kappa-95.vercel.app",
      imageUrl: "https://test-six-kappa-95.vercel.app/image.png",
      buttonTitle: "Check this out",
      splashImageUrl: "https://test-six-kappa-95.vercel.app/splash.png",
      splashBackgroundColor: "#eeccff",
      webhookUrl: "https://test-six-kappa-95.vercel.app/api/webhook",
    },
  };
  // {
  //   accountAssociation: {
  //     header:
  //       "eyJmaWQiOjM2MjEsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgyY2Q4NWEwOTMyNjFmNTkyNzA4MDRBNkVBNjk3Q2VBNENlQkVjYWZFIn0",
  //     payload: "eyJkb21haW4iOiJmcmFtZXMtdjItc3dhcC1kZW1vLnZlcmNlbC5hcHAifQ",
  //     signature:
  //       "MHgxMzE0NDBjODMyMWRkM2UzNmQ3OWFiNDYxYmNiZThiOTM0NGNkOGZkNmVhMmVlNmY3YTY4NWJiNjMzMTYyNGNjNTczNjUyNTlhNzE5MTJkZDM4NWVmZmM5MWMwZmY1ZWVlMzYwNGUzYWNiZTI3MTQzYzIwYTRjMDBlNjgwZjBmNzFj",
  //   },
  //   frame: {
  //     version: "0.0.0",
  //     name: "Simple Swap Demo",
  //     iconUrl: `${appUrl}/icon.png`,
  //     splashImageUrl: `${appUrl}/splash.png`,
  //     splashBackgroundColor: "#f7f7f7",
  //     homeUrl: appUrl,
  //   },
  // };

  return Response.json(config);
}
