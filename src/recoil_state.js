import { atom, selector } from 'recoil';

const uploadedFilesLookup = atom({
  key: 'uploadedFilesLookup',
  default: {
    123: {
      id: '123',
      name: 'bundle1.json',
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
    1234: {
      id: '1234',
      name: 'bundle2.json',
      size: '500 KB',
      type: 'application/json',
      dateAdded: '10/10/2022',
      body: {
        resourceType: 'StructureDefinition',
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
