import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from 'base/components/Button';

describe('The Button component', () => {
	it('should renders correctly', () => {
		const tsx = (<Button />);
		const tree = renderer
			.create(tsx)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
