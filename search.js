const searchInList = (list, searchField, searchValue) => {
    return new Promise((resolve, reject) => {
        const results = list.filter(item => item[searchField] === searchValue);
        if (results.length > 0) {
            resolve(results);
        } else {
            reject(`За пошуком по ${searchField}:${searchValue} не знайдено.`);
        }
    });
};

export { searchInList };
