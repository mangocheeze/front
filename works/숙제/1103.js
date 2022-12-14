  'use strict';
  function regexCheck(){
    
    let mid = document.getElementById("regMid").value;  //아이디
    let irum = document.getElementById("regName").value; //이름
    let tel = document.getElementById("regTel").value; //전화번호
    let email = document.getElementById("regEmail").value; //이메일

    const midCheck =/[a-zA-Z0-9_]/g;  //midCheck에 정규식표현담음
    if(mid.trim() == ""){
      alert("아이디를 입력하세요");
      return false; //아무것도 반환하지말아라
    }
    else if(!mid.match(midCheck)){
      alert("아이디는 영문,숫자,밑줄만 사용가능합니다");
      return false;
    }

    const irumCheck =/[a-zA-Z가-힣]{2,20}/g;
    if(irum.trim() == ""){
      alert("성명을 입력하세요");
      return false;
    }
    else if(!irum.match(irumCheck)){
      alert("성명은 한글또는 영문으로만 2~20자 이내작성 가능합니다");
      return false;
    }

    const telCheck =/[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/g;
    if(tel.trim() == ""){
      alert("전화번호를 입력하세요");
      return false;
    }
    else if(!tel.match(telCheck)){
      alert("전화번호는 형식에 맞게 작성해주세요");
      return false;
    }

    const emailCheck =/[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]+/g; //+는 한글자이상 넣어라 라는뜻 * 는 0개이상(여러개) ?는 한(1)문자
    if(email.trim() == ""){
      alert("이메일을 입력하세요");
      return false;
    }
    else if(!email.match(emailCheck)){
      alert("메일형식이 맞지 않습니다");
      return false;
    }



    alert("회원가입이 완료되었습니다");
    // document.getElementById("").focus();
  }