import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChatInput from './ChatInput';

describe('ChatInput Component', () => {
  it('should render ChatInput with the correct attributes', () => {
    const onSubmitChat = jest.fn();
    const setTextInput = jest.fn();
    const textInput = 'Hello, world!';
    const disabled = false;

    const { getByTitle, getByDisplayValue } = render(
      <ChatInput
        onSubmitChat={onSubmitChat}
        setTextInput={setTextInput}
        textInput={textInput}
        disabled={disabled}
      />
    );

    const textField = getByDisplayValue(textInput);
    const titleAttribute = getByTitle(disabled ? 'This function is disabled in SOLO' : 'Type to chat');

    expect(textField).toBeInTheDocument();
    expect(titleAttribute).toBeInTheDocument();

    expect(textField).toHaveProperty('disabled', disabled);
  });

  it('should call setTextInput on text input change', () => {
    const onSubmitChat = jest.fn();
    const setTextInput = jest.fn();
    const textInput = 'Hello, world!';
    const disabled = false;

    const { getByDisplayValue } = render(
      <ChatInput
        onSubmitChat={onSubmitChat}
        setTextInput={setTextInput}
        textInput={textInput}
        disabled={disabled}
      />
    );

    const textField = getByDisplayValue(textInput);

    fireEvent.change(textField, { target: { value: 'New text' } });

    expect(setTextInput).toHaveBeenCalledWith('New text');
  });

  it('should call onSubmitChat on key down', () => {
    const onSubmitChat = jest.fn();
    const setTextInput = jest.fn();
    const textInput = 'Hello, world!';
    const disabled = false;

    const { getByDisplayValue } = render(
      <ChatInput
        onSubmitChat={onSubmitChat}
        setTextInput={setTextInput}
        textInput={textInput}
        disabled={disabled}
      />
    );

    const textField = getByDisplayValue(textInput);

    fireEvent.keyDown(textField, { key: 'Enter', code: 'Enter' });

    expect(onSubmitChat).toHaveBeenCalled();
  });
});
