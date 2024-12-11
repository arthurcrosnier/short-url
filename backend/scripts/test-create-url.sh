# URL valide - devrait marcher
curl -X POST http://localhost:3000/shortener \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "https://www.example.com"}' \
  | json_pp

# URL invalide - devrait échouer
curl -X POST http://localhost:3000/shortener \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "test"}' \
  | json_pp