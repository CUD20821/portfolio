---
id: "insurance-school"
titleVI: "Bảo hiểm trường học"
descriptionVI: "Dự án bảo hiểm dành cho học sinh, dùng để đăng ký và quản lý hợp đồng bảo hiểm và đối tượng của sản phẩm trải dài từ cấp từ mẫu giáo đến đại học."
titleJP: "学校・こども総合保険"
descriptionJP: "幼稚園から大学までを対象に、学校ごとにカスタマイズ可能な保険商品の申込・契約管理を行う保険"
link: ""
tech: ["NuxtJS", "GoLang"]
start: "2025-07"
end: "2026-01"
slug: ""
image: "/projects/insurance-school.png"
category: "Insurance Tech"
url: "/projects/insurance-school"
---
<---vi--->
# I. Giới thiệu chung
Bảo hiểm trường học là tên chung của một dự án lớn, trong đó được chia thành nhiều phần nhỏ hơn tương ứng với mỗi ngôi trường để phù hợp cho nhu cầu của từng trường.

Dự án được bắt đầu phát triển từ 10/2023, triển khai đầu tiên dành cho học sinh mầm non(園児). Sau đó, được mở rộng cho cấp 2 và cấp 3(中高連) các tháng tiếp theo. Dự án được release lần đầu tiên vào đầu năm 2024. Dự án thu hút được sự quan tâm và được triển khai đến cấp đại học(大学・大学院). 

Dự án được bên mình tiếp nhận vào giữa năm 2025 để đáp ứng được số lượng trường ngày càng mở rộng.

**Các thành phần chính của dự án:**
- `Trang đăng ký hợp đồng`: Học sinh vào trang web của từng trường để tham khảo các loại hợp đồng mà mỗi nơi triển khai, từ đó chọn ra sản phẩm phù hợp và thực hiện thủ tục đăng ký qua form có sẵn
- `Trang mypage`: Học sinh hoặc phụ huynh sẽ quản lý số lượng, tình trạng hợp đồng đã đăng ký. 

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

2.&nbsp; Golang(Echo)

3.&nbsp; Miro(quản lý Detail Design)

4.&nbsp; Backlog(Task management)

5.&nbsp; GG Workspace(quản lý tài liệu bên Nhật và Việt)

## Cách vận hành

1.&nbsp; Team Nhật Bản gồm 3 người(1 dev, 2 PM) và team Việt Nam gồm 6 người(1 PM, 1 BrSE, 3 dev, 1 QC) phối hợp.

2.&nbsp; Mỗi tuần phải họp từ 1 ~ 2 lần, nếu có vấn đề cần giải quyết gấp sẽ gọi trực tiếp qua google meeting hoặc huddle slack để giải thích vấn đề và đưa ra hướng giải quyết.

3.&nbsp; Cả team Nhật và Việt đều là người mới và lần đầu làm việc chung, nên việc nắm bắt dự án và trao đổi ban đầu để thống nhất vấn đề cần thời gian. Nhưng nhờ ý thức về mức độ quan trọng của dự án của từng thành viên ở cả 2 team, cả 2 chỉ cần 1 tháng đã bắt nhịp cách làm việc với nhau.

4.&nbsp; Team Việt được đảm nhận phần set up `sản phẩm`(phần quan trọng nhất để dự án có thể chạy) lần đầu tiên, nên đã có sự lo lắng nhất định. Nhưng nhờ sự tìm tòi và bằng cách "thử và sai" trước khi dự án bắt đầu 1.5 ~ 2 tháng, team đã tự tin cân mọi thể loại trường học.

5.&nbsp; Team Nhật đã thể hiện mong muốn kết hợp lâu dài với bên Việt bằng 1 chuyến du hành qua Việt Nam khi dự án vừa chạy được... 0.5 tháng. Mục tiêu của team Nhật là chia sẻ know-how về lĩnh vực bảo hiểm, về cách set up sản phẩm sao cho đúng và trúng, và quan trọng nhất là kết nối giữa người - người với nhau(ở 1 thế giới AI first thì điều này rất quan trọng!!)

# III. Những điều đã đạt được
1.&nbsp; Sự tin tưởng của phía Nhật Bản
- Trực tiếp đảm nhận set up sản phẩm
- Đề xuất tối ưu của team được xem xét và ứng dụng nhiều hơn
- Sau khi tiếp nhận, team đã release thành công 3 đợt mà hầu như không có bug mà phía Nhật trả về(vì vấn đề đã giải quyết triệt để trong lúc phát triển) => team Nhật tiếp tục bàn giao cho team để phát triển cho những năm tiếp theo

2.&nbsp; Tham gia nhiều hơn về mặt kỹ thuật: không phải trực tiếp viết code, nhưng tham gia nhiều hơn về quản lý tình hình thông qua Github và nhiều thứ khác
- Trao đổi request, bug, etc trên `Discussions` của github
- Set up sản phẩm bảo hiểm(`21/21 sản phẩm`, trong đó có những sản phẩm có số lượng câu hỏi lên đến 50)
- Sử dụng `bot github-action` được tích hợp trong repo dự án để điều tra bug, tìm hiểu tài liệu dự án

3.&nbsp; Cách tiếp cận dự án đã được 1 bên khác phát triển trước đó
- Kết hợp giữa cách làm `thủ công(đọc tài liệu, sử dụng trực tiếp sản phẩm , tương tác trực tiếp qua slack) - 80%` để nắm tổng quát về dự án và logic business, đồng thời dùng `AI(tra repo, tra business) - 20%` để có thể nắm thông tin về logic của màn hình, validation của từng fields
- Chủ động sắp xếp các cuộc `meeting ngắn tầm 15~30 phút` để trao đổi nhanh về những vấn đề chưa hiểu

