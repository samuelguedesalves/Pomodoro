module.exports = {
    fadeIn () {
        return {
            opacity: 1,
            animationName: "fadeInOpacity",
            animationIterationCount: 1,
            animationTimingFunction: "ease-in",
            animationDuration: "2s",
        }
    }
}