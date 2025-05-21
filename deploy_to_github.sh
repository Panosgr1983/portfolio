
#!/bin/bash
cd /Users/panagiotischoliasmenos/portfolio-main

# Initialize git if not already a repository
if [ ! -d ".git" ]; then
  git init
fi

# Add all changes
git add .

# Commit changes
git commit -m "Initial commit for deployment"

# Add remote if not set
if ! git remote | grep origin; then
  git remote add origin https://github.com/Panosgr1983/portfolio.git
fi

# Push to main
git branch -M main
git push -u origin main
