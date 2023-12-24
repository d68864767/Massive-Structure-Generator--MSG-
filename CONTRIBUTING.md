# Contributing to Massive Structure Generator (MSG)

First off, thank you for considering contributing to MSG. It's people like you that make MSG such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to check our [Issues](https://github.com/yourusername/massive-structure-generator/issues) page to see if someone else in the community has already created a ticket. If not, go ahead and make one!

## Fork & create a branch

If this is something you think you can fix, then fork MSG and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```shell
git checkout -b 325-add-japanese-localisation
```

## Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## Get the code

The first thing you'll need to do is get the code on your local machine. If you've never done this before, you can follow these steps:

```shell
# Clone your fork to your local machine
git clone git@github.com:YOUR-GITHUB-USERNAME/massive-structure-generator.git
```

## Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with MSG's master branch:

```shell
git remote add upstream git@github.com:yourusername/massive-structure-generator.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```shell
git checkout 325-add-japanese-localisation
git rebase master
git push --set-upstream origin 325-add-japanese-localisation
```

Finally, go to GitHub and [make a Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) :D

## Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of [good](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) [resources](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) but here's the suggested workflow:

```shell
git checkout 325-add-japanese-localisation
git pull --rebase upstream master
git push --force-with-lease origin 325-add-japanese-localisation
```

## Code review

A team member will review your pull request and provide feedback. Please be patient, as review times can vary. Once approved, your pull request will be merged into the master branch.

## Thank you for your contribution!

Your contributions to MSG are greatly appreciated. Every bit helps, and we hope you will continue to contribute in the future.
