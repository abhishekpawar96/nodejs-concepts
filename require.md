require("something");

require is just a function which takes
 (moduleName | Path) => exports object

Steps:
    1. Resolving: find absolute file path.
    2. Loading: determine content of the file. 
    3. Wrapping: gives each module it's private scope and make require local to every module
    4. Evaluating: what VM eventually does to the code
    5. Caching: avoid 1-5.

Resolve:
    - .js
    - .json
    - .node

`require('module').wrapper`
`function (exports, require, module, __filename, __dirname)`