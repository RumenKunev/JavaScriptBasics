Array.prototype.removeItem = function (str) {
    while(this.indexOf(str)>= 0) {
        this.splice(this.indexOf(str), 1);
    }
    console.log(this);
    return this;
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);

var arr1 = ['hi', 'bye', 'hello' ];
arr1.removeItem('bye');