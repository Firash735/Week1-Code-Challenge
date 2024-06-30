// function to detect speed violations
function speedDetectoe (speed) {
    const SpeedLimit = 70;
    const KmPerPoint = 5;


    if (speed <= SpeedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - SpeedLimit) / KmPerPoint);
        if (points >= 12) {
            console.log('Points: ${Points}. License suspended.'); 
        } else {
            console.log('points: ${points}');
        }
    }
    
}