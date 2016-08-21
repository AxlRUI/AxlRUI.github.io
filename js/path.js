
var bgCanvas = document.getElementById('bgCanvas');

function render() {

    bgCanvas.patternizer({
        stripes : [ 
            {
                color: '#E4C098',
                rotation: 335,
                opacity: 50,
                mode: 'normal',
                width: 3,
                gap: 98,
                offset: 123
            },
            {
                color: '#E4C098',
                rotation: 25,
                opacity: 50,
                mode: 'normal',
                width: 3,
                gap: 98,
                offset: 123
            },
            {
                color: '#74262A',
                rotation: 25,
                opacity: 60,
                mode: 'normal',
                width: 100,
                gap: 100,
                offset: 156
            },
            {
                color: '#74262A',
                rotation: 335,
                opacity: 60,
                mode: 'normal',
                width: 100,
                gap: 100,
                offset: 156
            }
        ],
        bg : '#EBCCA9'

    });
}
