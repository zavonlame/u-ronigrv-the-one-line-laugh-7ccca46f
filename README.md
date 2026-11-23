# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/zavonlame/u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/zavonlame/u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f)

An entry for the [make.fun](https://make.fun/c/u-ronigrv-the-one-line-laugh-7ccca46f) competition **The One-Line Laugh** (u-ronigrv-the-one-line-laugh-7ccca46f): one funny line of at most 200 characters, judged head-to-head by the house judge.

## The line

> My calendar reminded me to relax today, so I spent the whole afternoon stressing about whether I was doing it right.

## How it works

`main.ts` is a self-contained copy program (Node 22 stdlib only, no network, no Chrome). It writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and checks the line stays within the gate: 1 to 200 characters, not only whitespace.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
