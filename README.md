# rss-habr-rust-posts-cli

A tiny CLI to get the latest Rust-related posts from https://habr.com/hub/rust/ via RSS

## Preparations

```bash
npm i tsdx -g  # or yarn global add
```

## Usage

```bash
npm start # or yarn start
```

## Commands

To start watching, use:

```bash
npm run watch # or yarn watch
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

## Contributing

Contributions, issues and feature requests are welcome!

## Code conduction

This project uses [Gitmoji](https://gitmoji.carloscuesta.me) for commit messages.

## License

[GPL-3.0 License](LICENSE)
