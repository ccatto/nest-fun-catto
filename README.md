# nest-fun-catto

nest-fun-catto

# Nest Fun

#### Create date Jan 7th 2025

## This app is a simple Nest.js app with GraphQL & Prisma where it has a working sample model with a resolver && mutation;

packages:
* GraphQL using @nestjs/graphql and @apollo/server
* Prisma ORM with PostgreSQL configuration
* TypeScript configuration
* ESLint with recommended rules
* Prettier for code formatting
* Jest for testing
* DayJS for date handling

Steps to get it running:
1. Update .env file to add postgresql db connection string;
2. yarn install
3. npx prisma generate
4. npx prisma db push
5. yarn start ( || npm run start:dev )

Then in nest playground in a browser we can hit: http://localhost:3000/graphql

Query for team:

```prisma
query {
  teams {
    id
    name
    color
    createdAt
    updatedAt
  }
}
```

Team mutations:

```prisma
mutation {
  createTeam(input: { name: "Red Team", color: "#FF0000" }) {
    id
    name
    color
  }
}

mutation {
  updateTeam(id: 1, input: { name: "Blue Team", color: "#0000FF" }) {
    id
    name
    color
  }
}
```
