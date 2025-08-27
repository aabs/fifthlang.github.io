# Fifth Programming Language GitHub Pages Site

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

This is a simple Jekyll/GitHub Pages site for the Fifth Programming Language documentation. The site contains a single index.md file with basic language overview and uses the Jekyll static site generator with the minima theme.

### Bootstrap, build, and serve the repository:
- `sudo gem install jekyll bundler` -- Install Jekyll and bundler (takes ~21 seconds). NEVER CANCEL.
- `sudo bundle install` -- Install dependencies (takes ~2 seconds with cached gems, up to 30 seconds fresh). NEVER CANCEL.
- `bundle exec jekyll build` -- Build the site (takes ~0.5 seconds). Site output goes to `_site/` directory.
- `bundle exec jekyll serve --host 0.0.0.0 --port 4000` -- Serve locally for development (starts in ~0.1 seconds).

### Development workflow:
- ALWAYS run the bootstrapping steps first before making any changes.
- Run `bundle exec jekyll serve --host 0.0.0.0 --port 4000 --detach` to start development server in background.
- Site will be available at `http://localhost:4000`.
- Stop server with `pkill -f jekyll`.
- No separate test suite exists - validation is done by building and serving the site.

## Validation

- ALWAYS manually validate any changes by visiting `http://localhost:4000` after starting the development server.
- ALWAYS verify the site builds without errors using `bundle exec jekyll build`.
- Take a screenshot of the site to verify content displays correctly.
- Check that all markdown content renders properly as HTML.
- Verify Jekyll processes the index.md file (it should generate index.html in _site/).

## Common tasks

The following are outputs from frequently run commands. Reference them instead of viewing, searching, or running bash commands to save time.

### Repository structure
```
.
├── .git/
├── .github/
│   ├── workflows/
│   │   └── blank.yml          # Basic CI workflow (just prints "Hello, world!")
│   └── copilot-instructions.md
├── .gitignore                 # Excludes _site/, .vs/ files, Jekyll cache
├── CNAME                      # Domain: fifthlang.github.io
├── index.md                   # Main content file
├── _config.yml                # Jekyll configuration
├── Gemfile                    # Ruby dependencies
├── Gemfile.lock              # Locked dependency versions
└── _site/                    # Generated site (excluded from git)
```

### Key files content

#### _config.yml
```yaml
title: The Fifth Programming Language
email: your-email@domain.com
description: Fifth is a small, general purpose language designed to make working with RDF knowledge graphs easier.
baseurl: ""
url: "https://fifthlang.github.io"

# Build settings
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
```

#### Gemfile
```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.4.1"
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end
```

#### index.md structure
- Front matter: `---\nlayout: default\n---`
- Heading: "# The Fifth Programming Language"
- Badge images for GitHub stats
- Description of Fifth as RDF knowledge graph language
- ".NET runtime" compatibility info
- Links to Download, Docs, Language Specification (currently placeholder #)
- "Fifth in a Nutshell" section with bullet points

### Common command outputs

#### `bundle exec jekyll build`
```
Configuration file: /path/to/_config.yml
            Source: /path/to/repo
       Destination: /path/to/repo/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
       Jekyll Feed: Generating feed for posts
[... Sass deprecation warnings ...]
                    done in 0.069 seconds.
```

#### `bundle exec jekyll serve`
```
Configuration file: /path/to/_config.yml
            Source: /path/to/repo
       Destination: /path/to/repo/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
       Jekyll Feed: Generating feed for posts
[... Sass deprecation warnings ...]
                    done in 0.08 seconds.
 Auto-regeneration: enabled for '/path/to/repo'
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.
```

## Troubleshooting

### Permissions issues
- If `gem install` fails with permission errors, use `sudo gem install jekyll bundler`.
- If `bundle install` fails with permission errors, use `sudo bundle install`.
- Bundler may warn "Don't run Bundler as root" but will work correctly.

### Site not rendering markdown
- Ensure index.md has proper front matter:
  ```yaml
  ---
  layout: default
  ---
  ```
- Verify `bundle exec jekyll build` generates index.html in _site/ directory.

### Build warnings
- Sass deprecation warnings about @import and color functions are expected and harmless.
- These warnings come from the minima theme and do not affect functionality.

### Port conflicts
- If port 4000 is in use, Jekyll will automatically try 4001, 4002, etc.
- Or specify a different port: `bundle exec jekyll serve --port 4001`.

## CI/CD Information

- Current CI workflow (`.github/workflows/blank.yml`) only prints "Hello, world!" and does not build or deploy the site.
- GitHub Pages automatically builds and deploys Jekyll sites from the repository without additional CI needed.
- The site is deployed to https://fifthlang.github.io via GitHub Pages.

## Important Notes

- **NEVER CANCEL** build or serve commands - they complete very quickly (under 1 second for builds).
- This is a documentation site, not an application - no complex build processes or long-running tests.
- Changes to content are immediately visible after Jekyll regenerates (with `--watch` enabled).
- The _site/ directory is excluded from git and regenerated on each build.
- All timing estimates are based on validated measurements in a standard Linux environment.