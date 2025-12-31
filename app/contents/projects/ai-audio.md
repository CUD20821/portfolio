---
id: "ai-audio"
titleVI: "Hệ thống tích hợp AI để phân tích ghi âm của công ty chứng khoán"
descriptionVI: "Hệ thống lưu trữ, tạo ghi âm, tích hợp AI vào phân tích nội dung audio để suggest thông tin dựa vào hồ sơ khách hàng"
titleJP: "証券会社向け音声解析AIシステム"
descriptionJP: "通話録音データを一元管理し、AI により音声内容を分析・要約。顧客プロフィールと連携し、営業担当者向けに提案情報を提供する社内システム。"
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

2.&nbsp; Ứng dụng phải kết nối qua remote desktop(Amazon AppStream 2.0)
- Yêu cầu **sự bảo mật**

## Công nghệ

1.&nbsp; React(Typescript)

2.&nbsp; Python(FastAPI)

5.&nbsp; Miro(quản lý Detail Design)

6.&nbsp; Backlog(Task management)

7.&nbsp; GG Workspace(quản lý tài liệu bên Nhật và Việt)

8.&nbsp; Amazon AppStream 2.0()

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
# I. 概要紹介
本アプリケーションは、日本の証券会社向けの社内システムとして開発され、音声録音データを集約し、AI を活用して録音内容を分析し、営業担当者向けに提案情報を提供することを目的としています。

**プロジェクトの主な構成要素：**
- `録音`：PC 上での通話録音、または第三者録音ソフトである VClog からのデータ取込を行い、AI による要約処理を実施。OpenSearch を用いた検索機能を提供。
- `顧客プロフィールの提案`：顧客より提供されたデータソースから profile 情報を取込み、profile の評価・分析を可能とする機能。
- `チャットボット`：他チームで開発中の既存システムをベースに clone し、本プロジェクトへ統合。

# II. プロジェクトの特性
## 背景

1.&nbsp; 既存システムとの連携が前提  
- **複数システム間の連携・調整が必要**

2.&nbsp; Remote Desktop 経由での接続が必須  
- **高いセキュリティ要件**

## 技術スタック

1.&nbsp; React（TypeScript）

2.&nbsp; Python（FastAPI）

5.&nbsp; Miro（Detail Design 管理）

6.&nbsp; Backlog（タスク管理）

7.&nbsp; Google Workspace（日本側・ベトナム側ドキュメント管理）

8.&nbsp; Amazon AppStream 2.0()

## 運用体制

1.&nbsp; 日本チーム 3 名（エンジニア 1 名、PM 2 名）と、ベトナムチーム 6 名（PM 1 名、BrSE 1 名、エンジニア 3 名、テスター 1 名）による協業体制。

2.&nbsp; 週に `2 回` の定例ミーティングを実施。緊急対応が必要な場合は、Google Meet または Slack の huddle にて即時対応。

3.&nbsp; エンドクライアントは既存システムを保有しているため、接続方式や処理ロジックの確認に多くの時間を要した。特に `認証 / 認可` 周りのロジック調整が重要であった。

4.&nbsp; セキュリティ要件の観点から、`エンドクライアント側データ操作に関するロジックは日本チームが担当`
（LLM モデルの統合および train を含む）。  
ベトナムチームは、同一レポジトリ上で主要ロジック（authen / authorize、CRUD 等）を実装するため、`ソースコード管理における密な連携` が必要であった。

4.&nbsp; 本プロジェクトは、`マルチテナンシー（Multi-tenancy）` モデルで開発されている既存プロジェクトの `1つテナント` として位置付けられている。  
そのため、`core ロジックとの統合` に加え、将来的に `新機能（PoC）の実装および逆統合が可能な構成` を考慮した設計・実装が求められた。

# III. 得られた成果・学び

1.&nbsp; AI をアプリケーションへ統合する際のメリット・デメリットを理解  
- `モデルの精度` は、AI 機能を本格的に展開できるかどうかを左右する重要な要素  
- `コスト最適化` も、AI 導入時の重要な検討課題であることを認識

2.&nbsp; 証券会社社員からの良好なフィードバックを獲得  

- 社員の `約 80%` が「利用したい」「期待している」「業務運営に有効だと感じる」と回答  
- エンドクライアントの契約更新（延長）につながる成果を創出

3.&nbsp; 短期間でのリリース対応に関する実務経験を獲得  

- KPI 達成のため、`日次リリース` を行ったフェーズを経験  
- PM との連携およびタスク優先度管理に関する実践的な知見を蓄積
