import { TypeScript } from 'typescript'

export = function test() {
  console.log(TypeScript)
}

// let programText = 'class Foo { }';
// let tree = TypeScript.Parser.parse('dummy.ts',
//   TypeScript.SimpleText.fromString(programText),
//   false /* is .d.ts? */,
//   new TypeScript.ParseOptions(TypeScript.LanguageVersion.EcmaScript5, true /* allow ASI? */))
// // What is the type of the first child?
// let firstChildKind = tree.sourceUnit().childAt(0).kind()