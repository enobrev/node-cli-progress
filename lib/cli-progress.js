/*============================================================================
  Copyright(c) 2011 Mark Armendariz <src@enobrev.com>
  MIT Licensed
============================================================================*/

var CLIProgress = function(iLength) {
    this.iLength = iLength || 80;

    this.rpad = function(sString, iLength, sPadString) {
        sPadString = sPadString || ' ';

        while (sString.length < iLength) {
            sString = sString + sPadString;
        }

        return sString;
    }
};

CLIProgress.prototype.update = function(fPercentage) {
    process.stdout.write("\r[");
    for (var i = 0; i < this.iLength; i++) {
        if (i <= fPercentage * this.iLength) {
            process.stdout.write('*');
        } else {
            process.stdout.write(' ');
        }
    }
    
    var sPercentage = (Math.round(fPercentage * 10000) / 100);

    process.stdout.write('] ' + this.rpad(sPercentage + '%', 5));
};

module.exports = CLIProgress;
