import React from 'react';
import * as RTL from '@testing-library/react';

import { AppMenu } from '../../components/AppMenu';

describe('<AppMenu />', () => {
  test('should do a thing', () => {
    const result = RTL.render(<AppMenu />);

    expect(result).toBeDefined();
  });
});
