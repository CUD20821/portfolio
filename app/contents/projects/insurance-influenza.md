---
id: "insurance-influenza"
titleVI: "Bảo hiểm cảm cúm"
descriptionVI: "Bảo hiểm ngắn hạn phục vụ cho mùa dịch cúm ở Nhật"
titleJP: "インフルエンザ保険"
descriptionJP: "日本のインフルエンザ流行期に向けた短期型保険の申込・契約管理を提供する保険"
link: ""
tech: ["NuxtJS", "GoLang"]
duration: "2025-10 ~ 2025-12"
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
# I. 概要紹介
本プロジェクトは、楽天少額短期保険の顧客向けに提供されるインフルエンザ保険であり、[短期保険商品](https://small-short-ins.rakuten.co.jp/)の一つとして位置付けられています。  
主な目的は、インフルエンザ流行期（通常は 12 月～翌年 3 月）において、ユーザーが自身に適した保険プランを簡単に選択・申込できるよう支援することです。

本プロジェクトは、先行して開発された「熱中症保険」プロジェクトの成果と評価を受け、その延長として開発されました。

**プロジェクトの主な構成要素：**
- `契約申込ページ`：ユーザーが Web サイト上で保険プランを確認し、システムが自動算出した保険料をもとに、詳細フォームを入力することで迅速に保険契約を開始。
- `マイページ`：ユーザーが契約件数および契約ステータスを管理し、保険期間中に保険金請求を行うことが可能。

# II. プロジェクトの特性
## 背景

1.&nbsp; 既存プロジェクトをベースに、短期間（10 月中旬～11 月末）での開発が必要  
- **業務理解のスピードが求められた**

2.&nbsp; 開発と並行してドキュメントを作成  
- **開発チームとの密な連携が必要**

3.&nbsp; 日本・ベトナム両チームによる並行 QA  
- **日本側への日次進捗報告が必須**

## 技術スタック

1.&nbsp; NuxtJS（TypeScript）

2.&nbsp; Golang（Echo）

3.&nbsp; Miro（Detail Design 管理）

4.&nbsp; Backlog（タスク管理）

5.&nbsp; Google Workspace（日本側・ベトナム側ドキュメント管理）

## 運用体制

1.&nbsp; 日本チーム 2 名（エンジニア 1 名、PM 1 名）と、ベトナムチーム 5 名（PM 1 名、BrSE 1 名、エンジニア 2 名、テスター 1 名）による協業体制。

2.&nbsp; 短期開発案件であったため、日本側の要望により `毎朝の daily report` を実施。

3.&nbsp; 要件・進捗管理は GitHub の `Discussions` を中心に行い、Slack と併用することで迅速な共有・意思決定を実現。

5.&nbsp; 既存プロジェクトをベースとしつつも、`年齢選択範囲` や `契約開始日` など、商品ごとの業務ロジックが異なるため、ロジック修正には想定以上の調整時間を要した。

# III. 得られた成果・学び

1.&nbsp; 開発チームとの連携による業務理解の深化
- 開発チームによるソースコード調査と、日本側との直接コミュニケーションを通じて、最適な実装方針を確定。

2.&nbsp; 新しいチケット管理手法の導入
- スピードと利便性を重視し、従来の Backlog 管理ではなく、GitHub `Discussions` を要件管理に活用。

3.&nbsp; ロジック優先でのリリース経験
- 通常のフロー（Basic Design → Detail Design → Development → Test）とは異なり、  
  `実装と同時にロジックを確認` し、happy case 確認後すぐに PR を日本側へ共有。
- 日本側との並行確認により、ロジック・UI の不整合を早期解消。  
  ⇒ Staging リリース後、顧客からの指摘は発生せず。