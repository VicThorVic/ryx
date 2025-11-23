#!/bin/bash

# Generează un timestamp readable: YYYY-MM-DD-HHMM (ex: 2025-11-23-2215)
VERSION=$(date +%Y-%m-%d-%H:%M)

# Actualizează versiunile în index.html (potrivește orice după v=)
sed -i.bak "s|style\.css?v=[0-9N-]*|style.css?v=$VERSION|" index.html
sed -i.bak "s|script\.js?v=[0-9N-]*|script.js?v=$VERSION|" index.html

# Șterge backup-ul
rm -f index.html.bak

echo "✅ Versiuni actualizate la: $VERSION"
