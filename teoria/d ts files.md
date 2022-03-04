# Declaration files
When a TypeScript script gets compiled there is an option to generate a declaration file (with the extension .d.ts) that functions as an interface to the components in the compiled JavaScript. In the process the compiler strips away all function and method bodies and preserves only the signatures of the types that are exported. The resulting declaration file can then be used to describe the exported virtual TypeScript types of a JavaScript library or module when a third-party developer consumes it from TypeScript.

The concept of declaration files is analogous to the concept of header file found in C/C++.

https://en.wikipedia.org/wiki/TypeScript#Declaration_files