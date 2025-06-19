# Kolmogorov Complexity Interactive Ebook

This project contains a bilingual (English/Japanese) interactive ebook teaching Kolmogorov complexity.
It uses MkDocs Material with JupyterLite for executable Python snippets, MathJax for LaTeX-rendered math, and embedded quiz analytics sent to Supabase.

## Prerequisites

- Python 3.7+
- Node.js (for JupyterLite build)

## Setup

1. Clone this repository.
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Build the site:
   ```bash
   mkdocs build
   ```
4. Serve locally:
   ```bash
   mkdocs serve
   ```

## Supabase Quiz Analytics

Replace `<YOUR_SUPABASE_URL>` and `<YOUR_SUPABASE_ANON_KEY>` in `docs/js/quiz_analytics.js` with your Supabase project details (for example, project "Untitled-2").

Create a table `quiz_responses` with columns:
- `quiz_id` (text)
- `response` (json)
- `timestamp` (timestamptz)