'use strict';

// 오늘날짜를 전역변수로 생성... (전역변수라 안바뀜?(뭐가),바꾸고싶으면 function안에다 쓰면됨fuction바깥에 뺀이유: 시간 비교하려고)
const today = new Date();//객체를 생성해서 일반변수에 담음(객체변수가 만들어짐)
const year = today.getFullYear();  // 연도 4자리
const month = today.getMonth() + 1;   // 월(기존월보다 1자리 작다)
const date = today.getDate();   // 일
const hour = today.getHours();  // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

//시스템 날짜 가져와서 폼에 출력하기
function dateBring(){
  document.getElementById("startDate").value = yymmdd;
}

//날짜비교함수
function compareDate(){
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start); //('2022-2-5')이나 (년,월,일) 이렇게 써도가능
  const endDate = new Date(end);

  let result; //결과는 result변수에 담음

  if(isSameDay(startDate, endDate)) {//isSameDay(startDate, endDate)는 이제 만들거임(아래)넘어온값이 들어오면 들어온값을가지고 비교해서 
    result = "입력된 날짜는 같습니다." //참이면
  } 
  else{
    result = "입력된 날짜는 다릅니다." //거짓이면
  }
  document.getElementById("demo").innerHTML = result;
}

//=== :완전일치(타입도 일치여야함)   //0이넘어가면 false 0이아닌값이 넘어가면 true
function isSameDay(startDate, endDate){
  return  startDate.getFullYear() === endDate.getFullYear() && //0이넘어가면 false 0이아닌값이 넘어가면 true
          startDate.getMonth() === endDate.getMonth() && 
          startDate.getDate() === endDate.getDate() ;
}

function compareDate2(){
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;

  const startDate = new Date(start); //('2022-2-5')이나 (년,월,일) 이렇게 써도가능
  const endDate = new Date(end);

  //날짜 형식데이터를 시간(1/1000초)로 바꿔서 연산처리한다
  let elapsedTime  = endDate.getTime() - startDate.getTime(); //나중시간- 현재시간 을 경과시간이라는 elapsetTime 변수에담음
  let strDate = elapsedTime / (60*60*24*1000);  //그냥쓰면 get time이 1000분의 1초로 쪼개서 들어오니까*1000해줌 /날(day)수로 변경 (1분,1시간,하루시간*1000)/24안쓰면 시간만비교
  strDate = strDate.toFixed(0); //소수이하둘째자리만 출력

  document.getElementById("demo").innerHTML = strDate;
}