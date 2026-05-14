# GGpumpkins.com Production Source

This folder is the authoritative production source for:

- `https://ggpumpkins.com`

Netlify production site:

- Site name: `rococo-rabanadas-b3d4c4`
- Site ID: `1eb2d526-ed83-4de3-ae5f-7473dc51da2c`

Do not edit or deploy from these folders:

- `/Users/professorx/Desktop/GGpumpkins.com-back-up/` - backup copy only
- `/Users/professorx/Documents/New project/` - separate working area, not the live site

Deploy from this directory only:

```bash
netlify status
netlify deploy --prod
```

Notes:

- On 2026-05-14, this folder's `.netlify/state.json` was corrected from the wrong site ID (`jade-llama-53ab7c`) to the real `ggpumpkins.com` production site ID above.
- If the domain and local source ever appear out of sync, check `.netlify/state.json` first.
- Shared handoff notes live in:
  - `/Users/professorx/Documents/Obsidian Vault/Projects/Gorgeous Gourds/2026-05-14 Claude Handoff - Gorgeous Gourds.md`
  - `/Users/professorx/Documents/Obsidian Vault/Projects/Gorgeous Gourds/2026-05-13 Claude Session Handoff.md`
  - `/Users/professorx/Documents/Obsidian Vault/Projects/Gorgeous Gourds/Daily Progress.md`
