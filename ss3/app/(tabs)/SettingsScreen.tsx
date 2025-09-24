import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Switch,
  Platform 
} from 'react-native';
import Header from '@/components/Header';
import { useTheme } from '@/contexts/ThemeContext';
import { FONT_SIZES, SPACING } from '@/styles/GlobalStyles';

// Icons (using simple text icons for now)
const Icons = {
  user: '👤',
  bell: '🔔',
  moon: '🌙',
  help: '❓',
  chevron: '›',
};

interface SettingRowProps {
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  rightComponent?: React.ReactNode;
  showChevron?: boolean;
}

const SettingRow: React.FC<SettingRowProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  rightComponent,
  showChevron = true,
}) => {
  const { colors } = useTheme();

  const rowStyle = [
    styles.settingRow,
    { backgroundColor: colors.surface }
  ];

  const textStyle = [
    styles.settingText,
    { color: colors.text.primary }
  ];

  const subtextStyle = [
    styles.settingSubtext,
    { color: colors.text.secondary }
  ];

  const chevronStyle = [
    styles.chevron,
    { color: colors.text.tertiary }
  ];

  return (
    <TouchableOpacity 
      style={rowStyle}
      onPress={onPress}
      activeOpacity={0.6}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <View style={styles.settingRowContent}>
        <View style={styles.settingLeft}>
          <Text style={[styles.settingIcon, { color: colors.text.secondary }]}>
            {icon}
          </Text>
          <View style={styles.settingTextContainer}>
            <Text style={textStyle}>{title}</Text>
            {subtitle && <Text style={subtextStyle}>{subtitle}</Text>}
          </View>
        </View>
        
        <View style={styles.settingRight}>
          {rightComponent}
          {showChevron && (
            <Text style={chevronStyle}>{Icons.chevron}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function SettingsScreen() {
  const { theme, colors, toggleTheme } = useTheme();
  
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [emailNotifications, setEmailNotifications] = React.useState(false);

  const containerStyle = [
    styles.container,
    { backgroundColor: colors.background }
  ];

  const sectionTitleStyle = [
    styles.sectionTitle,
    { color: colors.text.secondary }
  ];

  const dividerStyle = [
    styles.divider,
    { backgroundColor: colors.borderLight }
  ];

  return (
    <View style={containerStyle}>
      <Header title="Cài đặt" />
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        
        {/* Tài khoản */}
        <View style={styles.section}>
          <Text style={sectionTitleStyle}>Tài khoản</Text>
          <SettingRow
            icon={Icons.user}
            title="Thông tin cá nhân"
            subtitle="Chỉnh sửa hồ sơ của bạn"
            onPress={() => {
              console.log('Thông tin cá nhân được bấm');
              alert('Thông tin cá nhân');
            }}
          />
         
        </View>

        <View style={dividerStyle} />

        <View style={styles.section}>
          <Text style={sectionTitleStyle}>Thông báo</Text>
          
          <SettingRow
            icon={Icons.bell}
            title="Email thông báo"
            subtitle="Nhận thông báo qua email"
            rightComponent={
              <Switch
                value={true}
                onValueChange={() => console.log('Toggle email notifications')}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.surface}
                style={styles.switch}
              />
            }
            showChevron={false}
          />
        </View>

        <View style={dividerStyle} />

        <View style={styles.section}>
          <Text style={sectionTitleStyle}>Giao diện</Text>
          <SettingRow
            icon={Icons.moon}
            title="Chế độ tối"
            subtitle={theme === 'dark' ? 'Đang bật' : 'Đang tắt'}
            rightComponent={
              <Switch
                value={theme === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.surface}
                style={styles.switch}
              />
            }
            showChevron={false}
          />
        </View>

        <View style={dividerStyle} />

        <View style={styles.section}>
          <Text style={sectionTitleStyle}>Hỗ trợ</Text>
          <SettingRow
            icon={Icons.help}
            title="Trung tâm trợ giúp"
            subtitle="Câu hỏi thường gặp"
            onPress={() => {
              console.log('Trung tâm trợ giúp được bấm');
              alert('Trung tâm trợ giúp');
            }}
          />
          
        </View>

        <View style={{ height: SPACING['6xl'] }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: SPACING.lg,
    paddingBottom: SPACING['6xl'],
  },
  section: {
    marginTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: SPACING.sm,
    marginLeft: SPACING.sm,
  },
  settingRow: Platform.select({
    ios: {
      backgroundColor: 'transparent', // Will be set dynamically
      borderRadius: 12,
      marginHorizontal: SPACING.sm,
      marginBottom: SPACING.sm,
      paddingVertical: SPACING.lg, // Tăng padding vertical
      paddingHorizontal: SPACING.lg,
      minHeight: 56, // Đảm bảo touch area đủ lớn
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 0,
    },
    android: {
      backgroundColor: 'transparent', // Will be set dynamically
      borderRadius: 8,
      marginHorizontal: SPACING.sm,
      marginBottom: SPACING.sm,
      paddingVertical: SPACING.lg, // Tăng padding vertical
      paddingHorizontal: SPACING.lg,
      minHeight: 56, // Đảm bảo touch area đủ lớn
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    default: {
      backgroundColor: 'transparent', // Will be set dynamically
      borderRadius: 8,
      marginHorizontal: SPACING.sm,
      marginBottom: SPACING.sm,
      paddingVertical: SPACING.lg, // Tăng padding vertical
      paddingHorizontal: SPACING.lg,
      minHeight: 56, // Đảm bảo touch area đủ lớn
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
    fontSize: 20,
    marginRight: SPACING.md,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingText: {
    fontSize: FONT_SIZES.base,
    fontWeight: '500',
  },
  settingSubtext: {
    fontSize: FONT_SIZES.sm,
    marginTop: 2,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevron: {
    fontSize: 18,
    marginLeft: SPACING.sm,
  },
  switch: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  divider: {
    height: 1,
    marginVertical: SPACING.sm,
    marginHorizontal: SPACING.lg,
  },
});
