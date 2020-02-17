import React, { useState, useEffect, useCallback } from "react";
import { View, TextInput, Animated, Text } from "react-native";
import styles from "./styles";

const AnimatedInput = ({
  placeholder,
  errorText,
  valid,
  errorColor,
  disabled,
  value,
  prefix,
  sufix,
  styleInput,
  styleLabel,
  styleError,
  styleContent,
  styleBodyContent,
  ...others
}) => {
  const [showInput, setShowInput] = useState(false);
  const [showError, setShowError] = useState(false);
  const [animatedIsFocused] = useState(new Animated.Value(1));

  const inputFontSize = styleInput.fontSize || styles.input.fontSize;
  const labelFontSize = styleLabel.fontSize || styles.label.fontSize;
  const errorFontSize = styleError.fontSize || styles.error.fontSize;

  useEffect(() => {
    setShowError(!valid);
    if (value) {
      setShowInput(true);
    }
    if (value && !showInput) {
      startAnimation();
    }
    animationView();
  }, [
    valid,
    value,
    animationView,
    animationLabelFontSize,
    animatedIsFocused,
    startAnimation,
    showInput
  ]);

  const onBlur = () => {
    if (!value) {
      setShowInput(false);
      setShowError(false);
      startAnimation();
    }
  };

  const onFocus = () => {
    if (!showInput) {
      startAnimation();
    }
  };

  const borderColor = () => {
    const borderStyle = {};
    borderStyle.borderBottomColor =
      styleBodyContent.borderBottomColor ||
      styles.bodyContent.borderBottomColor;
    if (showError) {
      borderStyle.borderBottomColor = errorColor || "#d32f2f";
    }
    return borderStyle;
  };

  const setContentHeight = () => {
    const fontsHeight = labelFontSize + inputFontSize + errorFontSize;
    const internalVerticalSpaces = 16;
    return fontsHeight + internalVerticalSpaces;
  };

  const getErrorContentSpace = () => {
    return errorFontSize + 2;
  };

  const startAnimation = useCallback(() => {
    Animated.timing(animatedIsFocused, {
      toValue: showInput ? 1 : 0,
      duration: 150
    }).start(() => {
      if (!showInput) {
        setShowInput(true);
      }
    });
  }, [animatedIsFocused, showInput]);

  const animationView = useCallback(() => {
    const sizeShow = 15 + labelFontSize + inputFontSize;
    const sizeHide = 15 + labelFontSize;
    const inputAdjust = {
      height: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [sizeShow, sizeHide]
      })
    };
    return inputAdjust;
  }, [animatedIsFocused, inputFontSize, labelFontSize]);

  const animationLabelFontSize = useCallback(() => {
    const fontAdjust = {
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [labelFontSize, inputFontSize]
      })
    };
    return fontAdjust;
  }, [animatedIsFocused, inputFontSize, labelFontSize]);

  return (
    <View
      style={[styles.content, styleContent, { height: setContentHeight() }]}
    >
      <Animated.View
        style={[
          styles.bodyContent,
          styleBodyContent,
          borderColor(showError),
          { marginBottom: showError ? 0 : getErrorContentSpace() },
          animationView()
        ]}
      >
        <View style={{ flex: 1 }}>
          <Animated.Text
            style={[styles.label, styleLabel, animationLabelFontSize()]}
            onPress={() => !disabled && onFocus()}
          >
            {placeholder}
          </Animated.Text>
          {showInput && (
            <View style={styles.toucheableLineContent}>
              <>{prefix}</>
              <TextInput
                {...others}
                value={value}
                pointerEvents={disabled ? "box-none" : "auto"}
                selectionColor={styleInput.fontColor}
                autoFocus
                blurOnSubmit
                editable={!disabled}
                onBlur={() => onBlur()}
                style={[styles.input, styleInput]}
                onEndEditing={() => onBlur()}
              />
            </View>
          )}
        </View>
        <View style={styles.sufix}>{sufix}</View>
      </Animated.View>
      {showError && (
        <Text
          style={[
            styles.error,
            errorColor && { color: errorColor },
            styleError
          ]}
        >
          {errorText}
        </Text>
      )}
    </View>
  );
};

AnimatedInput.defaultProps = {
  valid: true,
  disabled: false,
  value: "",
  styleInput: {},
  styleBodyContent: {},
  styleLabel: {},
  styleError: {}
};

export default AnimatedInput;
