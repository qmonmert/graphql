## GraphQL

### Install

* npm install
* npm run dev:server

### Requests

http://localhost:4000/graphql

{
    activity(id: "1") {
        name,
        type,
        distance
	}
}

{
    activities {
        id,
        name,
        type,
        distance
    }
}

