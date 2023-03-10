//students score , total possible score //functions and template strings , arguments and if statemants, return keyword
// 15/20 > you got a C(75%)!
//A 90-100, B 80-89 , C 70 -79 , D 60 -69 , F 0-59
// call the functions and pass in the students score and total possible score and print 






let GradeCalculator = function (StudentScore, TotalScore = 20) {

    let grademarks = (StudentScore / TotalScore) * 100

    if (grademarks >=90 && grademarks <=100) {
        
        return `Your Marks from the Exam is ${StudentScore} and your percentage is ${StudentScore/TotalScore*100}% and your grade is A`
    }
    else if (grademarks >=80 && grademarks <=89) {
        return `Your Marks from the Exam is ${StudentScore} and your percentage is ${StudentScore/TotalScore*100}% and your grade is B`

    }
    else if (grademarks >=70 && grademarks <=79) {
        return `Your Marks from the Exam is ${StudentScore} and your percentage is ${StudentScore/TotalScore*100}% and your grade is C`

    }
    else if (grademarks >=60 && grademarks <=69) {
        return `Your Marks from the Exam is ${StudentScore} and your percentage is ${StudentScore/TotalScore*100}% and your grade is D`

    }
    else if (grademarks >=0 && grademarks <=59) {
        return `Your Marks from the Exam is ${StudentScore} and your percentage is ${StudentScore/TotalScore*100}% and your grade is F`

    }

    
}
let marks = 2
let score = GradeCalculator(marks)
console.log(score)
