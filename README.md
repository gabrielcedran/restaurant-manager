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
