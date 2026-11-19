# ASSET_MAP.md

Mapping of every attached file -> detected type -> target section -> final file name.
Names were verified by opening each file (text extraction + page render), not by filename.

## PDFs

| Original file | Detected as | Issuer / facts | Target section | Final file | Published? |
|---|---|---|---|---|---|
| `Aakash_CERTIFICATE.pdf` | Internship completion certificate | StudifySuccess, "1 month" internship in **Data Analyst** (text shows "Data Analyst"/"Data Analysis"), 15-Jul-2026 → 15-Aug-2026, Cert ID ahpT6g | Experience: StudifySuccess ("View certificate") | `public/experience/studifysuccess-internship-certificate-2026.pdf` | Yes |
| `Aakash_Best Intern Certificate - Studifysuccess.pdf` | Achievement certificate | StudifySuccess, outstanding performance in Data Analysis Dept, 15-Jul → 15-Aug-2026 | Achievements #4 | `public/experience/studifysuccess-best-intern-certificate-2026.pdf` | Yes |
| `Aakash_LOR.pdf` | **Letter of Recommendation** (StudifySuccess CEO) | Recommends Data Analysis internship, dated 15-Aug-2026 | *None* | `_originals/` (kept private) | **No — needs your confirmation** |
| `3.pdf` | Participation certificate | **HACKDAY 1.0** by DECODEP (with Unstop, GO.), team `aakashintern2026`, held 20 Sep 2026 | Certifications (participation) | `public/certificates/hackday-1.0-participation-2026.pdf` | Yes |
| `IICT-internship.pdf` | Internship certificate | **IICT** (Indian Institute of Computing and Technology), 45-Day Summer Internship in AI & ML (2026), 15 Jun → 30 Jul 2026; projects: Fake News Detection, Phishing Email Detection. Cert No. IICT/2026/20007943 | Experience: NEW entry (AI/ML Summer Intern) | `public/certificates/iict-summer-internship-2026.pdf` | Yes |
| `IICT certificate training AI-ML.pdf` | Training completion certificate | IICT, Summer Internship Training in AI & ML, 15 Jun → 1 Jul 2026 (same cert No.) | Certifications list | `public/certificates/iict-summer-internship-training-2026.pdf` (compressed 4.5 MB → 203 KB) | Yes |
| `Aakash_letter EDC.pdf` | **Letter of Recommendation** (eDC IIT Delhi, Overall Coordinator) | Campus Ambassador 15 Dec 2025 → 2 Feb 2026; "ranked amongst the best Campus Ambassadors" | *None* | `_originals/` (kept private) | **No — needs your confirmation** |
| `Aakash_certificate EDC.pdf` | Participation certificate | eDC IIT Delhi Campus Ambassador Program, BECon '26, 15 Dec 2025 → 2 Feb 2026 | Experience: eDC IIT Delhi ("View certificate") + Achievements #5 | `public/experience/edc-campus-ambassador-certificate-2026.pdf` | Yes |
| `Completion Certificate---inamigos.pdf` | Internship completion certificate | InAmigos Foundation, AI Data Analytics Internship, 10-Jul-2026 → 23-Jul-2026 | Experience: InAmigos ("View certificate") | `public/experience/inamigos-internship-certificate-2026.pdf` | Yes |
| `Coursera Excel Skills for Business Advanced.pdf` | Course certificate | Macquarie University via Coursera, "Excel Skills for Business: Advanced", issued Jul 30, 2025 | Certifications list | `public/certificates/coursera-excel-advanced-2025.pdf` | Yes |
| `Deloitte DA.pdf` | Job simulation certificate | Deloitte (Forage), Data Analytics Job Simulation, Jul 19, 2025 | Certifications list | `public/certificates/deloitte-data-analytics-simulation-2025.pdf` | Yes |
| `nptel certificate.pdf` | Course certificate (**Elite**) | NPTEL/IIT Madras, Introduction to Machine Learning, Jan–Apr 2026, consolidated 60% | Certifications list | `public/certificates/nptel-ml-elite-2026.pdf` | Yes |

## Images

| Original image | Detected as | Target | Final file |
|---|---|---|---|
| SpareLook hero (green demo site) | Project screenshot | Showcase 01 SpareLook | `public/images/projects/sparelook-1.webp` |
| HireFlow dashboard (orange Streamlit) | Project screenshot | Showcase 02 HireFlow | `public/images/projects/hireflow-1.png` |
| Covenant step-1 screen (dark purple) | Project screenshot | Showcase 03 Covenant | `public/images/projects/covenant-1.webp` |
| DocKet Project Gallery (white grid) | Project screenshot | Showcase 04 DocKet | `public/images/projects/docket-1.webp` |
| DMRC Intelligence Platform (Excel dashboard) | Dashboard screenshot | Dashboard card DMRC | `public/images/projects/dmrc-1.png` |
| BlinkIT Sales Analysis dashboard (Power BI) | Dashboard screenshot | Dashboard card BlinkIT | `public/images/projects/blinkit-1.png` |
| StageProof replay dashboard (dark) | Project screenshot | More-projects card StageProof | `public/images/projects/stageproof-1.webp` |
| CropGuard solar enclosure diagram | Project diagram | More-projects card CropGuard | `public/images/projects/cropguard-1.webp` |
| AI-Powered Fake News Detection README | Project screenshot | More-projects card Fake News Detection | `public/images/projects/fake-news-1.png` |
| Agentic AI Hackathon '26 participation cert (product space, 21 Sep 2026) | Certificate image | Certifications (participation) | `public/certificates/agentic-ai-hackathon-2026.jpg` |
| HACKDAY 1.0 participation cert | Certificate image (duplicate of 3.pdf page 1) | Certifications (participation) — PDF is linked, image unused | — (PDF used) |
| IILM Best Paper Presentation Award | Achievement certificate image | Achievements #2 ("View certificate") | `public/certificates/iilm-best-paper-2026.webp` |
| CRAW Security internship certificate (photo) | Internship training certificate (Ethical Hacking & Network Pentesting, 25 Jun → 25 Jul 2025) | Certifications list — **not in the original master prompt facts; added from the document, flagged in report** | `public/certificates/craw-security-internship-2025.jpg` |

## Unused / not published

| File | Reason |
|---|---|
| `Aakash_LOR.pdf` | Recommendation letter; contains third-party contacts. **Published only after you confirm.** |
| `Aakash_letter EDC.pdf` | Recommendation letter; contains third-party contacts. **Published only after you confirm.** |
| HACKDAY certificate image | Duplicate of `3.pdf` page 1; the PDF is used instead. |

## Privacy scan summary (published files)

- No personal address, phone number, or government ID found in any published PDF.
- Public company/NGO registration numbers (CIN, Regd/CSR numbers) and certificate IDs appear on StudifySuccess/InAmigos certificates — these are public registry facts and required for verification.
- Published certificates contain issuer officials' printed names/signatures (standard for certificates). The candidate photo on the NPTEL certificate is Aakash's own.
- QR codes on StudifySuccess certificates link to the issuer's site (verification), not personal data.
