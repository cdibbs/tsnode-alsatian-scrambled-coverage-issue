# Instructions

To see the issue, run:

```shell
npm run cover
```

And open `file:///[path-up-to-this-readme]/coverage/index.html`.

- `index.ts` shows mangled coverage, but both source files are covered.

Then, remove the following two lines from the `nyc` config in `package.json`:

```json
    "require": ["ts-node/register"],
    "all": true
```

And rerun `npm run cover`.

- Now, only `index.ts` is covered, but the coverage is at least correct.

