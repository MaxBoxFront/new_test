import React from 'react';
import renderer from 'react-test-renderer';

import { Input } from 'base/components/Input';

describe('The Input component', () => {
	it('should renders correctly', () => {
		const tsx = (<Input name="email"
												value=''
												label=""
												placeholder="Email"
												onChange={() => {}}
												fluid />);
		const tree = renderer
			.create(tsx)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
