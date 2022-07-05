//kodla silmedikce silinmez
localStorage.setItem('name' , 'Fevzi');

console.log(localStorage.getItem('name'));

localStorage.removeItem('name');
localStorage.clear();


let list = ["a" , "b" , "c"];
localStorage.setItem('alist' ,list);





//tarayici kapatildiginda silinir
sessionStorage.setItem('years' , '20');
