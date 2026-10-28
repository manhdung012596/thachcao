import React, { useState } from 'react';
import {
  Layers,
  Phone,
  Menu,
  X,
  ArrowRight,
  Package,
  Palette,
  Grid,
  Layout,
  ChevronRight,
  FileText,
  Send,
  Check,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Zap,
  ShieldCheck,
  Gift,
  Info,
  PhoneCall
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    category: 'tam',
    image: './assets/products/tam-knauf.jpg',
    title: 'Tấm Thạch Cao Knauf 9mm',
    desc: 'Thương hiệu Đức chất lượng cao, cách âm cách nhiệt tốt.'
  },
  {
    id: 2,
    category: 'tam',
    image: './assets/products/tam-zeit.jpg',
    title: 'Tấm Thạch Cao Zeit Gypsum',
    desc: 'Tập đoàn GS E&C Hàn Quốc, công nghệ chống nứt ưu việt.'
  },
  {
    id: 3,
    category: 'tam',
    image: './assets/products/tam-sieu-ben-vinh-tuong.jpg',
    title: 'Tấm Thạch Cao Siêu Bền Vĩnh Tường',
    desc: 'Lõi sợi siêu bền chịu lực uốn cực cao, chống võng tối đa.'
  },
  {
    id: 4,
    category: 'tam',
    image: './assets/products/tam-nhua.jpg',
    title: 'Tấm Trần Nhựa Hoa Văn 60x60',
    desc: 'Tấm thả trần bằng nhựa cao cấp chống nước 100%.'
  },
  {
    id: 5,
    category: 'tam',
    image: './assets/products/tam-thach-cao-60-1m2.jpg',
    title: 'Tấm Thạch Cao 60x120cm',
    desc: 'Kích thước lớn thích hợp thả trần nổi văn phòng, nhà xưởng.'
  },
  {
    id: 6,
    category: 'vinh-tuong',
    image: './assets/products/u-vinh-tuong.jpg',
    title: 'Thanh chính U Vĩnh Tường (Xương Cá)',
    desc: 'Hệ khung xương chìm cao cấp chịu tải lớn, mạ kẽm dày dặn.'
  },
  {
    id: 7,
    category: 'vinh-tuong',
    image: './assets/products/v-vinh-tuong.jpg',
    title: 'Thanh viền tường V Vĩnh Tường',
    desc: 'Thanh góc định hình viền tường chịu lực tốt, chuẩn ly dày.'
  },
  {
    id: 8,
    category: 'phu-kien',
    image: './assets/products/u-kem.jpg',
    title: 'Thanh chính U kẽm thường',
    desc: 'Hệ khung xương kẽm giá tốt, chống rỉ thích hợp cho nhà trọ, xưởng nhỏ.'
  },
  {
    id: 9,
    category: 'phu-kien',
    image: './assets/products/v-kem.jpg',
    title: 'Thanh viền tường V kẽm thường',
    desc: 'Thanh viền góc chất liệu sắt mạ kẽm định hình viền trần thạch cao.'
  },
  {
    id: 10,
    category: 'phu-kien',
    image: './assets/products/u-vang.jpg',
    title: 'Thanh chính U mạ vàng cao cấp',
    desc: 'Hệ khung xương mạ màu vàng thẩm mỹ cao, chống ăn mòn vượt trội.'
  },
  {
    id: 11,
    category: 'phu-kien',
    image: './assets/products/v-vang.jpg',
    title: 'Thanh viền tường V vàng cao cấp',
    desc: 'Thanh viền góc trang trí mạ màu vàng tinh tế, chống oxy hóa.'
  },
  {
    id: 12,
    category: 'phu-kien',
    image: './assets/products/thanh-t-1m2.jpg',
    title: 'Thanh chính phụ T 1.2m (Trần Nổi)',
    desc: 'Khung xương định hình hệ ô bàn cờ 600x600 trần nổi.'
  },
  {
    id: 13,
    category: 'phu-kien',
    image: './assets/products/thanh-t-3m6.jpg',
    title: 'Thanh chính T 3.6m (Trần Nổi)',
    desc: 'Thanh treo chịu lực chính cho trần thả nổi, liên kết pát khóa.'
  },
  {
    id: 14,
    category: 'phu-kien',
    image: './assets/products/ti-thach-cao.jpg',
    title: 'Ti treo thạch cao & Pát treo',
    desc: 'Ti ren mịn phi 4, tăng đơ thép dùng treo điều chỉnh cao độ trần.'
  },
  {
    id: 15,
    category: 'phu-kien',
    image: './assets/products/t-60mm.jpg',
    title: 'Thanh T 0.6m (Trần Nổi)',
    desc: 'Thanh phụ T 0.6m liên kết tạo ô bàn cờ 600x600 trần thả nổi.'
  },
  {
    id: 16,
    category: 'phu-kien',
    image: './assets/products/keo-luoi.jpg',
    title: 'Băng keo lưới sợi thủy tinh',
    desc: 'Băng keo lưới chuyên dụng dán mối nối mối nối trần chìm, chống nứt thạch cao.'
  },
  {
    id: 17,
    category: 'phu-kien',
    image: './assets/products/vit-den.jpg',
    title: 'Vít đen thạch cao (Drywall Screws)',
    desc: 'Vít đen chuyên dụng tự khoan liên kết tấm thạch cao vào hệ xương thép chắc chắn.'
  },
  {
    id: 18,
    category: 'phu-kien',
    image: './assets/products/vit-xa-go.jpg',
    title: 'Vít tự khoan xà gồ mạ kẽm',
    desc: 'Vít đầu lục giác/đầu dù chịu lực tốt bắt hệ xương vào xà gồ sắt thép dày.'
  },
  {
    id: 19,
    category: 'phu-kien',
    image: './assets/products/dinh-thep.jpg',
    title: 'Đinh thép bê tông cao cấp',
    desc: 'Đinh thép chịu lực cứng cáp cố định thanh góc V viền tường vào bê tông.'
  }
];

