export * from 'react-router-dom';
export const useHistory = jest.fn(() => ({ push: jest.fn(), replace: jest.fn() }));
export const useLocation = jest.fn(() => ({ pathname: '/', search:'' }));
export const useParams = jest.fn(() => ({ page: '' }));
