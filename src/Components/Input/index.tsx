import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    width: 100%;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 40px;
    background-color: #333333;
`;
const InputField = Styled.TextInput`
    flex: 1;
    color: #FFFFFF;
`;

interface Props {
  value: string;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: Object;
  ClearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({
  value,
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  ClearMode,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        value={value}
        selectionColor="#FFFFFF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholderTextColor="#FFFFFF"
        placeholder={placeholder}
        clearButtonMode={ClearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;