export default function ThachCaoNguyenVu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle clicking "Nhận Báo Giá" on card buttons
  const handleRequestQuote = (itemName) => {
    setSelectedProduct(itemName);
    const quoteSection = document.getElementById('bao-gia');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-blue-500 selection:text-white scroll-smooth">

      {/* Sticky Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 transition-all duration-300 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold font-display text-blue-600 tracking-tight group-hover:text-blue-700 transition">
              Thạch Cao Nguyên Vũ
            </span>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
            <a href="#dich-vu" className="hover:text-blue-600 transition-colors duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200">Thi Công</a>
            <a href="#san-pham" className="hover:text-blue-600 transition-colors duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200">Vật Tư & Phụ Kiện</a>
            <a href="#bao-gia" className="hover:text-blue-600 transition-colors duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200">Báo Giá</a>
            <a href="#lien-he" className="hover:text-blue-600 transition-colors duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200">Liên Hệ</a>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0903839305" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Gọi Ngay
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg px-4 py-6 space-y-4 transition-all duration-300">
            <a
              href="#dich-vu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50"
            >
              Thi Công
            </a>
            <a
              href="#san-pham"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50"
            >
              Vật Tư & Phụ Kiện
            </a>
            <a
              href="#bao-gia"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50"
            >
              Báo Giá
            </a>
            <a
              href="#lien-he"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50"
            >
              Liên Hệ
            </a>
            <a
              href="tel:0903839305"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Gọi Ngay: 0903 839 305
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 md:py-24 overflow-hidden">
        {/* Subtle grid background decoration */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Decorative blur shapes */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                Đơn Vị Thiết Kế & Thi Công Uy Tín Số 1
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Giải Pháp Hoàn Hảo Cho <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Không Gian Trần Nhà</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Chuyên thi công trần thạch cao chất lượng cao và phân phối sỉ/lẻ tấm thạch cao, khung xương, phụ kiện chính hãng với giá tốt nhất thị trường.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#dich-vu" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  Xem Dịch Vụ
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#san-pham" className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-xl shadow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  Mua Vật Tư
                  <Package className="w-5 h-5" />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">10+</div>
                  <div className="text-xs text-slate-500 font-medium uppercase mt-1">Năm kinh nghiệm</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">1000+</div>
                  <div className="text-xs text-slate-500 font-medium uppercase mt-1">Công trình</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium uppercase mt-1">Chính hãng</div>
                </div>
              </div>
            </div>

            {/* Hero Right Media */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-sky-600 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden group">
                  <img
                    src="./assets/images/hero.png"
                    alt="Trần thạch cao phòng khách sang trọng"
                    className="w-full h-80 md:h-[420px] object-cover rounded-xl transition duration-500 group-hover:scale-102"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-lg flex items-center justify-between border border-white/10">
                    <div>
                      <p class="text-xs text-blue-300 font-semibold tracking-wider uppercase">Dự án hoàn thiện</p>
                      <p class="font-bold text-sm">Biệt thự phố Phú Mỹ Hưng</p>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">5★ Đánh giá</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="dich-vu" class="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Dịch Vụ Nổi Bật</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Dịch Vụ Thi Công Chuyên Nghiệp</h2>
            <p className="text-slate-600 text-lg">
              Chúng tôi mang lại giải pháp thi công tối ưu cho mọi công trình từ căn hộ, biệt thự đến văn phòng và showroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Service 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="./assets/images/service-chim.png"
                  alt="Trần Thạch Cao Chìm"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-xl w-fit">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Trần Thạch Cao Chìm</h3>
                <p className="text-slate-600 flex-grow">
                  Thiết kế phẳng, giật cấp sang trọng cho phòng khách, phòng ngủ. Giúp tạo nên điểm nhấn thẩm mỹ hoàn hảo và mở rộng không gian.
                </p>
                <button
                  onClick={() => handleRequestQuote('Trần Thạch Cao Chìm')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group/btn mt-auto text-left"
                >
                  Tư vấn thiết kế miễn phí
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="./assets/images/service-noi.png"
                  alt="Trần Thạch Cao Nổi"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-xl w-fit">
                  <Grid className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Trần Thạch Cao Nổi</h3>
                <p className="text-slate-600 flex-grow">
                  Tiện lợi, dễ sửa chữa, thi công nhanh chóng. Phù hợp tuyệt đối cho văn phòng làm việc, nhà xưởng, trường học và trung tâm thương mại.
                </p>
                <button
                  onClick={() => handleRequestQuote('Trần Thạch Cao Nổi')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group/btn mt-auto text-left"
                >
                  Tư vấn thiết kế miễn phí
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="./assets/images/service-vach.png"
                  alt="Vách Ngăn Thạch Cao"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow space-y-4">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-xl w-fit">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Vách Ngăn Thạch Cao</h3>
                <p className="text-slate-600 flex-grow">
                  Giải pháp cách âm, chống cháy ưu việt. Giúp phân chia phòng khách, phòng ngủ, phòng họp linh hoạt, nhanh gọn với chi phí tiết kiệm nhất.
                </p>
                <button
                  onClick={() => handleRequestQuote('Vách Ngăn Thạch Cao')}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group/btn mt-auto text-left"
                >
                  Tư vấn thiết kế miễn phí
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="san-pham" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Tổng Kho Vật Tư</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Phân Phối Vật Tư & Phụ Kiện</h2>
            <p className="text-slate-600 text-lg">
              Cung cấp vật tư thạch cao chính hãng chất lượng cao. Đầy đủ giấy tờ, bảo hành uy tín.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setActiveCategory('tam')}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeCategory === 'tam'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
            >
              Tấm trần
            </button>
            <button
              onClick={() => setActiveCategory('vinh-tuong')}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeCategory === 'vinh-tuong'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
            >
              Khung Vĩnh Tường
            </button>
            <button
              onClick={() => setActiveCategory('phu-kien')}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeCategory === 'phu-kien'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
            >
              Khung thường & Phụ kiện
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS
              .filter(p => activeCategory === 'all' || p.category === activeCategory)
              .map(p => (
                <div key={p.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:border-blue-500 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-full aspect-square bg-white border border-slate-100 rounded-xl mb-4 overflow-hidden p-3 flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">
                    {p.category === 'tam' ? 'Tấm Trần' : p.category === 'vinh-tuong' ? 'Khung Xương Vĩnh Tường' : 'Phụ Kiện Xương'}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                    {p.desc}
                  </p>
                  <div className="flex items-baseline gap-2 mb-4 mt-auto">
                    <span className="text-sm text-slate-500">Giá bán:</span>
                    <span className="text-red-600 text-lg font-extrabold">Liên hệ</span>
                  </div>
                  <button
                    onClick={() => handleRequestQuote(p.title)}
                    className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-2.5 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-sm"
                  >
                    <FileText className="w-4 h-4" />
                    Nhận Báo Giá
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Interactive Quick Quote Section */}
      <section id="bao-gia" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/40 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Info Columns */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold font-display">Nhận Báo Giá Thi Công Cạnh Tranh Nhất</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Bạn đang cần báo giá thi công hoặc vật tư số lượng lớn? Hãy để lại thông tin liên hệ, đội ngũ kỹ sư của chúng tôi sẽ gọi lại tư vấn và gửi bảng giá chi tiết trong vòng 15 phút.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500/20 text-blue-300 p-1.5 rounded-full">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>Khảo sát đo đạc hiện trạng miễn phí tại công trình</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500/20 text-blue-300 p-1.5 rounded-full">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>Tư vấn loại vật tư tối ưu nhất cho ngân sách của bạn</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-500/20 text-blue-300 p-1.5 rounded-full">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>Cam kết không phát sinh bất kỳ chi phí ngoài hợp đồng</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact CTA Card */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-between h-full">

                {/* Top Header & Dynamic product notice */}
                <div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                    Đang trực tuyến (Tư vấn miễn phí)
                  </div>

                  {/* Dynamic product banner */}
                  {selectedProduct && (
                    <div className="mb-4 p-3.5 bg-blue-50 border border-blue-200 text-blue-900 rounded-xl text-sm flex items-center gap-2 shadow-inner animate-bounce">
                      <Info className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>Bạn đang cần tư vấn: <strong className="font-extrabold text-blue-700">{selectedProduct}</strong>. Vui lòng gọi điện hoặc nhắn Zalo dưới đây!</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-4 font-display text-slate-900">Liên hệ trực tiếp nhận báo giá nhanh</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Bỏ qua bước điền biểu mẫu phức tạp! Hãy nhấc máy gọi hoặc nhắn tin Zalo ngay cho đội ngũ kỹ sư của chúng tôi để được tư vấn, khảo sát đo đạc thực tế miễn phí và nhận bảng giá chiết khấu ưu đãi nhất hôm nay.
                  </p>
                </div>

                {/* Direct CTA buttons */}
                <div className="space-y-4 mb-6">
                  {/* Hotlines */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between group hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500/10 text-blue-600 p-3 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <PhoneCall className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Gọi điện trực tiếp 24/7</p>
                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-0.5">
                          <a href="tel:0903839305" className="text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors">0903.839.305</a>
                          <span className="hidden sm:inline text-slate-300">|</span>
                          <a href="tel:0928577779" className="text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors">0928.577.779</a>
                        </div>
                      </div>
                    </div>
                    <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse shrink-0 self-start mt-1">Gọi ngay</span>
                  </div>

                                    {/* Zalo Link */}
                  <a href="https://zalo.me/0903839305" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-100 hover:border-sky-500 p-4 rounded-xl flex items-center justify-between group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="bg-sky-500/10 text-sky-600 p-3 rounded-full group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-sky-600 uppercase font-bold tracking-wider">Chat Zalo nhận báo giá</p>
                        <p className="text-lg font-extrabold text-sky-900 group-hover:text-sky-600 transition-colors">Nguyên Vũ Thạch Cao</p>
                      </div>
                    </div>
                    <div className="bg-sky-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition duration-200 flex items-center gap-1.5 shadow-md group-hover:bg-sky-700">
                      <Send className="w-3.5 h-3.5" />
                      Nhắn tin
                    </div>
                  </a>
                </div>

                {/* Assurances */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-500 font-medium">
                  <div className="flex flex-col items-center gap-1">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>{"Phản hồi < 5 Phút"}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Khảo Sát Miễn Phí</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Gift className="w-4 h-4 text-rose-500" />
                    <span>Chiết Khấu Cao</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="lien-he" className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Nguyên Vũ
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Đơn vị chuyên thi công trần vách ngăn thạch cao và cung cấp sỉ lẻ vật tư phụ kiện chính hãng chất lượng cao hàng đầu thị trường.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/thachcaonguyenvuu" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-l-4 border-blue-500 pl-3">Thông Tin Liên Hệ</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase text-slate-500 font-semibold">Hotline tư vấn 24/7</p>
                  <a href="tel:0903839305" className="text-white font-bold hover:text-blue-400 transition-colors">0903 839 305 / 0928 577 779</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase text-slate-500 font-semibold">Email hỗ trợ</p>
                  <a href="mailto:contact@thachcaonguyenvu.com" className="text-white hover:text-blue-400 transition-colors">contact@thachcaonguyenvu.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div className="w-full">
                  <p className="text-xs uppercase text-slate-500 font-semibold">Địa chỉ cửa hàng / kho</p>
                  <a href="https://www.google.com/maps/place/TH%E1%BA%A0CH+CAO+NGUY%C3%8AN+V%C5%A8+-+C%E1%BB%ACA+H%C3%80NG+TH%E1%BA%A0CH+CAO+V%C3%80+THI+C%C3%94NG+TR%E1%BA%A6N+TH%E1%BA%A0CH+CAO+TPHCM/@10.7838051,106.6190784,17z/data=!4m6!3m5!1s0x31752d1d29d7d5e3:0x1e67b495a577129d!8m2!3d10.7838051!4d106.6190784!16s%2Fg%2F11ldv_byg_?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors flex flex-col gap-1">
                    <span>266 Bình Long, P. Phú Thạnh, Q. Tân Phú, TP. Hồ Chí Minh</span>
                    <span className="text-xs text-blue-400 font-semibold flex items-center gap-1">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Xem trên Google Maps
                    </span>
                  </a>
                  <div className="mt-4 rounded-xl overflow-hidden shadow-md border border-slate-800">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4678229618035!2d106.61688971092671!3d10.783810389321356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d1d29d7d5e3%3A0x1e67b495a577129d!2zVEjhuqFDSCBDQU8gTkdVWcOKTiBWxaggLSBD4busQSBIw4BORyBUSEnDkMgQ0FPIFYgw4AgVEhJIEMgw5RORyBUUsOCTiBUSEnDkMgQ0FPIFRQSENM!5e0!3m2!1svi!2s!4v1722613200000!5m2!1svi!2s" className="w-full h-48 border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Quote Col */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-l-4 border-blue-500 pl-3">Liên Hệ Báo Giá Ngay</h3>
            <p className="text-slate-400">Không cần chờ đợi! Hãy kết nối trực tiếp với chúng tôi để nhận tư vấn và báo giá trong 2 phút.</p>
            <div className="space-y-3 pt-2">
              <a href="tel:0903839305" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md hover:scale-102 transform duration-150">
                <PhoneCall className="w-4 h-4" />
                Gọi Ngay: 0903 839 305
              </a>
              <a href="https://zalo.me/0903839305" target="_blank" rel="noopener noreferrer" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md hover:scale-102 transform duration-150">
                <MessageSquare className="w-4 h-4" />
                Chat Zalo Nhận Báo Giá
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>© 2026 Thạch Cao Nguyên Vũ. Tất cả quyền được bảo lưu.</p>
          <p>Thiết kế bởi Dungxco</p>
        </div>
      </footer>

      {/* Floating Action Buttons (FAB) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Zalo Button */}
        <a
          href="https://zalo.me/0903839305"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0068FF] hover:bg-[#0052cc] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 relative group"
          aria-label="Chat Zalo"
        >
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1 px-3 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Chat Zalo
          </span>
          <span className="font-extrabold text-sm tracking-wider">Zalo</span>
        </a>

        {/* Phone Button */}
        <a
          href="tel:0903839305"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform hover:scale-110 relative group animate-[pulse_1.5s_infinite]"
          aria-label="Gọi điện"
        >
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1 px-3 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            0903 839 305
          </span>
          <Phone className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl text-center space-y-6 mx-4 border border-slate-100">
            <div className="bg-green-100 text-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-slate-900">Gửi Yêu Cầu Thành Công!</h4>
              <p className="text-slate-600">Nguyên Vũ đã nhận được số điện thoại của bạn. Đội ngũ tư vấn sẽ liên hệ lại ngay trong ít phút.</p>
            </div>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-200"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
