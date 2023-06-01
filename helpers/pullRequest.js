/**
 * list Commits Of Pull Request
 * @param {Object} context
 * @param {String} owner
 * @param {String} repo
 * @param {String} pullNumber
 * @param {String} perPage
 * @param {String} pageNo
 */
module.exports.listCommitsOfPullRequest = async (context, owner, repo, pullNumber, perPage, pageNo) => {
  try {
    const params = {
      owner,
      repo,
      pull_number: pullNumber
    }
    if (perPage) {
      params.per_page = perPage
    }
    if (pageNo) {
      params.page = pageNo
    }
    // find commits
    const commits = await context.github.pullRequests.listCommits(params)
    return commits
  } catch (error) {
    return error
  }
}

/**
 * Get Pull Request
 * @param {Object} context
 * @param {String} owner
 * @param {String} repo
 * @param {String} pullNumber
 */
module.exports.getPullRequest = async (context, owner, repo, pullNumber) => {
  try {
    const params = {
      owner,
      repo,
      pull_number: pullNumber
    }
    // find PR
    const pullRequestDetails = await context.github.pullRequests.get(params)
    return pullRequestDetails
  } catch (error) {
    return error
  }
}
