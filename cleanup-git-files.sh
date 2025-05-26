#!/bin/bash

# 🔍 Εντοπίζει .env και .sh αρχεία που έχουν γίνει commit αλλά πλέον είναι στο .gitignore
FILES_TO_REMOVE=$(git ls-files | grep -E '(\.env$|\.sh$)' | tr '\n' '\0')

if [ -z "$FILES_TO_REMOVE" ]; then
  echo "✅ Δεν βρέθηκαν αρχεία .env ή .sh υπό παρακολούθηση στο Git."
  exit 0
fi

# ⚠️ Προειδοποίηση
echo "❗ Θα αφαιρεθούν από το Git τα εξής αρχεία χωρίς να τα διαγράψει τοπικά:"
echo "$FILES_TO_REMOVE"

read -p "Θέλεις να συνεχίσω; (y/n): " CONFIRM
if [[ "$CONFIRM" != "y" ]]; then
  echo "❌ Ακυρώθηκε."
  exit 1
fi

# 🚫 Αφαίρεση από το Git (όχι τοπικά)
if ! printf "%s" "$FILES_TO_REMOVE" | xargs -0 git rm --cached; then
  echo "❌ Κάτι πήγε στραβά κατά την αφαίρεση των αρχείων."
  exit 1
fi

# ✅ Επιβεβαίωση
echo "✅ Τα αρχεία αφαιρέθηκαν από το Git index. Μην ξεχάσεις να κάνεις commit & push."
echo "👉 git commit -m 'Remove sensitive files from git tracking'"
echo "👉 git push origin main"