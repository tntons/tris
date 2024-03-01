"use client"

import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function VisaDetail() {
    const { detail } = useParams<{ detail: string }>();
    const locale = useLocale();

    const dataTH = { 
        "Bangkok": [ 
            { 
                title: "การออกวีซ่า", 
                detail: "สำหรับปีแรก\n1. ขอวีซ่าทำงาน (Non-Immigration B/IB) จากสถานทูตไทยในประเทศญี่ปุ่น\n2.รับและเข้าประเทศ\n3.ได้รับใบอนุญาตทำงานจากกรมแรงงาน\n4. ยื่นคำร้องขอขยายเวลาได้ที่กรมตรวจคนเข้าเมือง\n5. การขอวีซ่าสำเร็จ (โดยวีซ่าจะมีอายุรวมหนึ่งปีนับจากวันที่ออกวีซ่า)\n\nจำเป็นต้องมีการต่ออายุใบอนุญาตทำงานตั้งแต่ปีหน้าเป็นต้นไป", 
            }, 
            { 
                title: "การเตรียมตัวสำหรับการขอวีซ่า", 
                detail: "หนังสือเดินทาง\n·แบบฟอร์มคำร้องขอวีซ่าทำงาน\n·รูปถ่ายสี\nResume\n·หนังสือเชิญเข้าทำงาน ที่ออกโดยบริษัทท้องถิ่นฉบับภาษาอังกฤษ หรือ ภาษาไทย 1 ฉบับ\n·สำเนาหนังสือรับรองบริษัทที่จดทะเบียนในประเทศไทย\n·ค่าธรรมเนียมการสมัคร: 10,000 เยน", 
        }], 
        "Fukuoka": [ 
            { 
                title: "การออกวีซ่า", 
                detail: "การขอวีซ่าทำงานในญี่ปุ่นนั้นต้องมีสัญญาว่าจ้างจากบริษัทก่อน จึงจะสามารถดำเนินการขอวีซ่าได้ โดยแบ่งเป็นสองกรณี คือ\n\nกรณีที่ต้องเดินทางจากไทย\nการพำนัก (COE) จากนั้นเราจึงนำใบ COE ไปขอวีซ่าที่สถานทูตญี่ปุ่น\nในประเทศไทย (หรือศูนย์บริการวีซ่าที่สถานทูตกำหนด)\n\nกรณีที่พำนักอยู่ในญี่ปุ่นอย่างถูกต้องแล้ว\nจำเป็นจะต้องได้รับเอกสารจากทางบริษัทผู้ว่าจ้างเพื่อนำไปเปลี่ยนวีซ่า\nเป็นวีซ่าทำงานที่สำนักงานตรวจคนเข้าเมือง (นิวกัง)\n\nโดย วีซ่าทำงาน (ชูโรวีซ่า) แบ่งเป็น 18 ประเภท ตามลักษณะของความถนัด\nในแต่ละงาน โดยระยะเวลา ตั้งแต่ 3 เดือน , 1 ปี ,\n3 ปี , 5 ปี", 
            }, 
            {
                title: "การเตรียมตัวสำหรับการขอวีซ่า",
                detail: "สิ่งที่ต้องเตรียม\n- หนังสือเดินทาง (พาสปอร์ต)\n- ใบคำร้องขอวีซ่า (ดาวน์โหลดได้จากเว็บไซต์ของศูนย์บริการวีซ่า)\n- รูปถ่ายสุภาพขนาด 2x2 นิ้ว ถ่ายภายใน 6 เดือน\n- แบบสอบถามเพื่อการยื่นขอวีซ่า (ดาวน์โหลดได้จากเว็บไซต์ของศูนย์บริการวีซ่า)\n- ใบรับรองสถานภาพการพำนัก (Certificate of Eligibility) ฉบับจริงและสำเนา\n- ทะเบียนบ้าน ฉบับจริงและสำเนา\n- เอกสารแสดงการเปลี่ยนชื่อตัวและนามสกุล ในกรณีที่เคยเปลี่ยน\nระยะเวลาในการขอวีซ่าอยู่ที่ราวๆ 5 - 10 วันทำการ"
            }
        ]
    }

    const dataEn = {
        "Bangkok": [
            {
                "title": "Visa Issuance",
                "detail": "For the first year\n1. Apply for a work visa (Non-Immigration B/IB) from the Thai Embassy in Japan\n2. Receive and enter the country\n3. Obtain a work permit from the Department of Employment\n4. Apply for an extension at the Immigration Bureau\n5. Successful visa application (the visa will be valid for one year from the date of issuance)\n\nRenewal of the work permit is required from the next year onwards"
            },
            {
                "title": "Preparing for Visa Application",
                "detail": "Passport\n·Work visa application form\n·Color photograph\nResume\n·Job invitation letter issued by a local company in English or Thai 1 copy\n·Copy of the company registration certificate in Thailand\n·Application fee: 10,000 Yen"
            }
        ],
        "Fukuoka": [
            {
                "title": "Visa Issuance",
                "detail": "To apply for a work visa in Japan, you must first have an employment contract from a company. There are two cases:\n\nCase for traveling from Thailand\nObtain a Certificate of Eligibility (COE), then use the COE to apply for a visa at the Japanese Embassy in Thailand (or at a visa service center designated by the embassy).\n\nCase for those already residing in Japan legally\nIt is necessary to receive documents from the employing company to change to a work visa at the Immigration Bureau (Nyukan).\n\nWork visas (Shuro Visa) are divided into 18 types according to the nature of the skills in each job, with durations ranging from 3 months, 1 year, 3 years, to 5 years."
            },
            {
                "title": "Preparing for Visa Application",
                "detail": "Required documents\n- Passport\n- Visa application form (downloadable from the visa service center website)\n- Polite photo size 2x2 inches, taken within 6 months\n- Questionnaire for visa application (downloadable from the visa service center website)\n- Original and copy of the Certificate of Eligibility\n- Original and copy of the household registration\n- Documents showing name and surname change, in case of any\nThe visa application period is approximately 5 - 10 working days"
            }
        ]
    }

    const dataJp = {
        "Bangkok": [
            {
                "title": "ビザ発行について",
                "detail": "初年度について\n1. 日本にあるタイ大使館から就労ビザ（Non-Immigration B/IB）を申請する\n2. 受け取って国に入る\n3. 労働省から就労許可を受け取る\n4. 移民局で延長申請をする\n5. ビザ申請が成功する（ビザは発行日から1年間有効）\n\n次年度以降は、就労許可の更新が必要です"
            },
            {
                "title": "ビザ申請の準備",
                "detail": "パスポート\n·就労ビザ申請フォーム\n·カラー写真\n履歴書\n·地元企業からの仕事の招待状（英語またはタイ語）1通\n·タイに登録された企業の登記証明書のコピー\n·申請料金: 10,000円"
            }
        ],
        "Fukuoka": [
            {
                "title": "ビザ発行について",
                "detail": "日本で就労ビザを申請するには、まず企業からの雇用契約が必要です。それには二つのケースがあります：\n\nタイからの場合\n就労資格証明書（COE）を取得し、それをもってタイの日本大使館（または指定されたビザサービスセンター）でビザを申請します。\n\n日本に合法的に滞在している場合\n雇用企業からの書類を受け取り、それを使って移民局で就労ビザに変更します。\n\n就労ビザ（種類ビザ）は、各職種のスキルに応じて18種類に分けられ、期間は3ヶ月から1年、3年、5年まであります。"
            },
            {
                "title": "ビザ申請の準備",
                "detail": "準備するもの\n- パスポート\n- ビザ申請フォーム（ビザサービスセンターのウェブサイトからダウンロード可能）\n- 直近6ヶ月以内に撮影した2x2インチの写真\n- ビザ申請のためのアンケート（ビザサービスセンターのウェブサイトからダウンロード可能）\n- 滞在資格証明書（Certificate of Eligibility）の原本とコピー\n- 戸籍謄本の原本とコピー\n- 名前や姓が変更された場合の変更証明書\nビザの申請期間は約5 - 10営業日です。"
            }
        ]
    }

    const data = locale === 'en' ? dataEn : locale === 'jp' ? dataJp : dataTH;

    const details = data[detail as keyof typeof data] || [];

    return (
        <div>
            <div className="bg-[#D9D9D9] h-[10rem] p-[23px] justify-center flex flex-col">
                <p className="text-nav-bar text-[19px] font-bold mb-[-15px]">How to get </p>
                <h1 className="text-nav-bar text-[70px] font-bold">Visa</h1>
            </div>
            <div className="p-[30px]">
                <div className="bg-[#F7F6ED] p-[18px]">
                    <h1 className="text-[#142864] text-[44px] font-bold">{detail}</h1>
                    {details.map((detail, index) => {
                        return (
                            <div key={index} className="flex flex-col mt-[30px] gap-[20px]">
                                <h1 className="text-[17px] font-light">{detail.title}</h1>
                                <p className="text-[15px] font-light" style={{ whiteSpace: 'pre-line' }}>{detail.detail}</p>
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}