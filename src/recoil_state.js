import { atom, selector } from 'recoil';

const uploadedFilesLookup = atom({
  key: 'uploadedFilesLookup',
  default: {
    123: {
      id: '1234',
      name: 'bundle1.json',
      size: '500 KB',
      type: 'application/json',
      dateAdded: '10/10/2022',
      body: {
        resourceType: 'Bundle',
        id: 'mcode-patient-bundle-jenny-m',
        meta: {
          profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-patient-bundle'],
        },
        type: 'collection',
        entry: [
          {
            fullUrl: 'http://example.org/fhir/Patient/cancer-patient-jenny-m',
            resource: {
              resourceType: 'Patient',
              id: 'cancer-patient-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-patient-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-patient.html">Cancer Patient Profile</a></p></div><blockquote><p><b>US Core Race Extension</b></p><p><b>value</b>: White (Details: urn:oid:2.16.840.1.113883.6.238 code 2106-3 = \'White\', stated as \'White\')</p><p><b>value</b>: White</p></blockquote><blockquote><p><b>US Core Ethnicity Extension</b></p><p><b>value</b>: Not Hispanic or Latino (Details: urn:oid:2.16.840.1.113883.6.238 code 2186-5 = \'Not Hispanic or Latino\', stated as \'Not Hispanic or Latino\')</p><p><b>value</b>: Not Hispanic or Latino</p></blockquote><p><b>identifier</b>: Medical Record Number: MRN1234 (USUAL)</p><p><b>name</b>: Jenny M </p><p><b>gender</b>: female</p><p><b>birthDate</b>: 1965-01-01</p><p><b>address</b>: 123 Main St Anytown 12345 United States </p><h3>Contacts</h3><table class="grid"><tr><td>-</td><td><b>Telecom</b></td></tr><tr><td>*</td><td>ph: 555-867-5309(HOME), <a href="mailto:example@example.com">example@example.com</a></td></tr></table><h3>Communications</h3><table class="grid"><tr><td>-</td><td><b>Language</b></td></tr><tr><td>*</td><td>English <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-ietf3066.html">Tags for the Identification of Languages</a>#en-US)</span></td></tr></table></div>',
              },
              extension: [
                {
                  extension: [
                    {
                      url: 'ombCategory',
                      valueCoding: {
                        system: 'urn:oid:2.16.840.1.113883.6.238',
                        code: '2106-3',
                        display: 'White',
                      },
                    },
                    {
                      url: 'text',
                      valueString: 'White',
                    },
                  ],
                  url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
                },
                {
                  extension: [
                    {
                      url: 'ombCategory',
                      valueCoding: {
                        system: 'urn:oid:2.16.840.1.113883.6.238',
                        code: '2186-5',
                        display: 'Not Hispanic or Latino',
                      },
                    },
                    {
                      url: 'text',
                      valueString: 'Not Hispanic or Latino',
                    },
                  ],
                  url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
                },
              ],
              identifier: [
                {
                  use: 'usual',
                  type: {
                    coding: [
                      {
                        system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                        code: 'MR',
                        display: 'Medical Record Number',
                      },
                    ],
                  },
                  system: 'http://hospital.example.org',
                  value: 'MRN1234',
                },
              ],
              name: [
                {
                  family: 'M',
                  given: ['Jenny'],
                },
              ],
              gender: 'female',
              birthDate: '1965-01-01',
              address: [
                {
                  line: ['123 Main St'],
                  city: 'Anytown',
                  postalCode: '12345',
                  country: 'United States',
                },
              ],
              contact: [
                {
                  telecom: [
                    {
                      system: 'phone',
                      value: '555-867-5309',
                      use: 'home',
                    },
                    {
                      system: 'email',
                      value: 'example@example.com',
                    },
                  ],
                },
              ],
              communication: [
                {
                  language: {
                    coding: [
                      {
                        system: 'urn:ietf:bcp:47',
                        code: 'en-US',
                      },
                    ],
                    text: 'English',
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Condition/primary-cancer-condition-jenny-m',
            resource: {
              resourceType: 'Condition',
              id: 'primary-cancer-condition-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-primary-cancer-condition'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "primary-cancer-condition-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-primary-cancer-condition.html">Primary Cancer Condition Profile</a></p></div><p><b>Histology-Morphology-Behavior Extension</b>: Adenocarcinoma, no subtype, intermediate grade (morphologic abnormality) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#413448000)</span></p><p><b>clinicalStatus</b>: Remission <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-condition-clinical.html">Condition Clinical Status Codes</a>#remission)</span></p><p><b>verificationStatus</b>: Confirmed <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-condition-ver-status.html">ConditionVerificationStatus</a>#confirmed)</span></p><p><b>category</b>: Problem List Item <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-condition-category.html">Condition Category Codes</a>#problem-list-item)</span></p><p><b>code</b>: Primary malignant neoplasm of female left breast (disorder) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#353431000119107)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>onset</b>: 2018-03-16</p><p><b>asserter</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><h3>Stages</h3><table class="grid"><tr><td>-</td><td><b>Summary</b></td><td><b>Assessment</b></td></tr><tr><td>*</td><td>3C <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (cancerstaging.org#3C)</span></td><td><a href="#Observation_tnm-clinical-stage-group-jenny-m">See above (Observation/tnm-clinical-stage-group-jenny-m)</a></td></tr></table></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-histology-morphology-behavior',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '413448000',
                        display: 'Adenocarcinoma, no subtype, intermediate grade (morphologic abnormality)',
                      },
                    ],
                  },
                },
              ],
              clinicalStatus: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                    code: 'remission',
                  },
                ],
              },
              verificationStatus: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                    code: 'confirmed',
                  },
                ],
              },
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                      code: 'problem-list-item',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '353431000119107',
                    display: 'Primary malignant neoplasm of female left breast (disorder)',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              onsetDateTime: '2018-03-16',
              asserter: {
                reference: 'Practitioner/us-core-practitioner-owen-oncologist',
              },
              stage: [
                {
                  summary: {
                    coding: [
                      {
                        system: 'http://cancerstaging.org',
                        code: '3C',
                      },
                    ],
                  },
                  assessment: [
                    {
                      reference: 'Observation/tnm-clinical-stage-group-jenny-m',
                    },
                  ],
                },
              ],
            },
          },
          {
            fullUrl:
              'http://example.org/fhir/MedicationRequest/cancer-related-medication-request-cyclophosphamide-jenny-m',
            resource: {
              resourceType: 'MedicationRequest',
              id: 'cancer-related-medication-request-cyclophosphamide-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-related-medication-request-cyclophosphamide-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-related-medication-request.html">Cancer-Related Medication Request Profile</a></p></div><p><b>Procedure Intent Extension</b>: Curative - procedure intent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373808002)</span></p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Outpatient <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-medicationrequest-category.html">MedicationRequest Category Codes</a>#outpatient)</span></p><p><b>medication</b>: cyclophosphamide <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-rxNorm.html">RxNorm</a>#3002)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>authoredOn</b>: 2018-04-12</p><p><b>requester</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>reasonReference</b>: <a href="#Condition_primary-cancer-condition-jenny-m">See above (Condition/primary-cancer-condition-jenny-m)</a></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '373808002',
                        display: 'Curative - procedure intent (qualifier value)',
                      },
                    ],
                  },
                },
              ],
              status: 'active',
              intent: 'order',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category',
                      code: 'outpatient',
                    },
                  ],
                },
              ],
              medicationCodeableConcept: {
                coding: [
                  {
                    system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                    code: '3002',
                    display: 'cyclophosphamide',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              authoredOn: '2018-04-12',
              requester: {
                reference: 'Practitioner/us-core-practitioner-owen-oncologist',
              },
              reasonReference: [
                {
                  reference: 'Condition/primary-cancer-condition-jenny-m',
                },
              ],
              dosageInstruction: [
                {
                  text: 'cyclophosphamide (600 mg/m² IV), 932.59mg',
                  timing: {
                    repeat: {
                      boundsPeriod: {
                        start: '2018-04-01',
                      },
                    },
                  },
                  route: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '47625008',
                        display: 'Intravenous route (qualifier value)',
                      },
                    ],
                  },
                  doseAndRate: [
                    {
                      doseQuantity: {
                        value: 932.59,
                        unit: 'mg',
                        system: 'http://unitsofmeasure.org',
                        code: 'mg',
                      },
                    },
                  ],
                  maxDosePerPeriod: {
                    numerator: {
                      value: 1,
                    },
                    denominator: {
                      value: 3,
                      unit: 'week',
                      system: 'http://unitsofmeasure.org',
                      code: 'wk',
                    },
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/cancer-disease-status-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'cancer-disease-status-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-disease-status'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-disease-status-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-disease-status.html">Cancer Disease Status Profile</a></p></div><p><b>Cancer Disease Status Evidence Type Extension</b>: Imaging (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#363679005)</span></p><p><b>status</b>: final</p><p><b>code</b>: Cancer Disease Progression <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#97509-4)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>focus</b>: <a href="#Condition_primary-cancer-condition-jenny-m">See above (Condition/primary-cancer-condition-jenny-m)</a></p><p><b>effective</b>: 2018-11-01</p><p><b>performer</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>value</b>: Patient\'s condition improved (finding) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#268910001)</span></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-disease-status-evidence-type',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '363679005',
                        display: 'Imaging (procedure)',
                      },
                    ],
                  },
                },
              ],
              status: 'final',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '97509-4',
                    display: 'Cancer Disease Progression',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              focus: [
                {
                  reference: 'Condition/primary-cancer-condition-jenny-m',
                },
              ],
              effectiveDateTime: '2018-11-01',
              performer: [
                {
                  reference: 'Practitioner/us-core-practitioner-owen-oncologist',
                },
              ],
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '268910001',
                    display: "Patient's condition improved (finding)",
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/genomic-variant-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'genomic-variant-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-variant'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "genomic-variant-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-genomic-variant.html">Genomic Variant Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Genetic variant assessment <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#69548-6)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-15</p><p><b>value</b>: Present <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA9633-4)</span></p><p><b>method</b>: Sequencing <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA26398-0)</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Gene studied [ID] <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#48018-6)</span></p><p><b>value</b>: PALB2 <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#HGNC:26144)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Discrete genetic variant <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#81252-9)</span></p><p><b>value</b>: NM_024675.3(PALB2):c.3549C&gt;A (p.Tyr1183Ter) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (clinvar#128144)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Genomic DNA change (gHGVS) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#81290-9)</span></p><p><b>value</b>: NC_000016.10:g.23603471G&gt;T <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgvs.html">Human Genome Variation Society nomenclature</a>#NC_000016.10:g.23603471G&gt;T)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Genomic source class [Type] <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#48002-0)</span></p><p><b>value</b>: Somatic <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA6684-0)</span></p></blockquote></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '69548-6',
                    display: 'Genetic variant assessment',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-15',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA9633-4',
                    display: 'Present',
                  },
                ],
              },
              method: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA26398-0',
                    display: 'Sequencing',
                  },
                ],
              },
              component: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: '48018-6',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://www.genenames.org',
                        code: 'HGNC:26144',
                        display: 'PALB2',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: '81252-9',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://www.ncbi.nlm.nih.gov/clinvar',
                        code: '128144',
                        display: 'NM_024675.3(PALB2):c.3549C>A (p.Tyr1183Ter)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: '81290-9',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://varnomen.hgvs.org',
                        code: 'NC_000016.10:g.23603471G>T',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: '48002-0',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: 'LA6684-0',
                        display: 'Somatic',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/DiagnosticReport/genomics-report-jenny-m',
            resource: {
              resourceType: 'DiagnosticReport',
              id: 'genomics-report-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomics-report'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "genomics-report-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-genomics-report.html">Genomics Report Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v2-0074.html">diagnosticServiceSectionId</a>#LAB)</span>, Genetics <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v2-0074.html">diagnosticServiceSectionId</a>#GE)</span></p><p><b>code</b>: Master HL7 genetic variant reporting panel <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#81247-9)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-15</p><p><b>issued</b>: Mar 15, 2020 12:00:01 AM</p><p><b>specimen</b>: <a href="#Specimen_genomic-specimen-left-breast-jenny-m">See above (Specimen/genomic-specimen-left-breast-jenny-m)</a></p><p><b>result</b>: </p><ul><li><a href="#Observation_genomic-variant-jenny-m">See above (Observation/genomic-variant-jenny-m)</a></li><li><a href="#Observation_genomic-region-studied-jenny-m">See above (Observation/genomic-region-studied-jenny-m)</a></li></ul></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0074',
                      code: 'LAB',
                    },
                  ],
                },
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0074',
                      code: 'GE',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '81247-9',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-15',
              issued: '2020-03-15T00:00:01+00:00',
              specimen: [
                {
                  reference: 'Specimen/genomic-specimen-left-breast-jenny-m',
                },
              ],
              result: [
                {
                  reference: 'Observation/genomic-variant-jenny-m',
                },
                {
                  reference: 'Observation/genomic-region-studied-jenny-m',
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Procedure/cancer-related-surgical-procedure-jenny-m',
            resource: {
              resourceType: 'Procedure',
              id: 'cancer-related-surgical-procedure-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-surgical-procedure'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-related-surgical-procedure-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-related-surgical-procedure.html">Cancer-Related Surgical Procedure Profile</a></p></div><p><b>Procedure Intent Extension</b>: Curative - procedure intent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373808002)</span></p><p><b>status</b>: completed</p><p><b>category</b>: Surgical procedure (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#387713003)</span></p><p><b>code</b>: Partial mastectomy (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#64368001)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>performed</b>: 2018-04-01</p><p><b>asserter</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>reasonReference</b>: <a href="#Condition_primary-cancer-condition-jenny-m">See above (Condition/primary-cancer-condition-jenny-m)</a></p><p><b>bodySite</b>: Left breast structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#80248007)</span></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '373808002',
                        display: 'Curative - procedure intent (qualifier value)',
                      },
                    ],
                  },
                },
              ],
              status: 'completed',
              category: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '387713003',
                  },
                ],
              },
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '64368001',
                    display: 'Partial mastectomy (procedure)',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              performedDateTime: '2018-04-01',
              asserter: {
                reference: 'Practitioner/us-core-practitioner-owen-oncologist',
              },
              reasonReference: [
                {
                  reference: 'Condition/primary-cancer-condition-jenny-m',
                },
              ],
              bodySite: [
                {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '80248007',
                      display: 'Left breast structure (body structure)',
                    },
                  ],
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Procedure/radiotherapy-treatment-summary-chest-wall-jenny-m',
            resource: {
              resourceType: 'Procedure',
              id: 'radiotherapy-treatment-summary-chest-wall-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-course-summary'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "radiotherapy-treatment-summary-chest-wall-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-radiotherapy-course-summary.html">Radiotherapy Course Summary Profile</a></p></div><p><b>Radiotherapy Number of Sessions Extension</b>: 31</p><p><b>Procedure Intent Extension</b>: Curative - procedure intent <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373808002)</span></p><blockquote><p><b>Radiotherapy Modality And Technique Extension</b></p><p><b>value</b>: External beam radiation therapy using photons (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#1156506007)</span></p><p><b>value</b>: Volumetric Modulated Arc Therapy (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#1156530009)</span></p></blockquote><blockquote><p><b>Radiotherapy Modality And Technique Extension</b></p><p><b>value</b>: Teleradiotherapy using electrons <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#45643008)</span></p><p><b>value</b>: Three dimensional external beam radiation therapy (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-snomed-requested-cs.html">Requested SNOMED Codes Code System</a>#1162782007)</span></p></blockquote><blockquote><p><b>Radiotherapy Dose Delivered To Volume Extension</b></p><p><b>value</b>: <a href="BodyStructure-jenny-m-chest-wall-treatment-volume.html">BodyStructure/jenny-m-chest-wall-treatment-volume</a></p><p><b>value</b>: 6000 cGy<span style="background: LightGoldenRodYellow"> (Details: UCUM code cGy = \'cGy\')</span></p><p><b>value</b>: 30</p></blockquote><blockquote><p><b>Radiotherapy Dose Delivered To Volume Extension</b></p><p><b>value</b>: <a href="BodyStructure-jenny-m-chest-wall-lymph-nodes-treatment-volume.html">BodyStructure/jenny-m-chest-wall-lymph-nodes-treatment-volume</a></p><p><b>value</b>: 5000 cGy<span style="background: LightGoldenRodYellow"> (Details: UCUM code cGy = \'cGy\')</span></p><p><b>value</b>: 25</p></blockquote><p><b>status</b>: completed</p><p><b>category</b>: Radiation oncology AND/OR radiotherapy (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#108290001)</span></p><p><b>code</b>: Radiotherapy Course of Treatment (regime/therapy) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-snomed-requested-cs.html">Requested SNOMED Codes Code System</a>#USCRS-33529)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>performed</b>: 2018-08-15 --&gt; 2018-10-25</p><p><b>asserter</b>: <a href="Practitioner-us-core-practitioner-kyle-anydoc.html">Practitioner/us-core-practitioner-kyle-anydoc</a> " ANYDOC"</p><p><b>reasonCode</b>: Malignant neoplasm of overlapping sites of right female breast <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-icd10CM.html">International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM)</a>#C50.811)</span></p><p><b>bodySite</b>: Chest Wall Structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#78904004)</span></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-sessions',
                  valueUnsignedInt: 31,
                },
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '373808002',
                        display: 'Curative - procedure intent',
                      },
                    ],
                  },
                },
                {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://snomed.info/sct',
                            code: '1156506007',
                            display: 'External beam radiation therapy using photons (procedure)',
                          },
                        ],
                      },
                    },
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://snomed.info/sct',
                            code: '1156530009',
                            display: 'Volumetric Modulated Arc Therapy (procedure)',
                          },
                        ],
                      },
                    },
                  ],
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality-and-technique',
                },
                {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://snomed.info/sct',
                            code: '45643008',
                            display: 'Teleradiotherapy using electrons',
                          },
                        ],
                      },
                    },
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs',
                            code: '1162782007',
                            display: 'Three dimensional external beam radiation therapy (procedure)',
                          },
                        ],
                      },
                    },
                  ],
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality-and-technique',
                },
                {
                  extension: [
                    {
                      url: 'volume',
                      valueReference: {
                        reference: 'BodyStructure/jenny-m-chest-wall-treatment-volume',
                      },
                    },
                    {
                      url: 'totalDoseDelivered',
                      valueQuantity: {
                        value: 6000,
                        system: 'http://unitsofmeasure.org',
                        code: 'cGy',
                      },
                    },
                    {
                      url: 'fractionsDelivered',
                      valueUnsignedInt: 30,
                    },
                  ],
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume',
                },
                {
                  extension: [
                    {
                      url: 'volume',
                      valueReference: {
                        reference: 'BodyStructure/jenny-m-chest-wall-lymph-nodes-treatment-volume',
                      },
                    },
                    {
                      url: 'totalDoseDelivered',
                      valueQuantity: {
                        value: 5000,
                        system: 'http://unitsofmeasure.org',
                        code: 'cGy',
                      },
                    },
                    {
                      url: 'fractionsDelivered',
                      valueUnsignedInt: 25,
                    },
                  ],
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume',
                },
              ],
              status: 'completed',
              category: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '108290001',
                    display: 'Radiation oncology AND/OR radiotherapy (procedure)',
                  },
                ],
              },
              code: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs',
                    code: 'USCRS-33529',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              performedPeriod: {
                start: '2018-08-15',
                end: '2018-10-25',
              },
              asserter: {
                reference: 'Practitioner/us-core-practitioner-kyle-anydoc',
              },
              reasonCode: [
                {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/sid/icd-10-cm',
                      code: 'C50.811',
                      display: 'Malignant neoplasm of overlapping sites of right female breast',
                    },
                  ],
                },
              ],
              bodySite: [
                {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '78904004',
                      display: 'Chest Wall Structure (body structure)',
                    },
                  ],
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tnm-clinical-stage-group-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tnm-clinical-stage-group-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-stage-group'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tnm-clinical-stage-group-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-stage-group.html">Cancer Stage Group Profile</a></p></div><p><b>status</b>: final</p><p><b>code</b>: Stage group.clinical Cancer <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#21908-9)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-16</p><p><b>value</b>: IIB <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (cancerstaging.org#2B)</span></p><p><b>method</b>: American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#897275008)</span></p><p><b>hasMember</b>: </p><ul><li><a href="Observation-tnm-pathologic-primary-tumor-category-jenny-m.html">Observation/tnm-pathologic-primary-tumor-category-jenny-m</a></li><li><a href="Observation-tnm-pathologic-regional-nodes-category-jenny-m.html">Observation/tnm-pathologic-regional-nodes-category-jenny-m</a></li><li><a href="Observation-tnm-pathologic-distant-metastases-category-jenny-m.html">Observation/tnm-pathologic-distant-metastases-category-jenny-m</a></li></ul></div>',
              },
              status: 'final',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '21908-9',
                    display: 'Stage group.clinical Cancer',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-16',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://cancerstaging.org',
                    code: '2B',
                    display: 'IIB',
                  },
                ],
              },
              method: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '897275008',
                    display:
                      'American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)',
                  },
                ],
              },
              hasMember: [
                {
                  reference: 'Observation/tnm-pathologic-primary-tumor-category-jenny-m',
                },
                {
                  reference: 'Observation/tnm-pathologic-regional-nodes-category-jenny-m',
                },
                {
                  reference: 'Observation/tnm-pathologic-distant-metastases-category-jenny-m',
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tnm-clinical-primary-tumor-category-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tnm-clinical-primary-tumor-category-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-primary-tumor-category'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tnm-clinical-primary-tumor-category-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tnm-primary-tumor-category.html">TNM Primary Tumor Category Profile</a></p></div><p><b>status</b>: final</p><p><b>code</b>: Primary tumor.clinical [Class] Cancer <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#21905-5)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-16</p><p><b>value</b>: cT3 <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (cancerstaging.org#cT3)</span></p><p><b>method</b>: American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#897275008)</span></p></div>',
              },
              status: 'final',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '21905-5',
                    display: 'Primary tumor.clinical [Class] Cancer',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-16',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://cancerstaging.org',
                    code: 'cT3',
                  },
                ],
              },
              method: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '897275008',
                    display:
                      'American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tnm-clinical-regional-nodes-category-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tnm-clinical-regional-nodes-category-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-regional-nodes-category'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tnm-clinical-regional-nodes-category-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tnm-regional-nodes-category.html">TNM Regional Nodes Category Profile</a></p></div><p><b>status</b>: final</p><p><b>code</b>: Regional lymph nodes.clinical [Class] Cancer <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#21906-3)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-16</p><p><b>value</b>: cN0 <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (cancerstaging.org#cN0)</span></p><p><b>method</b>: American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#897275008)</span></p></div>',
              },
              status: 'final',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '21906-3',
                    display: 'Regional lymph nodes.clinical [Class] Cancer',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-16',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://cancerstaging.org',
                    code: 'cN0',
                  },
                ],
              },
              method: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '897275008',
                    display:
                      'American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tnm-clinical-distant-metastases-category-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tnm-clinical-distant-metastases-category-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-distant-metastases-category'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tnm-clinical-distant-metastases-category-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tnm-distant-metastases-category.html">TNM Distant Metastases Category Profile</a></p></div><p><b>status</b>: final</p><p><b>code</b>: Distant metastases.clinical [Class] Cancer <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#21907-1)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-16</p><p><b>value</b>: cM0 <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (cancerstaging.org#cM0)</span></p><p><b>method</b>: American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#897275008)</span></p></div>',
              },
              status: 'final',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '21907-1',
                    display: 'Distant metastases.clinical [Class] Cancer',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-16',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://cancerstaging.org',
                    code: 'cM0',
                  },
                ],
              },
              method: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '897275008',
                    display:
                      'American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'whatever',
            resource: {
              resourceType: 'Specimen',
              id: 'tumor-specimen-left-breast-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-specimen'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tumor-specimen-left-breast-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tumor-specimen.html">Tumor Specimen Profile</a></p></div><p><b>identifier</b>: BodyStructure: Tumor 1234 (USUAL)</p><p><b>status</b>: available</p><p><b>type</b>: Tumor <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v2-0487.html">specimenType</a>#TUMOR)</span></p><p><b>subject</b>: <a href="Patient-cancer-patient-jenny-m.html">Patient/cancer-patient-jenny-m</a> " M"</p><p><b>receivedTime</b>: 2018-04-01</p><h3>Collections</h3><table class="grid"><tr><td>-</td><td><b>BodySite</b></td></tr><tr><td>*</td><td>Left breast structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#80248007)</span></td></tr></table></div>',
              },
              identifier: [
                {
                  use: 'usual',
                  type: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/resource-types',
                        code: 'BodyStructure',
                      },
                    ],
                  },
                  system: 'http://radiology.hospital.example.org',
                  value: 'Tumor 1234',
                },
              ],
              status: 'available',
              type: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0487',
                    code: 'TUMOR',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              receivedTime: '2018-04-01',
              collection: {
                bodySite: {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '80248007',
                      display: 'Left breast structure (body structure)',
                    },
                  ],
                },
              },
            },
          },
          {
            fullUrl: 'whatever',
            resource: {
              resourceType: 'BodyStructure',
              id: 'tumor-lobular-carcinoma-left-breast',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tumor-lobular-carcinoma-left-breast" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tumor.html">Tumor Profile</a></p></div><p><b>Related Condition Extension</b>: <a href="Condition-primary-cancer-condition-breast.html">Condition/primary-cancer-condition-breast</a></p><p><b>identifier</b>: BodyStructure: Tumor 1234 (USUAL)</p><p><b>location</b>: Left breast structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#80248007)</span></p><p><b>patient</b>: <a href="Patient-cancer-patient-eve-anyperson.html">Patient/cancer-patient-eve-anyperson</a> " ANYPERSON"</p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-related-condition',
                  valueReference: {
                    reference: 'Condition/primary-cancer-condition-breast',
                  },
                },
              ],
              identifier: [
                {
                  use: 'usual',
                  type: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/resource-types',
                        code: 'BodyStructure',
                      },
                    ],
                  },
                  system: 'http://radiology.hospital.example.org',
                  value: 'Tumor 1234',
                },
              ],
              location: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '80248007',
                    display: 'Left breast structure (body structure)',
                  },
                ],
              },
              patient: {
                reference: 'Patient/cancer-patient-eve-anyperson',
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Specimen/genomic-specimen-left-breast-jenny-m',
            resource: {
              resourceType: 'Specimen',
              id: 'genomic-specimen-left-breast-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-specimen'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "genomic-specimen-left-breast-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-genomic-specimen.html">Genomic Specimen Profile</a></p></div><p><b>status</b>: available</p><p><b>type</b>: Tissue <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v2-0487.html">specimenType</a>#TISS)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><h3>Collections</h3><table class="grid"><tr><td>-</td><td><b>Collector</b></td><td><b>BodySite</b></td></tr><tr><td>*</td><td><a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></td><td>Left breast structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#80248007)</span></td></tr></table><h3>Processings</h3><table class="grid"><tr><td>-</td><td><b>Time[x]</b></td></tr><tr><td>*</td><td>2018-03-06</td></tr></table></div>',
              },
              status: 'available',
              type: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0487',
                    code: 'TISS',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              collection: {
                collector: {
                  reference: 'Practitioner/us-core-practitioner-owen-oncologist',
                },
                bodySite: {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '80248007',
                      display: 'Left breast structure (body structure)',
                    },
                  ],
                },
              },
              processing: [
                {
                  timeDateTime: '2018-03-06',
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/genomic-region-studied-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'genomic-region-studied-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-region-studied'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "genomic-region-studied-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-genomic-region-studied.html">Genomic Region Studied Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: DNA region of interest panel <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#53041-0)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-15</p><p><b>issued</b>: Mar 15, 2018 12:00:01 AM</p><h3>Components</h3><table class="grid"><tr><td>-</td><td><b>Code</b></td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Gene studied [ID] <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#48018-6)</span></td><td>BRCA1 <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#1100; <a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#1101 "BRCA2"; <a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#1748 "CDH1"; <a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#26144 "PALB2"; <a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#9588 "PTEN"; <a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#11389 "STK11"; <a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-hgnc.html">HUGO Gene Nomenclature</a>#11998 "TP53")</span></td></tr></table></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '53041-0',
                    display: 'DNA region of interest panel',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-15',
              issued: '2018-03-15T00:00:01+00:00',
              component: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: '48018-6',
                        display: 'Gene studied [ID]',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://www.genenames.org',
                        code: '1100',
                        display: 'BRCA1',
                      },
                      {
                        system: 'http://www.genenames.org',
                        code: '1101',
                        display: 'BRCA2',
                      },
                      {
                        system: 'http://www.genenames.org',
                        code: '1748',
                        display: 'CDH1',
                      },
                      {
                        system: 'http://www.genenames.org',
                        code: '26144',
                        display: 'PALB2',
                      },
                      {
                        system: 'http://www.genenames.org',
                        code: '9588',
                        display: 'PTEN',
                      },
                      {
                        system: 'http://www.genenames.org',
                        code: '11389',
                        display: 'STK11',
                      },
                      {
                        system: 'http://www.genenames.org',
                        code: '11998',
                        display: 'TP53',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/ecog-performance-status-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'ecog-performance-status-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-ecog-performance-status'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "ecog-performance-status-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-ecog-performance-status.html">ECOG Performance Status Profile</a></p></div><p><b>status</b>: final</p><p><b>code</b>: ECOG Performance Status score <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#89247-1)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-12</p><p><b>performer</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>value</b>: 0</p><p><b>interpretation</b>: Fully active, able to carry on all pre-disease performance without restriction <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA9622-7)</span></p><p><b>method</b>: Physical examination procedure (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#5880005)</span></p></div>',
              },
              status: 'final',
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '89247-1',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-12',
              performer: [
                {
                  reference: 'Practitioner/us-core-practitioner-owen-oncologist',
                },
              ],
              valueInteger: 0,
              interpretation: [
                {
                  coding: [
                    {
                      system: 'http://loinc.org',
                      code: 'LA9622-7',
                      display: 'Fully active, able to carry on all pre-disease performance without restriction',
                    },
                  ],
                },
              ],
              method: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '5880005',
                    display: 'Physical examination procedure (procedure)',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tumor-marker-test-er-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tumor-marker-test-er-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tumor-marker-test-er-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tumor-marker-test.html">Tumor Marker Test Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Estrogen receptor Ag [Presence] in Breast cancer specimen by Immune stain <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#85337-4)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-10</p><p><b>performer</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>value</b>: Positive <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA6576-8)</span></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '85337-4',
                    display: 'Estrogen receptor Ag [Presence] in Breast cancer specimen by Immune stain',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-10',
              performer: [
                {
                  reference: 'Practitioner/us-core-practitioner-owen-oncologist',
                },
              ],
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA6576-8',
                    display: 'Positive',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tumor-marker-test-pr-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tumor-marker-test-pr-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tumor-marker-test-pr-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tumor-marker-test.html">Tumor Marker Test Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Progesterone receptor Ag [Presence] in Breast cancer specimen by Immune stain <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#85339-0)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-10</p><p><b>performer</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>value</b>: Negative <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA6577-6)</span></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '85339-0',
                    display: 'Progesterone receptor Ag [Presence] in Breast cancer specimen by Immune stain',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-10',
              performer: [
                {
                  reference: 'Practitioner/us-core-practitioner-owen-oncologist',
                },
              ],
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA6577-6',
                    display: 'Negative',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tumor-marker-test-her2-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tumor-marker-test-her2-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tumor-marker-test-her2-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tumor-marker-test.html">Tumor Marker Test Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: HER2 [Interpretation] in Tissue <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#48676-1)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-10</p><p><b>performer</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>value</b>: Negative <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA6577-6)</span></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '48676-1',
                    display: 'HER2 [Interpretation] in Tissue',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-10',
              performer: [
                {
                  reference: 'Practitioner/us-core-practitioner-owen-oncologist',
                },
              ],
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA6577-6',
                    display: 'Negative',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tumor-marker-test-oncotype-dx-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tumor-marker-test-oncotype-dx-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-marker-test'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tumor-marker-test-oncotype-dx-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tumor-marker-test.html">Tumor Marker Test Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Oncotype DX Breast Recurrence Score Assay <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (gtr#509910)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-12</p><p><b>performer</b>: <a href="Organization-us-core-organization-bedrock-medicine.html">Organization/us-core-organization-bedrock-medicine</a> "Bedrock Medicine"</p><p><b>value</b>: 47 Recurrence score<span style="background: LightGoldenRodYellow"> (Details: UCUM code {ScoreOf} = \'{ScoreOf}\')</span></p><p><b>interpretation</b>: High <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-ObservationInterpretation.html">ObservationInterpretation</a>#H)</span></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://www.ncbi.nlm.nih.gov/gtr',
                    code: '509910',
                    display: 'Oncotype DX Breast Recurrence Score Assay',
                  },
                ],
                text: 'Oncotype DX Breast Recurrence Score Assay',
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-12',
              performer: [
                {
                  reference: 'Organization/us-core-organization-bedrock-medicine',
                },
              ],
              valueQuantity: {
                value: 47,
                unit: 'Recurrence score',
                system: 'http://unitsofmeasure.org',
                code: '{ScoreOf}',
              },
              interpretation: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
                      code: 'H',
                      display: 'High',
                    },
                  ],
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/MedicationRequest/cancer-related-medication-request-doxorubicin-jenny-m',
            resource: {
              resourceType: 'MedicationRequest',
              id: 'cancer-related-medication-request-doxorubicin-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-related-medication-request-doxorubicin-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-related-medication-request.html">Cancer-Related Medication Request Profile</a></p></div><p><b>Procedure Intent Extension</b>: Curative - procedure intent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373808002)</span></p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Outpatient <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-medicationrequest-category.html">MedicationRequest Category Codes</a>#outpatient)</span></p><p><b>medication</b>: DOXOrubicin <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-rxNorm.html">RxNorm</a>#3639)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>authoredOn</b>: 2018-04-12</p><p><b>requester</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>reasonReference</b>: <a href="#Condition_primary-cancer-condition-jenny-m">See above (Condition/primary-cancer-condition-jenny-m)</a></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '373808002',
                        display: 'Curative - procedure intent (qualifier value)',
                      },
                    ],
                  },
                },
              ],
              status: 'active',
              intent: 'order',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category',
                      code: 'outpatient',
                    },
                  ],
                },
              ],
              medicationCodeableConcept: {
                coding: [
                  {
                    system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                    code: '3639',
                    display: 'DOXOrubicin',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              authoredOn: '2018-04-12',
              requester: {
                reference: 'Practitioner/us-core-practitioner-owen-oncologist',
              },
              reasonReference: [
                {
                  reference: 'Condition/primary-cancer-condition-jenny-m',
                },
              ],
              dosageInstruction: [
                {
                  text: 'doxorubicin (60 mg/m² IV)',
                  timing: {
                    repeat: {
                      boundsPeriod: {
                        start: '2018-04-01',
                      },
                    },
                  },
                  route: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '47625008',
                        display: 'Intravenous route (qualifier value)',
                      },
                    ],
                  },
                  doseAndRate: [
                    {
                      rateQuantity: {
                        value: 60,
                        unit: 'mg/m2',
                        system: 'http://unitsofmeasure.org',
                        code: 'mg/m2',
                      },
                    },
                  ],
                  maxDosePerPeriod: {
                    numerator: {
                      value: 1,
                    },
                    denominator: {
                      value: 3,
                      unit: 'week',
                      system: 'http://unitsofmeasure.org',
                      code: 'wk',
                    },
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/MedicationRequest/cancer-related-medication-request-paclitaxel-jenny-m',
            resource: {
              resourceType: 'MedicationRequest',
              id: 'cancer-related-medication-request-paclitaxel-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-related-medication-request-paclitaxel-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-related-medication-request.html">Cancer-Related Medication Request Profile</a></p></div><p><b>Procedure Intent Extension</b>: Curative - procedure intent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373808002)</span></p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Outpatient <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-medicationrequest-category.html">MedicationRequest Category Codes</a>#outpatient)</span></p><p><b>medication</b>: PACLitaxel <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-rxNorm.html">RxNorm</a>#56946)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>authoredOn</b>: 2018-04-12</p><p><b>requester</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>reasonReference</b>: <a href="#Condition_primary-cancer-condition-jenny-m">See above (Condition/primary-cancer-condition-jenny-m)</a></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '373808002',
                        display: 'Curative - procedure intent (qualifier value)',
                      },
                    ],
                  },
                },
              ],
              status: 'active',
              intent: 'order',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category',
                      code: 'outpatient',
                    },
                  ],
                },
              ],
              medicationCodeableConcept: {
                coding: [
                  {
                    system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                    code: '56946',
                    display: 'PACLitaxel',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              authoredOn: '2018-04-12',
              requester: {
                reference: 'Practitioner/us-core-practitioner-owen-oncologist',
              },
              reasonReference: [
                {
                  reference: 'Condition/primary-cancer-condition-jenny-m',
                },
              ],
              dosageInstruction: [
                {
                  text: 'PACLitaxel (175 mg/m² IV), 272.01mg',
                  timing: {
                    repeat: {
                      boundsPeriod: {
                        start: '2018-04-12',
                      },
                    },
                  },
                  route: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '47625008',
                        display: 'Intravenous route (qualifier value)',
                      },
                    ],
                  },
                  doseAndRate: [
                    {
                      doseQuantity: {
                        value: 272.01,
                        unit: 'mg',
                        system: 'http://unitsofmeasure.org',
                        code: 'mg',
                      },
                    },
                  ],
                  maxDosePerPeriod: {
                    numerator: {
                      value: 1,
                    },
                    denominator: {
                      value: 3,
                      unit: 'week',
                      system: 'http://unitsofmeasure.org',
                      code: 'wk',
                    },
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/MedicationRequest/cancer-related-medication-request-anastrozole-jenny-m',
            resource: {
              resourceType: 'MedicationRequest',
              id: 'cancer-related-medication-request-anastrozole-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-related-medication-request-anastrozole-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-cancer-related-medication-request.html">Cancer-Related Medication Request Profile</a></p></div><p><b>Procedure Intent Extension</b>: Curative - procedure intent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373808002)</span></p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Community <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-medicationrequest-category.html">MedicationRequest Category Codes</a>#community)</span></p><p><b>medication</b>: anastrozole <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-rxNorm.html">RxNorm</a>#84857)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>authoredOn</b>: 2018-09-30</p><p><b>requester</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><p><b>reasonReference</b>: <a href="#Condition_primary-cancer-condition-jenny-m">See above (Condition/primary-cancer-condition-jenny-m)</a></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '373808002',
                        display: 'Curative - procedure intent (qualifier value)',
                      },
                    ],
                  },
                },
              ],
              status: 'active',
              intent: 'order',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/medicationrequest-category',
                      code: 'community',
                    },
                  ],
                },
              ],
              medicationCodeableConcept: {
                coding: [
                  {
                    system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
                    code: '84857',
                    display: 'anastrozole',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              authoredOn: '2018-09-30',
              requester: {
                reference: 'Practitioner/us-core-practitioner-owen-oncologist',
              },
              reasonReference: [
                {
                  reference: 'Condition/primary-cancer-condition-jenny-m',
                },
              ],
              dosageInstruction: [
                {
                  text: '1mg orally once daily',
                  timing: {
                    repeat: {
                      boundsPeriod: {
                        start: '2018-09-30',
                      },
                    },
                  },
                  route: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '26643006',
                        display: 'Oral route (qualifier value)',
                      },
                    ],
                  },
                  doseAndRate: [
                    {
                      doseQuantity: {
                        value: 1,
                        unit: 'mg',
                        system: 'http://unitsofmeasure.org',
                        code: 'mg',
                      },
                    },
                  ],
                  maxDosePerPeriod: {
                    numerator: {
                      value: 1,
                    },
                    denominator: {
                      value: 1,
                      unit: 'day',
                      system: 'http://unitsofmeasure.org',
                      code: 'd',
                    },
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/cancer-related-mcode-comorbidities-elixhauser-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'cancer-related-mcode-comorbidities-elixhauser-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbidities-elixhauser'],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "cancer-related-mcode-comorbidities-elixhauser-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-comorbidities-elixhauser.html">Comorbidities Elixhauser Profile</a></p></div><p><b>status</b>: final</p><p><b>code</b>: Elixhauser Comorbidity Panel <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#comorbidities-elixhauser)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-16</p><p><b>performer</b>: <a href="#Practitioner_us-core-practitioner-owen-oncologist">See above (Practitioner/us-core-practitioner-owen-oncologist)</a></p><blockquote><p><b>component</b></p><p><b>Comorbid Condition Reference Extension</b>: <a href="Condition-us-core-condition-depression-jenny-m.html">Condition/us-core-condition-depression-jenny-m</a></p><p><b>code</b>: Depression (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#DEPRESS)</span></p><p><b>value</b>: Present (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#52101004)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>Comorbid Condition Reference Extension</b>: <a href="Condition-us-core-condition-hypertension-jenny-m.html">Condition/us-core-condition-hypertension-jenny-m</a></p><p><b>code</b>: Hypertension, complicated (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#HTN_CX)</span></p><p><b>value</b>: Present (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#52101004)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Arthropathies (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#ARTH)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Congestive heart failure (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#CHF)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Chronic pulmonary disease (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#LUNG_CHRONIC)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diabetes without chronic complications (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#DIAB_UNCX)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diabetes with chronic complications (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#DIAB_CX)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Obesity (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#OBESE)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Peripheral vascular disease (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#PERIVASC)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Pulmonary circulation disease (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#PULMCIRC)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Renal failure, moderate (Elixhauser comorbidity category) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-loinc-requested-cs.html">Requested LOINC Codes Code System</a>#RENLFL_MOD)</span></p><p><b>value</b>: Absent (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#2667000)</span></p></blockquote></div>',
              },
              status: 'final',
              code: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                    code: 'comorbidities-elixhauser',
                    display: 'Elixhauser Comorbidity Panel',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-16',
              performer: [
                {
                  reference: 'Practitioner/us-core-practitioner-owen-oncologist',
                },
              ],
              component: [
                {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbid-condition-reference',
                      valueReference: {
                        reference: 'Condition/us-core-condition-depression-jenny-m',
                      },
                    },
                  ],
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'DEPRESS',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '52101004',
                        display: 'Present (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-comorbid-condition-reference',
                      valueReference: {
                        reference: 'Condition/us-core-condition-hypertension-jenny-m',
                      },
                    },
                  ],
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'HTN_CX',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '52101004',
                        display: 'Present (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'ARTH',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'CHF',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'LUNG_CHRONIC',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'DIAB_UNCX',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'DIAB_CX',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'OBESE',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'PERIVASC',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'PULMCIRC',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
                {
                  code: {
                    coding: [
                      {
                        system: 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs',
                        code: 'RENLFL_MOD',
                      },
                    ],
                  },
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '2667000',
                        display: 'Absent (qualifier value)',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/bodyweight-jenny-m-2018-03-16',
            resource: {
              resourceType: 'Observation',
              id: 'bodyweight-jenny-m-2018-03-16',
              meta: {
                profile: ['http://hl7.org/fhir/StructureDefinition/bodyweight'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "bodyweight-jenny-m-2018-03-16" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/R4/bodyweight.html">Observation Body Weight Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#vital-signs)</span></p><p><b>code</b>: Body weight <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#29463-7)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-06</p><p><b>value</b>: 155 lb<span style="background: LightGoldenRodYellow"> (Details: UCUM code [lb_av] = \'[lb_av]\')</span></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'vital-signs',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '29463-7',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-06',
              valueQuantity: {
                value: 155,
                unit: 'lb',
                system: 'http://unitsofmeasure.org',
                code: '[lb_av]',
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-observation-lab-neutrophils-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'us-core-observation-lab-neutrophils-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-observation-lab-neutrophils-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Neutrophils [#/volume] in Blood <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#26499-4)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-05-20T00:00:00Z</p><p><b>value</b>: 3000 10*3/uL<span style="background: LightGoldenRodYellow"> (Details: UCUM code 10*3/uL = \'10*3/uL\')</span></p><h3>ReferenceRanges</h3><table class="grid"><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td><td><b>AppliesTo</b></td></tr><tr><td>*</td><td>2500 10*3/uL<span style="background: LightGoldenRodYellow"> (Details: UCUM code 10*3/uL = \'10*3/uL\')</span></td><td>5000 10*3/uL<span style="background: LightGoldenRodYellow"> (Details: UCUM code 10*3/uL = \'10*3/uL\')</span></td><td>Normal Range <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-referencerange-meaning.html">Observation Reference Range Meaning Codes</a>#normal)</span></td></tr></table></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '26499-4',
                    display: 'Neutrophils [#/volume] in Blood',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-05-20T00:00:00Z',
              valueQuantity: {
                value: 3000,
                unit: '10*3/uL',
                system: 'http://unitsofmeasure.org',
                code: '10*3/uL',
              },
              referenceRange: [
                {
                  low: {
                    value: 2500,
                    unit: '10*3/uL',
                    system: 'http://unitsofmeasure.org',
                    code: '10*3/uL',
                  },
                  high: {
                    value: 5000,
                    unit: '10*3/uL',
                    system: 'http://unitsofmeasure.org',
                    code: '10*3/uL',
                  },
                  appliesTo: [
                    {
                      coding: [
                        {
                          system: 'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
                          code: 'normal',
                          display: 'Normal Range',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Organization/us-core-organization-physician-services-inc',
            resource: {
              resourceType: 'Organization',
              id: 'us-core-organization-physician-services-inc',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-organization-physician-services-inc" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-organization.html">US Core Organization Profile</a></p></div><p><b>active</b>: true</p><p><b>type</b>: Healthcare Provider <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-organization-type.html">Organization type</a>#prov)</span></p><p><b>name</b>: Physician Services, Inc.</p><p><b>telecom</b>: ph: 999-999-9999(WORK)</p><p><b>address</b>: 123 Corporate Drive Anytown MA 12345 US </p></div>',
              },
              active: true,
              type: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/organization-type',
                      code: 'prov',
                      display: 'Healthcare Provider',
                    },
                  ],
                },
              ],
              name: 'Physician Services, Inc.',
              telecom: [
                {
                  system: 'phone',
                  value: '999-999-9999',
                  use: 'work',
                },
              ],
              address: [
                {
                  line: ['123 Corporate Drive'],
                  city: 'Anytown',
                  state: 'MA',
                  postalCode: '12345',
                  country: 'US',
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-smokingstatus-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'us-core-smokingstatus-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-smokingstatus'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-smokingstatus-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-smokingstatus.html">US Core Smoking Status Observation Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Social History <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#social-history)</span></p><p><b>code</b>: Tobacco smoking status <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#72166-2)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-16</p><p><b>issued</b>: Mar 16, 2018 12:00:00 AM</p><p><b>value</b>: Smokes tobacco daily (finding) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#449868002)</span></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'social-history',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '72166-2',
                    display: 'Tobacco smoking status',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-16',
              issued: '2018-03-16T00:00:00Z',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '449868002',
                    display: 'Smokes tobacco daily (finding)',
                  },
                ],
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-procedure-biopsy-jenny-m',
            resource: {
              resourceType: 'Procedure',
              id: 'us-core-procedure-biopsy-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-procedure-biopsy-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html">US Core Procedure Profile</a></p></div><p><b>status</b>: completed</p><p><b>code</b>: Biopsy of breast using ultrasonographic guidance (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#723990008)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>performed</b>: 2018-03-06</p><p><b>asserter</b>: <a href="Practitioner-us-core-practitioner-mary-obgyn.html">Practitioner/us-core-practitioner-mary-obgyn</a> " OBGYN"</p><h3>Performers</h3><table class="grid"><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a href="Practitioner-us-core-practitioner-mary-obgyn.html">Practitioner/us-core-practitioner-mary-obgyn</a> " OBGYN"</td></tr></table><p><b>reasonReference</b>: <a href="#Condition_primary-cancer-condition-jenny-m">See above (Condition/primary-cancer-condition-jenny-m)</a></p><p><b>bodySite</b>: Left breast structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#80248007)</span></p></div>',
              },
              status: 'completed',
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '723990008',
                    display: 'Biopsy of breast using ultrasonographic guidance (procedure)',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              performedDateTime: '2018-03-06',
              asserter: {
                reference: 'Practitioner/us-core-practitioner-mary-obgyn',
              },
              performer: [
                {
                  actor: {
                    reference: 'Practitioner/us-core-practitioner-mary-obgyn',
                  },
                },
              ],
              reasonReference: [
                {
                  reference: 'Condition/primary-cancer-condition-jenny-m',
                },
              ],
              bodySite: [
                {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '80248007',
                      display: 'Left breast structure (body structure)',
                    },
                  ],
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-procedure-mammogram-jenny-m',
            resource: {
              resourceType: 'Procedure',
              id: 'us-core-procedure-mammogram-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-procedure-mammogram-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html">US Core Procedure Profile</a></p></div><p><b>status</b>: completed</p><p><b>code</b>: Mammography (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#71651007)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>performed</b>: 2018-02-01</p><p><b>asserter</b>: <a href="Practitioner-us-core-practitioner-mary-obgyn.html">Practitioner/us-core-practitioner-mary-obgyn</a> " OBGYN"</p><h3>Performers</h3><table class="grid"><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a href="Practitioner-us-core-practitioner-jane-radiotech.html">Practitioner/us-core-practitioner-jane-radiotech</a> " RADIOLOGIST"</td></tr></table></div>',
              },
              status: 'completed',
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '71651007',
                    display: 'Mammography (procedure)',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              performedDateTime: '2018-02-01',
              asserter: {
                reference: 'Practitioner/us-core-practitioner-mary-obgyn',
              },
              performer: [
                {
                  actor: {
                    reference: 'Practitioner/us-core-practitioner-jane-radiotech',
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/FamilyMemberHistory/family-member-history-aunt-jenny-m',
            resource: {
              resourceType: 'FamilyMemberHistory',
              id: 'family-member-history-aunt-jenny-m',
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "family-member-history-aunt-jenny-m" </p></div><p><b>status</b>: completed</p><p><b>patient</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>relationship</b>: maternal aunt <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-RoleCode.html">RoleCode</a>#MAUNT)</span></p><h3>Conditions</h3><table class="grid"><tr><td>-</td><td><b>Code</b></td><td><b>Onset[x]</b></td></tr><tr><td>*</td><td>Malignant tumor of ovary (disorder) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#363443007)</span></td><td>69 a<span style="background: LightGoldenRodYellow"> (Details: UCUM code a = \'a\')</span></td></tr></table></div>',
              },
              status: 'completed',
              patient: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              relationship: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
                    code: 'MAUNT',
                    display: 'maternal aunt',
                  },
                ],
              },
              condition: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '363443007',
                        display: 'Malignant tumor of ovary (disorder)',
                      },
                    ],
                  },
                  onsetAge: {
                    value: 69,
                    system: 'http://unitsofmeasure.org',
                    code: 'a',
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Procedure/us-core-procedure-mammogram-jenny-m',
            resource: {
              resourceType: 'Procedure',
              id: 'us-core-procedure-mammogram-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-procedure-mammogram-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-procedure.html">US Core Procedure Profile</a></p></div><p><b>status</b>: completed</p><p><b>code</b>: Mammography (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#71651007)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>performed</b>: 2018-02-01</p><p><b>asserter</b>: <a href="Practitioner-us-core-practitioner-mary-obgyn.html">Practitioner/us-core-practitioner-mary-obgyn</a> " OBGYN"</p><h3>Performers</h3><table class="grid"><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a href="Practitioner-us-core-practitioner-jane-radiotech.html">Practitioner/us-core-practitioner-jane-radiotech</a> " RADIOLOGIST"</td></tr></table></div>',
              },
              status: 'completed',
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '71651007',
                    display: 'Mammography (procedure)',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              performedDateTime: '2018-02-01',
              asserter: {
                reference: 'Practitioner/us-core-practitioner-mary-obgyn',
              },
              performer: [
                {
                  actor: {
                    reference: 'Practitioner/us-core-practitioner-jane-radiotech',
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/FamilyMemberHistory/family-member-history-uncle-jenny-m',
            resource: {
              resourceType: 'FamilyMemberHistory',
              id: 'family-member-history-uncle-jenny-m',
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "family-member-history-uncle-jenny-m" </p></div><p><b>status</b>: completed</p><p><b>patient</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>relationship</b>: paternal uncle <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v3-RoleCode.html">RoleCode</a>#PUNCLE)</span></p><p><b>deceased</b>: true</p><h3>Conditions</h3><table class="grid"><tr><td>-</td><td><b>Code</b></td><td><b>ContributedToDeath</b></td></tr><tr><td>*</td><td>Malignant tumor of pancreas (disorder) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#363418001)</span></td><td>true</td></tr></table></div>',
              },
              status: 'completed',
              patient: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              relationship: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v3-RoleCode',
                    code: 'PUNCLE',
                    display: 'paternal uncle',
                  },
                ],
              },
              deceasedBoolean: true,
              condition: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '363418001',
                        display: 'Malignant tumor of pancreas (disorder)',
                      },
                    ],
                  },
                  contributedToDeath: true,
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/DiagnosticReport/us-core-diagnosticreport-lab-jenny-m',
            resource: {
              resourceType: 'DiagnosticReport',
              id: 'us-core-diagnosticreport-lab-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-diagnosticreport-lab-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-diagnosticreport-lab.html">US Core DiagnosticReport Profile for Laboratory Results Reporting</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v2-0074.html">diagnosticServiceSectionId</a>#LAB)</span>, Surgical Pathology <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-v2-0074.html">diagnosticServiceSectionId</a>#SP)</span></p><p><b>code</b>: Pathology report final diagnosis Narrative <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#22637-3)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-01T00:00:00Z</p><p><b>issued</b>: Apr 5, 2018 12:00:00 AM</p><p><b>performer</b>: <a href="#Organization_us-core-organization-physician-services-inc">See above (Organization/us-core-organization-physician-services-inc)</a></p><p><b>resultsInterpreter</b>: <a href="#Practitioner_us-core-practitioner-peter-pathologist">See above (Practitioner/us-core-practitioner-peter-pathologist)</a></p><p><b>specimen</b>: <a href="Specimen-tumor-specimen-left-breast-jenny-m.html">Specimen/tumor-specimen-left-breast-jenny-m</a></p><p><b>result</b>: </p><ul><li><a href="#Observation_us-core-observation-lab-tumor-invasion-jenny-m">See above (Observation/us-core-observation-lab-tumor-invasion-jenny-m)</a></li><li><a href="#Observation_us-core-observation-lab-tumor-margins-jenny-m">See above (Observation/us-core-observation-lab-tumor-margins-jenny-m)</a></li><li><a href="#Observation_us-core-observation-lab-sentinel-nodes-jenny-m">See above (Observation/us-core-observation-lab-sentinel-nodes-jenny-m)</a></li><li><a href="#Observation_tumor-size-jenny-m">See above (Observation/tumor-size-jenny-m)</a></li><li><a href="#Observation_us-core-observation-lab-tumor-dcis-jenny-m">See above (Observation/us-core-observation-lab-tumor-dcis-jenny-m)</a></li><li><a href="#Observation_tumor-marker-test-her2-jenny-m">See above (Observation/tumor-marker-test-her2-jenny-m)</a></li><li><a href="#Observation_tumor-marker-test-er-jenny-m">See above (Observation/tumor-marker-test-er-jenny-m)</a></li><li><a href="#Observation_tumor-marker-test-pr-jenny-m">See above (Observation/tumor-marker-test-pr-jenny-m)</a></li><li><a href="Observation-us-core-observation-lab-tumor-grade-jenny-m.html">Observation/us-core-observation-lab-tumor-grade-jenny-m</a></li></ul></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0074',
                      code: 'LAB',
                    },
                  ],
                },
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/v2-0074',
                      code: 'SP',
                      display: 'Surgical Pathology',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '22637-3',
                    display: 'Pathology report final diagnosis Narrative',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-01T00:00:00Z',
              issued: '2018-04-05T00:00:00Z',
              performer: [
                {
                  reference: 'Organization/us-core-organization-physician-services-inc',
                },
              ],
              resultsInterpreter: [
                {
                  reference: 'Practitioner/us-core-practitioner-peter-pathologist',
                },
              ],
              specimen: [
                {
                  reference: 'Specimen/tumor-specimen-left-breast-jenny-m',
                },
              ],
              result: [
                {
                  reference: 'Observation/us-core-observation-lab-tumor-invasion-jenny-m',
                },
                {
                  reference: 'Observation/us-core-observation-lab-tumor-margins-jenny-m',
                },
                {
                  reference: 'Observation/us-core-observation-lab-sentinel-nodes-jenny-m',
                },
                {
                  reference: 'Observation/tumor-size-jenny-m',
                },
                {
                  reference: 'Observation/us-core-observation-lab-tumor-dcis-jenny-m',
                },
                {
                  reference: 'Observation/tumor-marker-test-her2-jenny-m',
                },
                {
                  reference: 'Observation/tumor-marker-test-er-jenny-m',
                },
                {
                  reference: 'Observation/tumor-marker-test-pr-jenny-m',
                },
                {
                  reference: 'Observation/us-core-observation-lab-tumor-grade-jenny-m',
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/observation-smoking-pack-years-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'observation-smoking-pack-years-jenny-m',
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "observation-smoking-pack-years-jenny-m" </p></div><p><b>status</b>: final</p><p><b>category</b>: Social History <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#social-history)</span></p><p><b>code</b>: Cigarette pack-years (observable entity) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#401201003)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-03-16</p><p><b>value</b>: 20 Pack-Years<span style="background: LightGoldenRodYellow"> (Details: UCUM code {PackYears} = \'{PackYears}\')</span></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'social-history',
                      display: 'Social History',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '401201003',
                    display: 'Cigarette pack-years (observable entity)',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-03-16',
              valueQuantity: {
                value: 20,
                unit: 'Pack-Years',
                system: 'http://unitsofmeasure.org',
                code: '{PackYears}',
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-observation-lab-tumor-invasion-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'us-core-observation-lab-tumor-invasion-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-observation-lab-tumor-invasion-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Status of invasion by tumor <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#370052007)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-01T00:00:00Z</p><p><b>value</b>: Negative (qualifier value) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#260385009)</span></p><p><b>specimen</b>: <a href="Specimen-tumor-specimen-left-breast-jenny-m.html">Specimen/tumor-specimen-left-breast-jenny-m</a></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '370052007',
                    display: 'Status of invasion by tumor',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-01T00:00:00Z',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '260385009',
                    display: 'Negative (qualifier value)',
                  },
                ],
              },
              specimen: {
                reference: 'Specimen/tumor-specimen-left-breast-jenny-m',
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-observation-lab-tumor-margins-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'us-core-observation-lab-tumor-margins-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-observation-lab-tumor-margins-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Margin involvement in Breast tumor <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#44669-0)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-01T00:00:00Z</p><p><b>value</b>: Uninvolved by invasive carcinoma <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA27151-2)</span></p><p><b>specimen</b>: <a href="Specimen-tumor-specimen-left-breast-jenny-m.html">Specimen/tumor-specimen-left-breast-jenny-m</a></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '44669-0',
                    display: 'Margin involvement in Breast tumor',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-01T00:00:00Z',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA27151-2',
                    display: 'Uninvolved by invasive carcinoma',
                  },
                ],
              },
              specimen: {
                reference: 'Specimen/tumor-specimen-left-breast-jenny-m',
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-observation-lab-sentinel-nodes-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'us-core-observation-lab-sentinel-nodes-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-observation-lab-sentinel-nodes-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Sentinel lymph nodes with metastasis [#] in Cancer specimen <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#92832-5)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-01T00:00:00Z</p><p><b>specimen</b>: <a href="Specimen-tumor-specimen-left-breast-jenny-m.html">Specimen/tumor-specimen-left-breast-jenny-m</a></p><h3>Components</h3><table class="grid"><tr><td>-</td><td><b>Code</b></td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Lymph nodes examined [#] in Cancer specimen by Light microscopy <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#92833-3)</span></td><td>3 Count<span style="background: LightGoldenRodYellow"> (Details: UCUM code {Count} = \'{Count}\')</span></td></tr></table></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '92832-5',
                    display: 'Sentinel lymph nodes with metastasis [#] in Cancer specimen',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-01T00:00:00Z',
              specimen: {
                reference: 'Specimen/tumor-specimen-left-breast-jenny-m',
              },
              component: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: '92833-3',
                        display: 'Lymph nodes examined [#] in Cancer specimen by Light microscopy',
                      },
                    ],
                  },
                  valueQuantity: {
                    value: 3,
                    unit: 'Count',
                    system: 'http://unitsofmeasure.org',
                    code: '{Count}',
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/tumor-size-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'tumor-size-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor-size'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "tumor-size-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-mcode-tumor-size.html">Tumor Size Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: Size Tumor <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#21889-1)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-01T00:00:00Z</p><p><b>method</b>: Pathology report gross observation <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#24419-4)</span></p><p><b>specimen</b>: <a href="Specimen-tumor-specimen-left-breast-jenny-m.html">Specimen/tumor-specimen-left-breast-jenny-m</a></p><h3>Components</h3><table class="grid"><tr><td>-</td><td><b>Code</b></td><td><b>Value[x]</b></td></tr><tr><td>*</td><td>Size.maximum dimension in Tumor <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#33728-7)</span></td><td>2.5 centimeters<span style="background: LightGoldenRodYellow"> (Details: UCUM code cm = \'cm\')</span></td></tr></table></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '21889-1',
                    display: 'Size Tumor',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-01T00:00:00Z',
              method: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '24419-4',
                    display: 'Pathology report gross observation',
                  },
                ],
              },
              specimen: {
                reference: 'Specimen/tumor-specimen-left-breast-jenny-m',
              },
              component: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://loinc.org',
                        code: '33728-7',
                        display: 'Size.maximum dimension in Tumor',
                      },
                    ],
                  },
                  valueQuantity: {
                    value: 2.5,
                    unit: 'centimeters',
                    system: 'http://unitsofmeasure.org',
                    code: 'cm',
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Observation/us-core-observation-lab-tumor-dcis-jenny-m',
            resource: {
              resourceType: 'Observation',
              id: 'us-core-observation-lab-tumor-dcis-jenny-m',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-observation-lab-tumor-dcis-jenny-m" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-observation-lab.html">US Core Laboratory Result Observation Profile</a></p></div><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.0.0/CodeSystem-observation-category.html">Observation Category Codes</a>#laboratory)</span></p><p><b>code</b>: DCIS intraductal extension in Breast cancer specimen Qualitative by Light microscopy <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#85336-6)</span></p><p><b>subject</b>: <a href="#Patient_cancer-patient-jenny-m">See above (Patient/cancer-patient-jenny-m)</a></p><p><b>effective</b>: 2018-04-01T00:00:00Z</p><p><b>value</b>: DCIS present with extensive intraductal component (EIC) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://loinc.org/">LOINC</a>#LA27261-9)</span></p><p><b>specimen</b>: <a href="Specimen-tumor-specimen-left-breast-jenny-m.html">Specimen/tumor-specimen-left-breast-jenny-m</a></p></div>',
              },
              status: 'final',
              category: [
                {
                  coding: [
                    {
                      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                      code: 'laboratory',
                    },
                  ],
                },
              ],
              code: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: '85336-6',
                    display: 'DCIS intraductal extension in Breast cancer specimen Qualitative by Light microscopy',
                  },
                ],
              },
              subject: {
                reference: 'Patient/cancer-patient-jenny-m',
              },
              effectiveDateTime: '2018-04-01T00:00:00Z',
              valueCodeableConcept: {
                coding: [
                  {
                    system: 'http://loinc.org',
                    code: 'LA27261-9',
                    display: 'DCIS present with extensive intraductal component (EIC)',
                  },
                ],
              },
              specimen: {
                reference: 'Specimen/tumor-specimen-left-breast-jenny-m',
              },
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Pracititioner/us-core-practitioner-owen-oncologist',
            resource: {
              resourceType: 'Practitioner',
              id: 'us-core-practitioner-owen-oncologist',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-practitioner-owen-oncologist" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitioner.html">US Core Practitioner Profile</a></p></div><p><b>identifier</b>: id: 9988776655</p><p><b>name</b>: Owen Oncologist </p><p><b>address</b>: 123 Corporate Drive Anytown MA 12345 US (WORK)</p><p><b>gender</b>: male</p><h3>Qualifications</h3><table class="grid"><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>Doctor of Medicine <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://hl7.org/fhir/R4/v2/0360/2.7/index.html">degreeLicenseCertificate[2.7]</a>#MD)</span></td></tr></table></div>',
              },
              identifier: [
                {
                  system: 'http://hl7.org/fhir/sid/us-npi',
                  value: '9988776655',
                },
              ],
              name: [
                {
                  family: 'Oncologist',
                  given: ['Owen'],
                  prefix: ['Dr.'],
                },
              ],
              address: [
                {
                  use: 'work',
                  line: ['123 Corporate Drive'],
                  city: 'Anytown',
                  state: 'MA',
                  postalCode: '12345',
                  country: 'US',
                },
              ],
              gender: 'male',
              qualification: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
                        version: '2.7',
                        code: 'MD',
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            fullUrl: 'http://example.org/fhir/Pracititioner/us-core-practitioner-peter-pathologist',
            resource: {
              resourceType: 'Practitioner',
              id: 'us-core-practitioner-peter-pathologist',
              meta: {
                profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner'],
              },
              text: {
                status: 'generated',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource "us-core-practitioner-peter-pathologist" </p><p style="margin-bottom: 0px">Profile: <a href="http://hl7.org/fhir/us/core/STU4/StructureDefinition-us-core-practitioner.html">US Core Practitioner Profile</a></p></div><p><b>identifier</b>: id: 1122334455</p><p><b>name</b>: Peter Pathologist </p><p><b>address</b>: 123 Corporate Drive Anytown MA 12345 US (WORK)</p><p><b>gender</b>: female</p><h3>Qualifications</h3><table class="grid"><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>Doctor of Medicine <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://hl7.org/fhir/R4/v2/0360/2.7/index.html">degreeLicenseCertificate[2.7]</a>#MD)</span></td></tr></table></div>',
              },
              identifier: [
                {
                  system: 'http://hl7.org/fhir/sid/us-npi',
                  value: '1122334455',
                },
              ],
              name: [
                {
                  family: 'Pathologist',
                  given: ['Peter'],
                  prefix: ['Dr.'],
                },
              ],
              address: [
                {
                  use: 'work',
                  line: ['123 Corporate Drive'],
                  city: 'Anytown',
                  state: 'MA',
                  postalCode: '12345',
                  country: 'US',
                },
              ],
              gender: 'female',
              qualification: [
                {
                  code: {
                    coding: [
                      {
                        system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
                        version: '2.7',
                        code: 'MD',
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    1234: {
      id: '123',
      name: 'bundle2.json',
      size: '500 KB',
      type: 'application/json',
      dateAdded: '10/10/2022',
      body: {
        resourceType: 'Bundle',
        id: '5dbfda1c-ed0b-4184-95ee-2324061fe3c0',
        meta: {
          lastUpdated: '2022-10-31T18:40:34.965+00:00',
        },
        type: 'searchset',
        total: 2,
        link: [
          {
            relation: 'self',
            url: 'https://api.logicahealth.org/RTTD/open/Procedure?subject%3APatient=Patient-XRTS-01-22A',
          },
        ],
        entry: [
          {
            fullUrl:
              'https://api.logicahealth.org/RTTD/open/Procedure/RadiotherapyCourseSummary-XRTS-01-22A-01-Prostate-1P-1V',
            resource: {
              resourceType: 'Procedure',
              id: 'RadiotherapyCourseSummary-XRTS-01-22A-01-Prostate-1P-1V',
              meta: {
                versionId: '4',
                lastUpdated: '2022-05-04T13:46:26.000+00:00',
                source: '#yTOw2bmrqDxUX7Q6',
                profile: [
                  'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-course-summary',
                  'http://hl7.org/fhir/us/codex-radiation-therapy/StructureDefinition/codexrt-radiotherapy-course-summary',
                ],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;RadiotherapyCourseSummary-XRTS-01-22A-01-Prostate-1P-1V-1Fx&quot; Version &quot;1&quot; Updated &quot;2021-09-06 01:21:17+0100&quot; </p><p style="margin-bottom: 0px">Profiles: <a href="StructureDefinition-codexrt-radiotherapy-course-summary.html">Radiotherapy Course Summary</a>, <a href="http://hl7.org/fhir/us/mcode/STU2/StructureDefinition-mcode-radiotherapy-course-summary.html">Radiotherapy Course Summary Profile</a></p></div><p><b>Procedure Intent Extension</b>: Curative <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#373808002 &quot;Curative - procedure intent&quot;)</span></p><blockquote><p><b>Radiotherapy Modality And Technique Extension</b></p><p><b>value</b>: External beam radiation therapy using photons (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#1156506007)</span></p><p><b>value</b>: Intensity modulated radiation therapy (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#441799006)</span></p></blockquote><p><b>Radiotherapy Number of Sessions Extension</b>: 1</p><blockquote><p><b>Radiotherapy Dose Delivered To Volume Extension</b></p><p><b>value</b>: <a href="BodyStructure-RadiotherapyVolume-XRTS-01-22A-01-Prostate.html">BodyStructure/RadiotherapyVolume-XRTS-01-22A-01-Prostate: Prostate</a></p><p><b>value</b>: 200 cGy<span style="background: LightGoldenRodYellow"> (Details: UCUM code cGy = \'cGy\')</span></p><p><b>value</b>: 1</p></blockquote><p><b>identifier</b>: id: C1Prostate (USUAL), id: urn:oid:1.2.246.352.72.842418.2121.20150602151.01.01.22.1 (OFFICIAL)</p><p><b>basedOn</b>: <a href="ServiceRequest-RadiotherapyPlannedCourse-XRTS-01-22A-01-Prostate-1P-1V.html">ServiceRequest/RadiotherapyPlannedCourse-XRTS-01-22A-01-Prostate-1P-1V</a></p><p><b>status</b>: in-progress</p><p><b>category</b>: Radiation oncology AND/OR radiotherapy <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#108290001)</span></p><p><b>code</b>: Radiotherapy Course of Treatment (regime/therapy) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://hl7.org/fhir/us/mcode/STU2/CodeSystem-snomed-requested-cs.html">Requested SNOMED Codes Code System</a>#USCRS-33529)</span></p><p><b>subject</b>: <a href="Patient-Patient-XRTS-01-22A.html">Patient/Patient-XRTS-01-22A</a> &quot; FATHER-22A&quot;</p><p><b>performed</b>: 2021-09-06 01:15:17+0100 --&gt; 2021-09-06 01:21:17+0100</p><p><b>reasonCode</b>: Malignant neoplasm of prostate <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="http://terminology.hl7.org/3.1.0/CodeSystem-icd10CM.html">International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM)</a>#C61)</span></p><p><b>bodySite</b>: Prostatic structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#41216001)</span></p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent',
                  valueCodeableConcept: {
                    coding: [
                      {
                        system: 'http://snomed.info/sct',
                        code: '373808002',
                        display: 'Curative - procedure intent',
                      },
                    ],
                    text: 'Curative',
                  },
                },
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality-and-technique',
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://snomed.info/sct',
                            code: '1156506007',
                            display: 'External beam radiation therapy using photons (procedure)',
                          },
                        ],
                      },
                    },
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://snomed.info/sct',
                            code: '441799006',
                            display: 'Intensity modulated radiation therapy (procedure)',
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-sessions',
                  valueUnsignedInt: 1,
                },
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume',
                  extension: [
                    {
                      url: 'volume',
                      valueReference: {
                        reference: 'BodyStructure/RadiotherapyVolume-XRTS-01-22A-01-Prostate',
                        display: 'Prostate',
                      },
                    },
                    {
                      url: 'totalDoseDelivered',
                      valueQuantity: {
                        value: 200,
                        system: 'http://unitsofmeasure.org',
                        code: 'cGy',
                      },
                    },
                    {
                      url: 'fractionsDelivered',
                      valueUnsignedInt: 1,
                    },
                  ],
                },
              ],
              identifier: [
                {
                  use: 'usual',
                  system: 'http://varian.com/fhir/identifier/radiotherapyCourseId',
                  value: 'C1Prostate',
                },
                {
                  use: 'official',
                  system: 'urn:dicom:uid',
                  value: 'urn:oid:1.2.246.352.72.842418.2121.20150602151.01.01.22.1',
                },
              ],
              basedOn: [
                {
                  reference: 'ServiceRequest/RadiotherapyPlannedCourse-XRTS-01-22A-01-Prostate-1P-1V',
                },
              ],
              status: 'in-progress',
              category: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '108290001',
                  },
                ],
              },
              code: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs',
                    code: 'USCRS-33529',
                  },
                ],
              },
              subject: {
                reference: 'Patient/Patient-XRTS-01-22A',
              },
              performedPeriod: {
                start: '2021-09-06T13:15:17+01:00',
                end: '2021-09-06T13:21:17+01:00',
              },
              reasonCode: [
                {
                  coding: [
                    {
                      system: 'http://hl7.org/fhir/sid/icd-10-cm',
                      code: 'C61',
                      display: 'Malignant neoplasm of prostate',
                    },
                  ],
                },
              ],
              bodySite: [
                {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '41216001',
                      display: 'Prostatic structure (body structure)',
                    },
                  ],
                },
              ],
            },
            search: {
              mode: 'match',
            },
          },
          {
            fullUrl:
              'https://api.logicahealth.org/RTTD/open/Procedure/RadiotherapyTreatedPhase-XRTS-01-22A-01-01-Primary',
            resource: {
              resourceType: 'Procedure',
              id: 'RadiotherapyTreatedPhase-XRTS-01-22A-01-01-Primary',
              meta: {
                versionId: '4',
                lastUpdated: '2022-05-04T13:46:43.000+00:00',
                source: '#UCncDBYCloqy0IU7',
                profile: [
                  'http://hl7.org/fhir/us/codex-radiation-therapy/StructureDefinition/codexrt-radiotherapy-treated-phase',
                ],
              },
              text: {
                status: 'extensions',
                div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative</b></p><div style="display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%"><p style="margin-bottom: 0px">Resource &quot;RadiotherapyTreatedPhase-XRTS-01-22A-01-01-Primary-1Fx&quot; Version &quot;1&quot; Updated &quot;2021-09-06 01:21:17+0100&quot; </p><p style="margin-bottom: 0px">Profile: <a href="StructureDefinition-codexrt-radiotherapy-treated-phase.html">Radiotherapy Treated Phase</a></p></div><blockquote><p><b>Radiotherapy Modality And Technique Extension</b></p><p><b>value</b>: External beam radiation therapy using photons (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#1156506007)</span></p><p><b>value</b>: Intensity modulated radiation therapy (procedure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#441799006)</span></p></blockquote><p><b>Radiotherapy Fractions Delivered</b>: 1</p><blockquote><p><b>Radiotherapy Dose Delivered To Volume Extension</b></p><p><b>value</b>: <a href="BodyStructure-RadiotherapyVolume-XRTS-01-22A-01-Prostate.html">BodyStructure/RadiotherapyVolume-XRTS-01-22A-01-Prostate: Prostate</a></p><p><b>value</b>: 200 cGy<span style="background: LightGoldenRodYellow"> (Details: UCUM code cGy = \'cGy\')</span></p></blockquote><p><b>identifier</b>: id: Primary (USUAL), id: urn:oid:1.2.246.352.73.842418.2121.20150602151.01.01.01.22.1 (OFFICIAL)</p><p><b>basedOn</b>: <a href="ServiceRequest-RadiotherapyPlannedPhase-XRTS-01-22A-01-01-Primary.html">ServiceRequest/RadiotherapyPlannedPhase-XRTS-01-22A-01-01-Primary</a></p><p><b>partOf</b>: <a href="Procedure-RadiotherapyCourseSummary-XRTS-01-22A-01-Prostate-1P-1V.html">Procedure/RadiotherapyCourseSummary-XRTS-01-22A-01-Prostate-1P-1V</a></p><p><b>status</b>: in-progress</p><p><b>category</b>: Radiation oncology AND/OR radiotherapy <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#108290001)</span></p><p><b>code</b>: Radiotherapy Treatment Phase (therapy/regime) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="CodeSystem-snomed-requested-cs.html">Requested SNOMED Codes Code System</a>#USCRS-33527)</span></p><p><b>subject</b>: <a href="Patient-Patient-XRTS-01-22A.html">Patient/Patient-XRTS-01-22A</a> &quot; FATHER-22A&quot;</p><p><b>performed</b>: 2021-09-06 01:15:17+0100 --&gt; 2021-09-06 01:21:17+0100</p><p><b>bodySite</b>: Prostatic structure (body structure) <span style="background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki"> (<a href="https://browser.ihtsdotools.org/">SNOMED CT</a>#41216001)</span></p><p><b>note</b>: Free text note in Radiotherapy Phase</p></div>',
              },
              extension: [
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality-and-technique',
                  extension: [
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://snomed.info/sct',
                            code: '1156506007',
                            display: 'External beam radiation therapy using photons (procedure)',
                          },
                        ],
                      },
                    },
                    {
                      url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique',
                      valueCodeableConcept: {
                        coding: [
                          {
                            system: 'http://snomed.info/sct',
                            code: '441799006',
                            display: 'Intensity modulated radiation therapy (procedure)',
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  url: 'http://hl7.org/fhir/us/codex-radiation-therapy/StructureDefinition/codexrt-radiotherapy-fractions-delivered',
                  valueUnsignedInt: 1,
                },
                {
                  url: 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-dose-delivered-to-volume',
                  extension: [
                    {
                      url: 'volume',
                      valueReference: {
                        reference: 'BodyStructure/RadiotherapyVolume-XRTS-01-22A-01-Prostate',
                        display: 'Prostate',
                      },
                    },
                    {
                      url: 'totalDoseDelivered',
                      valueQuantity: {
                        value: 200,
                        system: 'http://unitsofmeasure.org',
                        code: 'cGy',
                      },
                    },
                  ],
                },
              ],
              identifier: [
                {
                  use: 'usual',
                  system: 'http://varian.com/fhir/identifier/radiotherapyPhaseId',
                  value: 'Primary',
                },
                {
                  use: 'official',
                  system: 'urn:dicom:uid',
                  value: 'urn:oid:1.2.246.352.73.842418.2121.20150602151.01.01.01.22.1',
                },
              ],
              basedOn: [
                {
                  reference: 'ServiceRequest/RadiotherapyPlannedPhase-XRTS-01-22A-01-01-Primary',
                },
              ],
              partOf: [
                {
                  reference: 'Procedure/RadiotherapyCourseSummary-XRTS-01-22A-01-Prostate-1P-1V',
                },
              ],
              status: 'in-progress',
              category: {
                coding: [
                  {
                    system: 'http://snomed.info/sct',
                    code: '108290001',
                  },
                ],
              },
              code: {
                coding: [
                  {
                    system: 'http://hl7.org/fhir/us/codex-radiation-therapy/CodeSystem/snomed-requested-cs',
                    code: 'USCRS-33527',
                    display: 'Radiotherapy Treatment Phase (therapy/regime)',
                  },
                ],
              },
              subject: {
                reference: 'Patient/Patient-XRTS-01-22A',
              },
              performedPeriod: {
                start: '2021-09-06T13:15:17+01:00',
                end: '2021-09-06T13:21:17+01:00',
              },
              bodySite: [
                {
                  coding: [
                    {
                      system: 'http://snomed.info/sct',
                      code: '41216001',
                      display: 'Prostatic structure (body structure)',
                    },
                  ],
                },
              ],
              note: [
                {
                  text: 'Free text note in Radiotherapy Phase',
                },
              ],
            },
            search: {
              mode: 'match',
            },
          },
        ],
      },
    },
    12345: {
      id: '12345',
      name: 'bundle3.json',
      size: '500 KB',
      type: 'application/json',
      dateAdded: '10/10/2022',
      body: {
        resourceType: 'StructureDefinition',
      },
    },
  },
});

const uploadedFiles = selector({
  key: 'uploadedFiles',
  get: ({ get }) => {
    const files = get(uploadedFilesLookup);
    return Object.values(files).map((file) => file);
  },
});

export { uploadedFilesLookup, uploadedFiles };
