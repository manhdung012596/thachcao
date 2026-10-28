# YÊU CẦU DỰ ÁN: TÁI TẠO WEBSITE TRẦN THẠCH CAO APOLLO

## 1. Vai trò

Bạn là Senior Frontend Developer, UI/UX Designer và chuyên gia Technical SEO. Nhiệm vụ là phân tích website tham chiếu:

https://www.xn--trnthchcao-ij3eoc.com.vn/

Sau đó xây dựng một website có giao diện, bố cục, cấu trúc trang, cách trình bày nội dung, hiệu ứng và trải nghiệm người dùng gần nhất có thể với website tham chiếu.

Mục tiêu là tái tạo đầy đủ những thành phần có thể quan sát được, không chỉ tạo một website có phong cách tương tự.

Website phục vụ lĩnh vực cung cấp vật tư, thiết kế và thi công trần thạch cao, vách thạch cao, sơn bả.

## 2. Quy trình bắt buộc trước khi lập trình

Trước khi sửa hoặc tạo mã nguồn, hãy:

1. Truy cập website tham chiếu và khảo sát toàn bộ trang chủ.
2. Kiểm tra header, logo, thanh điều hướng, banner slideshow, các khối giới thiệu dịch vụ, danh sách bài viết, khu vực liên hệ và footer.
3. Mở các trang con có liên kết từ menu để xác định cấu trúc website thực tế.
4. Kiểm tra giao diện trên desktop, tablet và mobile.
5. Phân tích màu sắc, font chữ, chiều rộng nội dung, khoảng cách, kích thước hình ảnh, tỷ lệ khung hình, đường viền, bóng đổ và hiệu ứng hover.
6. Nếu website không truy cập được, không tự tuyên bố đã kiểm tra. Hãy yêu cầu sử dụng mã nguồn HTML đã cung cấp, ảnh chụp màn hình và những tài liệu thực tế có sẵn.
7. Lập danh sách các thành phần đã xác nhận, các thành phần chưa xác nhận và kế hoạch triển khai.
8. Sau khi phân tích, bắt đầu triển khai ngay, không dừng ở việc chỉ viết kế hoạch.

## 3. Công nghệ

Ưu tiên sử dụng công nghệ hiện có trong repository. Không tự ý viết lại toàn bộ dự án hoặc thay đổi framework nếu không cần thiết.

Nếu bắt đầu từ dự án mới, sử dụng:

- React và Vite.
- JavaScript hoặc TypeScript phù hợp với cấu trúc dự án.
- HTML5 và CSS3.
- CSS responsive hoặc giải pháp styling hiện có.
- JavaScript cho menu, slideshow và các tương tác.
- Lucide hoặc Font Awesome cho icon nếu cần.

Mục tiêu là tái tạo giao diện của mẫu Blogger Apollo bằng code có cấu trúc rõ ràng, dễ chỉnh sửa và có thể triển khai trên Vercel.

Không cần tạo backend nếu website chỉ giới thiệu dịch vụ và hiển thị bài viết tĩnh. Những chức năng yêu cầu gửi dữ liệu thực tế phải được triển khai bằng dịch vụ hoặc backend phù hợp, không giả lập thành công.

## 4. Thiết kế giao diện

Bám sát những gì xác minh được từ website tham chiếu:

### Header

- Thanh đầu trang và khu vực thương hiệu.
- Logo hoặc tên doanh nghiệp.
- Các liên kết mạng xã hội nếu có.
- Thanh menu ngang.
- Màu vàng và nâu kết hợp các màu nền thực tế quan sát được.
- Kích thước, vị trí, khoảng cách và kiểu chữ gần với mẫu.

### Banner slideshow

- Tạo slideshow hình ảnh lớn ở đầu trang nếu mẫu có thành phần này.
- Hình ảnh hiển thị toàn khung, không méo, không bị kéo giãn.
- Có nút chuyển ảnh, chỉ báo slide và hiệu ứng chuyển cảnh phù hợp.
- Hỗ trợ vuốt trên điện thoại nếu phù hợp.
- Không tự động sử dụng ảnh ngẫu nhiên không liên quan.
- Nếu chưa có ảnh thật, sử dụng ảnh minh họa phù hợp và ghi rõ vị trí cần thay ảnh.

### Các khối nội dung

Tái tạo theo đúng thứ tự và cấu trúc đã xác minh trên website:

- Giới thiệu doanh nghiệp.
- Các dịch vụ trần thạch cao và vách thạch cao.
- Các hình ảnh công trình.
- Danh sách bài viết hoặc dự án.
- Khu vực nội dung nổi bật.
- Nút xem thêm, liên hệ hoặc yêu cầu báo giá.
- Các khối nội dung khác có thật trên mẫu.

Không tự ý thêm các section lớn nếu website tham chiếu không có. Nếu không xác định được thứ tự của một section, hãy ghi nhận thay vì tự khẳng định.

### Danh sách bài viết

- Card bài viết có ảnh, tiêu đề và mô tả.
- Tỷ lệ ảnh nhất quán.
- Hiệu ứng hover nhẹ.
- Liên kết đến trang chi tiết tương ứng.
- Có phân trang hoặc điều hướng bài viết nếu mẫu hỗ trợ.

### Footer

- Bố cục nhiều cột nếu có trên mẫu.
- Thông tin doanh nghiệp.
- Liên kết nội bộ.
- Thông tin liên hệ.
- Bản quyền.
- Mạng xã hội nếu có.

