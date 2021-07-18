## Basic configuration
```
config
|-- api.js
|-- db.js
|-- index.js
```

Common db config:
```javascript
// config/db.js
module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    database: 'c3',
  },
  ...
}
```

api config:
```javascript
// config/api.js
module.exports = {
	port: '3000',
  ...
}
```

Result will be
```javascript
module.exports = {
  api: {
  	port: '3000',
    ...
  },
	db: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'c3',
    },
    ...
  }
}
```

## Overwriting config using environment variables


Naming convention:

```
CNFG_DB__CONNECTION__HOST=db.example.com
```
it will set ```db.connection.host``` to ```db.example.com```

So we can overwrite any parameters

```
CNFG_DB__CONNECTION__HOST=db.example.com:CNFG_DB__CONNECTION__PORT=7777;
```
