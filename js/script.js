{
    const playGame = function(playerInput){
        clearMessages();
        const getMoveName = function(argMoveId){
            if (argMoveId == 1){
                return 'kamień';
            } else if (argMoveId == 2){
                return 'papier';
            } else if (argMoveId == 3){
                return 'nożyce';
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }
    

        const displayResult = function(argComputerMove, argPlayerMove){
            console.log('moves:', argComputerMove, argPlayerMove);
            if (
                (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
                (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
                (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
            )   {
                printMessage('Ty przegrywasz!');
            } else if (
                (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
                (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
                (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
            )   {
                printMessage('Ty wygrywasz!');
            } else if (
                (argComputerMove == 'kamień' && argPlayerMove == 'kamień') ||
                (argComputerMove == 'papier' && argPlayerMove == 'papier') ||
                (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
            )   {
                printMessage('Remis!');
            } else {
                printMessage('Nieznany ruch');
            }
        }


        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        displayResult(computerMove, playerMove);

    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}