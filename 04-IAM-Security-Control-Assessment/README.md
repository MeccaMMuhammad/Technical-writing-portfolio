# Project 4 — IAM Security Control Assessment and Remediation Plan

**Public, fictional technical writing case study • November 2, 2026**

This is an end-to-end **Security Control Assessment Report (SAR)**, including a **current-state gap analysis** and a **Plan of Action & Milestones (POA&M)**. It describes a fabricated organization; no real systems, staff, customers, access reviews, or security tests were involved.

## Read the actual report

- **[Complete IAM Security Assessment and Remediation Plan (PDF)](documents/IAM_Security_Control_Assessment_and_Remediation_Plan.pdf)**
- [Editable DOCX](documents/IAM_Security_Control_Assessment_and_Remediation_Plan.docx)

## Examine supporting evidence (synthetic)

- [Remediation / POA&M register](evidence/IAM_POAM_Register.csv)
- [Control-to-finding traceability](evidence/IAM_Control_Traceability.csv)
- [Assessment observations](evidence/Synthetic_Assessment_Observations.csv)
- [Identity inventory sample](evidence/Synthetic_Identity_Inventory.csv)
- [Access-review sample](evidence/Synthetic_Access_Review_Sample.csv)

## What this demonstrates

- Assessment scope and evidence inventory; examiner/interview/test methodology
- Current-state IAM, risk rubric, fourteen findings, owner assignment and qualitative severity
- Least privilege, segregation of duties, account lifecycle, phishing-resistant MFA, privileged access
- Service identities, federation and access-token protection; log monitoring; access recertification
- A phased 90-day *fictional* improvement roadmap, measurable acceptance tests, and closure evidence
- Appropriate distinctions between guidance, binding rules, and context-specific legal scope

**References:** NIST CSF 2.0 PR.AA; SP 800-53 and 53A Release 5.2.0; SP 800-63-4; NIST IR 8587 (September 2026); NIST SP 800-30; CISA IAM Best Practices and Zero Trust Maturity Model. Complete primary-source links are in section 11 of the PDF.

**Limitations:** This is not FedRAMP authorization evidence, a HIPAA or FDA compliance determination, a penetration test, a real audit, or validated operational procedures. All performance figures and findings are invented teaching examples; all fixes remain OPEN / NOT TESTED. The CSVs are readable supporting examples, not proof of production execution.

## 2026 expanded case study — Teams vishing, remote control and downstream systems

The report now includes Appendix C, examining **Microsoft Teams external communication, screen-control policy, remote assistance, suspected endpoint persistence, Microsoft Entra ID, SharePoint/OneDrive, CRM, ERP/QMS sandbox and help-desk ticketing**. External calls do not themselves enable remote desktop control or establish a backdoor. This synthetic case distinguishes reported contact, authorized/unauthorized control, suspected persistence and confirmed compromise.

- [Synthetic Teams incident timeline](evidence/Synthetic_Teams_Incident_Timeline.csv)
- [Cross-system security assessment matrix](evidence/Application_Security_Assessment_Matrix.csv)

Control references: Microsoft Learn Teams external access and meeting control, Microsoft Security (September 2026), NIST CSF 2.0, SP 800-53, SP 800-63-4 and NIST IR 8587. All findings and test outcomes remain fictional and **NOT TESTED**.


## Full-portfolio 2026 review
Each PDF and DOCX in this folder has been regenerated with an individual review appendix. [Read full audit](../00-Review-and-Standards/COMPLETE_13_DOCUMENT_REVIEW_2026.pdf).
