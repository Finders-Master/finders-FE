import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const ProviderMock = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

export default ProviderMock;
