import { FieldResolveInput } from 'stucco-js';
import { resolverFor } from '../zeus';

export const handler = async (input: FieldResolveInput) =>
  resolverFor('Query', 'pipe', async (args) => {
    return {};
  })(input.arguments);
