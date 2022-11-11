let numOne = '';
  let operator = '';
  let numTwo = '';

  const $operater = document.querySelector('#operator');  //태그 선택(변수 저장할때)
  const $result = document.querySelector('#result');      //태그 선택(변수 저장할때)
  const onClickNumber = (event) => { 
      if(operator){         // 연산자를 눌렀다면
        numTwo += event.target.textContent;      // 두번째 숫자에 0을 입력
      }else{
        numOne += event.target.textContent;      // 누르지 않았다면 첫번째 숫자에 0 입력
      }
      $result.value += event.target.textContent; // 화면에 출력
    


    // return () => {
    //   if(operator){         // 연산자를 눌렀다면
    //     numTwo += number;      // 두번째 숫자에 0을 입력
    //   }else{
    //     numOne += number;      // 누르지 않았다면 첫번째 숫자에 0 입력
    //   }
    //   $result.value += number; // 화면에 출력
    // };

    // return undefined; 함수는 (리턴이 없으면) undefined를 리턴함 

    // return () => {
    //   // 안의 내용이 비어 있기 때문에 내용을 채워 넣어 주어야함
    // };

    // 화살표 함수는 중괄호와 return이 있으면 생략 가능함
  }; 

  // 함수에서 중복이 발생 했을 경우 (중복 되는 부분을 찾아서 매개변수로 빼기)

  document.querySelector('#num-0').addEventListener('click', onClickNumber); //('click', 함수자리(onClickNumber의 return자리))
  document.querySelector('#num-1').addEventListener('click', onClickNumber); // 1을 누르면 1의 textContent는 1이 됨 (textContent는 문자열)
  document.querySelector('#num-2').addEventListener('click', onClickNumber);
  document.querySelector('#num-3').addEventListener('click', onClickNumber);
  document.querySelector('#num-4').addEventListener('click', onClickNumber);
  document.querySelector('#num-5').addEventListener('click', onClickNumber);
  document.querySelector('#num-6').addEventListener('click', onClickNumber);
  document.querySelector('#num-7').addEventListener('click', onClickNumber);
  document.querySelector('#num-8').addEventListener('click', onClickNumber);
  document.querySelector('#num-9').addEventListener('click', onClickNumber);
  document.querySelector('#plus').addEventListener('click', () => {});
  document.querySelector('#minus').addEventListener('click', () => {});
  document.querySelector('#divide').addEventListener('click', () => {});
  document.querySelector('#multiply').addEventListener('click', () => {});
  document.querySelector('#calculate').addEventListener('click', () => {});
  document.querySelector('#clear').addEventListener('click', () => {});

  