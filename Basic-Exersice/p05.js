function speedRadar(speed, area) {

    if (area == 'city') {
        if (speed > 50) {
            let speeding = speed - 50;
            logSpeeding(speeding)
        }
    } else if (area == 'motorway') {
        if (speed > 130) {
            let speeding = speed - 130;
            logSpeeding(speeding)
        }
    } else if (area == 'residential') {
        if (speed > 20) {
            let speeding = speed - 20;
            logSpeeding(speeding)
        }
    } else if (area == 'motorway') {
        if (speed > 90) {
            let speeding = speed - 90;
            logSpeeding(speeding)
        }
    }



    function logSpeeding(speeding) {
        if (speeding <= 20) {
            console.log('speeding');
        } else if (speeding <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }

   

}
speedRadar(200, 'motorway');

