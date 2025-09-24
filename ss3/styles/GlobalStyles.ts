import { StyleSheet, Platform } from 'react-native';

// ===== THEME COLORS =====
export const lightColors = {
  // Primary Colors
  primary: '#3b82f6',
  primaryDark: '#2563eb',
  primaryLight: '#60a5fa',
  
  // Secondary Colors
  secondary: '#6b7280',
  secondaryDark: '#4b5563',
  secondaryLight: '#9ca3af',
  
  // Background Colors
  background: '#ffffff',
  backgroundSecondary: '#f8fafc',
  surface: '#ffffff',
  surfaceSecondary: '#f9fafb',
  
  // Text Colors
  text: {
    primary: '#000000',
    secondary: '#6b7280',
    tertiary: '#9ca3af',
    inverse: '#ffffff',
    placeholder: '#999999',
  },
  
  // Status Colors
  success: '#059669',
  successLight: '#d1fae5',
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  error: '#ef4444',
  errorLight: '#fee2e2',
  info: '#3b82f6',
  infoLight: '#dbeafe',
  
  // Border Colors
  border: '#d1d5db',
  borderLight: '#e5e7eb',
  borderDark: '#9ca3af',
  
  // Shadow Colors
  shadow: '#000000',
  
  // Platform Specific
  header: {
    ios: '#ffffff',
    android: '#007AFF',
  },
  
  // Social Colors
  facebook: '#1877f2',
  google: '#db4437',
  apple: '#000000',
} as const;

export const darkColors = {
  // Primary Colors
  primary: '#60a5fa',
  primaryDark: '#3b82f6',
  primaryLight: '#93c5fd',
  
  // Secondary Colors
  secondary: '#9ca3af',
  secondaryDark: '#6b7280',
  secondaryLight: '#d1d5db',
  
  // Background Colors
  background: '#000000',
  backgroundSecondary: '#111827',
  surface: '#1f2937',
  surfaceSecondary: '#374151',
  
  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: '#d1d5db',
    tertiary: '#9ca3af',
    inverse: '#000000',
    placeholder: '#6b7280',
  },
  
  // Status Colors
  success: '#10b981',
  successLight: '#064e3b',
  warning: '#f59e0b',
  warningLight: '#451a03',
  error: '#ef4444',
  errorLight: '#7f1d1d',
  info: '#3b82f6',
  infoLight: '#1e3a8a',
  
  // Border Colors
  border: '#374151',
  borderLight: '#4b5563',
  borderDark: '#1f2937',
  
  // Shadow Colors
  shadow: '#000000',
  
  // Platform Specific
  header: {
    ios: '#1f2937',
    android: '#1f2937',
  },
  
  // Social Colors
  facebook: '#1877f2',
  google: '#db4437',
  apple: '#ffffff',
} as const;

// Default colors (light theme)
export const COLORS = lightColors;

// ===== FONT_SIZES =====
export const FONT_SIZES = {
  // Text Sizes
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
  
  // Semantic Sizes
  caption: 12,
  body: 16,
  bodySmall: 14,
  title: 20,
  titleLarge: 24,
  titleXLarge: 28,
  heading: 32,
  display: 36,
  
  // Platform Specific
  header: {
    ios: 17,
    android: 20,
  },
  
  // Button Sizes
  button: {
    small: 14,
    medium: 16,
    large: 18,
  },
  
  // Input Sizes
  input: {
    small: 14,
    medium: 16,
    large: 18,
  },
} as const;

// ===== SPACING =====
export const SPACING = {
  // Base Spacing (4px grid)
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
  
  // Semantic Spacing
  padding: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  margin: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  // Component Specific
  card: {
    padding: 16,
    margin: 8,
  },
  
  screen: {
    horizontal: 16,
    vertical: 20,
  },
  
  section: {
    marginBottom: 24,
  },
  
  // Platform Specific
  header: {
    ios: 20,
    android: 0,
  },
} as const;

// ===== CONTAINER_STYLES =====
export const CONTAINER_STYLES = StyleSheet.create({
  // Screen Containers
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  screenWithHeader: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  // Content Containers
  content: {
    flex: 1,
    paddingHorizontal: SPACING.screen.horizontal,
  },
  
  contentCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.screen.horizontal,
  },
  
  // Card Containers
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.card.padding,
    margin: SPACING.card.margin,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  cardLarge: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.lg,
    margin: SPACING.md,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  
  // Form Containers
  form: {
    width: '100%',
  },
  
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING['2xl'],
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  
  // Section Containers
  section: {
    marginBottom: SPACING.section.marginBottom,
    paddingHorizontal: SPACING.screen.horizontal,
  },
  
  // Row/Column Containers
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  columnCentered: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Scroll Containers
  scrollView: {
    flex: 1,
  },
  
  scrollViewContent: {
    paddingVertical: SPACING.screen.vertical,
  },
  
  // Platform Specific
  header: Platform.select({
    ios: {
      backgroundColor: COLORS.header.ios,
      paddingTop: SPACING.header.ios,
      paddingBottom: SPACING.lg,
      borderBottomWidth: 0.5,
      borderBottomColor: COLORS.borderLight,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 0,
    },
    android: {
      backgroundColor: COLORS.header.android,
      paddingTop: 0, // Will be handled by StatusBar
      paddingBottom: SPACING.lg,
      elevation: 4,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    default: {
      backgroundColor: COLORS.header.android,
      paddingTop: SPACING.xl,
      paddingBottom: SPACING.lg,
    }
  }),
} as const)

