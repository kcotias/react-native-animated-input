
type ViewStyle = import('react-native').ViewStyle
type TextInputProps = import('react-native').TextInputProps
type StyleProp<T> = import('react-native').StyleProp<T>
type TextStyle = import('react-native').TextStyle

type AnimatedInputProps = {
  /**
   * Shows or hides the error text and color
   * @defaultValue true
   */
  valid?: boolean

  /**
   * Sets the error text to be displayed
   */
  errorText?: string

  /**
   * Sets the color of the error highlight
   * @defaultValue 'red'
   */
  errorColor?: string

  /**
   * Defines the placeholder text to be shown and animated when onFocus
   */
  placeholder: string

  /**
   * Lock or unlock text input
   * @defaultValue false
   */
  disabled?: boolean

  /**
   * Defines the value of the input
   */
  value?: string

  /**
   * Works exactly as TextInput/ component callback function that will handle the text input
   */
  onChangeText?: (t: string) => void

  /**
   * Renders the component on the beginning of the input
   * @example R$ -> R$ 200,00
   */
  prefix?: JSX.Element

  /**
   * Renders the component on the end of the input
   * @example Kg -> 200Kg
   */
  sufix?: JSX.Element

  /**
   * Any other prop of the TextInput/ component can be used and will work properly
   */
  others?: TextInputProps

  /**
   * Customizes the component main View
   */
  styleContent?: StyleProp<ViewStyle>

  /**
   * Customizes the TextInput component
   */
  styleInput?: StyleProp<TextStyle>

  /**
   * Customizes the error to be shown
   */
  styleError?: StyleProp<TextStyle>

  /**
   * Customizes the label/placeholder of the input
   */
  styleLabel?: StyleProp<TextStyle>

  /**
   * Customizes the view that manage the component composition - sufix, prefix, animated
   */
  styleBodyContent?: StyleProp<ViewStyle>
}

export default function AnimatedInput(props: AnimatedInputProps): JSX.Element

