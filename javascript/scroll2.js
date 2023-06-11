        document.addEventListener('DOMContentLoaded', function () {
            var scrollButton = document.querySelector('.scrollButton2');
            scrollButton.addEventListener('click', function () {
                var scrollDuration = 1500; // Set the duration of the scroll animation in milliseconds
                var scrollTarget = 1100; // Set the target scroll position in pixels
                var startPosition = window.pageYOffset; // Get the current scroll position

                var startTime = null;

                function scrollToPosition(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = timestamp - startTime;
                    var scrollDistance = scrollTarget - startPosition;
                    var easeProgress = Math.min(progress / scrollDuration, 1);
                    var easeScroll = easeInOutQuad(easeProgress);

                    window.scrollTo(0, startPosition + scrollDistance * easeScroll);

                    if (progress < scrollDuration) {
                        requestAnimationFrame(scrollToPosition);
                    }
                }

                function easeInOutQuad(t) {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                }

                requestAnimationFrame(scrollToPosition);
            });
        });