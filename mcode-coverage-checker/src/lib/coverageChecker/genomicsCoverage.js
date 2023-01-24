import fhirpath from 'fhirpath';
import { getGenomicRegionStudied, getGenomicSpecimen, getGenomicVariant, getGenomicsReport } from '../resourceFilters';
import { genomicsSectionId } from '../coverageSectionIds';
import { genomicsProfileIds } from '../coverageProfileIds';

/**
 * Takes a bundle and returns the coverage of genomic region studied resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all genomic region studied resources
 */
function getGenomicRegionStudiedCoverage(bundle) {
  const genomicRegion = getGenomicRegionStudied(bundle);
  const { genomicRegionStudiedId } = genomicsProfileIds;
  const genomicRegionStudiedCoverage = { profile: genomicRegionStudiedId, coverage: [] };
  genomicRegion.forEach((region) => {
    genomicRegionStudiedCoverage.coverage.push({
      resourceID: fhirpath.evaluate(region, 'Observation.id')[0],
      data: {
        Component: {
          covered: fhirpath.evaluate(region, 'Observation.component.exists()')[0],
        },
        'Gene Mutations': {
          covered: fhirpath.evaluate(
            region,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '36908-2').valueCodeableConcept.exists()",
          )[0],
        },
        'Gene Studied': {
          covered: fhirpath.evaluate(
            region,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48018-6').valueCodeableConcept.exists()",
          )[0],
        },
        'Coordinate System': {
          covered: fhirpath.evaluate(
            region,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '92822-6').valueCodeableConcept.exists()",
          )[0],
        },
        'DNA Ranges Examined': {
          covered: fhirpath.evaluate(
            region,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '51959-5').valueRange.exists()",
          )[0],
        },
        'DNA Region Description': {
          covered: fhirpath.evaluate(
            region,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '81293-3').valueString.exists()",
          )[0],
        },
        'Reference Sequence ID': {
          covered: fhirpath.evaluate(
            region,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48013-7').where(valueQuantity.exists() or valueCodeableConcept.exists() or valueString.exists() or valueBoolean.exists() or valueInteger.exists() or valueRange.exists() or valueRatio.exists() or valueSampledData.exists() or valueTime.exists() or valueDateTime.exists() or valuePeriod.exists()).exists()",
          )[0],
        },
      },
    });
  });
  return genomicRegionStudiedCoverage;
}

/**
 * Takes a bundle and returns the coverage of genomic specimen resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all genomic specimen resources
 */
function getGenomicSpecimenCoverage(bundle) {
  const genomicSpecimen = getGenomicSpecimen(bundle);
  const { genomicSpecimenId } = genomicsProfileIds;
  const genomicSpecimenCoverage = { profile: genomicSpecimenId, coverage: [] };
  genomicSpecimen.forEach((specimen) => {
    genomicSpecimenCoverage.coverage.push({
      resourceID: fhirpath.evaluate(specimen, 'Specimen.id')[0],
      data: {
        'Collection Site': {
          covered: fhirpath.evaluate(specimen, 'Specimen.collection.bodySite.exists()')[0],
        },
        'Specimen Type': {
          covered: fhirpath.evaluate(specimen, 'Specimen.type.exists()')[0],
        },
      },
    });
  });
  return genomicSpecimenCoverage;
}

/**
 * Takes a bundle and returns the coverage of genomic variant resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all genomic variant resources
 */
