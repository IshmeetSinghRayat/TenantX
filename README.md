# TenantX

Multi tenant event driven SAAS platform

Tech stack: 
1. TypeScript: Core language with functional libraries like fp-ts.
2. GraphQL: API to handle CQRS.
3. Kafka: Event streaming for ES.
4. Kubernetes & Docker: For managing microservices.
5. Postgres: Storing event logs and querying read models.
6. Microservices Architecture: Breaking down by domains and isolating logic.

Multiple Microservices are created in different folders, I will be using Docker to containerize these services and Kubernetes to orchestrate them.

Vision:

Each service will follow the functional programming principles and leverage event sourcing for state changes, with Kafka facilitating communication.
