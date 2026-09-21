import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    // Only "ml" is a valid locale segment. Anything else (e.g. /this-page-does-not-exist)
    // must be a real 404 rather than the English home page.
    if (params.locale && params.locale !== "ml") {
      throw notFound();
    }
  },
  component: () => <Outlet />,
});
