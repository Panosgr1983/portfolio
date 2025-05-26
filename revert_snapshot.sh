#!/bin/bash

# Ορισμός μεταβλητών
PROJECT_DIR="/path/to/your/project"
SNAPSHOT_FILE="/path/to/code_snapshot_20250521_235647.txt"
BACKUP_DIR="$PROJECT_DIR-backup-$(date +%Y%m%d%H%M%S)"

# Επιβεβαίωση
echo "ΠΡΟΣΟΧΗ: Αυτό θα διαγράψει τα τρέχοντα αρχεία του project και θα τα αντικαταστήσει από το snapshot."
read -p "Θέλεις να συνεχίσεις; (yes/no): " confirm

if [[ "$confirm" != "yes" ]]; then
  echo "Ακύρωση."
  exit 1
fi

# Δημιουργία backup των τρεχόντων αρχείων
echo "Δημιουργία backup στον φάκελο: $BACKUP_DIR"
cp -r "$PROJECT_DIR" "$BACKUP_DIR"

# Διαγραφή όλων των αρχείων του project
echo "Καθαρισμός τρέχοντος project directory..."
rm -rf "$PROJECT_DIR"/*

# Επαναφορά από το snapshot
echo "Αποσυμπίεση snapshot..."
mkdir -p "$PROJECT_DIR"
tail -n +2 "$SNAPSHOT_FILE" | base64 -d | tar -xz -C "$PROJECT_DIR"

echo "Επαναφορά snapshot ολοκληρώθηκε."