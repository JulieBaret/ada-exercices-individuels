//Etape 1 : détermine le nombre de jours par mois
function maxDaysInMonth(days, month){
    if(month==2 && days==28){
        return true;
    }
    else if(month >= 1 && month <= 7){
        if(month % 2 == 0 && days <= 30){
            return true;
        }
        if(month % 2 != 0 && days <= 31){
            return true;
        }
    }
    else if(month >= 8 && month <= 12){
        if(month % 2 == 0 && days <= 31){
            return true;
        }
        if(month % 2 != 0 && days <= 30){
            return true;
        }
    }
    return false
}
console.log(maxDaysInMonth(28, 31))

//Etape 1 : détermine si une date est au format dd/mm/aaaa
function isValidDate(myDate){
    if(typeof myDate == "string" 
    && myDate.length == 10
    && myDate[2] == "/" 
    && myDate[5] == "/"
    && !isNaN(myDate.split('/')[0]) 
    && !isNaN(myDate.split('/')[1])
    && !isNaN(myDate.split('/')[2]) 
    && myDate.split('/')[0] <= 31
    && myDate.split('/')[1] <= 12
    && maxDaysInMonth(myDate.split('/')[0], myDate.split('/')[1])){
        return true;
    } else {
        return false;
    }
};

myNewDate = "30/11/1993"
// console.log(!isNaN(myNewDate[0]))
// console.log(myNewDate.split('/')[0])
console.log(isValidDate(myNewDate))


//Etape 2 : vérifier que la date est un palindrome
function isPalindrome(newDate){
    if (isValidDate(newDate)){
        if(newDate[0] == newDate[9]
        && newDate[1] == newDate[8]
        && newDate[3] == newDate[7]
        && newDate[4] == newDate[6]){
            return true
        }
    }
    return false
}

function yesItsAPalindrome(newDate){
    if (isPalindrome(newDate)){
        return "La date " + newDate + " est un palindrome !"
    } else {
        return "La date " + newDate + " n'est pas un palindrome..."
    }
}
console.log(isPalindrome("03/04/2001"))
console.log(yesItsAPalindrome("11/02/2011"))

//Etape 3 : les x prochaines dates palindromes à compter d'aujourd'hui


//générer des années palindromes, même non valides
function generatePalDate(newYear){
    let y = [...newYear+''];
    let futureDate = y[3] + y[2] + "/" + y[1] + y[0] + "/" + newYear;
    return futureDate
};

console.log(generatePalDate(2022))
console.log(generatePalDate(2023))

function getNextPalindromes(numOfPal){
let d = new Date();
let futureYear = d.getFullYear();
//récupérer l'année en cours
let palindromesDate = [];

    while(palindromesDate.length <= numOfPal){
        if (isValidDate(generatePalDate(futureYear))){
            palindromesDate.push(generatePalDate(futureYear))
        }
        futureYear+=1;
    }
return "Voici les " + numOfPal + " prochaines années palindromes : " + palindromesDate;
}

console.log(getNextPalindromes(3));