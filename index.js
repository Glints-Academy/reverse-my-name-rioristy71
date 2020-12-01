function reverseMyName(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString = str[i];
            console.log(newString)
        }
        return newString;
    }
   
    // reverseMyName('Michael Jackson');

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")