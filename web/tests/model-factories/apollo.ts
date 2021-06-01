import * as Types from '../../types/index.d';

const createClient = (query?: Types.AllowAny): Types.Apollo.Client => ({
  query: query || jest.fn(),
});

export { createClient };
