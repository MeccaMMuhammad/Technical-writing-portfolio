# Project 05 — Federal-Style Digital Content, Section 508 & Analytics

**Technical writing portfolio case study | Reviewed November 3, 2026 | Entirely fictional**

This independent project demonstrates how a technical writer could audit a **fictional** public-service content library, conduct SME walkthroughs, maintain a controlled publishing SOP, plan Section 508 document reviews, analyze website/search feedback, and specify a searchable resource toolkit. PSRO is an invented organization. **No actual TSA or federal material, government system access, live agency analytics, or certified accessibility test results are included.**

## Start here — documentation samples

| Deliverable | Reading copy | Editable source | Demonstrated competency |
|---|---|---|---|
| Content audit & information architecture | [PDF](documents/01_Content_Audit_and_Information_Architecture.pdf) | [Word](documents/01_Content_Audit_and_Information_Architecture.docx) | Current-state assessment, content taxonomy, stakeholder interviews, remediation plan |
| Publishing SOP & knowledge base | [PDF](documents/02_Content_Publishing_SOP_and_Knowledge_Base.pdf) | [Word](documents/02_Content_Publishing_SOP_and_Knowledge_Base.docx) | Controlled document lifecycle, procedural writing, SME reviews, release gates |
| Section 508 assessment | [PDF](documents/03_Section_508_Accessibility_Assessment.pdf) | [Word](documents/03_Section_508_Accessibility_Assessment.docx) | Accessibility criteria, defect register, remediation and explicit evidence limits |
| Analytics & feedback report | [PDF](documents/04_Web_Analytics_and_Customer_Feedback_Report.pdf) | [Word](documents/04_Web_Analytics_and_Customer_Feedback_Report.docx) | KPI definitions, search analysis, sentiment/theme coding, action summaries |
| Resource finder technical specification | [PDF](documents/05_Interactive_Toolkit_Technical_Specification.pdf) | [Word](documents/05_Interactive_Toolkit_Technical_Specification.docx) | Requirements, acceptance tests, maintainer notes, accessibility-conscious UI |

## Working artifacts

- [**Interactive HTML/CSS/JS resource finder**](toolkit/index.html) — download the repository and open `toolkit/index.html` locally. GitHub's file preview does **not** run HTML/JS as a website. The catalog and all labels are synthetic.
- [**Excel analytics dashboard**](Digital_Service_Analytics_Dashboard.xlsx) — monthly synthetic metrics, calculated rates, feedback coding and search-query breakdown.
- [Content inventory](data/content_inventory.csv), [monthly analytics](data/web_analytics_monthly.csv), [customer feedback](data/customer_feedback.csv), [search gap analysis](data/search_query_review.csv).
- [Accessibility findings log](review/accessibility_findings.csv), [2026 requirements-to-evidence matrix](review/2026_REQUIREMENTS_TO_EVIDENCE_MATRIX.csv), and [review/approval register](review/review_cycle_register.csv).
- [Federal source reference register](review/REFERENCE_REGISTER.md) and [QA/limitations report](review/QA_AND_LIMITATIONS.md).

## A representative accessibility correction

The file [intentionally_flawed_DO_NOT_PUBLISH.html](toolkit/intentionally_flawed_DO_NOT_PUBLISH.html) intentionally contains a missing search label, a mouse-only clickable element, and a color-only instruction. The revised [index.html](toolkit/index.html) uses an associated `<label>`, native `<button>`, descriptive result text, and standard keyboard-operable controls. This is a **code-level demonstration**; manual keyboard testing and screen-reader evaluation are not claimed complete.

## Approach and traceability

1. Inventory content, clarify owners, record source-of-truth conflicts and user tasks.
2. Map findings to documented risk, fix, owner, approval gate and validation evidence.
3. Author structured procedures and content taxonomy with SME verification.
4. Identify accessibility criteria; separate observed source issues from unexecuted tests.
5. Analyze synthetic website traffic, search terms and feedback; recommend measurable experiments.
6. Specify a small offline resource finder and list explicit functional/keyboard test cases.

## Reference interpretation

For covered federal ICT, the revised Section 508 standards incorporate WCAG 2.0 Levels A and AA as applicable. W3C WCAG 2.2 is a useful **additional** design reference, not automatically the legal baseline for Section 508. The U.S. Access Board electronic document baseline is a testing baseline, **not** itself a complete agency-approved testing procedure. We do not claim a DHS Trusted Tester certification or an approved production conformance result. See [source register](review/REFERENCE_REGISTER.md).

## Portfolio presentation / attribution

Written for a fictional scenario; no real TSA branding, operational details, proprietary content, personal data, or production approval. Suitable to cite in a resume as an **independent technical writing and accessibility-methodology project**, not as completed professional government contracting or official regulatory validation.


## November 2026 additional standards review
All five documents now include a project-specific standards addendum for applicable federal guidance and testing limitations. Additional conditional authorities: 21st Century IDEA/OMB M-23-22 for federal digital services; NARA records schedules for retention/disposition; Paperwork Reduction Act/OMB review for relevant public surveys. The Excel workbook and PDFs are **not** represented as officially accessibility-tested. For a real agency, consult current agency policies, contracts and appointed compliance officials.
