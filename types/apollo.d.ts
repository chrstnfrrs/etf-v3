import { AllowAny } from './index.d';

type Client = {
  query: (input: AllowAny) => AllowAny;
};

export { Client };
