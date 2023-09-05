export function secondsToHms(seconds: string | number) {
    const se = Number(seconds);
    var h = Math.floor(se / 3600);
    var m = Math.floor(se % 3600 / 60);

    var hDisplay = h > 0 ? h : 0
    var mDisplay = m > 0 ? m : 0;
    return hDisplay + ":" + mDisplay + "h"; 
}