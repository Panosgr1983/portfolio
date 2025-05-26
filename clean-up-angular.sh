#!/bin/bash

# Αυτό το script διαγράφει αρχεία Angular από React/Vite project
# και αφαιρεί unused imports από App.tsx

set -e

# Βήμα 1: Διαγραφή Angular φακέλου
if [ -d "src/app" ]; then
  echo "🗑️ Διαγραφή Angular φακέλου: src/app"
  rm -rf src/app
else
  echo "✅ Ο φάκελος src/app δεν υπάρχει ήδη."
fi

# Βήμα 2: Διαγραφή reportWebVitals αν δεν χρησιμοποιείται
if [ -f "src/reportWebVitals.ts" ]; then
  echo "🗑️ Διαγραφή src/reportWebVitals.ts"
  rm src/reportWebVitals.ts
fi

# Βήμα 3: Καθαρισμός unused imports στο App.tsx
if [ -f "src/App.tsx" ]; then
  echo "🧹 Καθαρισμός imports στο App.tsx"
  sed -i '' '/FormEvent/d' src/App.tsx
  sed -i '' '/emailjs/d' src/App.tsx
  sed -i '' '/toast/d' src/App.tsx
  sed -i '' 's/ChevronRight, //g' src/App.tsx
  sed -i '' 's/, Send//g' src/App.tsx
fi

# Βήμα 4: Git stage και commit
read -p "Θέλεις να κάνω αυτόματο commit & push; (y/n): " confirm
if [[ $confirm == "y" ]]; then
  git add .
  git commit -m "🚮 Removed Angular code and cleaned App.tsx imports"
  git push origin main
  echo "🚀 Ολοκληρώθηκε το push!"
else
  echo "📝 Έγινε το staging. Κάνε χειροκίνητο commit/push αν θες."
fi