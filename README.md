# iotColoradoRegistration

For environment variables normally set through dotenv locally, set Heroku variables in Config Vars on Heroku.

Do not put the mongodb url in quotes. Var is read as string.

Use process.env.MONGO_URL to access the Var.

Use the Mongo 3.4 driver connection string syntax NOT the SRV.

TODO: add protected route for member table
