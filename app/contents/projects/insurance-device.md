---
id: "insurance-device"
titleVI: "Bảo hiểm thiết bị"
descriptionVI: "Bảo hiểm khi thiết bị điện tử bị hư hỏng, bao gồm các thiết bị tử thông dụng như điện thoại, máy tính bảng, tivi,vv"
titleJP: "デジタル機器向け保険"
descriptionJP: "スマートフォンやデジタル機器の故障・破損・盗難に対応した、短期型デバイス保険の申込・契約管理を行う保険"
link: ""
tech: ["NuxtJS", "GoLang"]
start: "2024-12"
end: "2025-05"
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
# I. 概要紹介

デバイス保険は短期型の保険商品であり、スマートフォンや各種デジタル機器が故障・落下破損・水濡れ・不具合・盗難等の事故に遭った際の修理費用リスクを軽減することを目的としています。

本プロジェクトは 2025 年 12 月より開発を開始し、**約 2.5 ヶ月**で開発を完了、**2025 年 5 月**より正式にリリースされました。

**プロジェクトの主な構成要素：**

- `ランディングページ`：保険の内容および利用メリットをユーザーに分かりやすく伝えるページ。
- `契約申込ページ`：ユーザーが保険契約を開始するための申込フローを提供。
- `マイページ`：契約情報および契約ステータスの管理に加え、事故発生時の保険金請求が可能。

# II. プロジェクトの特性

## 背景

1.&nbsp; 日本側より初めて Insurance Tech ドメインにおける主要 3 コンポーネントすべてを任されたプロジェクト

- **ドメイン特有のルール・設計方針への厳密な準拠が必要**

2.&nbsp; Insurance Tech 領域における後続プロジェクト拡大のための前提案件

- **円滑な連携および高いコミュニケーション品質が求められた**

## 技術スタック

1.&nbsp; NuxtJS（TypeScript）

2.&nbsp; Golang（Echo）

3.&nbsp; Miro（Detail Design 管理）

4.&nbsp; Backlog（タスク管理）

5.&nbsp; Google Workspace（日本側・ベトナム側ドキュメント管理）

## 運用体制

1.&nbsp; 日本チーム 3 名（エンジニア 1 名、PM 2 名）と、ベトナムチーム 6 名（PM 1 名、BrSE 1 名、エンジニア 3 名、テスター 1 名）による協業体制。

2.&nbsp; 週に `1～2 回` の定例ミーティングを実施。緊急課題が発生した場合は、Google Meet または Slack huddle にて即時対応。

3.&nbsp; 本プロジェクトは、主要 3 コンポーネントすべてを初めて実装する案件であったため、日本側より `コード実装方針およびクロスレビュー` に対して高い品質要求があった。  
すべての PR は、日本側へ連携する前にベトナム側の lead による review が必須とされた。

4.&nbsp; ベトナム側（`コアロジックを先に実装し、２週間〜１ヶ月暗いほど安定後に unit test を追加`）と、日本側（`初期段階から unit test を実装し、すべての PR にロジックと test を含める`）の開発スタイルの違いにより、当初は意見の相違が発生したが、定例ミーティングを通じて相互理解が進み、最終的には共通認識を形成できた。

5.&nbsp; 本プロジェクトは、[保険領域に特化した SaaS モデル](https://finatext.com/domain/insurtech/inspire/) に基づいて開発されており、既存コンポーネントをベースに顧客要件へ customize する形式であった。  
`保険SaaS モデルへの初めての深掘り` + `既存資産の活用` + `高い品質・スケジュール要求` により、一定の課題は発生したものの、リリース後のレトロスペクティブを通じて、日越双方の理解を深める結果となった。

# III. 得られた成果・学び

1.&nbsp; 同一 Insurance Tech 領域における後続案件獲得の基盤を構築

- 日本側の想定スケジュールより `2 週間前倒し` で完了し、チームの開発力を証明
- 高い協業品質により、日本側から `Labo チーム設立` の要望を獲得

2.&nbsp; 保険 SaaS モデルへの理解を深化

- 既存コンポーネントおよび機能の pros / cons を把握
- BFF モデルの構造と挙動を理解し、効率的なトレーシングが可能となった
