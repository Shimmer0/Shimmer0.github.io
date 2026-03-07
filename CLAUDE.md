# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **0-cost personal academic website** project. The goal is to create and deploy a professional academic website completely free of charge, suitable for showcasing academic work, research, and professional profile.

## Requirements

- **Cost**: 0 cost (free hosting and deployment)
- **Purpose**: Personal academic website (future use)
- **Current State**: Blank slate - layout and functionality to be determined later
- **Deployment**: Fully automated where possible

## First Principles Thinking

**CRITICAL**: When working on this project, always apply first principles thinking:

1. **Question Assumptions**: Do not assume the user knows exactly what they want or how to achieve it
2. **Understand Root Motivations**: Start from original requirements and problems
3. **Stop and Discuss**: If motivation and goals are unclear, stop and discuss with the user
4. **Optimize Paths**: If the goal is clear but the current path isn't the shortest, suggest better alternatives

## Technology Stack (Based on Best Practices Research)

### Hosting Platform: GitHub Pages
- **Why**: Completely free, reliable, widely used in academia
- **Supports**: Custom domains, SSL certificates, Jekyll static site generator

### Static Site Generator: Jekyll
- **Why**: Native GitHub Pages support, no build time limits, large ecosystem
- **Alternative considered**: Hugo (faster builds but requires external CI/CD)

### Theme: al-folio or Academic Pages
- **Why**: Specifically designed for academics, professional appearance, responsive design
- **Features**: Publications list, CV integration, blog support, easy customization

## Deployment Strategy

1. **Repository Setup**: GitHub repository (user needs GitHub account)
2. **Theme Installation**: Clone academic template
3. **Configuration**: Minimal setup with placeholder content
4. **Deployment**: Push to GitHub, enable GitHub Pages
5. **URL**: `https://[username].github.io/[repo-name]` or custom domain

## Manual Steps Required from User

- Create GitHub account (if not exists)
- Provide GitHub username/email for git configuration
- Manual repository creation on GitHub (if preferred over command line)

## Future Enhancements (When User Ready)

- Custom domain setup (optional, domain purchase required)
- Content population (bio, publications, CV, etc.)
- Additional features (blog, contact form, analytics)
- SEO optimization

## Development Commands

Since this is a Jekyll site (to be set up), common commands will include:

```bash
# Install dependencies (requires Ruby and Bundler)
bundle install

# Run local development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

**Note**: Commands will be updated once the project structure is initialized.
