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


### Tailwind

When working with tailwind on vscode, the following plugins are of importance to ease our lives:

1. PostCSS Language Support
2. Tailwind CSS IntelliSense


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