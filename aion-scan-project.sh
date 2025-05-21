#!/bin/bash

# Ρυθμίσεις
ROOT_DIR=$(pwd)
OUTPUT_FILE="$ROOT_DIR/project-root-structure.txt"
SNAPSHOT_FILE="$ROOT_DIR/code_snapshot_$(date +"%Y%m%d_%H%M%S").txt"

# Βαθός σάρωσης
MAX_DEPTH=10

# Εμφάνιση δομής
echo "🔍 Σάρωση δομής στον φάκελο: $ROOT_DIR (μέχρι βάθος $MAX_DEPTH)"
echo "📄 Εξαγωγή σε: $OUTPUT_FILE"
tree -L $MAX_DEPTH -I 'node_modules|.git|.next|dist|.turbo' "$ROOT_DIR" > "$OUTPUT_FILE"
echo "✅ Ολοκληρώθηκε! Το αρχείο δημιουργήθηκε: $OUTPUT_FILE"

# Εξαγωγή snapshot με κώδικα
echo "📦 Εξαγωγή snapshot για αρχεία κώδικα..."
find "$ROOT_DIR" \
  -type f \( -iname "*.js" -o -iname "*.ts" -o -iname "*.tsx" -o -iname "*.jsx" -o -iname "*.html" -o -iname "*.json" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/.git/*" \
  ! -path "*/.next/*" \
  ! -path "*/dist/*" \
  ! -path "*/.turbo/*" \
  -exec echo "====== {} ======" \; -exec cat {} \; > "$SNAPSHOT_FILE"

echo "✅ Ο κώδικας εξήχθη στο αρχείο: $SNAPSHOT_FILE"