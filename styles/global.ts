import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';

export default createGlobalStyle`
    ${normalize}

    body {
        background-color: ${(props) => props.theme.background.color};
        color: white;

        font-size: 16px;
    }
`;
