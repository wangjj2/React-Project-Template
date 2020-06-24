export const textFilter = (keyword) => (listObject) => {
    let regex = new RegExp(keyword.trim(), "i");
    return Object.values(listObject).some(val => regex.test(val) || (Array.isArray(val) && val.some(subVal => regex.test(subVal))))
}

export const dateFilter = (keyword) => (listObject) => {
    if(!keyword){
        return true
    }
    const startDate = new Date ( listObject.startDate);
    const endDate = new Date (listObject.endDate);
    const searchDate = new Date (keyword)
    return startDate <= searchDate && (endDate == "Invalid Date" ? true: endDate >= searchDate)
}