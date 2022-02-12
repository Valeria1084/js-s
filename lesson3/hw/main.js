 //1
 let text = [ 'Валерія','Анна','Марія','Марко','Паша'];
let number = [10,11,12,13,14,15];
 let all = [ 140,'Valeria',true,false,'one'];
 console.log(text);
 console.log(number);
 console.log(all);

 //2

 let arr = [];
 arr[0] = 'Valeria';
 arr[1] = 'Ponomarenko';
 arr[2] = 2003;
 arr[3] = true;
 console.log(arr)


 //3

 for (let i = 0 ; i < 10 ; i ++){
  document.write(`<div>VALERIA</div>`);
 }

 //4
 let arr_text = ['Валерія','Анна','Марія','Марко','Паша','Настя','Вася','Софа','Оля','Валера',];
  for(let i = 0 ; i < arr_text.length; i++){
   console.log(arr_text[i])
  }

  //5
 let arr_all = [140,'Valeria',[],10,false,'one','Марко',{},'Паша',200,];
  for(let i = 0; i < arr_all.length;i++){
   console.log(arr_all[i])
  }
  //6
 let arr_6 = [ [],'Valeria',true,false,'one',true, 10, {} ,11,33,]
 for (let i = 0 ; i < arr_6.length;i++ ){
  if (typeof arr_6[i] === 'boolean'){
   console.log(arr_6[i])
  }
 }
 //7
 let arr_7 = [ [],'Valeria',true,false,'one',true, 10, {} ,11,33,]
 for (let i = 0 ; i < arr_7.length; i++){
  if(typeof arr_7[i] === 'number'){
   console.log(arr_7[i])
  }
 }

 //8
  let arr_8 = [ [],'Valeria',true,false,'one',true, 10, {} ,11,33,];
 for (let i = 0 ; i < arr_8.length; i++ ){
  if(typeof arr_8[i] === 'string'){
   console.log(arr_8[i])
  }
 }

 //9

 let arr_9 = [];
 arr_9[0] =  [];
 arr_9[1] = {};
 arr_9[2] = 'Valeria';
 arr_9[3] = true;
 arr_9[4] = 101;
 arr_9[5] ='Марко';
 arr_9[6] = 1000;
 arr_9[7] = false;
 arr_9[8] ={};
 arr_9[9] = 'Марія';
  for (let i = 0; i < arr_9.length; i++ ){
   console.log(arr_9[i])
  }
  //10
  for (let i = 0; i < 10; i++) {
     console.log('поточний крок циклу : ' + i + '  ');
      document.write('поточний крок циклу : ' + i + '  ' + "<br/>") ;
  }
//11
 for (let i = 0; i < 100; i++) {
  console.log('поточний крок циклу : ' + i + '   ');
  document.write('поточний крок циклу : ' + i + '  ' );
 }

 //12
 for (let i = 0; i < 100; i+=2) {
  console.log('поточний крок циклу : ' + i + '   ');
  document.write('поточний крок циклу : ' + i + '  '  + "<br/>" );
 }

 //13
  for (let i = 0 ; i < 100 ; i++){
   if ([i] % 2 === 0){
    console.log('поточний крок циклу : ' + i + '   ');
    document.write('поточний крок циклу : ' + i + '  ' );

   }
  }

 //14
 for (let i = 0 ; i < 100 ; i++){
  if ([i] % 2 === 1){
   console.log('поточний крок циклу : ' + i + '   ');
   document.write('поточний крок циклу : ' + i + '  ' + "<br/>" );

  }
 }


