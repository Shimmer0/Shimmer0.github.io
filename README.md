# Academic Website - How to Edit Content

This guide explains how to easily update your academic website content without touching any code.

## Quick Start

All your content is stored in the `_data/` folder as simple text files (YAML format). You only need to edit these files to update your website!

## Content Files Overview

| File | What it Contains | When to Update |
|------|------------------|----------------|
| `_data/contact.yml` | Your name, email, affiliation, social links | Update contact info |
| `_data/education.yml` | Degrees, universities, thesis info | Add new degree |
| `_data/experience.yml` | Work experience, internships, teaching | Add new position |
| `_data/research.yml` | Research interests, projects | Update research focus |
| `_data/publications.yml` | All your publications | Add new paper |
| `_data/awards.yml` | Awards, honors, professional service | Add new award |

## How to Edit Files

### Option 1: Edit on GitHub (Easiest)

1. Go to https://github.com/Shimmer0/Shimmer0.github.io
2. Navigate to the `_data` folder
3. Click on the file you want to edit
4. Click the pencil icon ✏️ in the top right
5. Make your changes
6. Click "Commit changes" at the bottom
7. Wait 1-2 minutes for your site to update

### Option 2: Edit Locally

1. Open the file in any text editor (Notepad, VS Code, etc.)
2. Make your changes
3. Save the file
4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

## Editing Examples

### Adding a Publication

Open `_data/publications.yml` and add:

```yaml
journal_papers:
  - title: "Your Paper Title"
    authors: "Your Name, Co-author Name"
    venue: "Journal Name"
    year: 2025
    volume: "10"
    issue: "2"
    pages: "100-110"
    doi: "https://doi.org/10.xxxx/xxxxx"
    pdf: "/files/paper.pdf"
    highlight: true
```

### Adding Education

Open `_data/education.yml` and add:

```yaml
education:
  - degree: "Ph.D."
    major: "Computer Science"
    institution: "Tsinghua University"
    location: "Beijing, China"
    start_date: "2022-09"
    end_date: "Present"
    thesis: "Your Thesis Title"
    advisor: "Prof. Advisor Name"
```

### Updating Contact Info

Open `_data/contact.yml` and modify:

```yaml
name: "Your Name"
email: "your.email@university.edu"
affiliation:
  institution: "Your University"
  department: "Department Name"
  position: "Ph.D. Student"
```

## Important Tips

1. **Keep the format** - Maintain the indentation and structure
2. **Don't remove the dashes** - Lines starting with `-` start new items
3. **Quotes are optional** - You can use quotes around text, but not required
4. **Comment out instead of delete** - Add `#` at the start of a line to hide it
5. **Test changes** - Your site updates in 1-2 minutes after saving

## YAML Syntax Quick Reference

```yaml
# This is a comment

# Simple value
name: "Value"

# List of values
items:
  - "Item 1"
  - "Item 2"
  - "Item 3"

# Nested structure
person:
  name: "John"
  email: "john@example.com"
  location: "Beijing"
```

## Common Questions

**Q: How do I hide something without deleting it?**
A: Add `#` at the beginning of the line:
```yaml
# - title: "Paper I don't want to show"
```

**Q: How do I add multiple items?**
A: Use dashes `-` to create list items:
```yaml
awards:
  - title: "Award 1"
    year: 2023
  - title: "Award 2"
    year: 2024
```

**Q: How do I add a link?**
A: Just paste the URL:
```yaml
github: "https://github.com/yourusername"
```

**Q: What if I break something?**
A: Don't worry! You can always check the history on GitHub and revert changes. The site won't break permanently.

## File Structure

```
Shimmer0.github.io/
├── _data/              # ← YOUR CONTENT GOES HERE
│   ├── contact.yml
│   ├── education.yml
│   ├── experience.yml
│   ├── research.yml
│   ├── publications.yml
│   └── awards.yml
├── _layouts/           # Page templates (don't edit)
├── index.md            # Homepage (auto-generated from data)
├── cv.md               # CV page (auto-generated)
├── research.md         # Research page (auto-generated)
├── publications.md     # Publications page (auto-generated)
└── contact.md          # Contact page (auto-generated)
```

## Need Help?

- Check the example templates in each data file (commented out with `#`)
- Visit the GitHub repository: https://github.com/Shimmer0/Shimmer0.github.io
- Contact the site maintainer

## Updates Log

- 2025-03-07: Initial website setup with data-driven content management
