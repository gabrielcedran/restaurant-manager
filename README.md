# Restaurant Manager

This project is a restaurament management app to study react js and its main concepts and libs like tailwind css, shadcn/ui and react-query (caching, data invalidation, data sync, optimistic updates, etc).

### Shadcn/ui

This lib provides a myriad of ready to use and pre-styled components that adhere to good practices like accessibility and UI/UX concepts and standards.
It speeds up development when custom visual identity is not a strong requirement as developers do not have to style everything from scratch.

It's built on top of other libs like `radix-ui`, which provides unstyled/primitive accessible components, `cmdk`, which is a lib for standardised and well strucutured actions, etc.

1. `npm install -D tailwindcss postcss autoprefixer`
2. `npx tailwindcss init -p`
3. change `tsconfig.json` and `tsconfig.app.json` (reference commit for further info or documentation below)
4. `npm i -D @types/node`
5. change `vite.config.ts`
6. `npx shadcn-ui@latest init`

Ps: These changes are meant to enable imports with `@/something` instead of relative paths `../../something`. Changes on `tsconfig.*` files are meant to enabled the IDEs to understand these imports, while the one on `vite.config.ts` for the build tool (and convert them to valid js).

[Referece](https://ui.shadcn.com/docs/installation/vite)

#### Installing components

Shadcn/ui by default do not install any components. It leaves this for the developers to define, so that only components that will in fact be used are imported.

It follows a concept called `design by copy and paste`. It means that the component is not in fact imported but created (copied) inside the project (notice the result of the button installation below -> @/components/ui/button.tsx).

Example of how to install the button components:

`npx shadcn-ui@latest add button`

[Reference](https://ui.shadcn.com/docs/components/button`)

_Notes:_

1. React Server Components are frameworks that provide SSR like next.js, etc.
2. The at notation for imports assume the root path as `src` when resolving paths, therefore it must be omitted `@/src/components/...` -> `@/components/`.
3. To change the theme, go to shadcn-ui website, find a theme (or customise one), copy the styles and replace on the global.css file.

### Tailwind

When working with tailwind on vscode, the following plugins are of importance to ease our lives:

1. PostCSS Language Support
2. Tailwind CSS IntelliSense

#### Notes

##### Data attributes

It's possible to define `data-` attributes on html elements and use them when styling with tailwind:

```javascript
<Link
  data-status={status}
  className="... data-[active=abc]:hover:text-foreground"
>
  ...
</Link>
```

### ESLint and prettier

Installation:

1. `npx install-peerdeps --dev eslint-config-airbnb` - careful with the new eslint config version as it is incompatible with old shared configs (and the old version with the new typescript versions :P)
2. create a `.eslintrc.json` and the following `{ "extends": ["airbnb", "airbnb/hooks"] }`

or

1. `npm i eslint@8.55.0 @rocketseat/eslint-config@2.1.0 -D`
2. `{ "extends": ["@rocketseat/eslint-config/react"] }`

Running eslint on the command line `npx eslint --ext .tsx,.ts . {--fix}`

#### Tailwind prettier plugin

This plugin enforces the correct order when declaring styles.

1. `npm i -D prettier-plugin-tailwindcss`
2. create a `prettier.config.cjs` [reference](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

#### Import sort plugin

This plugin enforces a standard import order.

1. `npm i -D eslint-plugin-simple-import-sort`
2. add config to `.eslintrc.json` [reference](https://github.com/lydell/eslint-plugin-simple-import-sort)

### Application Routing

React router dom is the most widely used routing lib for react (though TanStack Router is gaining popularity).

`npm install react-router-dom `

[Reference](https://reactrouter.com/en/main/start/tutorial)

#### Layouts

When there are many pages that have the same visual elements like header, menus, footers, etc, it's possible to define a layout to avoid code duplication (and avoid unnecessary re-renderings).

The steps to define and use a layout is:

1. define the layout element and add an <Outlet /> element where the specific content of that route will be rendered
2. Go to the application routes and define a route with path and element attributes (the element has to be the layout defined above)
3. Within the previous definition add a children attribute (sibling to path and element) and define its path and element attributes (as though it was on root level)

React router dom will render the element defined in the children attribute where the outlet element was added whenever that path is accessed.

### SEO when there is no SSR

React helmet (react helmet async is a fork still under maintenance) allows Single Page Applications to update their head metatags, which is extremely useful for SEO engines and sometimes painful when no SSR is available.

`npm i react-helmet-async` [reference](https://github.com/staylor/react-helmet-async)

### Forms

Uncontrolled forms with react hook form and zod: `npm i react-hook-form zod @hookform/resolvers`.

### Toasts

Shadcn/ui provides a toast component however for the purpose of experimenting, this project will use a lib called `Sonner`.

`npm i sonner`

### Slots (Radix slots)

When working with Radix components (shadcn uses radix under the hook), it's possible to make use of a concept called slot.
In a nutshell, it allows developers to keep all styles of a given component but changing its tag (element) - e.g make a link look exactly like a button. _It passes all the properties that a given component would have to its first child_.

```javascript
<Button asChild>
  <Link to="/sign-up">Create new restaurant</Link>
</Button>
```

### Charts

Shadcn provides chart components but for the purposes of studies, I'll use Recharts (which is used by shadcn under the hood).

To use Tailwind colors outside Tailwind styling, import the colours and then access them as a map:

```javascript
import colors from "tailwindcss/colors";

colors.violet["500"];

colors["violet"]["500"];
```

### Bun

Bun is all-in-one javascript toolkit (development, bundler, runtime, etc) alternative to NodeJS. It's built on top of the Javascript Core, which is the JS engine used by Safari, React Native, and other programs and tools (mostly used by Apple) - opposed to Node, which is built on top of the Chrome/Webkit V8.

It's been presenting overall better performance than NodeJS and runs on any OS (only caveat is to use WSL on windows for better compatibility).

Installation for Mac [reference](https://bun.sh/):

`curl -fsSL https://bun.sh/install | bash`

#### Restaurant Manager API:

API used in this project: https://github.com/rocketseat-education/pizzashop-api.git

Set up:

1. create a `.env.local` file in the root directory and copy the content of the `.env.local.example`
2. set up a postgres db (docker-compose file in the root directory of the api source - `docker compose up -d`)
3. install all the dependencies using bun (`bun i`)
4. run all the migrations (`bun migrate`) - ignore `resend_api_key` for now (just add any value to it)
5. run `bun seed` to reset and prepopulate the db. _ps: open seed.ts and change the created user's email_
6. start the application with `bun dev`

### Environment Variable

Vite requires that environment variables start with `VITE_`.

To use the variables, simply use `import.meta.env.BASE_URL` directly in the code (ps: the traditional `process...` is how node handles env variables. `import` is Vite's). However this approach does not provide any certainty that the used variable exists.

Alternatively the following can be done, using zod:

create a file (here I named env.ts) and use zod to validate the environment variables:

```javascript
import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
});

export const env = envSchema.parse(import.meta.env);
```

Parse ensures that what is being passed as parameter has the structure defined by the schema. If it doesn't it won't even let the application start.

```javascript
import { env } from "@/env";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
});

// vs

import { env } from "@/env";

export const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
});
```

### React Query

In a nutshell, react query is a series of hooks to ease requests between front and backend where it provides memoisation of the requests between components (e.g component A and B perform the same request to load a list of resources).

It also provides many other features and concepts like proper handling of server state management (opposed to general purpose state management libs like redux), opinionated way of fetching and updating data (providing standardisation), automatic stale data update, retry mechanism, backoff, etc.

`npm i @tanstack/react-query`

Basic setup:

Create a QueryClient in a react-query.ts file:

```javascript
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
```

Wrap the components that will need to fetch data from the BE with QueryClientProvider (usually a high level component):

```javascript
<QueryClientProvider client={queryClient}>...</QueryClientProvider>
```

#### Concepts

Whenever performing server side operations, you need to wrap react-query around the actual request, so that it can plug in and offer its features.

`Mutations:`

Every time an operation that is not a fetch (query) operation (so PUT, POST, DELETE, PATCH), it's necessary to use the `useMutation` hook.

```javascript
  // renaming mutateAsync is a good practice as (1) improves redability where it is called and (2)
  // you might have more than just one request in that component
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  ...

  async function handleSignIn(data: SignInForm) {

    await authenticate({ email: data.email })
    ...
  }

```

`Query (data fetch)`:

In order to perform fetch operations it's necessary to use the `useQuery` hook. It works similarly to the mutation hook, however it has (and supports) a couple of extra details and functionalities:

- `queryKey`: used to prevent different parts of the application from performing the same request again (de-duplication) - a kind of server-side cache
- `staleTime`: how long the data is valid before it needs refreshing (automatically handled by react query upon window focus) - enabled by default
- `refetchOnWindowFocus` (default to true, works along with `staleTime`), `refetchOnMount`, `refetchOnInterval`, etc
- many properties with the request status like `isLoading`, `isError`, etc

_It's a good practice to change staleTime to `Infinity` for data that is not likely to change or not changed frequently_

```javascript
const { data: profile } = useQuery({
  queryKey: ["profile"], // if this request is performed anywhere else in the app with the same key, the cached data is returned
  queryFn: getProfile,
});
```

### Axios

A hack to delay backend responses via axios to test loadings is to add a request interceptor that awaits for 1 second before proceeding with the request (and create a variable to only have it enabled for dev env):

Request interceptors are executed before each request.

```javascript
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return config;
  });
}
```
