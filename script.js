getAccess()
function checkAccess () {
    let access = sessionStorage.getItem('access')
    return access
}
console.log(checkAccess())

function getAccess () {
    if (checkAccess()) {
        access()
    } else {
        var password = prompt('Enter the Password to access the encoder')
        if (password == W3LC0M370TH3G4730FHEAVEN) { // Change this
            sessionStorage.setItem('access', true)
            access()
        } else {
            getAccess()
        }
    }    
}


    
function access () {
    reload()
    var mainCpt = "CDEFGHIJKLMNOPQRSTUVWXYZAB"
    var mainSml = mainCpt.toLowerCase()
    
    
    var revCpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // Change this
    var revSml = revCpt.toLowerCase()
    
    
    
    function encipher (text) { 
        var processedStr, processedText, index
        processedText = ''
        for (let items of text) {
            if (mainCpt.includes(items)) {
                index = mainCpt.indexOf(items)
                processedStr = revCpt[index]
            } else if (mainSml.includes(items)) {
                index = mainSml.indexOf(items)
                processedStr = revSml[index]
            } else {
                processedStr = items
            }
            processedText += processedStr
        }
        return processedText
    }
    
    function decipher (text) {

        var processedStr, processedText, index
        processedText = ''
        for (let items of text) {
            if (revCpt.includes(items)) {
                index = revCpt.indexOf(items)
                processedStr = mainCpt[index]
            } else if (revSml.includes(items)) {
                index = revSml.indexOf(items)
                processedStr = mainSml[index]
            } else {
                processedStr = items
            }
            processedText += processedStr
        }
        return processedText
        
    }
    
    function getOutput () {
        var input = document.querySelector('.user-text').value
        var type = document.querySelector('#select-option').value
    
        if (input === '') {
            document.querySelector('.output').value = 'Nothing to decode or encode!'
        } else if (type === 'encipher') {
            document.querySelector('.output').value = encipher(input)
        } else if (type === 'decipher') {
            document.querySelector('.output').value = decipher(input)
        }
        
        var copyText = document.querySelector('.output')
        copyText.select()
        document.execCommand('copy')
    }
    
    function reload () {
        document.querySelector('.user-text').value = ''
        document.querySelector('.output').value = ''
    }
    
    document.querySelector('.enter').addEventListener('click', getOutput)
    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            getOutput()
        }
    })
    
    document.querySelector('.svg-icon').addEventListener('click', reload)

}


