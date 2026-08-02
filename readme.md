Act as an expert frontend developer. Create a modern, responsive landing page for a Gypsum Ceiling (Trần Thạch Cao) construction and material supply company. 

Tech stack: Next.js (React), Tailwind CSS, and Lucide React (for icons).
Design style: Clean, professional, trustworthy. Use a color palette of Blue (primary), White, and Gray.
Content language: Vietnamese.

Please build the following sections:

1. Header (Sticky):
- Logo text: "Thạch Cao Nguyên Vũ" (Blue, bold).
- Navigation links (hidden on mobile, visible on md+): "Thi Công", "Vật Tư & Phụ Kiện", "Báo Giá", "Liên Hệ".
- CTA Button: "Gọi Ngay" (Solid blue background).

2. Hero Section:
- Background: Light blue or subtle geometric pattern.
- Headline: "Giải Pháp Hoàn Hảo Cho Không Gian Trần Nhà" (Large, bold).
- Subheadline: "Chuyên thi công trần thạch cao chất lượng cao và phân phối sỉ/lẻ tấm thạch cao, khung xương, phụ kiện chính hãng với giá tốt nhất thị trường."
- Buttons: Two buttons side-by-side. Primary button: "Xem Dịch Vụ" (Blue). Secondary button: "Mua Vật Tư" (Outline blue).

3. Services Section (Dịch Vụ Thi Công):
- Section Title: "Dịch Vụ Thi Công".
- Grid layout: 3 columns on desktop, 1 on mobile.
- Cards: 
  + Card 1: "Trần Thạch Cao Chìm" - "Thiết kế phẳng, giật cấp sang trọng cho phòng khách, phòng ngủ."
  + Card 2: "Trần Thạch Cao Nổi" - "Tiện lợi, dễ sửa chữa, phù hợp cho văn phòng, nhà xưởng."
  + Card 3: "Vách Ngăn Thạch Cao" - "Cách âm, chống cháy, chia không gian linh hoạt, tiết kiệm chi phí."
- Include placeholder image areas or relevant Lucide icons for each card. Hover effect on cards to add slight shadow.

4. Products Section (Phân Phối Vật Tư & Phụ Kiện):
- Section Title: "Phân Phối Vật Tư & Phụ Kiện".
- Grid layout: 4 columns on desktop, 2 on tablet, 1 on mobile.
- Cards (Product Items): Include a placeholder image, Category name (small text), Product Name (bold), Price is ALWAYS "Liên hệ" (Red color, bold), and a dark gray "Nhận Báo Giá" (Get Quote) button.
  + Item 1: Tấm Thạch Cao Gyproc 9mm (Price: Liên hệ)
  + Item 2: Khung Xương Vĩnh Tường (Price: Liên hệ)
  + Item 3: Tấm Thạch Cao Chống Ẩm (Price: Liên hệ)
  + Item 4: Vít Thạch Cao / Bột Xử Lý (Price: Liên hệ)

5. Footer:
- Dark background (Gray-900), White text.
- 3 columns:
  + Col 1: "Thạch Cao Nguyên Vũ" and short description.
  + Col 2: Contact Info using icons. Hotline: "0903 839 305 / 0928 577 779", Email: "contact@thachcaonguyenvu.com", Address: "[Nhập địa chỉ cửa hàng]".
  + Col 3: Quick Quote form (Input field for phone number and a "Gửi" submit button).

6. Floating Action Buttons (FAB - Nút liên hệ góc phải dưới):
- Create a fixed `div` at the bottom-right corner of the screen (z-index: 50).
- Include two circular buttons stacked vertically (flex-col, gap-4).
- Button 1 (Top): Zalo Button. Blue background (#0068FF), text "Zalo" or a message icon.
- Button 2 (Bottom): Phone Button. Green background, Lucide Phone icon, with a subtle ping/pulse animation to attract attention.

Ensure the code is a single functional React component, completely responsive (mobile-first approach), properly structured, and ready to be deployed on Vercel. Use proper padding and margins for breathing room between sections.