---
title: Collaborate on a prototype
order: 4
---

When you store a prototype on GitHub, you can collaborate on your code with anyone in your team.

You can make a 'branch' (a separate version) so it does not affect anyone else.

When you are ready to suggest your changes, you can make a 'pull request' to the `main` branch. This will share your suggested changes with the rest of the team for them to review.

If you are working on your own, you can make changes on `main` without using branches.

## Create a branch

1. In Github Desktop top bar, select <kbd><samp>Current branch</samp></kbd>.
2. Select <kbd><samp>New branch</samp></kbd>.
3. Enter a branch name and select <kbd><samp>Create branch based on 'main'</samp></kbd>.

## Save and share changes

Make your changes to the prototype and save them in your code editor. Then you can share them by creating a 'pull request'.

GitHub Desktop will show you the files that have changed.

1. In Github Desktop, bottom left, enter a summary in the box above the <samp>description</samp> (leave the description blank).
2. Select <kbd><samp>Commit to branch-name</samp></kbd>.
3. Click <kbd><samp>Publish repository</samp></kbd>. This publishes your code to GitHub.
4. If you make more changes, commit them and select <kbd><samp>Push origin</samp></kbd>.

## Make a pull request

1. Select <kbd><samp>Create a pull request</samp></kbd>. This tells other people about your new branch, so they can review and suggest changes. If you cannot see that button, select the <kbd><samp>Branch</samp></kbd> menu, then <kbd><samp>Create a pull request</samp></kbd>.
2. Creating a pull request will open GitHub website. Write a title and description of your changes and select <kbd><samp>Create pull request</samp></kbd>.

## Review a pull request

Another member of the team should review the pull request on GitHub.

They should:

1. Go to the <samp>Files Changed</samp> tab.
2. Select <kbd><samp>Review changes</samp></kbd>.

When they have approved the pull request:

1. Go to the <samp>Conversation</samp> tab.
2. Select <kbd><samp>Merge pull request</samp></kbd>.

## Download changes

When a pull request is merged, you'll need to update your version (also called 'pulling' changes).

1. In Github Desktop top bar, select <kbd><samp>Current branch</samp></kbd>.
2. Select <kbd><samp>main</samp></kbd>.
3. Click <kbd><samp>Fetch origin</samp></kbd> and then <kbd><samp>Pull origin</samp></kbd>.
4. Select <kbd><samp>Open in Visual Studio Code</samp></kbd> to view the changes.

## Dealing with conflicts

If 2 people edit the same file at the same time, it can sometimes cause an error in GitHub called a 'conflict'.

If there is a conflict, you must manually resolve the change. Ask a developer on your team to help.
