# D'Arcy Thompson's Reasoning Machine

Digital version of "A very simple Reasoning Machine" designed by
[Sir D'Arcy Wentworth Thompson ](https://en.wikipedia.org/wiki/D%27Arcy_Wentworth_Thompson)

## Try it Out

[https://apps.perseids.org/reasoning-machine/](https://apps.perseids.org/reasoning-machine/)

## Installation

`yarn install`

## Running the development server

`yarn start`

## Building for deployment

Before creating a production build you need to know the path where it will be accessed.
Then run the command `PUBLIC_URL='./path/of/app' yarn build`.
This will generate a set of static files in the `build/` directory that you can serve.

For example, if you want to deploy it at `www.example.com/` then run `PUBLIC_URL='./' yarn build`.
If you want to deploy it at `www.example.com/reasoning` then run
`PUBLIC_URL='./reasoning' yarn build`.

## Running tests

`yarn test`

## Linting the code

`yarn lint`

## Deploying a new version to github.io

`yarn deploy`

## Deploying a new version to Perseids

`yarn deploy-perseids`
