## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
	Do this to initially tell git what you want to commit. You must name what you want to commit first, before you can actually commit it. You are adding the changes you want to commit. This does NOT add new files to your repo, rather, it brings new files to Git's attention. 
		git add <file to add>

#### branch
	Lets you build a new branch (timeline of commits) of changes and file add'ns, esp useful when working with multiple collaborators and you want to make changes on your owm.
		git branch <title> 

#### checkout
	Allows you to "che out" a r tat you are not currently in. Nav command, lets you move to the repo you want to check.
		git checkout <repo>

#### clone
	Copy a repo so that you can add to it. look at it, or modify it. Copies the entire history of that project so you have it locally. 
		git clone <repo>

#### commit
	Like "save." Each time you commit to your project, it keeps a version within your git folder. That way, you can go back in time to that version, if you messed something up etc. When you commit, you are effectively taking a "snapshot" of your repo at that point in time.
		git commit -m "note"

#### fetch
	Update from a remote repo, synchronizes you with another repo. Pulls any data that you don't have locally, lists bookmarks to where each branch on that remote was when you sync'd.
		git fetch <alias>

#### log
	List the commit history of list of chages people have made. Shows you all the commit messages that have lead up to the snapshot you are currently on. Also, use this to find specific commits in your project history by author, date, content, or history. For example, git log --author looks for commits only from the specific author. 
		git log

#### merge
	Merges your changes back to the master branch. Do this when you're done working on a branch.
		git merge <branch_name> --> takes all changes made to the branch_name and adds to master

#### pull
	You pull changes down from GitHub, to get the most updated vereion of your repo to work with on your local computer. Basically, it runs a git fetch immediately followed by a git merge. "Fetch from a remote repo and try to merge into the current branch."
		git pull

#### push
	Like sending your repo. If your'e working on your local computer and want your commits to be visible on GitHub, you "push" these changes up to GitHub. 
		git push <alias> <branch>

#### reset
	Use to undo changes and commits. Ex: git reset HEAD --> undoes your last commit, unstage files that you previously ran git add on and wish to not include in the next commit. Unstages files, meaning it reverts staging area to what was there before modifications. 
		git reset HEAD
		git reset --soft  --> moves HEAD to specified commit ref, index/staging are untouched
		git reset --hard  --> unstage files AND undo any changes in working dir since last commit

#### rm
	Removes entries from staging areas. Differs from git reset HEAD. This commane "kicks the file off the stage" so it's not included in the next commit snapshot, effectively deleting it. It removes files from being tracked in Git, and removes them from your working dir.
		git rm <file>

#### status
	Use this to check the status of your git repository. It tells you where you are (which branch you're in, etc), what files are in that repo, which changes still need to be committed.
		git status


## Release 4: Git Workflow

- Push files to a remote repository
		git remote add origin https://github.com/username/repo_name.git
		git remote -v
		git push
- Fetch changes
		git remote -v
		git fetch origin
- Commit locally
		git init (inside the local dir you want to make repo, if not already)
		git status
		git add <file>
		git commit - m "message"

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection

	This exercise definitely helped me to learn a lot more in re: using git. When it comes to performing git things via the terminal, it all seemed very hazy and confusing. While some aspects are still not totally clear to me, some of the more big picture concepts are much clearer than before. I think my comfort zone is still using the GUI, but I know I need to start getting used to using git from the command line.

	I think I am still having a hard time conceptualizing the whole process via the command line. I am trying to connect each step to it's equivalent when using the GUI, but I feel like I'm coming up short. 

	I don't feel like I am super confident with each of the Learning Competencies, but I'm going to have to try out all these commands on the command line first and see. Hopefully confidence will come with practice. 