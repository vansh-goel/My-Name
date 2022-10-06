# How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/vansh-goel/My-Name/pulls)

- Take a look at the existing [Issues](https://github.com/vansh-goel/My-Name/issues) or [create a new issue](https://github.com/vansh-goel/My-Name/issues/new/choose)!
- [Fork the Repo](https://github.com/vansh-goel/My-Name/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a **[Pull Request](https://github.com/vansh-goel/My-Name/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

## HOW TO MAKE A PULL REQUEST:

**1.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/My-Name
```

**2.** Navigate to the newly created LinkFree project directory:

```bash
cd My-Name
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/vansh-goel/My-Name.git
```

**4.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**5.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**6.** Make your changes to the source code.

**7.** Stage your changes and commit:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`. Instead, stage your changes for each file/folder

```bash
git add file/folder
```

```bash
git commit -m "<your_commit_message>"
```

**8.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**9.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**Congratulations!** You've made your first contribution to [**My-Name**](https://github.com/vansh-goel/My-Name/graphs/contributors)! 

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the LinkFree project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

## Run automated tests

After making changes make sure that tests passes

Start the My-Name application by previewing the project using the extension Live Server.


## All the best! 👍🏻