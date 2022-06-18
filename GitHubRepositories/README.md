# GitHub Repositories Action

Quickly open your GitHub repositories in the default browser.

## Setup Instructions

Generate a _Personal Access Token_ in your GitHub setting. Do not give this token any permissions. The defaults are fine. Put the token in `~/.github_token` and `chmod 600 ~/.github_token`.

(I don't know how to do this better - LaunchBar can't read from KeyChain unfortunately)

Double click the `GitHubRepositories.lbaction` bundle from the _Finder_ - this should install it.

## Usage

Activate the action with for example 'GH'. Then hit `Space` and start typing part of a repository name. The query execute by this action is `user:@me ...` so it will only include your own repos. Navigating to a search result and hitting `Return` will open the repository on github.com in your default browser.

