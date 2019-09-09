(function(){

    const kensaku = document.querySelector('#svgMain');
    
    const email = document.querySelector('input[type="text"]');
    const password = document.querySelector('input[type="password"]');

    let timer = null;

    // 리셋
    function reset(event) {
        // playing, moving 속성부터 지워줘야 얼굴 애니메이션 끝나고 되돌아올때 부드럽게 돌아옴
        kensaku.classList.remove('playing','moving');

        // 연타같은 경우 timer가 중복실행 될 수 있으니 이전에 기다리고 있는 setTimeout 함수가 있다면 clearTimeout으로 캔슬시켜주자. (중복실행방지)
        clearTimeout(timer);

        // setTimeout , 1초 뒤 내부의 함수 실행 하란 뜻
        timer = setTimeout( () => {
            kensaku.classList.remove('eyes-on','look-away', 'down', 'up');
        }, 1 );
    }


    // 이메일 창 누를때
    function look(event) {
        kensaku.classList.add('eyes-on');

        clearTimeout(timer);

        timer = setTimeout( () => {
            kensaku.classList.add( 'moving' );
        }, 500);
    }
    

    // 패스워드 누를 때
    function lookAway(event) {
        kensaku.classList.add( 'look-away', 'up');
    
        clearTimeout(timer);

        timer = setTimeout( () => {
            kensaku.classList.add( 'playing' );
        }, 600);
    }
    
    email.addEventListener( 'click', look, false );
    email.addEventListener( 'blur', reset, false );
    
    password.addEventListener( 'focus', lookAway, false );
    password.addEventListener( 'blur', reset, false );
    
})();