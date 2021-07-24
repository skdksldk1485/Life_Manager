import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { ObjectId } from 'mongodb';
import path from 'path';

import { UserResolver } from '../resolvers/UserResolver';
import { ObjectIdScalar } from './object-id.scalar';
import { TypegooseMiddleware } from '../middleware/typegoose';

// build TypeGraphQL executable schema
export default async function createSchema(): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    // 1. add all typescript resolvers
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    // 2. use document converting middleware to convert MongoDB documents into plain JS object
    globalMiddlewares: [TypegooseMiddleware],
    // 3. use ObjectId scalar mapping
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    validate: false,
  });
  return schema;
}
