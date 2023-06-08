import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import "reflect-metadata";
import { createConnection, Connection, getRepository } from "typeorm";
import { User } from './app/entities/user';

const connection = await createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your-db-username",
  password: "your-password",
  database: "your-db",
  entities: ["entities/*.js"]
});
const repository = getRepository(User);
const user = new User();
user.name = "Troy";
user.email = "troy@sololearn.com";
user.age = 25;
await repository.save(user);
const results = await repository.find({where: {name: "Troy"}});
const result = await repository.findOne({where: {name: "Troy"}});
const myUser = await repository.findOne({where: {name: "Troy"}});
console.log(result, results, myUser)
// myUser.email = "t@sololearn.com";
// await repository.save(myUser);
// const myUser = await repository.findOne({where: {name: "Troy"}});
// await repository.delete(myUser.id);
// await repository.delete({name: "Troy"});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
