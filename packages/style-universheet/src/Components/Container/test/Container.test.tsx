import { render } from '@testing-library/preact';

import { Container } from '..';

describe('Container', () => {
    test('should display initial Container', () => {
        const { container } = render(<Container>container content Text</Container>);

        expect(container.textContent).toMatch('container content Text');
    });
});
