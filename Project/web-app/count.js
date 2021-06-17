const Count = Object.create(null);

Count.number = function (array,input) {
        var count = 0;
        array.map(function(a) {
            if(a === input) {
                count ++;
            }
        });

        return count;
};
Count.add = function(a,check) {
    if(a === check) {
        var count = 0;
        count = count + 1;
        return count;
    }
};

export default Object.freeze(Count);