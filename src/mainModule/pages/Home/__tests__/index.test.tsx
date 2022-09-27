import * as redux from 'react-redux';

jest.mock('react-redux');

describe('The Home component', () => {
  it('should create Home', () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ users:'users' })
  });
});
