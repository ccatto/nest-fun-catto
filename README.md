# nest-fun-catto
nest-fun-catto

# Nest Fun 

#### Create date Jan 7th 2025 

packages:
GraphQL using @nestjs/graphql and @apollo/server
Prisma ORM with PostgreSQL configuration
TypeScript configuration
ESLint with recommended rules
Prettier for code formatting
Jest for testing
DayJS for date handling

todo to get it running:

update .env file to add postgresql db connection string;

yarn install
npx prisma generate
npx prisma db push

npm run start:dev

query for team:
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

team mutations:
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

