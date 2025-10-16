# 🎯 QuoteSphere – Random Quote Generator API

A lightweight and fun open-source API that returns random inspirational, humorous, or programming quotes in JSON format.

---

## 🚀 Features
- Get a random quote (`/api/random`)
- Filter quotes by category (`/api/category/:name`)
- JSON-based data (no database needed)
- Perfect for Hacktoberfest contributions

---

## 🧠 Example Usage

### 🔹 Random Quote
**GET** `/api/random`

```json
{
  "quote": "Code is like humor. When you have to explain it, it’s bad.",
  "author": "Cory House",
  "category": "programming"
}


git clone https://github.com/YOUR-USERNAME/QuoteSphere.git
cd QuoteSphere
npm install
npm run start
