// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

// For now the token is taken from a file. Not sure if I like this.
const GITHUB_TOKEN_PATH = '~/.github_token';

function readAccessToken() {
    if (File.isReadable(GITHUB_TOKEN_PATH)) {
        return File.readText(GITHUB_TOKEN_PATH).trim();
    }
}

function executeQuery(accessToken, filename, variables) {
    const path = `${Action.path}/Contents/Resources/${filename}`;
    return HTTP.getJSON( 'https://api.github.com/graphql', {
        body: { query: File.readText(path), variables: variables },
        method: 'POST',
        bodyType: 'json',
        resultType: 'json',
        headerFields: {'Authorization': `bearer ${accessToken}`},
    });
}

function runWithString(argument) {
    const accessToken = readAccessToken();
    if (accessToken === undefined) {
        return
    }

    const result = executeQuery(accessToken, 'search.graphql', {query: `user:@me ${argument}`});
    if (result.error !== undefined) {
        return; // TODO
    }

    let suggestions = result.data.data.search.edges.map((edge) => {
        return {
            title: edge.node.nameWithOwner,
            subtitle: edge.node.description,
            alwaysShowsSubtitle: true
        };
    })

    return suggestions;
}
