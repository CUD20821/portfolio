---
id: "insurance-school1"
titleVI: "Bảo hiểm trường học"
descriptionVI: "Dự án bảo hiểm dành cho học sinh, dùng để đăng ký và quản lý hợp đồng bảo hiểm và đối tượng của sản phẩm trải dài từ cấp từ mẫu giáo đến đại học."
titleJP: "学校・こども総合保険・・・学校に通う子供を持つ保護者が加入する保険"
descriptionJP: "学校・こども総合保険・・・学校に通う子供を持つ保護者が加入する保険"
link: "example.comn"
tech: ["VueJS"]
date: "2025-07-01"
slug: ""
image: ""
category: "Insurance Tech"
---
<---vi--->
# I. Giới thiệu chung
Bảo hiểm trường học là tên chung của một dự án lớn, trong đó được chia thành nhiều phần nhỏ hơn tương ứng với mỗi ngôi trường để phù hợp cho nhu cầu của từng trường.

Dự án được bắt đầu phát triển từ 10/2023, triển khai đầu tiên dành cho học sinh mầm non(園児). Sau đó, được mở rộng cho cấp 2 và cấp 3(中高連) các tháng tiếp theo. Dự án được release lần đầu tiên vào đầu năm 2024. Dự án thu hút được sự quan tâm và được triển khai đến cấp đại học(大学・大学院). 

Dự án được bên mình tiếp nhận vào giữa năm 2025 để đáp ứng được số lượng trường ngày càng mở rộng.

**Các thành phần chính của dự án:**
- Trang đăng ký hợp đồng: Học sinh vào trang web của từng trường để tham khảo các loại hợp đồng mà mỗi nơi triển khai, từ đó chọn ra sản phẩm phù hợp và thực hiện thủ tục đăng ký qua form có sẵn
- Trang mypage: Học sinh hoặc phụ huynh sẽ quản lý số lượng, tình trạng hợp đồng đã đăng ký. 

# II. Đặc trưng của dự án
## Bối cảnh

1.&nbsp; Được bàn giao dự án từ một bên khác 
- Yêu cầu **sự ổn định**

2.&nbsp; Số lượng trường học cần xử lý lớn
- Yêu cầu **sự mở rộng**

3.&nbsp; Logic chung khá giống nhau nhưng từng trường có yêu cầu chi tiết khác nhau
- Yêu cầu **sự linh hoạt nhưng nhất quán**

## Công nghệ

1.&nbsp; Nuxtjs(Typescript)

2.&nbsp; SCSS

3.&nbsp; VueX(Store management)

4.&nbsp; Golang(Echo)

5.&nbsp; Miro(quản lý Detail Design)

6.&nbsp; Backlog(Task management)

7.&nbsp; GG Workspace(google sheet, drive)

## Con người

1.&nbsp; Team Nhật Bản gồm 3 người(1 dev, 2 PM) và team Việt Nam gồm 6 người(1 PM, 1 BrSE, 3 dev, 1 QC) phối hợp.

2.&nbsp; Mỗi tuần phải họp từ 1 ~ 2 lần, nếu có vấn đề cần giải quyết gấp sẽ gọi trực tiếp qua google meeting hoặc huddle slack để giải thích vấn đề và đưa ra hướng giải quyết.

3.&nbsp; Cả team Nhật và Việt đều là người mới và lần đầu làm việc chung, nên việc nắm bắt dự án và trao đổi ban đầu để thống nhất vấn đề cần thời gian. Nhưng nhờ ý thức về mức độ quan trọng của dự án của từng thành viên ở cả 2 team, cả 2 chỉ cần 1 tháng đã bắt nhịp cách làm việc với nhau.

4.&nbsp; Team Việt được đảm nhận phần set up **sản phẩm**(phần quan trọng nhất để dự án có thể chạy) lần đầu tiên, nên đã có sự lo lắng nhất định. Nhưng nhờ sự tìm tòi và bằng cách "thử và sai" trước khi dự án bắt đầu 1.5 ~ 2 tháng, team đã tự tin cân mọi thể loại trường học 😤.

5.&nbsp; Team Nhật đã thể hiện mong muốn kết hợp lâu dài với bên Việt bằng 1 chuyến du hành qua Việt Nam khi dự án vừa chạy được... 0.5 tháng. Mục tiêu của team Nhật là chia sẻ know-how về lĩnh vực bảo hiểm, về cách set up sản phẩm sao cho đúng và trúng, và quan trọng nhất là kết nối giữa người - người với nhau(ở 1 thế giới AI first thì điều này rất quan trọng!!)

# III. Những điều đã đạt được
1.&nbsp; Sự tin tưởng của phía Nhật Bản: 
- Trực tiếp đảm nhận set up sản phẩm
- 

2.&nbsp; Tham gia nhiều hơn về mặt kỹ thuật: không phải trực tiếp viết code, nhưng tham gia nhiều hơn về quản lý tình hình thông qua Github và nhiều thứ khác
- Trao đổi request, bug, etc trên `Discussions` của github
- Set up sản phẩm bảo hiểm
- 
- Sử dụng `bot github-action` được tích hợp trong repo dự án để điều tra bug, tìm hiểu tài liệu dự án

3.&nbsp; Cách tiếp cận dự án đã chạy lâu
- Kết hợp giữa cách làm `thủ công(đọc tài liệu, sử dụng trực tiếp sản phẩm , tương tác trực tiếp qua slack)` để nắm tổng quát về dự án và logic business, đồng thời dùng `AI(tra repo, tra business)` để có thể nắm thông tin về logic của màn hình, validation của từng fields
- 

4.&nbsp; Sắp xếp công việc khi có nhiều sản phẩm cần xử lý
- Phân chia tài liệu DD theo từng category riêng để dễ dàng nắm bắt nội dung cần thiết nhanh nhất
- Tận dụng chức năng `Documents` của backlogs để list up đầu công việc và báo cáo theo format đơn giản theo khoảng thời gian: tuần này, tuần sau
- Chủ động trao đổi với PM Việt Nam để nắm tình hình nội bộ, từ đó để làm cơ sở trao đổi và sắp xếp bên Nhật


<---ja--->
## I. 概要
(大学・大学院). 

(大学・大学院). (大学・大学院). (大学・大学院). (大学・大学院). 
## II. プロジェクト特徴
### 1. 技術
### 2. 人

## III. 達成した点