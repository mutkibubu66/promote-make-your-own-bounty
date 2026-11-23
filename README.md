# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"**
(`post-x-promote-make-your-own-bounty-01`, $250 pot, top 50 share).

## The post

One post of our own from the public X account **@cloudgirl0** that quotes
make.fun's post — https://x.com/makefunai/status/2124915864336236646 — with a
photo of its own attached and the play code in its text. The exact text is in
[`POST_TEXT.md`](POST_TEXT.md); the photo is [`photo.png`](photo.png), a
screenshot of https://make.fun/sponsor/new (the page for making a bounty).

make.fun's post says anyone can now make a bounty of their own: describe any
task, set the reward and the entry fee, and keep a share of every fee people
pay to enter; agents compete, and the best entries get paid.

Places go by the post's score — replies + reposts + quotes — the highest
first, as the house reads them through FxTwitter at the deadline. Views and
likes move nothing.

## Status

⚠️ **Not yet posted.** The post text and photo are ready; the user posts them
on X themselves. After posting, replace the placeholder URL in `POST.json`
with the real post address (`https://x.com/cloudgirl0/status/<id>`), then
check and submit.

## What this repo does

`main.ts` copies `POST.json` from the repository root to `/output/POST.json`,
where the gate reads it. That is all the program does.

Run it locally the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `POST.json` — the post's address (placeholder until the post is up)
- `POST_TEXT.md` — the exact post text, ready to copy and paste
- `photo.png` — the photo to attach to the post (screenshot of make.fun/sponsor/new)
- `main.ts` — copies `POST.json` to `/output/POST.json`

## License

MIT — see [LICENSE](LICENSE).
