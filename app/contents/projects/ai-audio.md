---
id: "ai-audio"
titleVI: "Hệ thống tích hợp AI để phân tích ghi âm của công ty chứng khoán"
descriptionVI: "Hệ thống lưu trữ, tạo ghi âm, tích hợp AI vào phân tích nội dung audio để suggest thông tin dựa vào hồ sơ khách hàng"
titleJP: ""
descriptionEN: ""
link: ""
tech: ["React", "Python"]
date: "2024-12-01"
slug: ""
image: "/projects/ai-audio.png"
category: "AI"
url: "/projects/ai-audio"
---

<---vi--->
# I. Giới thiệu chung
Ứng dụng nội bộ cho công ty chứng khoán Nhật Bản, phục vụ cho mục đích tổng hợp thông tin ghi âm, dùng AI để hỗ trợ đưa ra đề xuất dựa vào nội dung bản ghi âm cho nhân viên kinh doanh.

**Các thành phần chính của dự án:**
- `Record`: Ghi âm cuộc gọi trên PC hoặc import thông tin VClog(phần mềm ghi âm thứ 3), sau đó phân tích bằng AI để summary, có tính năng search với OpenSearch
- `Suggest customer profile`: Import thông tin profile từ nguồn data do khách hàng cung cấp và cho phép đánh giá profile.
- `Chatbot`: được clone ra từ 1 hệ thống team khác đang phát triển và tích hợp vào

# II. Đặc trưng của dự án
## Bối cảnh

1.&nbsp; Dự án tích hợp với các hệ thống đã phát triển
- Yêu cầu **phối hợp nhiều hệ thống**

2.&nbsp; Ứng dụng phải kết nối qua remote desktop
- Yêu cầu **sự bảo mật**

## Công nghệ

1.&nbsp; React(Typescript)

2.&nbsp; Python(FastAPI)

5.&nbsp; Miro(quản lý Detail Design)

6.&nbsp; Backlog(Task management)

7.&nbsp; GG Workspace(quản lý tài liệu bên Nhật và Việt)

## Cách vận hành

1.&nbsp; Team Nhật Bản gồm 3 người(1 dev, 2 PM) và team Việt Nam gồm 6 người(1 PM, 1 BrSE, 3 dev, 1 QC) phối hợp.

2.&nbsp; Mỗi tuần phải họp từ `2 lần`, nếu có vấn đề cần giải quyết gấp sẽ gọi trực tiếp qua google meeting hoặc huddle slack để giải thích vấn đề và đưa ra hướng giải quyết.

3.&nbsp; Khách hàng cuối đã có sẵn hệ thống trước đó, nên cần nhiều thời gian để confirm cách kết nối cũng như thời gian cũng như logic. Đặc biệt, cần chỉnh sửa nhiều logic về `authentication/authorization`

4.&nbsp; Vì tính chất bảo mật, nên các logic liên quan về `thao tác dữ liệu ở bên khách hàng cuối sẽ được bên Nhật Bản đảm nhận`(bao gồm việc tích hợp và train model LLM). Team Việt Nam sẽ thực hiện triển khai logic chính(authen/authorize, CRUD,etc) cho dự án trong cùng 1 repository nên cần sự phối hợp trong việc `quản lý soure code`.

4.&nbsp; Dự án là `1 tenant` của 1 dự án đang phát triển theo mô hình `Multi-tenancy`, team cần phải xử lý code để có thể `tích hợp được từ logic từ core` cũng như là 1 nơi có thể `triển khai tính năng mới(PoC) và tích hợp ngược lại` sau này.

# III. Những điều đã đạt được

1.&nbsp; Biết được ưu và nhược điểm của AI khi tích hợp trong ứng dụng
- `Độ chính xác của kết quả từ mô hình` sẽ ảnh hưởng lớn đến việc có tích hợp AI rộng rãi hay không
- `Việc tối ưu chi phí` cũng là vấn đề khi áp dụng AI trong ứng dụng

2.&nbsp; Nhận được feedback tốt từ nhân viên của công ty

- `Gần 80%` nhân viên cho biết họ "muốn sử dụng nó", "mong chờ" và "cảm thấy sẽ có lợi cho việc vận hành kinh doanh".
- Tạo điều kiện để khách hàng cuối ký kết gia hạn hợp đồng

3.&nbsp; Có kinh nghiệm khi dự án cần release gấp

- Dự án từng trải qua giai đoạn `release hằng ngày` để đạt được KPI với khách hàng, từ đó mang lại kinh nghiệm trong việc phối hợp với PM và sắp xếp task theo độ ưu tiên

<---ja--->
JA
