var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","pathMatch":"full","component":"HomeComponent"},{"path":"auth","loadChildren":"./features/auth/auth.module#AuthModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"login","canActivate":["isGuestGuard"],"component":"LoginComponent"},{"path":"register","canActivate":["isGuestGuard"],"component":"RegisterComponent"},{"path":"profile","canActivate":["isLoggedGuard"],"component":"ProfileComponent"}],"kind":"module"}],"module":"AuthModule"}]},{"path":"players","loadChildren":"./features/players/players.module#PlayersModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/players/players-routing.module.ts","module":"PlayersRoutingModule","children":[{"path":"","pathMatch":"full","component":"CatalogComponent"},{"path":"search","component":"SearchComponent"},{"path":"add","canActivate":["isLoggedGuard"],"component":"CreateComponent"},{"path":"details/:playerId","component":"DetailsComponent"},{"path":"edit/:playerId","canActivate":["isLoggedGuard"],"component":"EditComponent"}],"kind":"module"}],"module":"PlayersModule"}]},{"path":"**","component":"NotFoundComponent"}],"kind":"module"}]}
