const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
function grad(first, second, ... rest) {
    let averange = grades => grades.reduce((a,b) =>  a + b, 0) / grades.length;    
}
averange(grades);