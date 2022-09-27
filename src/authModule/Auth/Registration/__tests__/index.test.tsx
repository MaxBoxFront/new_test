import React from 'react';
import * as redux from "react-redux";

jest.mock("react-redux", () => ({
	useSelector: jest.fn(fn => fn()),
}));

describe('The Registration component', () => {
	it('renders correctly', () => {

		const spy = jest.spyOn(redux, 'useSelector')
		spy.mockReturnValue({ username:'' })
	});
});