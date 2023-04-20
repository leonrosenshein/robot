function returnToOrigin(commands) {
    const increments = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    var direction = 0
    currentX = 0
    currentY = 0
    for (var i = 0; i < commands.length; i++) {
        command = commands[i].toUpperCase()
        switch (command) {
            case "G":
                currentX += increments[direction][0]
                currentY += increments[direction][1]
                break;
            case "L":
                direction++
                direction = direction % 4
                break;
            case "R":
                direction--
                direction = (direction + 4) % 4
                break;
            default:
                console.log(`I don't understand the command '${command}', so I'm just going to stand here`)
        }
        console.log(`Current position: ${currentX}, ${currentY}. Heading: ${direction}`)
    }
    return (currentX == 0) && (currentY == 0)
}

console.log(returnToOrigin("BGLRLLRGGGG"))
console.log(returnToOrigin("glrlrrlgrlgggrgllg"))
console.log(returnToOrigin("rrrlrrlgrlgggrgllgB"))
console.log(returnToOrigin("GRRG"))