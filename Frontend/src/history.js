import React from 'react'

import {
    createBrowserHistory
} from 'history';

let basename = ''
export default createBrowserHistory({
    basename: basename,
    // getUserConfirmation(message, callback) {
    //     // Show some custom dialog to the user and call
    //     // callback(true) to continue the transiton, or
    //     // callback(false) to abort it.
    //     //console.log(callback)
    //     //console.log(message)
    //     callback(false)
    // }
});