---
id: "insurance-influenza"
titleVI: "Bảo hiểm cảm cúm"
descriptionVI: "Bảo hiểm ngắn hạn phục vụ cho mùa dịch cúm ở Nhật"
titleJP: ""
descriptionEN: ""
link: ""
tech: ["NuxtJS", "GoLang"]
date: "2025-10-10"
slug: ""
image: "/projects/insurance-influenza.png"
category: "Insurance Tech"
url: "/projects/insurance-influenza"
---
<---vi--->
# I. Giới thiệu chung
Bảo hiểm cho dịch cúm cho khách hàng Rakuten Shoutan, thuộc phân khúc sản phẩm [bảo hiểm ngắn hạn](https://small-short-ins.rakuten.co.jp/). Mục tiêu của dự án là giúp cho người dùng đăng ký và chọn ra được gói bảo hiểm phù hợp trong trong mùa cúm(thường bắt đầu từ tháng 12 ~ 3 năm sau)

Dự án được phát triển tiếp nhờ có hiệu tốt từ dự án bảo hiểm sốc nhiệt trước đó.

**Các thành phần chính của dự án:**
- `Trang đăng ký hợp đồng`: Người dùng vào trang web để tham khảo các gói bảo hiểm phù hợp, hệ thống sẽ tự tính toán mức phí phù hợp cho từng người dùng, từ đó điền form chi tiết để người dùng có thể bắt đầu bảo hiểm 1 cách nhanh chóng.
- `Trang mypage`: Người dùng sẽ quản lý số lượng, tình trạng hợp đồng đã đăng ký. Trong thời hạn bảo hiểm, người dùng có thể yêu cầu bên bảo hiểm thanh toán thông qua mypage.

# II. Đặc trưng của dự án
## Bối cảnh

1.&nbsp; Phát triển dựa vào một án đã có trong 1 thời gian ngắn(giữa tháng 10 ~ cuối tháng 11)
- Yêu cầu **nắm bắt nghiệp vụ nhanh**

2.&nbsp; Tài liệu được làm song song trong lúc phát triển
- Yêu cầu **phối hợp chặt chẽ với team phát triển**

3.&nbsp; Kiểm tra chất lượng song song giữa Nhật Bản và Việt Nam
- Yêu cầu **báo cáo tiến độ cho team Nhật hằng ngày**


## Công nghệ

1.&nbsp; Nuxtjs(Typescript)

2.&nbsp; Golang(Echo)

3.&nbsp; Miro(quản lý Detail Design)

4.&nbsp; Backlog(Task management)

5.&nbsp; GG Workspace(quản lý tài liệu bên Nhật và Việt)

## Cách vận hành

1.&nbsp; Team Nhật Bản gồm 2 người(1 dev, 1 PM) và team Việt Nam gồm 5 người(1 PM, 1 BrSE, 2 dev, 1 QC) phối hợp.

2.&nbsp; Vì dự án gấp nên bên Nhật yêu cầu cần phải có `daily report hằng ngày vào mỗi sáng`

3.&nbsp; Dự án quản lý bằng ticket ở `Discussion` của github và kết hợp với Slack để thảo luận và thông báo kịp thời

5.&nbsp; Mặc dù phát triển dự án đã có trước đó, nhưng nghiệp vụ đặc thù của từng sản phầm ví dụ như về `phạm vi chọn tuổi`, `ngày bắt đầu hợp đồng`, etc khiến cho việc chỉnh sửa logic cần thời gian hơn dự kiến

# III. Những điều đã đạt được

1.&nbsp; Phối hợp với team phát triển để hiểu rõ nghiệp vụ
- Nhờ team phát triển điều tra logic từ source code, kết hợp với trao đổi với bên Nhật để chốt lại hướng xử lý

2.&nbsp; Cách quản lý ticket mới
- Vì tính chất cần sự nhanh chóng và tiện lợi cho team phát triển(không cần switch qua nhiều ứng dụng) nên thay vì dùng backlog để quản lý yêu cầu từ phía Nhật như thông thường, dự án sử dụng chức năng `Discussion` của github 

3.&nbsp; Kinh nghiệm trong việc ưu tiên ship logic trước
- Khác với quy trình thông thường(basic design -> detail design -> development -> team Việt test -> team Nhật test), team `confirm logic song song quá trình implement`(tức là bước detail design và development kết hợp) và ship(gửi PR cho team JP) ngay sau khi qua bước kiểm tra happy case từ dev + brse + tester
- Cộng với việc kết hợp kiểm tra từ phía Nhật nên những mismatch về logic và UI được xử lý nhanh chóng -> Sau khi release staging không có feedback từ phía khách hàng

<---ja--->
## I. 概要
(大学・大学院). 

(大学・大学院). (大学・大学院). (大学・大学院). (大学・大学院). 
## II. プロジェクト特徴
### 1. 技術
### 2. 人

## III. 達成した点