
//1st way
let tempconvert = {
    fahvalue: 77
}

let tempconverter = function (faht) {

    return{
        fahrenheitValue: `${faht.fahvalue} Fahrenheit`,
        celsiusValue:`${(faht.fahvalue - 32) * (5/9)} Celcius`,
        kelvinvalue: `${(faht.fahvalue + 459.67) * (5/9)} Kelvin`

    }


}

let converter = tempconverter(tempconvert)
 

console.log(converter)


// second way

let temp2converter = function (fahrenheit) {

    return{ // this is the return value (nested with multiple objects)
        fahrenheitValue: `${fahrenheit} Fahrenheit`,
        celsiusValue:`${(fahrenheit - 32) * (5/9)} Celcius`,
        kelvinvalue: `${(fahrenheit + 459.67) * (5/9)} Kelvin`

    }


}

let converter2 = temp2converter(77)
 

console.log(converter2)