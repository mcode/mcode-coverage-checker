# Kickstarting a React App using Tailwind CSS that is linted, prettified, formatted on branch-push and automatically deployed to GH pages

1. Making the application using [CRA](https://create-react-app.dev/docs/getting-started)


   ```sh
   npx create-react-app my-app
   ```

2. [Set up a basic ESLint config](https://dev-yakuza.posstree.com/en/react/eslint/) for this project, following the text-based UI walkthrough triggered below 

   ```sh
   npm install --save-dev eslint
   npx eslint --init
   ```

   ... Then add a few lines to `package.json`  to run our linter as an `npm` script.

   ```json
   //...
   "scripts": {
     /// ...
     "lint": "eslint ./src",
     "lint:fix": "eslint --fix ./src"
   },
   //...
   ```

3. Install packages to use [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

   ```shell
   # to see what dependencies to install
   npm info "eslint-config-airbnb@latest" peerDependencies 
   # to install them automatically with npm 5+
   npx install-peerdeps --dev eslint-config-airbnb 
   ```

   ... Then update your `.eslintrc.*` file so we use them when linting, but are overrides by the react rules when there is conflict

   ```js
   module.exports = {
     //...
     "extends": ['eslint:recommended', 'airbnb', 'airbnb/hooks',  'plugin:react/recommended'],
     //...
   };
   ```

   ... Additionally, update your `.eslintrc.*` file to ignore a few react linting rules that don't apply in React 17^

   ```js
   module.exports = {
     //...
     rules: {
       // suppress errors for missing 'import React' in files
       'react/react-in-jsx-scope': 'off',
       // allow jsx syntax in js files
       'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
     },
     //...
   };
   ```

4. Lastly, update your  `.eslintrc.*` file to properly manage your jest tests

   ```js
   module.exports = {
     env: {
       browser: true,
       es2021: true,
       // Recognize Jest global variables like `test` and `expect`
       'jest/globals': true,
     },
     // ... 
     plugins: ['react', 'jest'],
     // ...
   };
   ```

5. Install the eslint configuration package for prettier, disabling any eslint rules that conflict with the prettier rules we'll enforce using prettier later. 

   ```sh
   npm install --save-dev eslint-config-prettier 
   ```

   ... Then add those configs to our `.eslintrc.*` file so we use them when linting, ensuring they're the highest priority

   ```js
   module.exports = {
   	// ...
     extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'prettier'],
     // ...
   };
   ```

6. Adapting [CRA's instructions for editor setup](https://create-react-app.dev/docs/setting-up-your-editor), install and set up other automated linting tools...

   ```sh
   npm install --save-dev lint-staged prettier
   ```

   ... Then add the following to `package.json` so that `lint-staged` is set up to run our linter and prettier

   ```json
     // ...
     "dependencies": {
       // ...
     },
     "lint-staged": {
       "src/**/*.{js,jsx}": [
         "eslint --fix"
       ],
       "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
         "prettier --write"
       ]
     },
     //...
   ```

7. Set up some default prettier rules by creating the following `.prettierrc` file in your projects root directory

   ```json
   {
       "endOfLine": "auto",
       "printWidth": 120,
       "tabWidth": 2,
       "singleQuote": true,
       "semi": true,
       "trailingComma": "all"
   }
   ```

8. Set up [husky](https://typicode.github.io/husky/#/?id=automatic-recommended) with the npx init command

   ```shell
   npx husky-init && npm install
   ```

   ... Then edit the autogenerate  `.husky/pre-commit` hook to run `lint-staged`

   ```shell
   #!/bin/sh
   . "$(dirname "$0")/_/husky.sh"
   
   npx lint-staged
   ```

9. [Set up tailwindcss](https://tailwindcss.com/docs/guides/create-react-app) in your project and [set up your editor](https://tailwindcss.com/docs/editor-setup) to work with tailwind by installing PostCSS Language Support and Tailwind CSS IntelliSense extensions

10. Set up some common editor level settings by adding this `settings.json` file to a `.vscode` directory in your project's root directory to support auto formatting/suggestions for tailwind and formatting your code with prettier onSave.

    ```json
    {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true,
      "editor.quickSuggestions": {
        "strings": true
      },
      "css.validate": false
    }
    ```

11. Set up editor level debugging by adding this `launch.json` file to your `.vscode` directory

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Chrome",
          "type": "chrome",
          "request": "launch",
          "url": "http://localhost:3000",
          "webRoot": "${workspaceFolder}/src",
          "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
          }
        }
      ]
    }
    ```

12. Create a `.github` directory in your project's root directory

13. Create a `.github/workflows` directory and a `.github/workflows/deploy-workflow.yaml` file for automatically deploying your built application to GH Pages, using the `yaml` below as an example

    ```yaml
    name: Deploy to GH Pages
    
    on:
      push:
        branches:
          - main
    
    jobs:
      deploy-to-pages:
        name: Deploy to GH Pages
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v1
          - uses: actions/setup-node@v1
            with:
              node-version: "16.x"
          - run: npm install
          - run: npm run build
          - name: Publish build to github pages
            uses: peaceiris/actions-gh-pages@v3.5.7
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: build
              publish_branch: gh-pages
              user_name: "github-actions[bot]"
              user_email: "github-actions[bot]@users.noreply.github.com"
    ```

    ... Then update `package.json` file to point to the correct homepage

    ```json
    {
      "name": "<REPO-NAME>",
      "homepage": "http://<GH-ACCT/ORG-NAME>.github.io/<REPO-NAME>",
      // ...
    }
    ```

14. Create a `.github/PULL_REQUEST_TEMPLATE.md` file containing all the things contributers to the codebase should consider. A thorough but onerous example is provided below.

    ```markdown
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
    
    `example_file.js`
    - Example change (ex: refactored import function)
    
    ## Testing Recommendations
    Please list any recommendations regarding what reviewers should test and if there is any specific guidance on how to test certain aspects of the PR. Be sure to mention edge cases that should be tried, particularly in the UI.
    
    # Checklists
    
    **Submitter:**
    - [ ] This PR describes why these changes were made.
    - [ ] This PR is into the correct branch.
    - [ ] This PR includes the correct GH issue reference.
    - [ ] Comment added to the relevant GH issue(s) with a link to this PR
    - [ ] Code diff has been reviewed (it **does not** contain: additional white space, not applicable code changes, debug statements, etc.)
    - [ ] If UI changes have been made, Chrome Dev Tools Lighthouse accessibility test has been executed to ensure no 508 issues were introduced.
    - [ ] Tests are included and test edge cases
    - [ ] Tests have been run locally and pass
    - [ ] Test fixtures updated and documented as necessary
    
    @ACCT1 :
    - [ ] Code is maintainable and reusable, reuses existing code and infrastructure where appropriate, and accomplishes the task’s purpose
    - [ ] The tests appropriately test the new code, including edge cases
    - [ ] You have tried to break the code
    - [ ] If applicable, you have considered possible performance regressions
    - [ ] Tested all recommendations listed in the "Testing Recommendations" section. The application behaves as expected with this PR.	
    ```