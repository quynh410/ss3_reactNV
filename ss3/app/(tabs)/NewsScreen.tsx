import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Dimensions,
  Platform 
} from 'react-native';
import Header from '@/components/Header';
import { COLORS, FONT_SIZES, SPACING, CONTAINER_STYLES, TYPOGRAPHY_STYLES } from '@/styles/GlobalStyles';

// Dữ liệu bài báo mẫu
const newsData = {
  id: 1,
  title: "Công nghệ AI đang thay đổi cách chúng ta làm việc và sống",
  author: {
    name: "Nguyễn Văn Minh",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80",
  publishDate: "15 tháng 12, 2024",
  readTime: "8 phút đọc",
  content: `
Trong thời đại số hóa hiện nay, trí tuệ nhân tạo (AI) đã trở thành một trong những công nghệ có tác động mạnh mẽ nhất đến cuộc sống con người. Từ việc tự động hóa các quy trình sản xuất đến việc hỗ trợ chẩn đoán y tế, AI đang mở ra những khả năng mới mà trước đây chúng ta chỉ có thể mơ ước.

## Tác động đến thị trường lao động

Một trong những thay đổi lớn nhất mà AI mang lại là sự chuyển đổi trong thị trường lao động. Nhiều công việc truyền thống đang được tự động hóa, trong khi những vai trò mới liên quan đến AI và công nghệ đang xuất hiện. Điều này đòi hỏi người lao động phải liên tục học hỏi và thích ứng với những kỹ năng mới.

## Ứng dụng trong y tế

Trong lĩnh vực y tế, AI đang giúp các bác sĩ chẩn đoán bệnh chính xác hơn thông qua việc phân tích hình ảnh y tế và dữ liệu bệnh nhân. Các thuật toán machine learning có thể phát hiện các dấu hiệu bệnh lý mà mắt thường có thể bỏ sót.

## Tương lai của AI

Với sự phát triển không ngừng của công nghệ, chúng ta có thể kỳ vọng AI sẽ tiếp tục phát triển và tích hợp sâu hơn vào cuộc sống hàng ngày. Tuy nhiên, điều quan trọng là phải đảm bảo rằng sự phát triển này diễn ra một cách có trách nhiệm và vì lợi ích của toàn nhân loại.

Việc hiểu và chuẩn bị cho những thay đổi này sẽ giúp chúng ta tận dụng tối đa những cơ hội mà AI mang lại, đồng thời giảm thiểu những rủi ro tiềm ẩn.
  `
};

export default function NewsScreen() {
  const [screenData, setScreenData] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const updateScreenData = () => {
      const { width, height } = Dimensions.get('window');
      setScreenData({ width, height });
    };

    const subscription = Dimensions.addEventListener('change', updateScreenData);
    updateScreenData();

    return () => subscription?.remove();
  }, []);

  // Tính toán kích thước font responsive
  const getResponsiveFontSize = (baseSize: number) => {
    const scaleFactor = Math.min(screenData.width / 375, 1.2); // Base width 375px
    return Math.max(baseSize, baseSize * scaleFactor);
  };

  const titleFontSize = getResponsiveFontSize(24);
  const contentFontSize = getResponsiveFontSize(16);
  const authorFontSize = getResponsiveFontSize(14);
  const metaFontSize = getResponsiveFontSize(12);

  return (
    <View style={CONTAINER_STYLES.screenWithHeader}>
      <Header title="Tin tức" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* Ảnh bìa */}
        <View style={styles.coverImageContainer}>
          <Image 
            source={{ uri: newsData.coverImage }}
            style={styles.coverImage}
            resizeMode="cover"
          />
        </View>

        {/* Nội dung bài báo */}
        <View style={styles.contentContainer}>
          
          {/* Tiêu đề */}
          <Text style={[styles.title, { fontSize: titleFontSize }]}>
            {newsData.title}
          </Text>

          {/* Thông tin tác giả */}
          <View style={styles.authorContainer}>
            <Image 
              source={{ uri: newsData.author.avatar }}
              style={styles.authorAvatar}
            />
            <View style={styles.authorInfo}>
              <Text style={[styles.authorName, { fontSize: authorFontSize }]}>
                {newsData.author.name}
              </Text>
              <Text style={[styles.publishDate, { fontSize: metaFontSize }]}>
                {newsData.publishDate} • {newsData.readTime}
              </Text>
            </View>
          </View>

          {/* Nội dung bài báo */}
          <View style={styles.articleContent}>
            <Text style={[styles.contentText, { fontSize: contentFontSize }]}>
              {newsData.content}
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  coverImageContainer: {
    width: '100%',
    height: 250,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: SPACING.lg,
    backgroundColor: COLORS.surface,
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif', // Custom font cho tiêu đề
    fontWeight: 'bold',
    color: COLORS.text.primary,
    lineHeight: 32,
    marginBottom: SPACING.lg,
    textAlign: 'left',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    paddingBottom: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.md,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  publishDate: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif',
    color: COLORS.text.secondary,
    fontWeight: '400',
  },
  articleContent: {
    marginTop: SPACING.md,
  },
  contentText: {
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif', // Custom font cho nội dung
    color: COLORS.text.primary,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: SPACING.lg,
  },
});