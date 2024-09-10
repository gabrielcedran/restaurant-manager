import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  // this would be correct place to report errors to observability platforms like datadog, sentry, baseline, etc
  // the pre is not necessary for production and can be omitted
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Woops, unexpected error...</h1>
      <p className="text-accent-foreground">
        You may find below more details to report to support:
      </p>
      <pre>{error?.message || error?.stack || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Go back to{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
