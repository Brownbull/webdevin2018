// ES6 + Webpack2
// js1 file
export const add = (a, b) => a + b;
//or
export default function add() {
    return a + b;
}
//js 2 file
import { add } from './add';
//or
import add from './add';

// package.json file
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}

// then on html
<script src="bunfle.js"></script>