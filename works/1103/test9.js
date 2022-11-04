'use strict';

// 오늘날짜를 전역변수로 생성... (전역변수라 한번지정한건 안바뀜,바꾸고싶으면 function안에다 쓰면됨fuction바깥에 뺀이유: 시간 비교하려고)
const today = new Date();//객체를 생성해서 일반변수에 담음(객체변수가 만들어짐)
const year = today.getFullYear();  // 연도 4자리
const month = today.getMonth() + 1;   // 월(기존월보다 1자리 작다)
const date = today.getDate();   // 일
const hour = today.getHours();  // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜 출력함수
function fCheck1() {
  let date1 = new Date();
  console.log("date1 : ", date1);
  document.getElementById("demo").innerHTML = date1; //원래 이렇게 써야되는데 아래처럼 간단하게써도됨
}

// 편집날짜 함수
function fCheck2() {
  let strDate = yymmdd;
  demo.innerHTML = strDate; //이렇게 간단하게써도됨
}

// 쉬운날짜 함수
function fCheck3() {
  let str = "";
  str += year + "년";
  str += month + "월";
  str += date + "일";
  //요일 : 0(일),1(월),2(화),3(수),4(목),5(금),6(토) 로 나옴
  // str += today.getDay() + "요일"; //요일: getDay()
  let week =  ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일"; 
  str += hour + "시";
  str += minute + "분";
  str += second + "초";

  let strDate = str;
  demo.innerHTML = strDate;
}
  //시간출력함수
  function fCheck4() {
    // let strTime = today.getMilliseconds();
  
    // let startDate = new Date(2022, 11, 4);
    // let lastDate = new Date(2022, 11, 5);
    // let elapsedTime  = lastDate.getTime() - startDate;
  
    let startDate = today.getTime(); //시스템에들어가있는 날짜,시간(오늘날짜)
    let lastDate = new Date(); //현재 다시생성한날짜
    let elapsedTime  = lastDate.getTime() - today.getTime(); //현재날짜-시스템들어가있느날짜(오늘날짜)
    let strDate = elapsedTime / (60*60*24*1000); //이건 날짜계산 (60*60*1000) 이건 시간계산만함, 1000분의1 초
    demo.innerHTML = strDate;
  }

  //해당월의 마지막일자 꺼내기 함수
function fCheck(){
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  
  let str = new Date(year,month,0);  //읽어옴/new Date(년,월,일,시,분,초) /일자리에 0을넣으면 해당일의 마직막일자출력  
  let strDate = str.getFullYear() + "-";  //년-
  strDate += (str.getMonth() +1 ) + "-"; //월-/월이 하나적게나와서 +1해줌
  strDate += str.getDate(); //마지막일자를 가져옴
  strDate = "해당월의 마지막 일자는? " + strDate; //일을 가져와라
  demo.innerHTML = strDate;
}

//오늘날짜 형식에 맞춰서 (yy-mm-dd)로 출력
function fCheck6(){

  let strDate = year + "-" + month + "-" + date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0' + fmtDate[1]).slice(-2); //2월 -> 02월 : 02 -> 002 /0을붙일거니까 2월은 002가됨 그리고 slice로 잘라냄(-2는 뒤에서부터 2개잘라낸다는뜻 02만 출력)
  let dd = ('0' + fmtDate[2]).slice(-2);
  strDate = yy + "-" + mm + "-" + dd;
    
  
  demo.innerHTML = strDate;
}
