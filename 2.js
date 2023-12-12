//Ввод матрицы
function input(m, n){
    let a = []
    for (let i=0;i<m;i++){
        a.push([])
        for (let k=0;k<n;k++){
            a[i][k] = Number(prompt('Введите элемент ('+i+','+k+')',0));
        }
    }
    return a;
}


//Нахождение строк с мин. элементом
function find_min(m){
    let min = m[0][0]
    let min_list = []

    for (let i=0;i<m.length;i++){
        for (let k=0;k<m[i].length;k++){
            if (m[i][k] < min){
                min = m[i][k];
            }
        }
    }
    
    for (let i=0;i<m.length;i++){
        for (let k=0;k<m[i].length;k++){
            if (m[i][k] == min && !(i in min_list)){
                min_list.push(i);
            }
        }
    }
    return min_list;
}

//Вывод матрицы
function output(m){
    m.forEach(item => console.log(item.join(' ')))
}

let matrix = input(3,3);
output(matrix);
console.log(find_min(matrix));

