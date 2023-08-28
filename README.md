La idea de este proyecto es llevar las finanzas personales de una manera mas ordenada y poder tener un control de los gastos e ingresos.

## Getting Started

Initialize the database:
```bash
 docker compose up -d
```

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Run in docker
Build image
```bash
docker build  --no-cache -t finanzas-personales .
```
Run image
```bash
docker run -p 8080:8080 finanzas-personales
```

Stop image
```bash
docker container stop finanzas-personales
```

# database
Generate migration
```bash
npx prisma migrate dev
```

# Generate docs
```bash
yarn next-swagger-doc-cli next-swagger-doc.json
```

