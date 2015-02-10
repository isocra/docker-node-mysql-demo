### Docker Node Mysql demo app

Demo of how to setup a nodejs app and mysql db services using docker+fig.

#### Getting started

- Clone project and cd into it
- Install [docker](http://docker.io)
- Install [fig](http://fig.sh)
- Copy yur sql dump to `lib/db/dump.sql` path.
- If using boot2docker, sync guest clock with:

```
  /usr/local/bin/boot2docker ssh sudo ntpclient -s -h pool.ntp.org
```

- Run `make`.
- Visit app on port 5000.
- Enter your db name to list its tables.
- The database data is contained in a db container that can be periodically backed up to s3 and then restored when needed using a tool like [docker-infra/docker-backup](https://github.com/docker-infra/docker-backup).
