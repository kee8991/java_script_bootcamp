let MyAccount = {
    name:"Ezeh Emmanuel",
    expenses: 0,
    income:0
    
    }


//ADD INCOME FUNCTION
    let addIncome = function (account , amount , amount2 , amount3 ) {
        account.income = account.income + amount
        console.log(`Your new income balace is ${MyAccount.income}$`)

        account.expenses = account.expenses + amount2
        console.log(`Your new expenses balace is ${MyAccount.expenses}$`)

        account.expenses = account.expenses + amount3
        console.log(`Your new expenses balace is ${MyAccount.expenses}$`)
} 
addIncome(MyAccount, 1000 , 50 , 50 )

//GET SUMMARY FUNCTION

    let Getsummary = function ( Account) {
        return `Account for ${Account.name} has a balance 0f  ${Account.income - Account.expenses}$ . ${Account.income}$ income . ${Account.expenses}$ expenses `

    }

    let AccountSum = Getsummary(MyAccount)
    console.log(AccountSum)

    //RESET ACCOUNT FUNCTION

    let AccReset = function (reset) {
     //reset.income = reset.income - reset.income
     //reset.expenses = reset.expenses - reset.expenses

     reset.income = 0
     reset.expenses = 0


     
    }

    AccReset(MyAccount)
    console.log(`Your new income balace is ${MyAccount.income}$`)
    console.log(`Your new expenses balace is ${MyAccount.expenses}$`)

    // GET SUMMARY FUNCTION 2

    let Getsummary2 = function (Account2) {
        return `Account for ${Account2.name} has a balance of ${Account2.income - Account2.expenses}$ . ${Account2.income}$ income . ${Account2.expenses}$ expenses `


    }
let AccountSum2 = Getsummary2(MyAccount)
console.log(AccountSum2)
   
    