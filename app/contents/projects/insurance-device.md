---
id: "insurance-device"
titleVI: "Bảo hiểm thiết bị"
descriptionVI: "Bảo hiểm khi thiết bị điện tử bị hư hỏng, bao gồm các thiết bị tử thông dụng như điện thoại, máy tính bảng, tivi,vv"
titleJP: ""
descriptionEN: ""
link: ""
tech: ["NuxtJS", "GoLang"]
date: "2024-12-01"
slug: ""
image: "/projects/insurance-device.png"
category: "Insurance Tech"
url: "/projects/insurance-device"
---

<---vi--->

# I. Giới thiệu chung

Bảo hiểm thiết bị là loại bảo hiểm ngắn hạn, giúp người dùng giảm rủi ro chi phí sửa khi smartphone hoặc thiết bị kỹ thuật số bị hư hỏng, rơi vỡ, dính nước, lỗi, hoặc bị trộm.vv.

Dự án được bắt đầu phát triển từ tháng 12/2025, được hoàn thành trong vòng **2.5 tháng** và chính thức release từ tháng **5/2025**.

**Các thành phần chính của dự án:**

- `Trang landing page`: Giúp người dung hình dung về lợi ích bảo hiểm này mang lại.
- `Trang đăng ký hợp đồng`: Người thực hiện các bước đăng ký để có thể bắt đầu hợp đồng bảo hiểm.
- `Trang mypage`: Người dùng quản lý thông tin và trạng thái hợp đồng, đồng thời có thể yêu cầu bồi thường khi có sự cố xảy ra.

# II. Đặc trưng của dự án

## Bối cảnh

1.&nbsp; Dự án đầu tiên được phía Nhật giao làm đủ 3 thành phần chínnh của domain Insurannce tech

- Yêu cầu **sự tuân theo quy tắc đặc thù của cụm dự án**

2.&nbsp; Dự án tiền đề để mở rộng thêm các dự án trong lĩnh vực Insurance tech

- Yêu cầu **phối hợp và giao tiếp hiệu quả**

## Công nghệ

1.&nbsp; Nuxtjs(Typescript)

2.&nbsp; Golang(Echo)

3.&nbsp; Miro(quản lý Detail Design)

4.&nbsp; Backlog(Task management)

5.&nbsp; GG Workspace(quản lý tài liệu bên Nhật và Việt)

## Cách vận hành

1.&nbsp; Team Nhật Bản gồm 3 người(1 dev, 2 PM) và team Việt Nam gồm 6 người(1 PM, 1 BrSE, 3 dev, 1 QC) phối hợp.

2.&nbsp; Mỗi tuần phải họp từ `1 ~ 2 lần`, nếu có vấn đề cần giải quyết gấp sẽ gọi trực tiếp qua google meeting hoặc huddle slack để giải thích vấn đề và đưa ra hướng giải quyết.

3.&nbsp; Vì là dự án đầu tiên được làm đủ cả 3 thành phần, phía Nhật yêu cầu cao trong việc `tuân thủ cách triển khai code và review chéo`. Mỗi PR đều cần lead phía Việt Nam review trước khi thông báo cho Nhật Bản.

4.&nbsp; Phong cách code của Việt Nam(`ưu tiên triển khai logic core trước, viết unit test sau khi đã chạy được 2 tuần ~ 1 tháng`) và Nhật(`viết unit test từ đầu, mỗi PR đều phải kèm logic và unit test tương ứng`) nên đã có những bất đồng ý kiến ban đầu, nhưng thông qua các buổi meeting đã hoà hợp được quan điểm 2 bên.

5.&nbsp; Dự án theo mô hình [SaaS chuyên về lĩnh vực bảo hiểm](https://finatext.com/domain/insurtech/inspire/) - tức là sẽ có thành phần được xây dựng sẵn, từ đó sẽ customize theo nhu cầu khách hàng. Việc `lần đầu được đi sâu vào mô hình` + `ứng dụng được những thứ sẵn có` + `yêu cầu cao về chất lượng và thời gian` đã có những sai sót không tránh khỏi, nhưng nhờ buổi retrospective sau khi dự án release đã giúp 2 bên hiểu nhau hơn

# III. Những điều đã đạt được

1.&nbsp; Trở thành tiền đề để nhận được các dự án thuộc cùng business sau này

- Dự án hoàn thành trước schedule Nhật đưa ra `trước 2 tuần` đã chứng minh được năng lực của team
- Nhờ sự phối hợp hiệu quả đã giúp team Nhật `mong muốn thành lập team Labo`

2.&nbsp; Hiểu rõ hơn về mô hình SaaS bảo hiểm

- Hiểu pros & cons của thành phần và chức năng đã có
- Hiểu mô hình BFF hoạt động, từ đó truy vết hiệu quả

<---ja--->
JA