function getGenomicVariantCoverage(bundle) {
  const genomicVariant = getGenomicVariant(bundle);
  const { genomicVariantId } = genomicsProfileIds;
  const genomicVariantCoverage = { profile: genomicVariantId, coverage: [] };
  genomicVariant.forEach((variant) => {
    genomicVariantCoverage.coverage.push({
      resourceID: fhirpath.evaluate(variant, 'Observation.id')[0],
      data: {
        'Present/Absent': {
          covered: fhirpath.evaluate(variant, 'Observation.valueCodeableConcept.exists()')[0],
        },
        Component: {
          covered: fhirpath.evaluate(variant, 'Observation.component.exists()')[0],
        },
        Variation: {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '81252-9').valueCodeableConcept.exists()",
          )[0],
        },
        'DNA Change': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '81290-9').valueCodeableConcept.exists()",
          )[0],
        },
        'DNA Change Type': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48019-4').valueCodeableConcept.exists()",
          )[0],
        },
        'Amino Acid Change': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48005-3').valueCodeableConcept.exists()",
          )[0],
        },
        'Amino Acid Change Type': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48006-1').valueCodeableConcept.exists()",
          )[0],
        },
        'Molecular Consequence': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://hl7.org/fhir/us/mcode/CodeSystem/loinc-requested-cs' and code.coding.code = 'molecular-consequence').valueCodeableConcept.exists()",
          )[0],
        },
        'Clinical Significance': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '53037-8').valueCodeableConcept.exists()",
          )[0],
        },
        'Gene Studied': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48018-6').valueCodeableConcept.exists()",
          )[0],
        },
        'Genomic Source Class': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48002-0').valueCodeableConcept.exists()",
          )[0],
        },
        'Copy Number': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '82155-3').valueQuantity.exists()",
          )[0],
        },
        'Allelic Frequency': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '81258-6').valueQuantity.exists()",
          )[0],
        },
        'Allelic State': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '53034-5').valueCodeableConcept.exists()",
          )[0],
        },
        'Cytogenic Location': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '48001-2').where(valueQuantity.exists() or valueCodeableConcept.exists() or valueString.exists() or valueBoolean.exists() or valueInteger.exists() or valueRange.exists() or valueRatio.exists() or valueSampledData.exists() or valueTime.exists() or valueDateTime.exists() or valuePeriod.exists()).exists()",
          )[0],
        },
        'Cytogen. Nomenclature': {
          covered: fhirpath.evaluate(
            variant,
            "Observation.component.where(code.coding.system = 'http://loinc.org' and code.coding.code = '81291-7').where(valueQuantity.exists() or valueCodeableConcept.exists() or valueString.exists() or valueBoolean.exists() or valueInteger.exists() or valueRange.exists() or valueRatio.exists() or valueSampledData.exists() or valueTime.exists() or valueDateTime.exists() or valuePeriod.exists()).exists()",
          )[0],
        },
      },
    });
  });
  return genomicVariantCoverage;
}

/**
 * Takes a bundle and returns the coverage of genomics report resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of all genomics report resources
 */
function getGenomicsReportCoverage(bundle) {
  const genomicsReport = getGenomicsReport(bundle);
  const { genomicsReportId } = genomicsProfileIds;
  const genomicsReportCoverage = { profile: genomicsReportId, coverage: [] };
  genomicsReport.forEach((report) => {
    genomicsReportCoverage.coverage.push({
      resourceID: fhirpath.evaluate(report, 'DiagnosticReport.id')[0],
      data: {
        'Test Type': {
          covered: fhirpath.evaluate(report, 'DiagnosticReport.code.exists()')[0],
        },
        Result: {
          covered: fhirpath.evaluate(report, 'DiagnosticReport.result.exists()')[0],
        },
      },
    });
  });
  return genomicsReportCoverage;
}

/**
 * Takes a bundle and returns the coverage of genomics resources in that bundle
 * @param {Object} bundle, an mCODE bundle
 * @return {Object}, an object representing the coverage of the Genomics section of the mCODE diagram
 */
function getGenomicsCoverage(bundle) {
  return {
    section: genomicsSectionId,
    data: [
      getGenomicRegionStudiedCoverage(bundle),
      getGenomicSpecimenCoverage(bundle),
      getGenomicVariantCoverage(bundle),
      getGenomicsReportCoverage(bundle),
    ],
  };
}

export { getGenomicsCoverage };
