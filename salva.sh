#!/bin/bash

echo "🧠 Aggiungo tutte le modifiche..."
git add .

echo "📝 Inserisci un messaggio per il commit:"
read MESSAGGIO

git commit -m "$MESSAGGIO"

echo "🚀 Invio su GitHub..."
git push

echo "✅ Sito aggiornato!"