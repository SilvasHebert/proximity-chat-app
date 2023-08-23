import {TextInput as TextInputReact} from 'react-native';
import styled from 'styled-components/native';

import colors from '../colors';

export const TextInput = styled(TextInputReact).attrs({
  placeholderTextColor: colors.black,
})`
  background-color: ${colors.white};
  color: ${colors.black};
  border-radius: 12px;
  padding-left: 15px;
`;
