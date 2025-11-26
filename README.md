# BCA Mechanical - Divi Child Theme

Custom WordPress child theme for BCA Mechanical's website, built on the Divi theme framework.

## What's In This Repo

This repository contains only the **custom child theme files** for BCA Mechanical, not the entire WordPress installation.

### File Structure
```
├── style.css          # Main stylesheet with all custom CSS
├── functions.php      # Child theme setup and enqueuing
├── js/
│   └── scripts.js     # Mobile hamburger menu functionality
└── .vscode/
    └── sftp.json      # FTP credentials (ignored by Git)
```

## Features

- **Responsive Mobile Navigation**: Custom hamburger menu with collapsible submenus
- **CSS Variables System**: Organized brand colors and spacing tokens
- **Contact Form Styling**: Custom CF7 form layouts and validation
- **Service Grid Components**: Reusable service icon grid layout

## Development Workflow

### Local Setup
1. Clone this repo to your local machine
2. Configure `.vscode/sftp.json` with your server credentials (see `.gitignore`)
3. Open folder in VS Code
4. Edit files locally - they auto-upload on save via SFTP extension

### Making Changes
1. Edit files in VS Code
2. Save (Ctrl+S) - auto-uploads to server via SFTP
3. Commit changes: `git commit -m "Description of changes"`
4. Push to GitHub: `git push`

## Tech Stack

- **WordPress** + **Divi Theme** (parent)
- **jQuery** for mobile menu interactions
- **CSS Variables** for consistent theming
- **Contact Form 7** for forms

## Breakpoints

- Desktop: 981px and up (Divi default navigation)
- Mobile: 980px and below (Custom hamburger menu)
- Small Mobile: 480px and below (Full-width menu)

## Notes

- Mobile breakpoint set to 980px to match Divi's default
- Custom CSS uses BEM-style naming (`.bca-` prefix)
- All credentials and sensitive files are in `.gitignore`

## Deployment

**Current Environment**: Development subdomain at `bca.mosaiclifecreative.com`

**When Going Live**:
1. Update SFTP config to point to client's live server
2. Push child theme files to live site
3. Activate child theme in WordPress admin

---

**Developer**: Mosaic Life Creative  
**Last Updated**: November 2024