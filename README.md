# Student Portal

## Development Setup

1. Copy `.env.dist` to your own `.env` and change the following values:

* `API_BASE_URL`: Base url of our API server

2. Create your own `db.json` with a section for the following:

* `students`

3. Install all packages based on the `pacakge.json`:

```
npm install
```

3. To run the application server:

```
npm run start
```

4. To run the mock backend:

```
npm run mock-server
```