import React from 'react';
import { render } from '@testing-library/react';

import { AppMenu } from '../../components/App/AppMenu';

describe('<AppMenu />', () => {
  test('should do a thing', () => {
    const result = render(<AppMenu />);

    expect(result).toBeDefined();
  });
});