// ===== TYPOGRAPHY_STYLES =====
export const TYPOGRAPHY_STYLES = StyleSheet.create({
  // Headings
  h1: {
    fontSize: FONT_SIZES['4xl'],
    fontWeight: 'bold',
    color: COLORS.text.primary,
    lineHeight: 40,
  },
  
  h2: {
    fontSize: FONT_SIZES['3xl'],
    fontWeight: 'bold',
    color: COLORS.text.primary,
    lineHeight: 36,
  },
  
  h3: {
    fontSize: FONT_SIZES['2xl'],
    fontWeight: '600',
    color: COLORS.text.primary,
    lineHeight: 32,
  },
  
  h4: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '600',
    color: COLORS.text.primary,
    lineHeight: 28,
  },
  
  // Body Text
  body: {
    fontSize: FONT_SIZES.body,
    color: COLORS.text.primary,
    lineHeight: 24,
  },
  
  bodySmall: {
    fontSize: FONT_SIZES.bodySmall,
    color: COLORS.text.secondary,
    lineHeight: 20,
  },
  
  caption: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.text.tertiary,
    lineHeight: 16,
  },
  
  // Button Text
  button: {
    fontSize: FONT_SIZES.button.medium,
    fontWeight: '600',
    color: COLORS.text.inverse,
  },
  
  buttonSmall: {
    fontSize: FONT_SIZES.button.small,
    fontWeight: '500',
    color: COLORS.text.inverse,
  },
  
  buttonLarge: {
    fontSize: FONT_SIZES.button.large,
    fontWeight: '600',
    color: COLORS.text.inverse,
  },
  
  // Input Text
  input: {
    fontSize: FONT_SIZES.input.medium,
    color: COLORS.text.primary,
  },
  
  inputLabel: {
    fontSize: FONT_SIZES.bodySmall,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  
  inputPlaceholder: {
    fontSize: FONT_SIZES.input.medium,
    color: COLORS.text.placeholder,
  },
  
  // Status Text
  success: {
    fontSize: FONT_SIZES.bodySmall,
    color: COLORS.success,
    fontWeight: '500',
  },
  
  error: {
    fontSize: FONT_SIZES.bodySmall,
    color: COLORS.error,
    fontWeight: '500',
  },
  
  warning: {
    fontSize: FONT_SIZES.bodySmall,
    color: COLORS.warning,
    fontWeight: '500',
  },
} as const);

// ===== BUTTON_STYLES =====
export const BUTTON_STYLES = StyleSheet.create({
  // Primary Button
  primary: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
  primaryPressed: {
    backgroundColor: COLORS.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  
  // Secondary Button
  secondary: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  secondaryPressed: {
    backgroundColor: COLORS.backgroundSecondary,
    transform: [{ scale: 0.98 }],
  },
  
  // Text Button
  text: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  
  // Sizes
  small: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
  },
  
  medium: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  
  large: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
  },
} as const);

// ===== INPUT_STYLES =====
export const INPUT_STYLES = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
  },
  
  label: {
    fontSize: FONT_SIZES.bodySmall,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    fontSize: FONT_SIZES.input.medium,
    backgroundColor: COLORS.surfaceSecondary,
    color: COLORS.text.primary,
  },
  
  inputFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.surface,
  },
  
  inputError: {
    borderColor: COLORS.error,
    backgroundColor: COLORS.errorLight,
  },
  
  errorText: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.error,
    marginTop: SPACING.xs,
  },
} as const);

// ===== SETTINGS_STYLES =====
export const SETTINGS_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  section: {
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },
  
  sectionTitle: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
    color: COLORS.text.secondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: SPACING.sm,
    marginLeft: SPACING.sm,
  },
  
  settingRow: Platform.select({
    ios: {
      backgroundColor: COLORS.surface,
      borderRadius: 12,
      marginHorizontal: SPACING.sm,
      marginBottom: SPACING.xs,
      paddingVertical: SPACING.md,
      paddingHorizontal: SPACING.lg,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 0,
    },
    android: {
      backgroundColor: COLORS.surface,
      borderRadius: 8,
      marginHorizontal: SPACING.sm,
      marginBottom: SPACING.xs,
      paddingVertical: SPACING.md,
      paddingHorizontal: SPACING.lg,
      elevation: 2,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    default: {
      backgroundColor: COLORS.surface,
      borderRadius: 8,
      marginHorizontal: SPACING.sm,
      marginBottom: SPACING.xs,
      paddingVertical: SPACING.md,
      paddingHorizontal: SPACING.lg,
      elevation: 2,
    }
  }),
  
  settingRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  
  settingIcon: {
    width: 24,
    height: 24,
    marginRight: SPACING.md,
    tintColor: COLORS.text.secondary,
  },
  
  settingText: {
    fontSize: FONT_SIZES.base,
    color: COLORS.text.primary,
    fontWeight: '500',
  },
  
  settingSubtext: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text.secondary,
    marginTop: 2,
  },
  
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  chevron: {
    width: 16,
    height: 16,
    marginLeft: SPACING.sm,
    tintColor: COLORS.text.tertiary,
  },
  
  switch: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  
  divider: {
    height: 1,
    backgroundColor: COLORS.borderLight,
    marginVertical: SPACING.sm,
    marginHorizontal: SPACING.lg,
  },
} as const);

// ===== THEME CONTEXT TYPES =====
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  colors: typeof lightColors;
  toggleTheme: () => void;
}

// ===== THEME UTILITIES =====
export const getThemeColors = (theme: Theme) => {
  return theme === 'dark' ? darkColors : lightColors;
};

// Export all as default
export default {
  COLORS,
  lightColors,
  darkColors,
  FONT_SIZES,
  SPACING,
  CONTAINER_STYLES,
  TYPOGRAPHY_STYLES,
  BUTTON_STYLES,
  INPUT_STYLES,
  SETTINGS_STYLES,
  getThemeColors,
};
