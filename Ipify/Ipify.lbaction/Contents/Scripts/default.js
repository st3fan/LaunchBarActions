// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

function formatResult(result) {
    if (result.error !== undefined) {
        return result.error;
    }
    return result.data;
}

function getIPv4() {
    return formatResult(HTTP.get('https://api.ipify.org', {timeout: 3.0}));
}

function getIPv6() {
    return formatResult(HTTP.get('https://api64.ipify.org', {timeout: 3.0}));
}

function run(argument) {
    return [
        { title: getIPv4(), badge: 'IPv4' },
        { title: getIPv6(), badge: 'IPv6' }
    ];
}