Không tự tạo số điện thoại, địa chỉ, giấy phép, chứng nhận hoặc thông tin doanh nghiệp không được cung cấp.

## 5. Hiệu ứng và tương tác

Tái tạo các tương tác có thật trên website:

- Menu điều hướng và menu con.
- Slideshow.
- Hiệu ứng hover.
- Nút gọi điện trên thiết bị di động nếu có số điện thoại hợp lệ.
- Nút Zalo nếu có đường dẫn hợp lệ.
- Nút liên hệ và xem chi tiết.
- Điều hướng giữa trang chủ và các trang con.
- Menu mobile dạng hamburger.
- Trạng thái focus bằng bàn phím.
- Hiệu ứng chuyển cảnh vừa phải, không gây chậm trang.

Không để các nút chỉ có hình thức mà không hoạt động. Không gắn đường dẫn giả hoặc liên kết đến trang rỗng.

## 6. Responsive

Website phải hiển thị tốt ở:

- Desktop 1920px, 1440px và 1366px.
- Tablet 768px.
- Mobile 390px, 375px và 360px.

Yêu cầu:

- Không xuất hiện thanh cuộn ngang ngoài ý muốn.
- Menu mobile hoạt động.
- Hình ảnh không vỡ tỷ lệ.
- Nội dung dễ đọc.
- Nút bấm đủ lớn để thao tác.
- Khoảng cách và bố cục được điều chỉnh phù hợp theo từng breakpoint.

## 7. SEO cho doanh nghiệp trần thạch cao

Triển khai Technical SEO đầy đủ:

- HTML semantic.
- Một H1 chính phù hợp trên mỗi trang.
- H2 và H3 theo cấu trúc nội dung.
- Title và meta description riêng cho từng trang.
- URL dễ đọc, ổn định.
- Canonical URL.
- Sitemap XML.
- Robots.txt phù hợp.
- Open Graph cho chia sẻ mạng xã hội.
- Alt text mô tả đúng hình ảnh.
- Internal links giữa các trang dịch vụ, bài viết và liên hệ.
- Breadcrumb trên trang con nếu phù hợp.
- Schema.org phù hợp như LocalBusiness hoặc HomeAndConstructionBusiness khi có đủ dữ liệu thực tế.
- Thông tin doanh nghiệp nhất quán với hồ sơ Google Business Profile.
- Tối ưu tốc độ tải trang và Core Web Vitals.

Không nhồi nhét từ khóa. Không tạo nội dung địa phương giả hoặc tuyên bố doanh nghiệp phục vụ những khu vực chưa xác nhận.

## 8. Hiệu suất và bảo trì

- Tối ưu kích thước hình ảnh.
- Dùng định dạng WebP hoặc AVIF khi phù hợp.
- Lazy loading cho hình ảnh bên dưới màn hình đầu tiên.
- Hạn chế thư viện không cần thiết.
- Không tải nhiều bản jQuery.
- Nếu không cần jQuery, triển khai hiệu ứng bằng JavaScript hiện đại.
- Không để lỗi console nghiêm trọng.
- Không làm hỏng các chức năng hiện có của repository.
- Tách component hợp lý.
- Tái sử dụng các component như Header, Navigation, HeroSlider, ServiceSection, ArticleCard và Footer khi phù hợp.

## 9. Quy tắc về nội dung và tài sản

Website tham chiếu chỉ được dùng làm căn cứ nghiên cứu cấu trúc và phong cách.

Không sao chép logo, ảnh độc quyền hoặc nội dung văn bản có bản quyền nếu không được phép. Hãy sử dụng thương hiệu, hình ảnh và nội dung do chủ dự án cung cấp hoặc có quyền sử dụng.

Giữ nguyên các đặc điểm thiết kế quan sát được nhưng xây dựng tài sản thương hiệu hợp pháp cho dự án.

## 10. Kiểm thử và nghiệm thu

Sau khi triển khai:

1. Chạy website trên môi trường local.
2. Kiểm tra toàn bộ liên kết.
3. Kiểm tra menu desktop và mobile.
4. Kiểm tra slideshow.
5. Kiểm tra các trang con.
6. Kiểm tra form và nút liên hệ.
7. Kiểm tra console và lỗi tải tài nguyên.
8. Kiểm tra responsive.
9. Kiểm tra title, description, heading và canonical.
10. So sánh trực quan với website tham chiếu bằng ảnh chụp màn hình cùng kích thước.

Nếu có Playwright hoặc công cụ browser automation, hãy chụp ảnh hai giao diện ở cùng viewport và điều chỉnh các điểm khác biệt về bố cục, kích thước, màu sắc và khoảng cách.

Không tự đánh dấu hoàn thành nếu chưa kiểm thử.

## 11. Báo cáo cuối cùng

Khi hoàn tất, báo cáo:

- Những trang đã triển khai.
- Những thành phần đã tái tạo.
- Các chức năng đã kiểm thử.
- Những điểm khác biệt so với website tham chiếu.
- Những nội dung và hình ảnh còn cần chủ dự án cung cấp.
- Các việc cần làm tiếp theo để triển khai production.

BẮT ĐẦU BẰNG VIỆC KHẢO SÁT WEBSITE VÀ REPOSITORY HIỆN TẠI, SAU ĐÓ TRIỂN KHAI TỪNG PHẦN VÀ KIỂM THỬ THỰC TẾ.