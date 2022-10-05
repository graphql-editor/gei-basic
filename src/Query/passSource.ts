import { FieldResolveInput } from 'stucco-js';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Query', 'passSource', async (args) => {
    return input.source;
  })(input.arguments);
