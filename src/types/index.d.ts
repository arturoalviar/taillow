export interface ShowcaseOptions {
  currentTheme: string
  themeOptions: ThemeOptions
}

export interface ButtonStyles {
  [key: string]: ButtonStyle
}

export interface GradientStyles {
  [key: string]: GradientStyle
}

export interface ButtonStyle {
  bg: string
  text: string
  border?: string
  hoverBg?: string
  hoverText?: string
  focusBg?: string
  focusText?: string
}

export interface GradientStyle {
  from: string
  to: string
  direction?: string
  via?: string
  text?: string
  hoverDirection?: string
  hoverVia?: string
  hoverFrom?: string
  hoverTo?: string
}

export interface InputStyle {
  bg: string
  border?: string
  text?: string
  placeholder?: string
}

export interface GenericStyles {
  [key: string]: string
}

export interface ThemeOption {
  name: string
  bg: GenericStyles
  text: GenericStyles
  borders: GenericStyles
  rings: GenericStyles
  skeletons: GenericStyles
  buttons: ButtonStyles
  gradients: GradientStyles
  input: InputStyle
}

export interface ThemeOptions {
  [key: string]: ThemeOption
}
