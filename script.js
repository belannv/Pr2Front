const currentYear = new Date().getFullYear(); // Визначаємо поточний рік

const getAgeString = (name, birthYear) => {
    const age = currentYear - birthYear;
    if(birthYear == null){
        document.write((`Я ${name}`));
    } else {
        document.write((`Я ${name}, мені ${age} років`)); 
    }
};

 
