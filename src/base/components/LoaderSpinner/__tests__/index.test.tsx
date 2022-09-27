import React from 'react';
import renderer from 'react-test-renderer';

import LoaderSpinner from 'base/components/LoaderSpinner';

describe('The LoaderSpinner component', () => {
	it('should renders correctly', () => {
		const tsx = <LoaderSpinner />;
		const tree = renderer.create(tsx).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
