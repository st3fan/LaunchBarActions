// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

// Do we even need this? It looks like we can also simply provide an `url`
// key in the results to automatically make LaunchBar open when selected?

function run(argument) {
    if (argument !== undefined && argument.length > 0) {
        LaunchBar.openURL('http://www.github.com/' + argument);
    }
}
