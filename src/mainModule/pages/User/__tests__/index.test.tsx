
import * as redux from 'react-redux';

jest.mock('react-redux');

describe('The Home component', () => {
  it('should create Home', () => {
    // jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({})
    //
    // const component = render(<Home/>)
    //
    // expect(component).toMatchSnapshot();

    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue({ username:'test' })
  });
});
