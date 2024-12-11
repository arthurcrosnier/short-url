# scripts/test-create-url.sh

curl -X POST http://localhost:3000/shortener \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "https://www.example.com/very/long/url"}' \
  | json_pp