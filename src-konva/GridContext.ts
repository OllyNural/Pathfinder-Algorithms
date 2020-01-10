import { createContext } from 'react';

type GridItem = 0 | 1 | 2 | 3;
export default createContext<GridItem>(0);
