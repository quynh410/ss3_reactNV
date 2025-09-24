import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  TouchableOpacity,
  Platform 
} from 'react-native';
import Header from '@/components/Header';

// Interface cho sản phẩm
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  discount?: number;
}

// Dữ liệu mẫu sản phẩm
const productData: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 29990000,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    category: 'Điện thoại',
    rating: 4.8,
    discount: 10
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 25990000,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
    category: 'Laptop',
    rating: 4.9,
    discount: 5
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    price: 5990000,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop',
    category: 'Phụ kiện',
    rating: 4.7
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 22990000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    category: 'Máy tính bảng',
    rating: 4.8,
    discount: 15
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 8990000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
    category: 'Đồng hồ',
    rating: 4.6
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    price: 26990000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    category: 'Điện thoại',
    rating: 4.7,
    discount: 8
  },
  {
    id: 7,
    name: 'Dell XPS 13',
    price: 22990000,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    category: 'Laptop',
    rating: 4.5
  },
  {
    id: 8,
    name: 'Sony WH-1000XM5',
    price: 7990000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Tai nghe',
    rating: 4.8,
    discount: 12
  }
];

export default function ProductScreen() {
  const [screenData, setScreenData] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    isLandscape: false,
    isTablet: false
  });

  useEffect(() => {
    const updateScreenData = () => {
      const { width, height } = Dimensions.get('window');
      const isLandscape = width > height;
      const isTablet = width >= 768; // Tablet threshold
      
      setScreenData({
        width,
        height,
        isLandscape,
        isTablet
      });
    };

    // Lắng nghe thay đổi orientation
    const subscription = Dimensions.addEventListener('change', updateScreenData);
    
    // Cập nhật lần đầu
    updateScreenData();

    return () => subscription?.remove();
  }, []);

  // Tính toán số cột dựa trên kích thước màn hình
  const getColumnsCount = () => {
    if (screenData.isTablet) return 4; // Tablet: 4 cột
    if (screenData.isLandscape) return 3; // Phone ngang: 3 cột
    return 2; // Phone dọc: 2 cột
  };

  // Tính toán kích thước sản phẩm
  const getProductDimensions = () => {
    const columns = getColumnsCount();
    const padding = 16; // Padding container
    const margin = 12; // Margin giữa các sản phẩm
    const totalMargin = margin * (columns - 1);
    
    const productWidth = (screenData.width - padding * 2 - totalMargin) / columns;
    const productHeight = productWidth * 1.4; // Tỷ lệ 1:1.4 cho chiều cao
    
    return {
      width: productWidth,
      height: productHeight,
      fontSize: Math.max(12, productWidth * 0.04), // Font size responsive
      titleFontSize: Math.max(14, productWidth * 0.045),
      priceFontSize: Math.max(16, productWidth * 0.05)
    };
  };

  const dimensions = getProductDimensions();
  const columns = getColumnsCount();

  // Chia sản phẩm thành các hàng
  const renderProducts = () => {
    const rows = [];
    for (let i = 0; i < productData.length; i += columns) {
      const rowProducts = productData.slice(i, i + columns);
      rows.push(
        <View key={i} style={styles.productRow}>
          {rowProducts.map((product, index) => (
            <TouchableOpacity
              key={product.id}
              style={[
                styles.productCard,
                {
                  width: dimensions.width,
                  height: dimensions.height,
                  marginRight: index < rowProducts.length - 1 ? 12 : 0
                }
              ]}
              activeOpacity={0.8}
            >
              <View style={styles.productImageContainer}>
                <Image 
                  source={{ uri: product.image }} 
                  style={styles.productImage}
                  resizeMode="cover"
                />
                {product.discount && (
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>-{product.discount}%</Text>
                  </View>
                )}
              </View>
              
              <View style={styles.productInfo}>
                <Text 
                  style={[styles.productName, { fontSize: dimensions.titleFontSize }]}
                  numberOfLines={2}
                >
                  {product.name}
                </Text>
                
                <Text style={[styles.productCategory, { fontSize: dimensions.fontSize }]}>
                  {product.category}
                </Text>
                
                <View style={styles.ratingContainer}>
                  <Text style={[styles.rating, { fontSize: dimensions.fontSize }]}>
                    ⭐ {product.rating}
                  </Text>
                </View>
                
                <View style={styles.priceContainer}>
                  <Text style={[styles.productPrice, { fontSize: dimensions.priceFontSize }]}>
                    {product.price.toLocaleString('vi-VN')}đ
                  </Text>
                  {product.discount && (
                    <Text style={[styles.originalPrice, { fontSize: dimensions.fontSize }]}>
                      {Math.round(product.price / (1 - product.discount / 100)).toLocaleString('vi-VN')}đ
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <Header title="Sản phẩm" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
          <Text style={styles.headerSubtitle}>
            {screenData.isTablet ? '4 sản phẩm/hàng' : 
             screenData.isLandscape ? '3 sản phẩm/hàng' : '2 sản phẩm/hàng'}
          </Text>
        </View>
        
        <View style={styles.productsContainer}>
          {renderProducts()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  headerInfo: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  productsContainer: {
    padding: 16,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  productImageContainer: {
    position: 'relative',
    height: '60%',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ef4444',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 12,
    height: '40%',
    justifyContent: 'space-between',
  },
  productName: {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  productCategory: {
    color: '#6b7280',
    marginBottom: 4,
  },
  ratingContainer: {
    marginBottom: 8,
  },
  rating: {
    color: '#f59e0b',
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#059669',
  },
  originalPrice: {
    color: '#9ca3af',
    textDecorationLine: 'line-through',
  },
});
