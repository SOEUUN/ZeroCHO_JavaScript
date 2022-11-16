  const $input = document.querySelector('#input'); // $은 html 태그라고 알려주기 위해 변수에 붙여줌(사람마다 규칙이 있음 _도 가능)
  const $form = document.querySelector('#form');
  const $logs = document.querySelector('#logs');

  const numbers = [];
  for(let n = 0; n < 9; n += 1){
    numbers.push(n + 1);
  }

  const answer = [];
  for(let n = 0; n <= 4; n += 1){ // 4번 반복
    const index = Math.floor(Math.random() * (numbers.length)); // 0 ~ 8 정수 / index의 값을 꺼내기 때문에 0 ~ 8까지 
    // 9 - n보단 numbers.length가 좋다 위의 반복 되는 길이가 바뀔 수 있기 때문
    // 9 - n일 경우 numbers에 있는 값을 꺼내서 answer에 넣어주는데 이때 뽑은 것은 numebrs에서 삭제 해준다
    // 이럴때 문제점이 numbers는 8까지 도는데 numbers의 길이는 짧아지기 때문에 undefined가 나올 수 있기 때문에 뽑힐때 마다 n을 빼준다.
    answer.push(numbers[index]);  // 뽑은 것은넣어주고
    numbers.splice(index, 1); // 뽑은 것을 빼준다.
  }
  console.log(answer);

  // form은 submit이라는 이벤트가 있음 / submit 될때 페이지가 새로고침 됨(기본동작 -> 기본동작은 끌 수 있다)
  // 기본 동작이 있는 태그는 form과 a태그가 있다
  // event타겟 배열 같이 접근 가능 event.target[0]이면 input을 가리키고, event.target[1]이면 button을 가리킴 -> form태그의 특성

  const tries = [];
  function checkInput(input) {
    if (input.length !== 4) { // 길이는 4가 아닌가
      return alert('4자리 숫자를 입력해 주세요.');
    }
    if (new Set(input).size !== 4) { // 중복된 숫자가 있는가  / new Set은 중복이 없는 배열
      return alert('중복되지 않게 입력해 주세요.');
    }
    if (tries.includes(input)) { // 이미 시도한 값은 아닌가 / tries.includes 배열에 이미 들어가 있는가
      return alert('이미 시도한 값입니다.');
    }
    return true;

  } // 검사하는 코드

  $form.addEventListener('submit', (event) => {
    event.preventDefault(); // 기본 동작 막기
    const value = $input.value; // event.target[0].value;로 작성해도 됨 / input에 숫자를 입력하면 변수에 저장한 후에
    $input.value = '';  // 지워준다(요건 센스~) 다음 값 입력을 위해서
    if(checkInput(value)){  // 함수로 분리 (코드가 길어질 수 있어서 길어지면 일기 힘듦)
      // 입력 값 문제 없음
      tries.push(value);
    } else{
      // 에러 잇음
    }
  });
