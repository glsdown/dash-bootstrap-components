import React from 'react';
import {render} from '@testing-library/react';
import Collapse from '../Collapse';

jest.useFakeTimers();

describe('Collapse', () => {
  test('renders a div with class "collapse"', () => {
    const collapse = render(
      <Collapse>
        <div>Content</div>
      </Collapse>
    );

    expect(collapse.container.querySelector('div.collapse')).not.toBe(null);
  });

  test('renders its content', () => {
    const collapse = render(
      <Collapse>
        <div>Some collapse content</div>
      </Collapse>
    );

    expect(collapse.container).toHaveTextContent('Some collapse content');
  });

  test('can be collapsed with "is_open"', () => {
    const collapse = render(
      <Collapse is_open={false}>
        <div>Content</div>
      </Collapse>
    );
    expect(collapse.container.querySelector('div.collapse.show')).toBe(null);

    // toggle is_open, check for "collapsing" class
    collapse.rerender(
      <Collapse is_open>
        <div>Content</div>
      </Collapse>
    );
    expect(collapse.container.querySelector('div.collapsing')).not.toBe(null);
    jest.runAllTimers();

    expect(collapse.container.querySelector('div.collapse.show')).not.toBe(
      null
    );
  });
});
