

















<!-- added to documentation -->

## Links to Process Documents

[Master Process Document](https://docs.google.com/document/d/1qq_vxqr-HKDK6tweJn-X0_BjfjMCk2DZbzsss8KYyrE/edit?usp=sharing)

[Product backlog](https://docs.google.com/spreadsheets/d/1ioIJdAgL0UK7VoADM_YajnR-8R1NOcFEuzVO_VjLo0Y/edit#gid=0)

[Trello board](https://trello.com/b/REISWR4X/isharehealth-sprint)

[Gitflow and develoopment process Figma](https://www.figma.com/file/KVWnyFSoulpMFh4p3zPxUn/GitFlow-Protocol-and-Development-Process?type=whiteboard&node-id=0-1&t=zey9vPOo1zU35nKp-0)

[App architecture and ERD Figma](https://www.figma.com/file/ruRoSI7cgDmWFsVcgmbN4a/iShareHealth-Back-End-and-Data-Requirements?type=whiteboard&node-id=0-1&t=SEFkToU14GupWjGC-0)

## Guide to All Processes (without images)

### Cloning, PRs, Code Reviews, Merges

1. Cloning: everyone should have the Development branch cloned locally. DO NOT FORK AND CLONE. In the repo, click on the <Code> button and copy the url. In your terminal run “git clone -b development <repo-url>”

2. Pull Request: when creating a pull request, be sure to select “base: development” to compare your feature branch to. 

3. Code Reviewers: Two required reviews for each pull request - the code owner and any other team member. They review pull requests, provide feedback, and suggest improvements. Code Reviewers ensure that the code changes adhere to coding standards, maintainability, and overall quality. They focus on providing valuable insights and promoting collaboration. Synchronous code reviews are best, but not necessary. See below for specific steps and screenshots: 
- Click Pull Requests
- Select the PR you want to review.
- Scroll to the Review Required section and click “Add your review”.
- Click “Review Changes”
- You can add comments on specific lines by hovering and clicking the blue plus icon

- You can write comments or suggest specific code by clicking this icon

- Once you’ve added a comment click “start a review”
- When you’re done adding comments, click “Finish your review”
- Add any additional comments and click “Approve” or “Request Changes” Both reviewers need to approve before it can be merged by the Merge Manager. 


4. Merge Manager (Eamonn and Bryce): The Merge Manager is responsible for approving or rejecting pull requests into Development and periodically merging Development into Main (via pull request). This role helps ensure consistency and maintains the integrity of the codebase. The Merge Manager's primary responsibilities include:

- Final Approval: After reviewing the Code Reviewers' feedback, the Merge Manager provides the final approval for merging the code changes. They consider the feedback, assess the overall quality, and make the decision to proceed with the merge or request additional changes.

- Merging Code: Once the code changes receive the Merge Manager's approval, they take charge of merging the code into the appropriate branches. They ensure that the merge process is executed correctly, conflicts are resolved, and any necessary adjustments are made.

- Managing Code Review Process (if necessary): If code reviews are not happening in a timely manner or some devs are not getting an opportunity to/sharing in the responsibility for code reviews, the Merge Manager can assign reviewers, set time-tables, set up a rotation of code-reviewers, etc, as necessary. 













### Code Review Checklist

A code review checklist can help you conduct the process in a structured manner and ensure that you don’t miss out on anything important. Here is a list of purposes a code review should serve (ideally! We’ll all do our best):

- Identify syntax errors: Code review is a great way to identify simple bugs like misspelled variables, syntax errors, parameters in the wrong sequence, etc. 
- Verify functionalities: Code reviewers are supposed to ensure that all the major functionalities of the code are working as expected. If they are not working, they can raise a flag to the development team right away to get it fixed. Also encouraged to suggest edge cases and foresee bugs.
- Readability of the code: It is essential to check if the code structure is good and self-explanatory. 
- Maintaining Coding Style: Generally, all the application development teams define a coding style in advance. Make sure that you follow the same coding style while reviewing the code.
- Checking for Duplicates: Sometimes, junior developers are not aware of the existence of a particular library or function. Hence, they might go all the way and create a new library. You might want to check the code structure for all these types of duplicates.
- Ensuring Proper Documentation: Ensure each step in the code review process is documented correctly, especially if you have implemented new lines of code or edited existing code.
- Finding scope for improvement: Look for any scope of improvement in the existing code. 







### Gitflow Guide

#### Branches

**Main branch** is always what is deployed. It is a safe branch that no one ever works on directly! It only gets updated by the Merge Manager merging in development as a pull request on GitHub, ONLY when development is working perfectly (when exactly to do it tbd)

**Development** is the active branch we’re building our app on. As with main, though, no one works directly on development. We merge individual Feature branches and Hotfix into development via github pull request once we’re sure they work.

**Feature Branches** are where individual features/functionality/pages/components (dictated by issues in GitHub/listed on our Trello board) will be built. To initiate a Feature Branch, pull origin development locally (FROM ORIGIN REPO - DO NOT FORK) for the most up-to-date version, then create your feature branch locally, using the name convention <issue id#-feature-name-dev-name> (i.e. ‘issue-11-landing-page-harrison). Work on it locally, and push the branch to GitHub with your first commit. Once it’s complete, go to GitHub and create a pull request to merge it into Development. Note, it’s not necessary, but it’s a good practice to pull Origin Development on to your feature branch again any time there’s a new merge into development while you’re working on that feature branch)


**Hotfix Branches** are where bugs discovered in Development are resolved. Follow same procedure as Feature Branches, with the naming convention <issue id#-hotfix-dev-name> (i.e. issue-20-hotfix-eamonn)


**Backup Branches** are local branches that you create before you pull anything from a remote repo. It’s a good practice to always create a backup before pulling anything from a remote repo, that way you have a local backup if the merge is messed up.

#### Main Principals

Only ever push directly to your own feature or hotfix branches. Only merge code yourself locally (preferably after making a back-up branch)

Two code reviews required - one by the code owner, one by any other dev. Then can be approved by Merge Manager

Merge Manager(s) - responsible for approving or rejecting pull requests and periodically merging development into main.













### GitHub-Trello Actions

**UNLESS BETTER INTEGRATION SOLUTION FOUND**

1. When adding something to work on, whether user-story, bug-fix, etc, add it as a GitHub Issue in the repo, based on the info in the iShareHealth Requirements Backlog Please create it according to this standard:

- Name: <Feature Name> (be as accurate as you can without needing a long name)
- Comment: Please list any frame names from the UX wireframes that this issue will create.

2. It will automatically (after a few minutes) appear on our Trello Board under “GitHub Issues - Tasks to be done for MVP” (the start of the project board).
3. Choose your issue to work on from GitHub (not from the Trello list). Assign the issue to yourself.
4. Go to Trello and move that issue into the “Assigned/In-progress” column. Edit the Trello card and add your name to it. 
5. At each step the issue progresses through in GitHub, whoever does it will be in charge of moving it on the Trello board. 
- Create issue - automatically placed at start of board
- Assign yourself the issue - Assignee (you) manually moves the card to “Assigned/In-Progress”
- Submit a pull request - Assignee/code owner (you) manually move the card to “Ready for Review (Pull Request Started)”
- Code review - second reviewer manually moves the card to “Waiting for approval/merge” based on the outcome of the review. If the branch needs more work, code owner can close or cancel the pull request (not sure of the specific method) and move that card back to “Assigned/In-progress”
- Approve/Merge - Merge Manager moves card into “Finished/Merged into development” column OR back to “Assigned/In-progress” depending on approval. 