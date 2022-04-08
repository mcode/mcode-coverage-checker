Pull requests into this project require the following. Submitter and reviewer should :white_check_mark: when done. For items that are not-applicable, note it's not-applicable ("N/A") and :white_check_mark:.

Prepend your PR title like `#<issue-number>: <title>`, and include all issues if the PR covers more than one, e.g. `#14, #15: <title>`. If the PR is not related to an issue task, just give it a descriptive title.

When assigning a reviewer, tag their GitHub username in the reviewer checklist section below.


# Description
Issue: <NUMBER-HERE>

Write out a concise summary of this pull request and what it addresses.

## (Feature) Demo/Screenshots
Insert demo video or photos for a new or updated feature or capability.

## (Bugfix) How to Replicate
Insert steps for how to replicate the bug this PR addresses.

## (Bugfix) Solution
Insert description for the solution this PR implements to address the bug.

## Important Changes
Please list important files (meaning substantial or integral to the PR) along with a list of the general changes that should be highlighted for reviewers.

_General changes_

`example_file.js`
- Example change (ex: refactored import function)

## Testing Recommendations
Please list any recommendations regarding what reviewers should test and if there is any specific guidance on how to test certain aspects of the PR. Be sure to mention edge cases that should be tried, particularly in the UI.

# Checklists

**Submitter:**
- [ ] This PR describes why these changes were made.
- [ ] This PR is into the correct branch.
- [ ] This PR includes the correct JIRA issue reference.
- [ ] Comment added to the relevant JIRA issue(s) with a link to this PR
- [ ] Code diff has been reviewed (it **does not** contain: additional white space, not applicable code changes, debug statements, etc.)

@ACCT1 :
- [ ] Code is maintainable and reusable, reuses existing code and infrastructure where appropriate, and accomplishes the task’s purpose
- [ ] You have tried to break the code
- [ ] Tested all recommendations listed in the "Testing Recommendations" section. The application behaves as expected with this PR.
