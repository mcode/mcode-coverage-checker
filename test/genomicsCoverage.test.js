import testBundle from './bundles/genomicsBundle.json';
import getGenomicsCoverage from '../src/lib/coverageChecker/genomicsCoverage';

describe('getGenomicsCoverage()', () => {
  const res = getGenomicsCoverage(testBundle);

  test('Section object should have length equal to number of profiles in section', () => {
    expect(res.data.length).toBe(4);
  });

  test('Coverage arrays should have length equal to number of resources of each type in bundle', () => {
    expect(res.data[0].coverage.length).toBe(2);
    expect(res.data[1].coverage.length).toBe(2);
    expect(res.data[2].coverage.length).toBe(2);
    expect(res.data[3].coverage.length).toBe(2);
  });

  test('Coverage arrays should not include non-compliant resources if they do not include a meta.profile element', () => {
    // Iterate through our empty resources and delete their profile arrays
    const modifiedTestBundle = { ...testBundle };
    modifiedTestBundle.entry
      .filter((entry) => entry.resource.id.startsWith('empty'))
      .forEach((entry) => delete entry.resource.meta.profile); // eslint-disable-line no-param-reassign

    const updatedRes = getGenomicsCoverage(modifiedTestBundle);
    expect(updatedRes.data[0].coverage.length).toBe(1);
    expect(updatedRes.data[1].coverage.length).toBe(1);
    expect(updatedRes.data[2].coverage.length).toBe(1);
    expect(updatedRes.data[3].coverage.length).toBe(1);
  });

  test('Coverage arrays should still include compliant resources if they do not include a meta.profile element', () => {
    // Iterate through all resources and delete their profile arrays
    const modifiedTestBundle = { ...testBundle };
    modifiedTestBundle.entry.forEach((entry) => delete entry.resource.meta.profile); // eslint-disable-line no-param-reassign

    const updatedRes = getGenomicsCoverage(modifiedTestBundle);

    expect(updatedRes.data[0].coverage.length).toBe(1);
    expect(updatedRes.data[1].coverage.length).toBe(1);
    expect(updatedRes.data[2].coverage.length).toBe(1);
    expect(updatedRes.data[3].coverage.length).toBe(1);
  });

  test('All values should be true when genomic region studied has all fields covered', () => {
    const coveredRegionStudied = res.data[0].coverage[1].data;
    expect(coveredRegionStudied.Component.covered).toBe(true);
    expect(coveredRegionStudied['Gene Mutations'].covered).toBe(true);
    expect(coveredRegionStudied['Gene Studied'].covered).toBe(true);
    expect(coveredRegionStudied['Coordinate System'].covered).toBe(true);
    expect(coveredRegionStudied['DNA Ranges Examined'].covered).toBe(true);
    expect(coveredRegionStudied['DNA Region Description'].covered).toBe(true);
    expect(coveredRegionStudied['Reference Sequence ID'].covered).toBe(true);
  });

  test('All values should be false when genomic region studied is missing every field', () => {
    const emptyRegionStudied = res.data[0].coverage[0].data;
    expect(emptyRegionStudied.Component.covered).toBe(false);
    expect(emptyRegionStudied['Gene Mutations'].covered).toBe(false);
    expect(emptyRegionStudied['Gene Studied'].covered).toBe(false);
    expect(emptyRegionStudied['Coordinate System'].covered).toBe(false);
    expect(emptyRegionStudied['DNA Ranges Examined'].covered).toBe(false);
    expect(emptyRegionStudied['DNA Region Description'].covered).toBe(false);
    expect(emptyRegionStudied['Reference Sequence ID'].covered).toBe(false);
  });

  test('All values should be true when genomic specimen has all fields covered', () => {
    const coveredSpecimen = res.data[1].coverage[1].data;
    expect(coveredSpecimen['Collection Site'].covered).toBe(true);
    expect(coveredSpecimen['Specimen Type'].covered).toBe(true);
  });

  test('All values should be false when genomic specimen is missing every field', () => {
    const emptySpecimen = res.data[1].coverage[0].data;
    expect(emptySpecimen['Collection Site'].covered).toBe(false);
    expect(emptySpecimen['Specimen Type'].covered).toBe(false);
  });

  test('All values should be true when genomic variant has all fields covered', () => {
    const coveredVariant = res.data[2].coverage[1].data;
    expect(coveredVariant['Present/Absent'].covered).toBe(true);
    expect(coveredVariant.Component.covered).toBe(true);
    expect(coveredVariant.Variation.covered).toBe(true);
    expect(coveredVariant['DNA Change'].covered).toBe(true);
    expect(coveredVariant['DNA Change Type'].covered).toBe(true);
    expect(coveredVariant['Amino Acid Change'].covered).toBe(true);
    expect(coveredVariant['Amino Acid Change Type'].covered).toBe(true);
    expect(coveredVariant['Molecular Consequence'].covered).toBe(true);
    expect(coveredVariant['Clinical Significance'].covered).toBe(true);
    expect(coveredVariant['Gene Studied'].covered).toBe(true);
    expect(coveredVariant['Genomic Source Class'].covered).toBe(true);
    expect(coveredVariant['Copy Number'].covered).toBe(true);
    expect(coveredVariant['Allelic Frequency'].covered).toBe(true);
    expect(coveredVariant['Allelic State'].covered).toBe(true);
    expect(coveredVariant['Cytogenic Location'].covered).toBe(true);
    expect(coveredVariant['Cytogen. Nomenclature'].covered).toBe(true);
  });

  test('All values should be false when genomic variant is missing every field', () => {
    const emptyVariant = res.data[2].coverage[0].data;
    expect(emptyVariant['Present/Absent'].covered).toBe(false);
    expect(emptyVariant.Component.covered).toBe(false);
    expect(emptyVariant.Variation.covered).toBe(false);
    expect(emptyVariant['DNA Change'].covered).toBe(false);
    expect(emptyVariant['DNA Change Type'].covered).toBe(false);
    expect(emptyVariant['Amino Acid Change'].covered).toBe(false);
    expect(emptyVariant['Amino Acid Change Type'].covered).toBe(false);
    expect(emptyVariant['Molecular Consequence'].covered).toBe(false);
    expect(emptyVariant['Clinical Significance'].covered).toBe(false);
    expect(emptyVariant['Gene Studied'].covered).toBe(false);
    expect(emptyVariant['Genomic Source Class'].covered).toBe(false);
    expect(emptyVariant['Copy Number'].covered).toBe(false);
    expect(emptyVariant['Allelic Frequency'].covered).toBe(false);
    expect(emptyVariant['Allelic State'].covered).toBe(false);
    expect(emptyVariant['Cytogenic Location'].covered).toBe(false);
    expect(emptyVariant['Cytogen. Nomenclature'].covered).toBe(false);
  });

  test('All values should be true when genomics report has all fields covered', () => {
    const coveredReport = res.data[3].coverage[1].data;
    expect(coveredReport['Test Type'].covered).toBe(true);
    expect(coveredReport.Result.covered).toBe(true);
  });

  test('All values should be false when genomics report is missing every field', () => {
    const emptyReport = res.data[3].coverage[0].data;
    expect(emptyReport['Test Type'].covered).toBe(false);
    expect(emptyReport.Result.covered).toBe(false);
  });
});
