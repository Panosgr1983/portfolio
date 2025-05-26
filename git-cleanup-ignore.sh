#!/bin/bash

# git-cleanup-ignore.sh
# Αφαιρεί από το Git όλα τα αρχεία που είναι στο .gitignore χωρίς να τα διαγράψει τοπικά.

echo "🧹 Ξεκινά καθαρισμός Git index για αρχεία στο .gitignore..."

# Αν δεν υπάρχει .gitignore, σταματά
if [ ! -f .gitignore ]; then
  echo "❌ Δεν βρέθηκε αρχείο .gitignore."
  exit 1
fi

# Διαβάζει γραμμή-γραμμή το .gitignore και αφαιρεί τα αρχεία από το Git index
while IFS= read -r pattern || [[ -n "$pattern" ]]; do
  # Αγνόησε σχόλια ή κενές γραμμές
  if [[ "$pattern" == "" || "$pattern" =~ ^# ]]; then
    continue
  fi

  # Εύρεση ταιριαστών αρχείων που είναι ήδη tracked
  tracked=$(git ls-files -- $pattern)
  if [[ "$tracked" != "" ]]; then
    echo "➖ Αφαίρεση: $pattern"
    git rm --cached -r $pattern 2>/dev/null
  fi

done < .gitignore


# Προειδοποίηση για νέα .env ή .sh αρχεία που δεν αγνοούνται
echo ""
echo "🔍 Έλεγχος για νέα .env ή .sh αρχεία που δεν είναι στο .gitignore..."

unignored=$(find . -type f \( -name "*.env" -o -name "*.sh" \) | grep -vFf .gitignore)

if [[ "$unignored" != "" ]]; then
  echo "⚠️  Προσοχή! Τα παρακάτω αρχεία πιθανώς δεν έχουν προστεθεί στο .gitignore:"
  echo "$unignored"
else
  echo "✅ Δεν εντοπίστηκαν νέα .env ή .sh αρχεία εκτός .gitignore."
fi

echo "✅ Ολοκληρώθηκε η αφαίρεση από το Git. Τώρα κάνε commit και push τις αλλαγές σου."
echo "👉 git commit -m 'Cleaned up ignored files' && git push origin main"
