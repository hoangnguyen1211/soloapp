export const randomArrayFunc = (array) => {
    return array.sort((a,b) => {
        const random1 = Math.random();
        const random2 = Math.random();
        if(random1 > random2) return 1;
        else if(random1 < random2) return -1;
        else return 0;
    });
}