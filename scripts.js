function drawTree(a){
    for (i = 0; i < a; i ++){
        var star = "";
        var tree = "";
        var space = " ";
        for (j = -1; j < i; j ++){
            star += "* ";
        }
        for (k = a - i; k >= 1; k --){
            tree += space;
        }
        console.log(tree + star);
    }
}