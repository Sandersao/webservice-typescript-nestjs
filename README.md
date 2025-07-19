### About
- A webservice skeleton for webservice API created in typescript and nest

### Milestones

- [X] Configuração do nest
- [X] Resgate de env
- [X] Config handdler implementing as adapter
- [X] Swagger setup
- [X] Database connection via typeorm
- [X] Basic business structure enhanciment
- [X] First interligation of repository, business and controller
- [X] Create default response body
- [X] Create folder for response objects
- [X] Create folder for request objects
- [X] Create error handler structure
- [X] Auto transform text structure in order to transform text to, upper, lower and only first upper to use for database case insentive querys and defaulting
- [X] Create a working example for array receive and use in query
- [X] Create one to many relationship example
- [X] Create logic excusion segregated strutcture
    - Must vigor in a separated table/entity
    - Must have the exclusion date
- [X] Create Data field for the migration with ansi default
- [X] Move the model structre from out of the repository and let it it in the src
- [X] Move the request and response from out of the controler and let them in the src
- [ ] Create example for filter min and max value
    - It could be based on procudct min and max filter
- [ ] Creation on data system
    - [ ] Must have the validation for array value
        - It must be the helper funcion for intercept primitive values and convert them to array, like it's done on the request transformation of id to array
    - [ ] Must be able to join structures based on callback logic
    - [ ] Must have left join method
    - [ ] Can have, inner, right joins method
    - [ ] Can be a new cass in system module
- [ ] Understand why the tests ar not working and find the best way to make them work