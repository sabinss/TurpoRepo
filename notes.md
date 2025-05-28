## Turbo Repo Setup

1. npx create-turbo@latest

## Create a common in packages to shared among other apps

1. create common folder
2. npm i zod
3. create tsconfig file
4. give name to common so that is follow same pattern with other ("@repo/common")
5. Once you add new inside packages we need to do npm install so that it that will be availebl in root folder node modules
6. in common folder package.json add "dependencies": { "@repo/common": "\*" }, this will bring @repo/common in root folder node_modules

## Note

1. IN backend we are using typescript compiler and some time it gives error while starting server: Error `/Users/sabin/Desktop/My Projects/coder gyan/Monorepos/turborepo-poc/packages/common/src/index.ts:1 export const VALUE = 'Jhon Doe'; ^^^^^^

SyntaxError: Unexpected token 'export'`

-   Error occuring while:
    -   we are using typescritp compiler and import module from different module
    -   tsc compiler works fine untill we import packages from other module

2. Let fix this with typecript compiler using `esbuild` or `tsup`
3. npm install esbuild
4. Add build script to package.json : `"build": "esbuild src/index.ts --platform=node --bundle --outdir=dist"`
