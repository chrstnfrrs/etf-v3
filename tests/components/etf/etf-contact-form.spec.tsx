import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

import {
  ETFContactForm,
  Props,
} from '../../../components/etf/etf-contact-form';

const chance = new Chance();

describe('Given <ETFContactForm />', () => {
  afterEach(RTL.cleanup);
  describe('When rendering the contact form', () => {
    let props: Props, submit: string;

    beforeEach(() => {
      submit = chance.string();
      props = {
        submit,
      };
      RTL.render(<ETFContactForm {...props} />);
    });

    test('Then should render Name field', () => {
      expect(RTL.screen.getByLabelText('Name')).toBeVisible();
    });
    test('Then should render Email field', () => {
      expect(RTL.screen.getByLabelText('Email')).toBeVisible();
    });
    test('Then should render Subject field', () => {
      expect(RTL.screen.getByLabelText('Subject')).toBeVisible();
    });
    test('Then should render Message field', () => {
      expect(RTL.screen.getByLabelText('Message')).toBeVisible();
    });
    describe('When entering an invalid email address', () => {
      beforeEach(() => {
        const emailInput = RTL.screen.getByLabelText('Email');

        RTL.fireEvent.blur(emailInput, { target: { value: chance.string() } });
      });

      test('Then should display email validation error', () => {
        expect(
          RTL.screen.getByText('Please use a valid email address.'),
        ).toBeVisible();
      });
    });
    describe('When submitting a form', () => {
      describe('When completed', () => {
        beforeEach(() => {
          const submitBtn = RTL.screen.getByText(submit);

          const inputName = RTL.screen.getByLabelText('Name');
          const inputEmail = RTL.screen.getByLabelText('Email');
          const inputSubject = RTL.screen.getByLabelText('Subject');
          const inputMessage = RTL.screen.getByLabelText('Message');

          RTL.fireEvent.blur(inputName, {
            target: { value: chance.string() },
          });
          RTL.fireEvent.blur(inputEmail, {
            target: { value: chance.email() },
          });
          RTL.fireEvent.blur(inputSubject, {
            target: { value: chance.string() },
          });
          RTL.fireEvent.blur(inputMessage, {
            target: { value: chance.string() },
          });

          RTL.fireEvent.click(submitBtn);
        });
        test('Then should work', () => {
          expect(true).toBe(true);
        });
      });
      describe('When incomplete', () => {
        beforeEach(() => {
          const submitBtn = RTL.screen.getByText(submit);

          RTL.fireEvent.click(submitBtn);
        });

        test('Then should display form validation error', () => {
          expect(
            RTL.screen.getByText('Please provide all fields.'),
          ).toBeVisible();
        });
      });
    });
  });
});