4.&nbsp; Sắp xếp công việc khi có nhiều sản phẩm cần xử lý
- Phân chia tài liệu DD theo từng category riêng để dễ dàng nắm bắt nội dung cần thiết một cách có hệ thống
- Tận dụng chức năng `Documents` của backlogs để list up đầu công việc và báo cáo theo format đơn giản theo khoảng thời gian: tuần này, tuần sau
- Chủ động trao đổi ngắn với PM Việt Nam(tầm 5~10 phút) để nắm tình hình nội bộ trước ngày họp 1 ngày, từ đó để làm cơ sở trao đổi và sắp xếp công việc với bên Nhật

5.&nbsp; Hiểu được sự cởi mở ban đầu sẽ xoá được bất đồng sau này
- Việc phía Nhật chủ động qua Việt Nam để chia sẻ know-how, khó khăn của dự án trước đó, quan điểm của 2 bên từ việc review code đến cách test đã giúp xoá đi điểm mập mờ 2 bên
- Khi làm việc thẳng thắn trao đổi những vấn đề không rõ để tránh sai xót về logic, về cách code, vv sau này, từ đó xây dựng được sự tin tưởng

<---ja--->
# I. 概要紹介
学校保険は、複数の学校を対象とした大規模プロジェクトの総称であり、各学校ごとの要件に応じて、より小さな単位のプロジェクトに分割して提供されています。

本プロジェクトは 2023 年 10 月に開発を開始し、最初は幼稚園・保育園（園児）向けとして導入されました。その後、翌月以降に中学校・高等学校（中高連）向けへと拡張され、2024 年初頭に初回リリースを実施しました。  
さらに、利用実績と評価を背景に、大学・大学院（大学・大学院）向けにも展開されています。

当チームは、対象学校数の拡大に対応するため、2025 年中頃より本プロジェクトを引き継ぎました。

**プロジェクトの主な構成要素：**
- `契約申込ページ`：各学校ごとに用意された Web サイト上で、提供されている保険商品を確認し、適切なプランを選択した上で、既存の申込フォームから契約手続きを実施。
- `マイページ`：生徒または保護者が、契約件数および契約ステータスを管理するためのページ。

# II. プロジェクトの特性
## 背景

1.&nbsp; 他ベンダーからのプロジェクト引き継ぎ  
- **高い安定性が求められた**

2.&nbsp; 対象となる学校数が非常に多い  
- **高い拡張性が必要**

3.&nbsp; 共通ロジックは類似しているが、学校ごとに詳細要件が異なる  
- **柔軟性と一貫性の両立が必要**

## 技術スタック

1.&nbsp; NuxtJS（TypeScript）

2.&nbsp; Golang（Echo）

3.&nbsp; Miro（Detail Design 管理）

4.&nbsp; Backlog（タスク管理）

5.&nbsp; Google Workspace（日本側・ベトナム側ドキュメント管理）

## 運用体制

1.&nbsp; 日本チーム 3 名（Dev 1 名、PM 2 名）と、ベトナムチーム 6 名（PM 1 名、BrSE 1 名、Dev 3 名、QC 1 名）による協業体制。

2.&nbsp; 週に 1～2 回の定例ミーティングを実施。緊急対応が必要な場合は、Google Meet または Slack huddle にて即時対応。

3.&nbsp; 日越双方ともに初めての共同開発であり、プロジェクト理解および初期の認識合わせに一定の時間を要したが、各メンバーが本プロジェクトの重要性を強く認識していたため、約 1 ヶ月で円滑な協業体制を確立。

4.&nbsp; ベトナムチームは、プロジェクトの根幹となる `保険商品セットアップ` を初めて担当。  
事前に約 1.5～2 ヶ月間の検証期間を設け、「試行錯誤」を重ねることで、あらゆる学校パターンに対応できる体制を構築。

5.&nbsp; プロジェクト稼働開始から約 0.5 ヶ月後、日本チームがベトナムを訪問。  
保険ドメインの know-how、商品設計の考え方を共有するとともに、人と人との信頼関係構築を重視した交流を実施（AI first の時代においても重要な要素）。

# III. 得られた成果・学び

1.&nbsp; 日本側からの高い信頼を獲得
- 保険商品セットアップを直接担当
- チームからの最適化提案が積極的に採用
- 引き継ぎ後、ほぼ日本側からの差戻しなしで 3 回のリリースを成功  
  ⇒ 次年度以降の開発も継続して担当することが決定

2.&nbsp; 技術面での関与範囲を拡大（直接のコーディング以外）
- GitHub `Discussions` を通じた request・bug の整理
- 保険商品セットアップ（`21/21 商品`、最大 50 問の設問を含む商品も対応）
- repo に統合された `GitHub Actions bot` を活用した bug 調査およびドキュメント理解

3.&nbsp; 既存プロジェクト引き継ぎ時のアプローチを確立
- `手動対応（資料読解、実機操作、Slack での直接確認）80%` により business ロジック全体を把握
- `AI 活用（repo・business ロジック検索）20%` により画面・validation 単位の理解を補完
- 不明点は `15～30 分程度の短時間ミーティング` を主体的に設定し迅速に解消

4.&nbsp; 多数の商品を並行処理するための業務整理
- DD 資料を category 単位で整理
- Backlog の `Documents` 機能を活用し、週単位でのタスク可視化と報告
- 定例前日に PM（ベトナム側）と `5～10 分` の事前共有を行い、日本側との議論を円滑化

5.&nbsp; 初期のオープンな姿勢が長期的な信頼構築につながることを実感
- 日本側の訪越による know-how 共有と過去課題の率直な説明により、認識の曖昧さを解消
- 不明点を早期に率直に共有することで、後続のロジック・実装・テストにおける齟齬を防止